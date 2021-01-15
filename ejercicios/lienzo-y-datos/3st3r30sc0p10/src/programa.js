import './scss/estilos.scss';


const canvas = document.getElementById('lienzo');
const ctx = canvas.getContext('2d');
const raton = { x: 0, y: 0, anteriorX: 0, anteriorY: 0 };
const centro = { x: 0, y: 0 };
let aceleracion = 0;

class Circle{
    constructor (radius, speed, width, xPos, yPos) {
    this.radius = radius;
    this.speed = speed;
    this.width = width;
    this.xPos = xPos;
    this.yPos = yPos;
    this.opacity = 0.05 + Math.random() * 0.5;
    }
    dibujarCircles(w, h){
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(255,255,255,0)';
    ctx.arc(w, h, aceleracion*2, 0, 2 * Math.PI);
    ctx.fillStyle = 'rgb(3, 196, 252)';
    ctx.fill();
    ctx.stroke();
    }
    cambiarColor() {
    ctx.fillStyle = definirColor(aceleracion/2, raton.x);
    ctx.fill();
    }
}
function actualizar() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.fillStyle = '#2e4053';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    centro.x = canvas.width / 2;
    centro.y = canvas.height / 2;
}

function crearRectangulo(w, h) {
    ctx.strokeRect(raton.x, raton.y, w, h);
    if (ctx.lineWidth <= 0) {
        ctx.lineWidth = 1;
      } else if (ctx.lineWidth > 25) {
        ctx.lineWidth = 25;
    }
}

function calcularDistancia(x1, y1, x2, y2) {
  const distanciaX = x2 - x1;
  const distanciaY = y2 - y1;
  return Math.sqrt(distanciaX * distanciaX + distanciaY * distanciaY);
}

canvas.onmousemove = (evento) => {
    raton.x = evento.clientX;
    raton.y = evento.clientY;
    if (raton.x < canvas.width/4 && raton.y < canvas.height) {
        ctx.clearRect(Math.random() * 0.5, Math.random() * 0.5, canvas.width, canvas.height)
    }
    else {
        ctx.fillStyle = definirColor(55, 151);
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
};

function definirColor(x,y){
  const r = Math.floor((y/canvas.height)*255);
  const g = Math.floor((y/canvas.width)*255);
  const b = Math.floor((x/canvas.width)*255);
  const alpha = 0.5;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function animacion() {
    let tiempo = new Date().getTime();
    console.log(tiempo);
    const circulos = new Circle;
    const circulos1 = new Circle;
    let w = 1500 * Math.random();
    let h = 1500 * Math.random();
    aceleracion = calcularDistancia(raton.x, raton.y, raton.anteriorX, raton.anteriorY);
    ctx.fillStyle = 'rgba( 142, 227, 2, 0.5)';
    crearRectangulo(w, h);

    circulos.dibujarCircles(w, h);
    circulos1.dibujarCircles(w/2, h/2);
    circulos1.cambiarColor();

    ctx.lineWidth = aceleracion;
    ctx.strokeStyle = definirColor(aceleracion,raton.x);
    ctx.fillStyle = 'rgba( 252, 2, 240, 0.2)';
    crearRectangulo(w / 80, h / 80);

    ctx.lineWidth = aceleracion;
    ctx.strokeStyle = definirColor(aceleracion,raton.y);
    ctx.fillStyle = 'rgba( 252, 191, 2, 0.4)';
    crearRectangulo(w / 40, h / 40);

    ctx.lineWidth = aceleracion;
    ctx.strokeStyle = definirColor(aceleracion,raton.x);
    ctx.fillStyle = 'rgba( 252, 191, 2, 0.6)';
    crearRectangulo(w / 30, h / 30);

    ctx.lineWidth = aceleracion;
    ctx.strokeStyle = definirColor(aceleracion,raton.y);
    ctx.fillStyle = 'rgba( 252, 191, 2, 0.8)';
    crearRectangulo(w / 20, h / 20);

    ctx.lineWidth = aceleracion;
    ctx.strokeStyle = definirColor(aceleracion,raton.y);
    ctx.fillStyle = 'rgba( 252, 191, 2, 1.0)';
    crearRectangulo(w / 2, h / 2);

    raton.anteriorX = raton.x;
    raton.anteriorY = raton.y;
    aceleracion = 1;
  
    requestAnimationFrame(animacion);
}
  window.onresize = actualizar;
  
  animacion();
  actualizar();