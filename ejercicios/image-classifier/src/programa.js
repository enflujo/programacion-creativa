import './scss/estilos.scss';
import { iniciarCamara } from './utilidades/ayuda';
import audioSrc1 from './assets/audio.mp3';
import audioSrc2 from './assets/audio2.mp3';
import audioSrc3 from './assets/audio3.mp3';

const classifier = knnClassifier.create();
const webcamElement = document.getElementById('webcam');
const intro = document.getElementById('intro')
const modelo = document.getElementById('modelo');
const presentacion = document.getElementById('presentacion');
const canvas1 = document.getElementById('canvas1');
const ctx1 = canvas1.getContext('2d');
const canvas2 = document.getElementById('canvas2');
const ctx2 = canvas2.getContext('2d');
const canvas3 = document.getElementById('canvas3');
const ctx3 = canvas3.getContext('2d');

let clicksBotonA = 0;
let clicksBotonB = 0;
let clicksBotonC = 0;


/////////////////////Botones

intro.addEventListener('click', () => {
  intro.classList.add('hidden');
  presentacion.classList.remove('hidden');
});

presentacion.addEventListener('click', () => {
  presentacion.classList.add('hidden');
  modelo.classList.remove('hidden');
});

///////////////////Clases

class Circle {
  constructor(radius, speed, width, xPos, yPos) {
    this.radius = radius;
    this.speed = speed;
    this.width = width;
    this.xPos = xPos;
    this.yPos = yPos;
    this.opacity = 0.05 + Math.random() * 0.5;
  }
  dibujarCircles(w, h) {
    ctx1.beginPath();
    ctx1.strokeStyle = 'rgba(255,255,255,0)';
    ctx1.arc(w, h, 200 * Math.random(), 0, 2 * Math.PI);
    ctx1.fillStyle = 'rgba(254, 0, 224, 0.5)';
    ctx1.fill();
    ctx1.stroke();
  }
  cambiarColor() {
    ctx1.fillStyle = ctx1.fillStyle = 'rgb(3, 196, 252)';
    ctx1.fill();
  }
}

class Cuadrado {
  constructor(radius, speed, width, xPos, yPos) {
    this.radius = radius;
    this.speed = speed;
    this.width = width;
    this.xPos = xPos;
    this.yPos = yPos;
    this.opacity = 0.05 + Math.random() * 0.5;
  }
  dibujarCuadrado(xC, yC, wC, hC) {
    ctx2.fillRect(xC, yC, wC, hC);
    ctx2.strokeRect(xC, yC, wC, hC);
    ctx2.fillStyle = 'rgb(3, 196, 252)';
    ctx2.fill();
    ctx2.stroke();
  }
  cambiarColor() {
    ctx2.fillStyle = ctx2.fillStyle = 'rgb(3, 196, 252)';
    ctx2.fill();
  }
}

class Triangulo {
  constructor(radius, speed, width, xPos, yPos) {
    this.radius = radius;
    this.speed = speed;
    this.width = width;
    this.xPos = xPos;
    this.yPos = yPos;
    this.opacity = 0.05 + Math.random() * 0.5;
  }
  dibujarTriangulos(xT, yT, lT) {
    ctx3.beginPath();
    ctx3.moveTo(xT, yT);
    ctx3.lineTo(lT, xT);
    ctx3.lineTo(lT, yT/2);
    ctx3.fillStyle = 'rgb(3, 196, 252)';
    ctx3.fill();
  }
  cambiarColor() {
    ctx3.fillStyle = ctx3.fillStyle = 'rgb(3, 196, 252)';
    ctx3.fill();
  }
}
  
async function app() {
  let dims = [0, 0];
  let camara;
  let modelo;

  console.log('Loading mobilenet..');
  // Load the model.
  camara = await iniciarCamara(dims);
  modelo = await mobilenet.load();
  console.log('Successfully loaded model');

  // const webcam = await tf.data.camara(canvas);

  // Create an object from Tensorflow.js data API which could capture image 
  // from the web camera as Tensor.
  const webcam = await tf.data.webcam(webcamElement);
  dims = [camara.videoWidth, camara.videoHeight];
  webcamElement.width = dims[0];
  webcamElement.height = dims[1];

  // Reads an image from the webcam and associates it with a specific class
  // index.
  const addExample = async classId => {
    // Capture an image from the web camera.
    const img = await webcam.capture();

    // Get the intermediate activation of MobileNet 'conv_preds' and pass that
    // to the KNN classifier.
    const activation = modelo.infer(img, true);

    // Pass the intermediate activation to the classifier.
    classifier.addExample(activation, classId);

    // Dispose the tensor to release the memory.
    img.dispose();
  };

  // When clicking a button, add an example for that class.
    document.getElementById('class-a').addEventListener('click', () => {
      addExample(0);
      clicksBotonA += 1;
      var audio = new Audio(audioSrc1);
      audio.play();
      rectanguloCreciendo1();
      if (clicksBotonA >= 20) {
        ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
        animacionCanvas1();
      }
    });
  
  document.getElementById('class-b').addEventListener('click', () => {
    addExample(1);
    clicksBotonB += 1;
    var audio = new Audio(audioSrc2);
    audio.play();
    rectanguloCreciendo2();
    if (clicksBotonB >= 20) {
      ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
      animacionCuadrados();
    }
  });
  document.getElementById('class-c').addEventListener('click', () => {
    addExample(2);
    clicksBotonC += 1;
    var audio = new Audio(audioSrc3);
    audio.play();
    rectanguloCreciendo3();
    if (clicksBotonC >= 20) {
      ctx3.clearRect(0, 0, canvas3.width, canvas3.height);
      animacionTriangulos();
    }
  });

    while (true) {
      if (classifier.getNumClasses() > 0) {
        const img = await webcam.capture();

        // Get the activation from mobilenet from the webcam.
        const activation = modelo.infer(img, 'conv_preds');
        // Get the most likely class and confidence from the classifier module.
        const result = await classifier.predictClass(activation);

        const classes = ['A', 'B', 'C'];
        console.log(result);
        document.getElementById('console').innerText = `
          Predicción: ${classes[result.label]}\n
          Probabilidad: ${result.confidences[result.label]}
        `;

        // Dispose the tensor to release the memory.
        img.dispose();

        if (clicksBotonA >= 20 && classes[result.label] === 'A') {
          let pararAnimacionCanvas1 = requestAnimationFrame(animacionCanvas1);
          window.cancelAnimationFrame(pararAnimacionCanvas1);
          ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
          ctx1.fillRect(0, 0, canvas1.width, canvas1.height);
          ctx1.fillStyle = 'rgb(255, 200, 80)'
        }
        if (clicksBotonB >= 20 && classes[result.label] === 'B') {
          let pararAnimacionCanvas2 = requestAnimationFrame(animacionCuadrados);
          window.cancelAnimationFrame(pararAnimacionCanvas2);
          ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
          ctx2.fillRect(0, 0, canvas2.width, canvas2.height);
          ctx2.fillStyle = 'rgb(255, 0, 0)'
        }
        if (clicksBotonC >= 20 && classes[result.label] === 'C') {
          let pararAnimacionCanvas3 = requestAnimationFrame(animacionTriangulos);
          window.cancelAnimationFrame(pararAnimacionCanvas3);
          ctx3.clearRect(0, 0, canvas3.width, canvas3.height);
          ctx3.fillRect(0, 0, canvas3.width, canvas3.height);
          ctx3.fillStyle = 'rgb(0, 0, 0)'
        }
      }

      await tf.nextFrame();

      
    }
  
}
function rectanguloCreciendo1() {
  let xR = 0;
  let yR = 0;
  let wR = 100 + (clicksBotonA * 10);
  let hR = 30 + (clicksBotonA * 6);
  ctx1.fillStyle = 'rgb(224, 14, 15)';
  ctx1.fillRect(xR, yR, wR, hR);
}
function rectanguloCreciendo2() {
  let xRB = 0;
  let yRB = 0;
  let wRB = 100 + (clicksBotonB * 10);
  let hRB = 30 + (clicksBotonB * 6);
  ctx2.fillStyle = 'rgb(254, 97, 30)';
  ctx2.fillRect(xRB, yRB, wRB, hRB);
}
function rectanguloCreciendo3() {
  let xR = 0;
  let yR = 0;
  let wR = 100 + (clicksBotonC * 10);
  let hR = 30 + (clicksBotonC * 6);
  ctx3.fillStyle = 'rgb(254, 199, 21)';
  ctx3.fillRect(xR, yR, wR, hR);
}

function definirColor() {
  const r = Math.random(0, 255);
  const g = Math.random(0, 255);
  const b = Math.random(0, 255);
  const alpha = Math.random(0, 1);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

  function animacionCanvas1() {
    const circulos = new Circle();
    const circulos1 = new Circle();
    let w = 1500 * Math.random();
    let h = 1500 * Math.random();
    ctx1.fillStyle = 'rgba(254, 0, 224, 0.5)';
    // ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
  
    circulos.dibujarCircles(w, h);
    circulos1.dibujarCircles(w / 2, h / 2);
    circulos1.cambiarColor();
  
    ctx1.lineWidth = 10;
    ctx1.strokeStyle = definirColor();
    ctx1.fillStyle = 'rgba(224, 14, 15, 1)';
  
    requestAnimationFrame(animacionCanvas1);
    
  }




  function animacionCuadrados() {
    const cuadrado = new Cuadrado();
    const cuadrado1 = new Cuadrado();
    let xC = 1500 * Math.random();
    let yC = 1500 * Math.random();
    let wC = 150 * Math.random();
    let hC = 150 * Math.random();
    ctx2.fillStyle = 'rgba( 142, 227, 2, 0.5)';
    // ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
  
    cuadrado.dibujarCuadrado(xC, yC, wC, hC);
    cuadrado1.dibujarCuadrado(xC/2, yC/2, wC/2, hC/2);
    cuadrado1.cambiarColor();
  
    ctx2.lineWidth = 10;
    ctx2.strokeStyle = 'rgba( 255, 240, 2, 0.2)';
    ctx2.fillStyle = 'rgba(254, 97, 30, 1)';
  
    requestAnimationFrame(animacionCuadrados);
  }

  function animacionTriangulos() {
    const triangulo = new Triangulo();
    const triangulo1 = new Triangulo();
    let xT = 1500 * Math.random();
    let yT = 1500 * Math.random();
    let lT = 1500 * Math.random();
    ctx3.fillStyle = 'rgba( 142, 227, 2, 0.5)';
    
  
    triangulo.dibujarTriangulos(xT, yT, lT);
    triangulo1.dibujarTriangulos(xT/2, yT/2, lT/2);
    triangulo.cambiarColor();
    
  
    ctx3.lineWidth = 10;
    ctx3.strokeStyle = 'rgba( 255, 240, 2, 0.2)';
    ctx3.fillStyle = 'rgba(254, 199, 21, 1)';
  
    requestAnimationFrame(animacionTriangulos);
  }
  

  app();


