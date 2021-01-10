import './scss/estilos.scss';


const canvas = document.getElementById("imgCanvas");
const ctx = canvas.getContext('2d');

function actualizar() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.strokeStyle = '#990000'
    ctx.lineWidth = 15;
}
  
canvas.onmousemove = (evento) => {
    let posx = evento.clientX;
    let posy = evento.clientY;
    ctx.lineTo(posx, posy);
    ctx.stroke();
};

window.onresize = actualizar;
  
actualizar();
