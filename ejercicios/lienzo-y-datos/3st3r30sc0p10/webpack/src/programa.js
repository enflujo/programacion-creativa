import './scss/estilos.scss';

console.log('Webpack');

const canvas = document.getElementById("imgCanvas");
const ctx = canvas.getContext("2d");

function actualizar() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
  
canvas.onmousemove = (evento) => {
    let posx = evento.clientX;
    let posy = evento.clientY;
    console.log(posx, posy);
    ctx.lineTo(posx, posy);
    ctx.stroke();
    ctx.strokeStyle = '#990000'
    ctx.lineWidth = 15;
};

window.onresize = actualizar;
  
actualizar();
