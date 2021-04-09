import './scss/estilos.scss';
import ruta from './assets/Climb_Rope_Loop_00.mp3';

const container = document.getElementById('container');
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const file = document.getElementById('fileupload')
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let audioSource;
let analyser;

class Circle {
  constructor(opacity) {
    this.opacity = 0.05 + Math.random() * 0.5;
  }
  dibujarCircles(w, h) {
   
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(255,255,255,0)';
    ctx.arc(w, h, 5, 0, 2 * Math.PI);
    const r = 250;
    const g = Math.floor(300);
    const b = Math.floor(300);
    const alpha = 0.9;
    ctx.fillStyle = 'blanchedalmond';
    ctx.fill();
    ctx.stroke();
  }
}

file.addEventListener('click', function () {
  const audio1 = document.getElementById('audio1')
  audio1.src = ruta;
  const audioContext = new AudioContext();
  audioSource = audioContext.createMediaElementSource(audio1);
  analyser = audioContext.createAnalyser();
  audioSource.connect(analyser);
  analyser.connect(audioContext.destination)
  analyser.fftSize = 1024;
  const bufferLength = analyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);
  
  const barWidth = (canvas.width/2) / bufferLength;
  let x;
  let barHeight;

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    x = 0;
    analyser.getByteFrequencyData(dataArray);
    drawVisualiser(bufferLength, x, barWidth, barHeight, dataArray);
    requestAnimationFrame(animate);
  }
  animate();
  
})

file.addEventListener('change', function () {
  const files = this.files;
  const audio1 = document.getElementById('audio1');
  audio1.src = URL.createObjectURL(files[0]);
  audio1.load();
  audio1.play();

  audioSource = audioContext.createMediaElementSource(audio1);
  analyser = audioContext.createAnalyser();
  audioSource.connect(analyser);
  analyser.connect(audioContext.destination)
  analyser.fftSize = 1024;
  const bufferLength = analyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);
  
  const barWidth = (canvas.width * 2) / bufferLength;
  let x;
  let barHeight;

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    x = 0;
    analyser.getByteFrequencyData(dataArray);
    drawVisualiser(bufferLength, x, barWidth, barHeight, dataArray);
    requestAnimationFrame(animate);
  }
  animate();
})



function drawVisualiser(bufferLength, x, barWidth, barHeight, dataArray) {
  for (let i = 0; i < bufferLength; i++){
    barHeight = dataArray[i];
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(i * Math.PI * 8 / bufferLength);
    const hue = i / 2;
    const r = bufferLength;
    const g = Math.floor(barHeight);
    const b = Math.floor(hue*2);
    const alpha = 0.9;
    ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
    ctx.fillRect(0, 0, barWidth * 2, barHeight * 3);
    x += barWidth;
    const circulos = new Circle();
    let w = i * barHeight;
    let h = i * Math.random(barHeight);
    circulos.dibujarCircles(w, h);
    ctx.restore();
  }
}


