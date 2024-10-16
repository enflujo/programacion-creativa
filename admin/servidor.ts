import Fastify, { type RequestGenericInterface } from 'fastify';
import fsExtra from 'fs-extra';
import renderizadorHtml from '@fastify/view';
import ejs from 'ejs';
import baseDeDatos from './componentes/baseDeDatos.ts';
import { basename, dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { extraerEjercicios } from './componentes/ejercicios.ts';
import type { Collection } from 'lokijs';
import { ChildProcess, spawn } from 'child_process';
import { Ejercicio } from './tipos.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const puerto = 3000;
const procesos: { [nombre: string]: ChildProcess } = {};
const servidor = Fastify({ logger: false });
const datosEjercicios: { rutas: Ejercicio[]; errores: string[] } = { rutas: [], errores: [] };
let bd: Collection;

interface ParametrosCorrerScript extends RequestGenericInterface {
  Querystring: {
    script: string;
    ejercicio: number;
    entrada: number;
  };
}

function crearId(script: string, ejercicio: number, entrada: number) {
  return `${script}-${ejercicio}-${entrada}`;
}

servidor.register(renderizadorHtml, { engine: { ejs } });

servidor.get('/', async (request, reply) => {
  try {
    bd = await baseDeDatos();
  } catch (error) {
    console.error('Error cargando base de datos', error);
  }

  try {
    bd = await baseDeDatos();
    const ejercicios = extraerEjercicios(resolve(__dirname, '../ejercicios'), bd);
    Object.assign(datosEjercicios, ejercicios);
    return reply.view('admin/paginas/inicio.ejs', { ejercicios: ejercicios.rutas, errores: ejercicios.errores });
  } catch (error) {
    console.error('Error al extraer los ejercicios', error);
  }

  return reply.send({ error: 'No se pudo procesar la página de administrador' });
});

servidor.get<ParametrosCorrerScript>('/correr-script', (request, reply) => {
  const { script, ejercicio, entrada } = request.query;
  const id = crearId(script, ejercicio, entrada);
  const { ruta } = datosEjercicios.rutas[ejercicio].entradas[entrada];
  console.log(ruta);

  procesos[id] = spawn('yarn', ['--cwd', ruta, script], { stdio: 'inherit', shell: true });

  procesos[id].on('data', (data) => {
    console.log(`stdout: ${data}`);
  });

  procesos[id].on('error', (error) => {
    throw error;
  });

  procesos[id].on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });
});

servidor.get<ParametrosCorrerScript>('/cerrar-script', (request, reply) => {
  const { script, ejercicio, entrada } = request.query;
  const id = crearId(script, ejercicio, entrada);

  if (procesos[id]) {
    // TODO: Esto se supone que hace Ctrl+C pero no esta cerrando el servidor local.
    procesos[id].kill('SIGINT');
    delete procesos[id];
  }
});

interface ParametrosExportar extends RequestGenericInterface {
  Querystring: {
    usuario: string;
    nombreEjercicio: string;
    ejercicio: number;
    entrada: number;
    exportar: 'true' | 'false';
  };
}

servidor.get<ParametrosExportar>('/exportar', (request, reply) => {
  const excluir = ['.gitignore', '.DS_Store'];
  const { usuario, nombreEjercicio, ejercicio, entrada, exportar } = request.query;

  const datos = datosEjercicios.rutas[ejercicio].entradas[entrada];
  const entradaBd = bd.findOne({ id: `${usuario}-${nombreEjercicio}` });

  if (exportar === 'true') {
    if (datos.info.rutaArchivos) {
      console.log(`Exportando ejercicio ${nombreEjercicio} de ${usuario}...`);

      fsExtra.copySync(datos.info.rutaArchivos, `docs/${usuario}/${nombreEjercicio}`, {
        overwrite: true,
        preserveTimestamps: true,
        filter: (archivo) => !excluir.includes(basename(archivo)),
      });
      console.log(`Ejercicio docs/${usuario}/${nombreEjercicio} exportado!`);
      entradaBd.exportada = true;
      bd.update(entradaBd);
    }
  } else {
    console.log(`Borrando docs/${usuario}/${nombreEjercicio}...`);
    fsExtra.removeSync(`docs/${usuario}/${nombreEjercicio}`);
    entradaBd.exportada = false;
    bd.update(entradaBd);
    console.log(`Ejercicio docs/${usuario}/${nombreEjercicio} eliminado!`);
  }

  reply.send({ entradaBd });
});

servidor.listen({ port: puerto }, function (err, address) {
  if (err) {
    servidor.log.error(err);
    process.exit(1);
  }

  console.log('Aplicación corriendo en:', `http://localhost:${puerto}`);
});
