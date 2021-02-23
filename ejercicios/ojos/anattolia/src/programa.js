import './scss/estilos.scss';
import Ojos from './componentes/Ojos';

const contenedor = document.getElementById('main');
const lienzo = document.getElementById('lienzo');
const ctx = lienzo.getContext('2d');
const ojos = new Ojos(ctx);
const boundingRect = contenedor.getBoundingClientRect();
let cantidadOjos = 0;
let ancho = 0;
let alto = 0;
let x = 0;
let y = 0;
let xMouse;
let yMouse;

export function random(min, max) {
  return Math.random() * (max - min) + min;
}

actualizarDimensiones();

function mapearColor(valor) {
  let v;
  v = Math.sqrt(Math.pow(valor - (boundingRect.top / (boundingRect.bottom - boundingRect.top)) * 100, 2));
  v = (v * 100) / 255;
  return v;
}

contenedor.onmousemove = (e) => {
  const _x = e.clientX - x;
  const _y = e.clientY - y;
  xMouse = e.clientX;
  yMouse = e.clientY;

  ctx.clearRect(0, 0, ancho, alto);
  let r = mapearColor((xMouse - boundingRect.right / 2) * 2);
  let g = mapearColor(xMouse - boundingRect.right);

  for (let i = 0; i < cantidadOjos + 1; i++) {
    let color = 'rgba(' + r + ',' + g + ',' + '55)';
    ojos.pintar(_x - i * 20, _y + Math.pow(i, 4), color);
  }
};

contenedor.onmousedown = (e) => {
  cantidadOjos += 1;
};

function actualizarDimensiones() {
  const dimensiones = contenedor.getBoundingClientRect();
  x = dimensiones.x | 0;
  y = dimensiones.y | 0;
  lienzo.width = ancho = dimensiones.width | 0;
  lienzo.height = alto = dimensiones.height | 0;
}

window.onresize = actualizarDimensiones;
