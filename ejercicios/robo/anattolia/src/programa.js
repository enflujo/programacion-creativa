/*
Adaptación de código en p5 tomado de: http://www.generative-gestaltung.de/2/sketches/?01_P/P_4_2_2_01
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
const btnPlay = document.getElementById('btnPlay');
let animacion;
let currentImage = 0;
let grillaX = 0;
let grillaY = 0;
let urlParam = document.getElementById('url');

lienzo.width = dimension;
lienzo.height = dimension;

function cargarVideo() {
  video.onloadedmetadata = () => {
    //console.log('Video cargado: ' + video.src);
    dibujarVideo();
  };
}
btnNuevoVid.onmousedown = () => {
  prepare_link();
};
btnPlay.onmousedown = () => {
  //console.log('play');
  ctx.clearRect(0, 0, dimension, dimension);
  dibujarVideo();
};

function prepare_link() {
  var urlParam = document.getElementById('url');
  video.src = urlParam.value;
  currentImage = 0;
  grillaX = 0;
  grillaY = 0;
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
  //console.log(video.src);
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
