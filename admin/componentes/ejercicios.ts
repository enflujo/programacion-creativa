import type { DatosEjercicio, Ejercicio, Entrada } from '@/tipos';
import { existsSync, lstatSync, readdirSync, readFileSync } from 'fs';
import type { Collection } from 'lokijs';
import path, { join, normalize, resolve } from 'path';
const errores: string[] = [];
let bd: Collection;

function revisarPaquetes(ruta: string, respuesta: DatosEjercicio) {
  const paquetesInstalados = existsSync(path.resolve(ruta, 'node_modules'));

  if (paquetesInstalados) {
    respuesta.paquetes = true;
  }
}

function revisarCompilacion(ruta: string, respuesta: DatosEjercicio) {
  const rutaArchivos = resolve(ruta, 'www');
  const existeCarpeta = existsSync(rutaArchivos);
  console.log(rutaArchivos, existeCarpeta);
  if (existeCarpeta) {
    const archivos = readdirSync(rutaArchivos);

    if (archivos.includes('index.html')) {
      // Usa package.json pero no necesita compilación
      respuesta.compilado = true;
      respuesta.rutaArchivos = rutaArchivos;
    } else {
      errores.push(`No hay archivo index.html en ${rutaArchivos}`);
    }
  }
}

function extraerInfo(ruta: string) {
  const archivos = readdirSync(ruta);
  const respuesta: DatosEjercicio = { tipo: 'fas fa-folder' };

  if (archivos.includes('package.json')) {
    const paquetes = readFileSync(resolve(ruta, 'package.json'), 'utf-8');
    const datos = JSON.parse(paquetes);

    if (datos['scripts']) {
      respuesta.scripts = datos.scripts;

      if (datos.scripts) {
        // Es proyecto con compilador
        respuesta.tipo = 'fa-brands fa-yarn';
        respuesta.paquetes = false;
        respuesta.compilado = false;
        revisarPaquetes(ruta, respuesta);
        revisarCompilacion(ruta, respuesta);
      } else if (archivos.includes('www')) {
        revisarCompilacion(ruta, respuesta);
      } else {
        errores.push(`No hay carpeta wwww en ${ruta}`);
      }
    }
  } else {
    revisarCompilacion(ruta, respuesta);
  }

  return respuesta;
}

function extraerEntradas(ruta: string, nombreEjercicio: string) {
  const usuarios = readdirSync(ruta);
  const entradas: Entrada[] = [];

  usuarios.forEach((usuario) => {
    const rutaEntrada = normalize(join(ruta, usuario));
    const info = lstatSync(rutaEntrada);

    if (info.isDirectory()) {
      entradas.push({
        usuario: usuario,
        ruta: rutaEntrada,
        info: extraerInfo(rutaEntrada),
        fecha: info.birthtime,
        exportada: false,
      });
    }
  });

  if (entradas.length) {
    entradas.forEach((entrada) => {
      const id = `${entrada.usuario}-${nombreEjercicio}`;
      const existe = bd.findOne({ id });

      if (!existe) {
        console.log('Nueva entrada:', id);
        bd.insert({
          id: id,
          ejercicio: nombreEjercicio,
          usuario: entrada.usuario,
          ruta: entrada.ruta,
          fecha: entrada.fecha,
        });
      } else if (existe.exportada) {
        entrada.exportada = true;
      }
    });
  }

  return entradas;
}

export function extraerEjercicios(rutaInicial: string, baseDeDatos: Collection) {
  bd = baseDeDatos;
  const nombres = readdirSync(rutaInicial);
  const rutas: Ejercicio[] = [];

  nombres.forEach((nombreEjercicio) => {
    const ruta = path.resolve(rutaInicial, nombreEjercicio);
    const info = lstatSync(ruta);

    if (info.isDirectory()) {
      const entradas = extraerEntradas(ruta, nombreEjercicio);

      rutas.push({ nombre: nombreEjercicio, ruta: ruta, entradas: entradas });
    }
  });

  return { rutas, errores };
}
