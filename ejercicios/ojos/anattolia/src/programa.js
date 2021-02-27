import './scss/estilos.scss';
import Ojos from './componentes/Ojos';

const contenedor = document.getElementById('main');
const lienzo = document.getElementById('lienzo');
const ctx = lienzo.getContext('2d');
const ojos = new Ojos(ctx);
const dimensiones = contenedor.getBoundingClientRect();
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

function mapearColor(valor) {
  let v;
  v = Math.sqrt(Math.pow(valor - (dimensiones.top / (dimensiones.bottom - dimensiones.top)) * 100, 2));
  v = (v * 100) / 255;
  return v;
}

contenedor.onmousemove = (e) => {
  const _x = e.clientX - x;
  const _y = e.clientY - y;
  xMouse = e.clientX;
  yMouse = e.clientY;

  ctx.clearRect(0, 0, ancho, alto);
  let r = mapearColor((xMouse - dimensiones.right / 2) * 2);
  let g = mapearColor(xMouse - dimensiones.right);

  for (let i = 0; i < cantidadOjos + 1; i++) {
    if (
      xMouse - ojos.radio * 2 > dimensiones.left &&
      xMouse + ojos.radio * 2 + ojos.radio / 2 < dimensiones.right &&
      yMouse - ojos.radio * 2 - 10 > dimensiones.top &&
      yMouse - ojos.radio * 2 - ojos.radio / 2 < dimensiones.bottom
    ) {
      let color = 'rgba(' + r + ',' + g + ',' + '55)';
      ojos.pintar(_x - i * 20, _y + Math.pow(i, 4), color);
      //console.log(ojos.radio);
    } else if (xMouse - ojos.radio * 2 < dimensiones.left) {
      ctx.fillStyle = 'rgba(' + r + ',' + g + ',' + '55)';
      ctx.textAlign = 'center';
      ctx.font = '1500% Helvetica';
      ctx.fillText(':(', ancho / 2, alto / 1.5);
      //console.log('ojo');
    } else if (xMouse + ojos.radio * 2 + ojos.radio / 2 > dimensiones.right) {
      ctx.fillStyle = 'rgba(' + r + ',' + g + ',' + '55)';
      ctx.textAlign = 'center';
      ctx.font = '1500% Helvetica';
      ctx.fillText(':x', ancho / 2, alto / 1.5);
    } else if (yMouse + ojos.radio * 2 + ojos.radio / 2 > dimensiones.bottom) {
      ctx.fillStyle = 'rgba(' + r + ',' + g + ',' + '55)';
      ctx.textAlign = 'center';
      ctx.font = '1500% Helvetica';
      ctx.fillText(':x', ancho / 2, alto / 1.5);
    }
    /** no entiendo por qué a veces si el mouse sale del cuadro por el borde 
     inferior, luego no se vuelven a pintar los ojos **/
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
actualizarDimensiones();
