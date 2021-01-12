/*En JS deben:
Buscar en el DOM el canvas por su ID.
Crear 2 eventos: onresize y onmousemove. En onresize deben ajustar el canvas al tamaño de la pantalla 
y definir las propiedades del contexto. En onmousemove deben extraer las coordenadas del mouse y pintar 
en el canvas algo dentro de esas coordenadas.

Paso a paso:
- Encontrar la posicion x e y del mapa
- Usar la posición x e y para marcar (de otra forma) la posición del mouse
- ¿Cambiar el color?
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

// Juan Camilo González on Jan 11, 2021 at 12:17 PM
// @jeanniffer: Ahora entramos en optimización de a poco, esta definición siempre
// es la misma, es decir, cada que entramos al evento se define exactamente de la
// misma forma, entonces puede estar por fuera del evento y sólo definirse cuando
// es necesario. El punto sería luego de definir el `width` y el `height` de
// `miLienzo` ya que cuando cambiamos el tamaño del lienzo se reinicia el contexto
// del canvas. (Acabo de responder la pregunta que te hice en otro comentario, pero
// intenta entender este concepto).
// 
// Juan Camilo González on Jan 11, 2021 at 12:23 PM
// Adicionalmente, por rigor con el estilo, siempre usa el mismo estilo de comillas
// en JS. Acá los veo `" "` y en otros lados `' '`.
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, 2 * Math.PI, false);
  ctx.fillStyle = '#96fffc';
  ctx.fill();

  /* Rectangulo
  ctx.beginPath();
  ctx.rect(x-25, y-25, 50, 50);
  ctx.stroke();
*/
};

function actualizar() {
  miLienzo.width = window.innerWidth;
  miLienzo.height = window.innerHeight;
}

window.onresize = actualizar;
onclick = actualizar;

actualizar();
