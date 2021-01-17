import './scss/estilos.scss';

const miLienzo = document.getElementById('miLienzo');
const ctx = miLienzo.getContext('2d');

const DOS_PI = Math.PI * 2;
const raton = { x: 0, y: 0, anteriorX: 0, anteriorY: 0 };
const colorFondo = coloresAleatorios(28, 11, 1.0, 16);
const color = coloresAleatorios(100, 85, 1.0, 8);
let cambio = 0;

function actualizar() {
  miLienzo.width = window.innerWidth;
  miLienzo.height = window.innerHeight;
  ctx.translate(miLienzo.width / 2, miLienzo.height / 2);
  ctx.fillStyle = colorFondo[aleatorio(0, 16)];
  ctx.strokeStyle = color[aleatorio(0, 8)];
  cambio = Math.random() < 0.5 ? 45 : 50;
}

miLienzo.onmousemove = (evento) => {
  raton.x = evento.clientX - miLienzo.width / 2;
  raton.y = evento.clientY - miLienzo.height / 2;
};

function animacion() {
  ctx.fillRect(-miLienzo.width / 2, -miLienzo.height / 2, miLienzo.width, miLienzo.height);

  ctx.beginPath();
  for (let i = 0; i < miLienzo.width; i += 40) {
    const tamano = cambio * 2 + i;
    const sorpresa = tamano + raton.x;
    if (raton.x < 0) {
      ctx.arc(i, raton.y, i, 0, DOS_PI);
      ctx.moveTo(-raton.x + tamano, -raton.y);
      ctx.lineTo(raton.x, raton.y);
      ctx.rotate((cambio * DOS_PI) / 180);
      ctx.lineWidth = 1;
    } else {
      ctx.moveTo(raton.x, raton.y);
      ctx.lineTo(raton.x * 2, raton.y * 2);
      ctx.rect(raton.x - tamano / 2, raton.y - tamano / 2, sorpresa, sorpresa);
      ctx.rotate((cambio * DOS_PI) / 180);
      ctx.lineWidth = 2;
    }
  }

  ctx.stroke();

  requestAnimationFrame(animacion);
}

window.onresize = actualizar;
onclick = actualizar;
actualizar();
animacion();

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function coloresAleatorios(saturacion, luz, alpha, cantidad) {
  let colores = [];
  let matizDelta = Math.trunc(360 / cantidad);
  for (let i = 0; i < cantidad; i++) {
    let matiz = i * matizDelta;
    colores.push(`hsla(${matiz},${saturacion}%,${luz}%,${alpha})`);
  }
  return colores;
}
