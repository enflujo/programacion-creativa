/**  
 Nuevo ejercicio de robo para practicar partículas.
Tomado de: 
*/

import './scss/estilos.scss';

const canvas = document.getElementById('lienzo');
const ctx = canvas.getContext('2d');
const p = [];
let mouseX = 0;
let mouseY = 0;
let nParticles = 0;
let hue = random(0, 255);

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function setup() {
  resize();

  ctx.fillStyle = 'hsla(211, 0%, 40%, 0.7)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  nParticles = 40;
  for (let i = 0; i < nParticles; i++) {
    p.push(new Particle(canvas.width / 2, canvas.height / 2, 200, hue));
  }
  draw();
}

canvas.onmousemove = (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
};

function draw() {
  ctx.fillStyle = 'hsla(211, 0%, 40%, 0.1)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < p.length; i++) {
    p[i].move();
  }

  requestAnimationFrame(draw);
}

canvas.onmousedown = () => {
  hue = random(0, 365);
  for (let i = 0; i <= 30; i++) {
    p.push(new Particle(mouseX, mouseY, 200, hue));
  }
};

function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function ellipse(x, y, r) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.fill();
}

class Particle {
  constructor(x, y, alpha, hue) {
    this.moveX = random(-5, 5);
    this.moveY = random(-5, 5);
    this.x = x;
    this.y = y;
    this.width = random(5, 25);
    this.h = hue + random(0, 100);
    this.s = random(18, 100);
    this.b = random(34, 85);
    this.alpha = alpha;
  }

  move() {
    this.x = this.x + this.moveX;
    this.moveY = this.moveY + 0.1;
    this.y = this.y + this.moveY;
    ctx.fillStyle = `hsla(${this.h},${this.s}%,${this.b}%,${this.alpha})`;

    ellipse(this.x, this.y, this.width);
  }
}

setup();
