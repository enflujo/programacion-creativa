//Adaptación de código en p5 tomado de: http://www.generative-gestaltung.de/2/sketches/?01_P/P_4_2_2_01

const tile = { cantidadX: 5, cantidadY: 7, width: 0, height: 0 };
let cantidadImagen = tile.cantidadX * tile.cantidadY;
let imagenActual = 0;
let grilla = { x: 0, y: 0 };
const fuente = 'https://juancgonzalez.com/labmoviles/suenos/capa2/tren.mp4';

/*
const c = document.getElementById('canvas');
ctx = c.getContext('2d');
c.width = window.innerWidth;
c.height = window.innerHeight;
//ctx.fillStyle = '#FFFFFF';
//ctx.fillRect(0, 0, c.width, c.height);
*/
tile.width = Math.ceil(window.innerWidth / tile.cantidadX);
tile.height = Math.ceil(window.innerHeight / tile.cantidadY);
//video = document.getElementById('video');
console.log(window.innerWidth, tile.height);

function mapear(valor, x1, y1, x2, y2) {
  return ((valor - x1) * (y2 - x2)) / (y1 - x1) + x2;
}

function dibujar() {
  video = crearCapaVideo(bloque.frames);
  //if (video.readyState == 4) {

  //dibujar video
  //}

  grilla.x++;
  if (grilla.X >= tile.cantidadX) {
    grilla.x = 0;
    grilla.y++;
  }

  let posX = tile.width * grilla.x;
  let posY = tile.height * grilla.y;

  for (let i = 0; i < 100; i += 2) {
    crearCapaVideo(bloque.frames);
    //ctx.drawImage(video, posX + i, posY, tile.width, tile.height);
    console.log('video');
  }
  //ctx.drawImage(video, posX, posY, tile.width, tile.height);

  imagenActual++;

  //pedir el video en el próximo tiempo ¿?
  let proximoTiempo = mapear(imagenActual, 0, cantidadImagen, 0, video.duration);
  console.log('pedir a: ' + video.currentTime);
  //video.currentTime(proximoTiempo);

  //nueva posición en la grilla

  //if (imagenActual >= cantidadImagen) noLoop();
  //}
  //vuelve a empezar el loop

  //requestAnimationFrame(dibujar);
}

///Tomado de suenio
function crearCapaVideo(bloque) {
  const vid = document.createElement('video');

  vid.autoplay = true;
  vid.muted = true;
  vid.src = fuente;
  vid.width = tile.width;
  vid.height = tile.height;

  bloque.contenedor.appendChild(vid);
  console.log(vid.style.borderRadius);
  //vid.onended = () => {
  //bloque.contenedor.removeChild(vid);
  //};

  return vid;
}

const bloque = {
  frames: {
    contenedor: document.getElementById('frames'),
    btn: document.getElementById('framesBtn'),
    actual: 0,
  },
};

/*bloque.frames.btn.onclick = () => {
  crearCapaVideo(bloque.frames);
};
*/

dibujar();
