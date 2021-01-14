import './scss/estilos.scss';

const DOS_PI = Math.PI * 2;
const lienzo = document.getElementById('lienzo');
const ctx = lienzo.getContext('2d', { alpha: false });
const dimensiones = {};
const centro = { x: 0, y: 0 };
const areaMov = { x: 0, y: 0 };
const ruido = 500;
const raton = { x: 0, y: 0, anteriorX: 0, anteriorY: 0 };
let distancia = 0;
let aceleracion = 0;
let ojo = 0;
let distanciaOjos = 0;

function mapear(valor, x1, y1, x2, y2) {
  return ((valor - x1) * (y2 - x2)) / (y1 - x1) + x2;
}

function calcularDistancia(x1, y1, x2, y2) {
  const distanciaX = x2 - x1;
  const distanciaY = y2 - y1;
  return Math.sqrt(distanciaX * distanciaX + distanciaY * distanciaY);
}

function actualizar() {
  lienzo.width = dimensiones.ancho = window.innerWidth;
  lienzo.height = dimensiones.alto = window.innerHeight;
  centro.x = dimensiones.ancho / 2;
  centro.y = dimensiones.alto / 2;
  ojo = dimensiones.alto / 50;
  distanciaOjos = ojo * 3;

  ctx.fillStyle = 'rgba(24, 24, 24)';
}

lienzo.onmousemove = (evento) => {
  raton.x = evento.clientX;
  raton.y = evento.clientY;
  areaMov.x = mapear(evento.clientX, 0, dimensiones.ancho, -100, 100);
  areaMov.y = mapear(evento.clientY, 0, dimensiones.alto, -75, 75);
  distancia = calcularDistancia(centro.x - areaMov.x, centro.y + areaMov.y, raton.x, raton.y);
  aceleracion = calcularDistancia(raton.x, raton.y, raton.anteriorX, raton.anteriorY);

  if (aceleracion === 0) {
    aceleracion = 1;
  } else if (aceleracion > 30) {
    aceleracion = 30;
  }

  ctx.strokeStyle = `rgba(${225 + aceleracion}, ${130 - aceleracion}, ${180 - aceleracion}, 0.6)`;
};

function animacion() {
  // Borrar todo pintando el color de fondo sobre el canvas.
  ctx.fillRect(0, 0, dimensiones.ancho, dimensiones.alto);

  // No voy a hacer nuevos paths dentro del loop porque consume muchos recursos, asi que hago 1 path y al final del loop lo pinto.
  ctx.beginPath();

  for (let i = 0; i < ruido; i++) {
    const angulo = i * Math.random();
    const radio = (i / ruido) * distancia;
    const x = radio * Math.cos(angulo) + centro.x - areaMov.x;
    const y = (radio * Math.sin(angulo) + centro.y - areaMov.y) | 0;
    const izquierdaX = (x - ojo - distanciaOjos) | 0;
    const derechaX = (x + ojo + distanciaOjos) | 0;

    if (Math.random() > 0.98) {
      ctx.lineWidth = aceleracion;
      ctx.moveTo(izquierdaX, y);
      ctx.lineTo(raton.x - distancia, raton.y);

      ctx.moveTo(derechaX, y);
      ctx.lineTo(raton.x + distancia, raton.y);
    }

    ctx.moveTo(izquierdaX, y);
    ctx.arc(izquierdaX, y, aceleracion, 0, DOS_PI);
    ctx.moveTo(derechaX, y);
    ctx.arc(derechaX, y, aceleracion, 0, DOS_PI);
  }

  // Solo hago 1 stroke por ciclo de animación (por eso definí el beginPath antes del for loop) y así ahorro recursos y se ve fluido.
  // Si quieren modificar este código, intenten hacer beginPath() y stoke() dentro del loop para ver como se vuelve lento.
  ctx.stroke();

  // reinicio valores para que pueda calcular aceleración y en estado de reposo se vean pequeños los puntos y lineas.
  raton.anteriorX = raton.x;
  raton.anteriorY = raton.y;
  aceleracion = 1;

  // Vuelve a iniciar el loop
  requestAnimationFrame(animacion);
}

window.onresize = actualizar;

actualizar();
animacion();
