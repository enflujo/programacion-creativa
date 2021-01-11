/*En JS deben:
Buscar en el DOM el canvas por su ID.
Crear 2 eventos: onresize y onmousemove. En onresize deben ajustar el canvas al tamaño de la pantalla 
y definir las propiedades del contexto. En onmousemove deben extraer las coordenadas del mouse y pintar 
en el canvas algo dentro de esas coordenadas.

Paso a paso:
- Encontrar la posicion x e y del mapa
- Usar la posición x e y para marcar (de otra forma) la posición del mouse
- Hacer una condicional que haga que cambie el color / forma del 
*/

const miLienzo = document.getElementById('miLienzo');
const ctx = miLienzo.getContext('2d');
/*
const posicion = document.getElementById("circulo")
const ctxPos = posicion.getContext("2d")
*/
miLienzo.onmousemove = (evento) => {
  const x = evento.clientX;
  const y = evento.clientY;

  ctx.beginPath();
  ctx.arc(x, y, 10, 0, 2 * Math.PI, false);
  ctx.fillStyle = '#FF0000';
  ctx.fill();
  /* Rectangulo
  ctx.beginPath();
  ctx.rect(x-25, y-25, 50, 50);
  ctx.stroke();
*/
  console.log(x);
};

function actualizar() {
  miLienzo.width = window.innerWidth;
  miLienzo.height = window.innerHeight;
}

window.onresize = actualizar;
onclick = actualizar;

actualizar();
