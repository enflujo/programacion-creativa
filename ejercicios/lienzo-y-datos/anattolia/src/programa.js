import './scss/estilos.scss';

// Canvas
const c = document.getElementById('lienzo');
const ctx = c.getContext('2d');
const raton = { x: 0, y: 0, anteriorX: 0, anteriorY: 0 };
let aceleracion = 0;

c.width = window.innerWidth;
c.height = window.innerHeight;

function actualizar() {
  c.width = window.innerWidth;
  c.height = window.innerHeight;
  ctx.fillStyle = '#0000FF';
  ctx.fillRect(0, 0, c.width, c.height);
}

function dibujarCirculo(i, v) {
  aceleracion = calcularDistancia(raton.x, raton.y, raton.anteriorX, raton.anteriorY);
  ctx.beginPath();
  ctx.strokeStyle = 'rgba(255,153,153,0)';
  ctx.arc(i, v, aceleracion/4, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();
}

function calcularDistancia(x1, y1, x2, y2) {
  const distanciaX = x2 - x1;
  const distanciaY = y2 - y1;
  return Math.sqrt(distanciaX * distanciaX + distanciaY * distanciaY);
}

c.onmousemove = (evento) => {
  raton.x = evento.clientX;
  raton.y = evento.clientY;
};

function definirColor(x,y){
  const r = Math.floor((y/c.height)*255);
  const g = Math.floor((y/c.width)*255);
  const b = Math.floor((x/c.width)*255);
  const alpha = 0.5;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function animacion(){
  let trazo1x = raton.x;
  let trazo1y = raton.y;
  let trazo2x = c.width-raton.x;
  let trazo2y = c.height-raton.y;
  aceleracion = calcularDistancia(raton.x, raton.y, raton.anteriorX, raton.anteriorY);

  ctx.fillStyle = 'rgba(250, 89, 50, 0.5)';
  dibujarCirculo(trazo1x, trazo1y);
  ctx.fillStyle = 'rgba(243, 89, 55, 0.5)';
  dibujarCirculo(trazo1x + 5, trazo1y + 5);

  ctx.fillStyle = 'rgba(16, 67, 200, 0.5)';
  dibujarCirculo(trazo2x, trazo2y);
  ctx.fillStyle = 'rgba(10, 165, 185, 0.4)';
  dibujarCirculo(trazo2x + 5, trazo2y + 5);
  
  raton.anteriorX = raton.x;
  raton.anteriorY = raton.y;

  ctx.lineTo(raton.x - aceleracion, raton.anteriorY+ Math.random(0,50));
  ctx.strokeStyle = definirColor(aceleracion,raton.x);//'rgba(255,153,153,0.5)';
  ctx.lineWidth = 1;
  ctx.stroke();
  
  // Vuelve a iniciar el loop
  requestAnimationFrame(animacion);
}

c.onmousedown = actualizar;
window.onresize = actualizar;

actualizar();
animacion();

