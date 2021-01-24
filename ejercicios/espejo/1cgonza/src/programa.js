import './scss/estilos.scss';

// El lienzo que tenemos en HTML y es visible
const lienzo = document.getElementById('lienzo');
const ctx = lienzo.getContext('2d', { alpha: false });
// Otro lienzo donde pintamos la imagen original y de donde sacamos los pixeles.
const lienzo2 = document.createElement('canvas');
const ctx2 = lienzo2.getContext('2d');

// Variables globales
const DOS_PI = Math.PI * 2;
const dimensiones = { ancho: 0, alto: 0, imgAncho: 0, imgAlto: 0 };
const cuadricula = {};
const anchoPixel = 15;
const altoPixel = 15;
const blancoNegro = document.getElementById('byn');
const pepas = document.getElementById('pepas');
let pixeles = [];
let datosImagen;

/**
 * Una función asincrónica que usa "async" y "await" de ES6, esto no funciona sin "Babel".
 * Busca una imagen aleatoria del API "Lorem Picsum": https://picsum.photos/
 */
async function buscar() {
  const respuestaApi = await fetch(`https://picsum.photos/${dimensiones.ancho}/${dimensiones.alto}`);

  const img = new Image();
  // esto es necesario para poder pintar en el canvas una imagen que viene de otro servidor. Ver "tainted canvas"
  img.crossOrigin = 'Anonymous';
  img.onload = () => {
    // Cuando cargue la imágen, definimos las dimensiones a partir de su tamaño.
    dimensiones.imgAncho = img.naturalWidth;
    dimensiones.imgAlto = img.naturalHeight;

    // Pintamos la imágen original en el canvas que no se ve en la pantalla, para tener los pixeles en ese canvas
    ctx2.drawImage(img, 0, 0);

    // Para iniciar, pintamos la imagen original en el canvas que si se ve, luego aplicamos efectos en este canvas.
    ctx.drawImage(img, 0, 0);

    // extraemos los datos de la imagen
    datosImagen = ctx2.getImageData(0, 0, dimensiones.ancho, dimensiones.alto);
    // sacamos los pixeles que es un Array y cada color tiene 4 valores [r, g, b, a, r, g, b, a, ....];
    pixeles = datosImagen.data;
  };
  img.src = respuestaApi.url;
}

function actualizar() {
  dimensiones.ancho = lienzo.width = lienzo2.width = (window.innerWidth / 1.5) | 0;
  dimensiones.alto = lienzo.height = lienzo2.height = (window.innerHeight / 1.5) | 0;
  cuadricula.columnas = (dimensiones.ancho / anchoPixel) | 0;
  cuadricula.filas = (dimensiones.alto / altoPixel) | 0;
  cuadricula.total = cuadricula.columnas * cuadricula.filas;
  buscar();
}

window.onresize = actualizar;
actualizar();

// .....::::::: Efectos :::::::.....

/**
 * Blanco y Negro
 * Pasa por cada pixel y cambia cada canal (RGB) por el promedio de color de todos los canales.
 */
blancoNegro.onclick = () => {
  // Sólo hacemos esto si la imágen ya cargo y hay pixeles.
  if (pixeles.length) {
    // Pasamos por cada pixel. Miren que saltamos 4 posiciones en cada ciclo.
    // Esto es porque hay 4 valores por pixel: Rojo, Verde, Azul y Alpha
    for (let i = 0; i < pixeles.length; i += 4) {
      const rojo = pixeles[i];
      const verde = pixeles[i + 1];
      const azul = pixeles[i + 2];
      const promedio = (rojo + verde + azul) / 3;
      pixeles[i] = promedio;
      pixeles[i + 1] = promedio;
      pixeles[i + 2] = promedio;
    }

    // Después de manipular los pixeles, los volvemos a poner en el canvas
    ctx.putImageData(datosImagen, 0, 0);
  }
};

/**
 * Efecto pepas
 * Definimos una cuadricula y sacamos el color promedio de cada celda. Con eso pintamos un circulo del color promedio.
 * El efecto es una especie de pixelación de la imágen.
 */
pepas.onclick = () => {
  if (pixeles.length) {
    // El centro de una pepa es siempre el mismo, entonces lo definimos podemos definir antes de entrar a los loops.
    const centroPepa = { x: anchoPixel / 2, y: altoPixel / 2 };

    // Borramos el canvas que se ve en pantalla (los pixeles están en el otro así que tenemos acceso a ellos).
    ctx.clearRect(0, 0, dimensiones.ancho, dimensiones.alto);

    /**
     * Acá tenemos 3 loops:
     * 1. Cada columna
     * 2. Cada fila
     * 3. Extraer el promedio de color por cada celda
     */
    for (let columna = 0; columna < cuadricula.columnas; columna++) {
      // Al entrar a cada columna podemos definir el valor de "x".
      const x = columna * anchoPixel;

      for (let fila = 0; fila < cuadricula.filas; fila++) {
        // Al entrar a cada fila definimos el valor de "y".
        const y = fila * anchoPixel;

        // Teniendo "x" y "y", podemos sacar los pixeles de cada celda en un array
        const area = ctx2.getImageData(x, y, anchoPixel, altoPixel);
        const pixelesArea = area.data;

        // Para sacar el promedio más adelante, sacamos la cuenta de cuantos pixeles hay en cada celda.
        const numPixeles = pixelesArea.length / 4;

        // Vamos a ir guardando la suma de los colores acá
        let promedio = [0, 0, 0];

        for (let i = 0; i < pixelesArea.length; i += 4) {
          const rojo = pixelesArea[i];
          const verde = pixelesArea[i + 1];
          const azul = pixelesArea[i + 2];
          // Toma el valor actual de cada canal y le suma el valor del pixel donde actual.
          promedio[0] += rojo;
          promedio[1] += verde;
          promedio[2] += azul;
        }

        // Cuando ya tenemos la suma de todos los pixeles, sacamos el promedio de cada canal.
        promedio[0] = (promedio[0] / numPixeles) | 0;
        promedio[1] = (promedio[1] / numPixeles) | 0;
        promedio[2] = (promedio[2] / numPixeles) | 0;

        // Definimos el color promedio en el contexto para pintar lo que queremos de ese color.
        // En este caso voy a pintar un circulo usando arc()
        ctx.fillStyle = `rgb(${promedio.join(',')})`;
        ctx.beginPath();
        ctx.arc(x + centroPepa.x, y + centroPepa.y, centroPepa.x, 0, DOS_PI);
        ctx.fill();
      }
    }
  }
};
