const path = require('path');

const Koa = require('koa');
const Router = require('@koa/router');
const render = require('koa-ejs');
const extraerEjercicios = require('./componentes/ejercicios');
const spawn = require('cross-spawn');
const fsExtra = require('fs-extra');
const baseDeDatos = require('./componentes/baseDeDatos');

/*
Todo:
- usar websockets para actualizar vista de procesos.
*/

const app = new Koa();
const router = new Router();
const procesos = {};
let bd;

function crearId(script, ruta) {
  return `${script}-${ruta}`;
}

render(app, {
  root: path.join(__dirname, 'paginas'),
  layout: 'inicio',
  viewExt: 'html',
  cache: false,
  debug: false,
});

router.get('/', async (ctx) => {
  bd = await baseDeDatos();
  const ejercicios = extraerEjercicios(path.resolve(__dirname, '../ejercicios'), bd);
  return await ctx.render('inicio', { ejercicios: ejercicios.rutas, errores: ejercicios.errores });
});

router.get('/correr-script', (ctx) => {
  const { script, ruta } = ctx.request.query;
  const id = crearId(script, ruta);

  procesos[id] = spawn('yarn', ['--cwd', ruta, script], { stdio: 'inherit' });

  procesos[id].on('data', (data) => {
    console.log(`stdout: ${data}`);
  });

  procesos[id].on('error', (data) => {
    console.error(`stderr: ${data}`);
  });

  procesos[id].on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });

  console.log(script, ruta);
  ctx.body = { test: 'hola' };
});

router.get('/cerrar-script', (ctx) => {
  const { script, ruta } = ctx.request.query;
  const id = crearId(script, ruta);

  if (procesos[id]) {
    // TODO: Esto se supone que hace Ctrl+C pero no esta cerrando el servidor local.
    procesos[id].kill('SIGINT');
    delete procesos[id];
  }
});

router.get('/exportar', (ctx) => {
  const excluir = ['.gitignore', '.DS_Store'];
  const { ruta, usuario, ejercicio, exportar } = ctx.request.query;

  const entrada = bd.findOne({ id: `${usuario}-${ejercicio}` });

  if (exportar === 'true') {
    fsExtra.copySync(ruta, `docs/${usuario}/${ejercicio}`, {
      overwrite: true,
      preserveTimestamps: true,
      filter: (archivo) => !excluir.includes(path.basename(archivo)),
    });
    console.log(`Ejercicio docs/${usuario}/${ejercicio} exportado!`);
    entrada.exportada = true;
  } else {
    fsExtra.removeSync(`docs/${usuario}/${ejercicio}`);
    entrada.exportada = false;
  }

  bd.update(entrada);

  ctx.body = { entrada: entrada };
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => console.log('running on port 3000'));
