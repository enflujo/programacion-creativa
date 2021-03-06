/*
Adaptación de código en p5 tomado de: http://www.generative-gestaltung.de/2/sketches/?01_P/P_4_2_2_01
Se pueden pintar también los frames de un video alojado en un servidor escribiendo
el enlace. 
*/
const dimension = window.innerWidth;
const tileCountX = 9;
const tileCountY = 12;
const tileWidth = dimension / tileCountX;
const tileHeight = dimension / tileCountY;
const imageCount = tileCountX * tileCountY;
let video = document.getElementById('video');

const lienzo = document.getElementById('lienzo');
const ctx = lienzo.getContext('2d');
const btnNuevoVid = document.getElementById('btnNuevoVid');
const linksVideos = [
  'https://juancgonzalez.com/labmoviles/suenos/capa2/monstro.mp4',
  'https://juancgonzalez.com/labmoviles/suenos/capa1/nuevos_f/arboles_niebla.mp4',
  'https://juancgonzalez.com/labmoviles/suenos/capa1/nuevos_f/ti_punch.mp4',
  'https://juancgonzalez.com/labmoviles/suenos/capa1/nuevos_f/sombra_planta_1.mp4',
  'https://juancgonzalez.com/labmoviles/suenos/capa1/nuevos_f/lagarto_brillante.mp4',
  'https://juancgonzalez.com/labmoviles/suenos/capa1/nuevos_f/hierbas_blancas.mp4',
  'https://juancgonzalez.com/labmoviles/suenos/capa1/nuevos_f/arbol_fiesta.mp4',
  'https://juancgonzalez.com/labmoviles/suenos/capa1/nuevos_f/luz_avion.mp4',
];

let animacion;
let currentImage = 0;
let grillaX = 0;
let grillaY = 0;
let urlParam = document.getElementById('url');
let i = 0;

lienzo.width = dimension;
lienzo.height = dimension;

/* Espera a que el video cargue para dibujarlo */
function cargarVideo() {
  video.onloadedmetadata = () => {
    dibujarVideo();
  };
}
/* Botón para cargar un video nuevo desde una url */
btnNuevoVid.onmousedown = () => {
  prepare_link();
};

/* Función que prepara el nuevo video borrando lo que había antes en el lienzo
y asignando la nueva url como fuente del elemento "video" */
function prepare_link() {
  ctx.clearRect(0, 0, lienzo.width, lienzo.height);
  //var urlParam = document.getElementById('url');
  if (i <= linksVideos.length) {
    video.src = linksVideos[i]; //urlParam.value;
    currentImage = 0;
    grillaX = 0;
    grillaY = 0;
    i++;
  } else {
    video.src = 'https://juancgonzalez.com/labmoviles/suenos/capa1/nuevos_f/baile_azul.mp4';
    i = 0;
  }
}

function map(valor, x1, y1, x2, y2) {
  return ((valor - x1) * (y2 - x2)) / (y1 - x1) + x2;
}

function dibujarVideo() {
  let posX = tileWidth * grillaX;
  let posY = tileHeight * grillaY;
  video = document.getElementById('video');
  ctx.drawImage(video, posX, posY, tileWidth, tileHeight);

  currentImage++;

  const nextTime = map(currentImage, 0, imageCount, 0, video.duration);
  //console.log('seek to: ' + video.currentTime);
  video.currentTime = nextTime;
  grillaX++;

  if (grillaX >= tileCountX) {
    grillaX = 0;
    grillaY++;
  }

  //nueva posición en la grilla
  if (currentImage >= imageCount) {
    window.cancelAnimationFrame(animacion);
  } else {
    animacion = requestAnimationFrame(dibujarVideo);
  }
}

cargarVideo();
