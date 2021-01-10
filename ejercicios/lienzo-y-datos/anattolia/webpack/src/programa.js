import './scss/estilos.scss';

console.log('Webpack');

// Canvas
const c = document.getElementById('lienzo');
const ctx = c.getContext('2d');

c.width = window.innerWidth;
c.height = window.innerHeight;

function actualizar() {
  c.width = window.innerWidth;
  c.height = window.innerHeight;
  ctx.fillStyle = '#011004';
  ctx.fillRect(0, 0, c.width, c.height);
}

function extraerCoordenadas(evento) {
    let x = evento.clientX;
    let y = evento.clientY;
    let coor = 'Coordenadas: (' + x + ', ' + y + ')';
    console.log(coor);
  }
  
  function dibujarCirculo(i, v) {
    ctx.beginPath();
    ctx.arc(i, v, 11, 0, 2 * Math.PI);
    
    ctx.fill();
  }
  

c.onmousemove = (evento) => {
  // extraer del evento las coordenadas y pintar algo en el canvas.
  extraerCoordenadas(evento);
  ctx.fillStyle = 'rgba(230, 89, 50, 0.5)';
  dibujarCirculo(evento.clientX, evento.clientY);
  ctx.fillStyle = 'rgba(230, 89, 255, 0.5)';
  dibujarCirculo(evento.clientX+5, evento.clientY+5);
};

c.onmousedown = () => {
    actualizar();
};

window.onresize = actualizar;
actualizar();