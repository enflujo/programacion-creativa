import './scss/estilos.scss';

const lienzo = document.getElementById('lienzo');
const ctx = lienzo.getContext('2d');

let rotacion = 0;

function actualizar() {
  lienzo.width = window.innerWidth;
  lienzo.height = window.innerHeight;
  ctx.translate(window.innerWidth / 2, window.innerHeight / 2);
}

function animacion() {
  requestAnimationFrame(function (timestamp) {
    ctx.fillStyle = '#FFFFFF';
    ctx.beginPath();
    ctx.rect(0 - 300, 0 - 300, 600, 600);
    ctx.fill();
    for (let i = 0; i < 500; i++) {
      const frecuencia = 0.000005;
      const circulo = 200 + 50 * Math.sin(timestamp * frecuencia * i);
      const color = mapear(circulo, 150, 250, 255, 60);
      const radio = mapear(circulo, 150, 250, 5, 2);
      ctx.fillStyle = `rgba(${color}, 0, 74)`;
      ctx.beginPath();
      ctx.arc(circulo * Math.cos(i), circulo * Math.sin(i), radio, 0, 2 * Math.PI);
      ctx.fill();
      rotacion = rotacion + 0.00005;
    }
  });
  requestAnimationFrame(animacion);
}

function mapear(valor, color1, color2, opacidad1, opacidad2) {
  return ((valor - color1) * (opacidad2 - opacidad1)) / (color2 - color1) + opacidad1;
}

window.onresize = actualizar;
actualizar();
animacion();
