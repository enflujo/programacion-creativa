//Idea: código en p5 tomado de: http://www.generative-gestaltung.de/2/sketches/?01_P/P_4_2_2_01
//Alternativa en js que encontré: https://stackoverflow.com/questions/32699721/javascript-extract-video-frames-reliably

const tile = { cantidadX: 5, cantidadY: 6, width: 0, height: 0 };
let cantidadImagen = tile.cantidadX * tile.cantidadY;
let imagenActual = 0;
let grilla = { x: 0, y: 0 };

document.querySelector('input').addEventListener('change', extractFrames, false);
//const fuente = 'https://juancgonzalez.com/labmoviles/suenos/capa2/tren.mp4';
//document.fuente.addEventListener('change', extractFrames, false);

function extractFrames() {
  var video = document.createElement('video');
  //video.src = 'https://juancgonzalez.com/labmoviles/suenos/capa2/tren.mp4';
  var array = [];
  var canvas = document.createElement('canvas');
  var ctx = canvas.getContext('2d');
  var pro = document.querySelector('#progress');

  function initCanvas(e) {
    canvas.width = this.videoWidth / 2;
    canvas.height = this.videoHeight / 2;
    //canvas.width = window.innerWidth;
    //canvas.height = window.innerHeight;
  }

  function drawFrame(e) {
    this.pause();
    ctx.drawImage(this, 0, 0, canvas.width, canvas.height);
    /* 
    this will save as a Blob, less memory consumptive than toDataURL
    a polyfill can be found at
    https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob#Polyfill
    */
    canvas.toBlob(saveFrame, 'image/jpeg', 0.6);
    pro.innerHTML = ((this.currentTime / this.duration) * 100).toFixed(2) + ' %';
    if (this.currentTime < this.duration) {
      this.play();
    }
  }

  function saveFrame(blob) {
    array.push(blob);
  }

  function revokeURL(e) {
    URL.revokeObjectURL(this.src);
  }

  function onend(e) {
    // tile.width = Math.ceil(window.innerWidth / tile.cantidadX);
    //tile.height = Math.ceil(window.innerHeight / tile.cantidadY);
    tile.width = this.videoWidth / 3;
    tile.height = this.videoHeight / 3;
    var img;
    // do whatever with the frames
    for (var i = 0; i < array.length; i++) {
      img = new Image();
      img.onload = revokeURL;
      img.src = URL.createObjectURL(array[i]);
      //img.width = tile.width;
      //img.height = tile.height;
      document.body.appendChild(img);
    }
    // we don't need the video's objectURL anymore
    URL.revokeObjectURL(this.src);
  }

  video.muted = true;

  video.addEventListener('loadedmetadata', initCanvas, false);
  video.addEventListener('timeupdate', drawFrame, false);
  video.addEventListener('ended', onend, false);

  video.src = URL.createObjectURL(this.files[0]);
  //video.src = 'https://juancgonzalez.com/labmoviles/suenos/capa2/tren.mp4';
  video.play();
}
