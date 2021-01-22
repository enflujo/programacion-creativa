/*
Idea: código en p5 tomado de: http://www.generative-gestaltung.de/2/sketches/?01_P/P_4_2_2_01
Alternativa en js que encontré: https://stackoverflow.com/questions/32699721/javascript-extract-video-frames-reliably
*/

const tile = { cantidadX: 5, cantidadY: 6, width: 0, height: 0 };

/*
querySelector: método que retorna el primer (y solo el primer) elemento que 
coincide con un selector CSS especificado (o varios).

change: evento disparado por los elementos <input>, <select> y <textarea> cuando
una alteración del valor del elemento es realizada por el usuario. A diferencia 
del evento "input", "change" no necesariamente se dispara con cada alteración del valor.
*/
document.querySelector('input').addEventListener('change', extractFrames, false);

function extractFrames() {
  let video = document.createElement('video');
  let array = [];
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  let pro = document.querySelector('#progress');

  function initCanvas(e) {
    canvas.width = this.videoWidth / 2;
    canvas.height = this.videoHeight / 2;
  }

  function drawFrame(e) {
    this.pause();
    /*
    ctx.drawImage dibuja una imagen ("this", en este caso) en el canvas
    */
    ctx.drawImage(this, 0, 0, canvas.width, canvas.height);
    /* 
    this will save as a Blob, less memory consumptive than toDataURL
    a polyfill can be found at
    https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob#Polyfill
    */
    /*
   toBlob crea un objeto blob representando el contenido del canvas que puede
   ser guardado en la memoria o en el caché. 
   Sintaxis: canvas.toBlob(callback, mimeType, qualityArgument);
   */
    canvas.toBlob(saveFrame, 'image/jpeg', 0.6);
    /*
    currentTime: propiedad que establece o retorna la posición actual (en seg)
    del video (o el audio) que se está reproduciendo.

    duration: propiedad que establece o retorna la duración del video o audio (en seg).

    toFixed(): convierte un número en un string, redondeándolo a la cantidad de 
    decimales dentro de los ().
    */
    //esto actualiza el % de carga del video
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
    tile.width = this.videoWidth / 3;
    tile.height = this.videoHeight / 3;
    var img;
    // do whatever with the frames ¿?
    for (var i = 0; i < array.length; i++) {
      img = new Image();
      img.onload = revokeURL;
      img.src = URL.createObjectURL(array[i]);
      document.body.appendChild(img);
    }
    // Ya no se necesita la objectURL del objeto
    URL.revokeObjectURL(this.src);
  }

  video.muted = true;

  /*
  addEventListener: agrega un manipulador de eventos (event handler) a un elemento
  específico. Sintaxis: element.addEventListener(event, function, useCapture).

  loadedmetadata: evento que ocurre cuando la metadata de un video o un audio
  ha sido cargada. 

  timeupdate: evento que ocurre cuando la posición de reproducción de un video o
  un audio ha cambiado. Es invocado al reproducir o al mover la posición de reproducción.
  */

  video.addEventListener('loadedmetadata', initCanvas, false);
  video.addEventListener('timeupdate', drawFrame, false);
  video.addEventListener('ended', onend, false);

  /*
  URL.createObjectURL(): crea un DOMString que contiene una URL que representa
  el objeto dado en el parámetro. El tiempo de vida de la URL está ligado al 
  documento en la ventana en la cual fue creada. El nuevo objeto URL representa
  el objeto File u Blob especificado. 
  */
  video.src = URL.createObjectURL(this.files[0]);
  video.play();
}
