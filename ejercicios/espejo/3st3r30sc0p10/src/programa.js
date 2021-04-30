import './scss/estilos.scss';
import imgsrc from './assets/Knife.jpg';

const myImage = new Image();
myImage.src = imgsrc;



myImage.addEventListener('load', function () {
  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');
  canvas.width = 960;
  canvas.height = 540;

  ctx.drawImage(myImage, 0, 0, canvas.width, canvas.height);
  const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);

  

  let particlesArray = [];
  const numberOfParticles = 5000;
  let mappedImage = [];
  for (let y = 0; y < canvas.height; y++){
    let row = [];
    for (let x = 0; x < canvas.width; x++){
      const red = pixels.data[(y * 4 * pixels.width) + (x * 4)];
      const green = pixels.data[(y * 4 * pixels.width) + (x * 4 + 1)];
      const blue = pixels.data[(y * 4 * pixels.width) + (x * 4 + 2)];
      const brightness = calculateRelativeBrightness(red, green, blue);
      const cell = [
        brightness,
      ];
      row.push(cell)
    }
    mappedImage.push(row);
  }
  
  function calculateRelativeBrightness(red, green, blue) {
    return Math.sqrt(
      (red * red) * 0.299 +
      (green * green) * 0.587 +
      (blue * blue) * 0.114
    ) / 100;
  }

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = 0;
      this.speed = 0;
      this.velocity = Math.random() * 0.5;
      this.size = Math.random() * 1.5 + 1;
      this.position1 = Math.floor(this.y);
      this.position2 = Math.floor(this.x);
    }
    update() {
      this.position1 = Math.floor(this.y);
      this.position2 = Math.floor(this.x);
      this.speed = mappedImage[this.position1][this.position2][0];
      let movement = (2.5 - this.speed) + this.velocity

      this.y += movement;
      if (this.y >= canvas.height) {
        this.y = 0;
        this.x = Math.random() * canvas.width;
      }
    }
    draw() {
      ctx.beginPath();
      ctx.fillStyle = 'white';
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  function init() {
    for (let i = 0; i < numberOfParticles; i++){
      particlesArray.push(new Particle);
    }
  }
  init();
  function animate() {
    ctx.drawImage(myImage, 0, 0, canvas.width, canvas.height);
    ctx.globalAlpha = 0.05;
    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.globalAlpha = 1;
    for (let i = 0; i < particlesArray.length; i++){
      particlesArray[i].update();
      ctx.globalAlpha = particlesArray[i].speed * 0.5;
      particlesArray[i].draw();
    }
    requestAnimationFrame(animate);
  }
  animate();
});


// // El lienzo que tenemos en HTML y es visible
// const lienzo = document.getElementById('lienzo');
// const ctx = lienzo.getContext('2d', { alpha: false });
// // Otro lienzo donde pintamos la imagen original y de donde sacamos los pixeles.
// const lienzo2 = document.createElement('canvas');
// const ctx2 = lienzo2.getContext('2d');

// // Variables globales
// const DOS_PI = Math.PI * 2;
// const dimensiones = { ancho: 0, alto: 0, imgAncho: 0, imgAlto: 0 };
// const cuadricula = {};
// const anchoPixel = 15;
// const altoPixel = 15;
// const blancoNegro = document.getElementById('byn');
// const pepas = document.getElementById('pepas');
// const efecto3 = document.getElementById('efecto3');
// const numberOfParticles = 5000;
// let pixeles = [];
// let datosImagen;
// let particlesArray = [];
    

// /**
//  * Una función asincrónica que usa "async" y "await" de ES6, esto no funciona sin "Babel".
//  * Busca una imagen aleatoria del API "Lorem Picsum": https://picsum.photos/
//  */
// async function buscar() {
//   const respuestaApi = await fetch(`https://picsum.photos/${dimensiones.ancho}/${dimensiones.alto}`);

//   const img = new Image();
//   // esto es necesario para poder pintar en el canvas una imagen que viene de otro servidor. Ver "tainted canvas"
//   img.crossOrigin = 'Anonymous';
//   img.onload = () => {
//     // Cuando cargue la imágen, definimos las dimensiones a partir de su tamaño.
//     dimensiones.imgAncho = img.naturalWidth;
//     dimensiones.imgAlto = img.naturalHeight;

//     // Pintamos la imagen original en el canvas que no se ve en la pantalla, para tener los pixeles en ese canvas
//     ctx2.drawImage(img, 0, 0);

//     // Para iniciar, pintamos la imagen original en el canvas que sí se ve, luego aplicamos efectos en este canvas.
//     ctx.drawImage(img, 0, 0);

//     // extraemos los datos de la imagen
//     datosImagen = ctx2.getImageData(0, 0, dimensiones.ancho, dimensiones.alto);
//     // sacamos los pixeles que es un Array y cada color tiene 4 valores [r, g, b, a, r, g, b, a, ....];
//     pixeles = datosImagen.data;
//   };
//   img.src = respuestaApi.url;
// }

// function actualizar() {
//   dimensiones.ancho = lienzo.width = lienzo2.width = (window.innerWidth / 1.5) | 0;
//   dimensiones.alto = lienzo.height = lienzo2.height = (window.innerHeight / 1.5) | 0;
//   cuadricula.columnas = (dimensiones.ancho / anchoPixel) | 0;
//   cuadricula.filas = (dimensiones.alto / altoPixel) | 0;
//   cuadricula.total = cuadricula.columnas * cuadricula.filas;
//   buscar();
// }

// window.onresize = actualizar;
// actualizar();

// // .....::::::: Efectos :::::::.....

// /**
//  * Blanco y Negro
//  * Pasa por cada pixel y cambia cada canal (RGB) por el promedio de color de todos los canales.
//  */
// blancoNegro.onclick = () => {
//   // Sólo hacemos esto si la imagen ya cargó y hay pixeles.
//   if (pixeles.length) {
//     // Pasamos por cada pixel. Miren que saltamos 4 posiciones en cada ciclo.
//     // Esto es porque hay 4 valores por pixel: Rojo, Verde, Azul y Alpha
//     for (let i = 0; i < pixeles.length; i += 4) {
//       const rojo = pixeles[i];
//       const verde = pixeles[i + 1];
//       const azul = pixeles[i + 2];
//       const promedio = (rojo + verde + azul) / 3;
//       pixeles[i] = promedio;
//       pixeles[i + 1] = promedio;
//       pixeles[i + 2] = promedio;
//     }

//     // Después de manipular los pixeles, los volvemos a poner en el canvas
//     ctx.putImageData(datosImagen, 0, 0);
//   }
// };

// /**
//  * Efecto pepas
//  * Definimos una cuadrícula y sacamos el color promedio de cada celda. Con eso pintamos un círculo del color promedio.
//  * El efecto es una especie de pixelación de la imagen.
//  */
// pepas.onclick = () => {
//   if (pixeles.length) {
//     // El centro de una pepa es siempre el mismo, entonces lo podemos definir antes de entrar a los loops.
//     const centroPepa = { x: anchoPixel / 2, y: altoPixel / 2 };

//     // Borramos el canvas que se ve en pantalla (los pixeles están en el otro así que tenemos acceso a ellos).
//     ctx.clearRect(0, 0, dimensiones.ancho, dimensiones.alto);

//     /**
//      * Acá tenemos 3 loops:
//      * 1. Cada columna
//      * 2. Cada fila
//      * 3. Extraer el promedio de color por cada celda
//      */
//     for (let columna = 0; columna < cuadricula.columnas; columna++) {
//       // Al entrar a cada columna podemos definir el valor de "x".
//       const x = columna * anchoPixel;

//       for (let fila = 0; fila < cuadricula.filas; fila++) {
//         // Al entrar a cada fila definimos el valor de "y".
//         const y = fila * anchoPixel;

//         // Teniendo "x" y "y", podemos sacar los pixeles de cada celda en un array
//         const area = ctx2.getImageData(x, y, anchoPixel, altoPixel);
//         const pixelesArea = area.data;

//         // Para sacar el promedio más adelante, sacamos la cuenta de cuantos pixeles hay en cada celda.
//         const numPixeles = pixelesArea.length / 4;

//         // Vamos a ir guardando la suma de los colores acá
//         let promedio = [0, 0, 0];

//         for (let i = 0; i < pixelesArea.length; i += 4) {
//           const rojo = pixelesArea[i];
//           const verde = pixelesArea[i + 1];
//           const azul = pixelesArea[i + 2];
//           // Toma el valor actual de cada canal y le suma el valor del pixel donde actual.
//           promedio[0] += rojo;
//           promedio[1] += verde;
//           promedio[2] += azul;
//         }

//         // Cuando ya tenemos la suma de todos los pixeles, sacamos el promedio de cada canal.
//         promedio[0] = (promedio[0] / numPixeles) | 0;
//         promedio[1] = (promedio[1] / numPixeles) | 0;
//         promedio[2] = (promedio[2] / numPixeles) | 0;

//         // Definimos el color promedio en el contexto para pintar lo que queremos de ese color.
//         // En este caso voy a pintar un circulo usando arc()
//         ctx.fillStyle = `rgb(${promedio.join(',')})`;
//         ctx.beginPath();
//         ctx.arc(x + centroPepa.x, y + centroPepa.y, centroPepa.x, 0, DOS_PI);
//         ctx.fill();
//       }
//     }
//   }
// };
// // class Particle {
// //   constructor() {
// //     this._x = Math.random() * lienzo.width;
// //     this._y = 0;
// //     this.speed = 0;
// //     this.velocity = Math.random() * 0.5;
// //     this.size = Math.random() * 1.5 * 1;
// //   }
// //   update() {
// //     this._y += this.velocity;
// //     if (this._y >= lienzo.height) {
// //       this._y = 0;
// //       this._x = Math.random() * lienzo.width;
// //     }
// //   }
// //   draw() {
// //     ctx2.beginPath();
// //     ctx2.fillStyle = 'white';
// //     ctx2.arc(this._x, this._y, this.size, 0, DOS_PI);
// //     ctx2.fill();
// //   }
// // }

// //Efecto 3

// // efecto3.onclick = () => {
// //   if (pixeles.length) {
// //     function init() {
// //       const particulas = new Particle()
// //       for (let i = 0; i < numberOfParticles; i++){
// //         particlesArray.push(particulas);
// //       }
// //     }
// //     init();
// //     function animate() {
// //       ctx2.globalAlpha = 0.05;
// //       ctx2.fillStyle = 'rgb(0, 0, 0)'
// //       ctx2.fillRect(0, 0, lienzo.width, lienzo.height);
// //       for (let i = 0; i < particlesArray.length; i++){
// //         particlesArray[i].update();
// //         particlesArray[i].draw();
// //       }
// //       requestAnimationFrame(animate());
// //     }
// //     animate();
// //   }
// // };

