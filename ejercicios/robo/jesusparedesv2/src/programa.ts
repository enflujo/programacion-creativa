import './scss/estilos.scss';

console.log('..:: EnFlujo ::..');

const lienzo = document.getElementById('lienzo') as HTMLCanvasElement;
const c = lienzo.getContext('2d') as CanvasRenderingContext2D;

lienzo.width = window.innerWidth;
lienzo.height = window.innerHeight;

// Definir la interfaz para el mouse
interface PosicionRaton {
  x: number;
  y: number;
}

const mouse: PosicionRaton = {
  x: window.innerWidth / 2,
  y: window.innerHeight / 2,
};

// Event Listeners
addEventListener('mousemove', (event: MouseEvent) => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});

//Para activar el efecto de distorsión de las particulas al dar click
let hayClic = false; //Variable booleana que cambia cuando damos click

addEventListener('mousedown', () => {
  hayClic = true;
});
//Este evento se utiliza para identificar cuando ya no hay click
addEventListener('mouseup', () => {
  hayClic = false;
});

//Variables y Listas para los colores Colores

const coloresOriginales: string[] = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66'];
const coloresB: string[] = ['#c11b8f', '#c673be', '#c494d6', '#beb2ef'];
let coloresActuales: string[] = coloresOriginales;

//Variables para llamar los botones que cambian las paletas de color de las particulas (estrellas)

const btnColoresOg = document.getElementById('paleta-A') as HTMLCanvasElement;
const btnColoresB = document.getElementById('paleta-B') as HTMLCanvasElement;

// Cambiar colores al presionar los botones

// FUNCION para actualizar los colores de las particulas---Se usa para que los colores de las partículas cambien sin necesidad de reinicializarlas con (init)
function actualizarColores() {
  particulas.forEach((particula) => {
    particula.color = coloresActuales[Math.floor(Math.random() * coloresActuales.length)];
  });
}
// Cambiar colores al presionar los botones, sin reiniciar las partículas
btnColoresOg.addEventListener('click', () => {
  coloresActuales = coloresOriginales;
  actualizarColores(); // Llama a la función que actualiza los colores de las partículas
});

btnColoresB.addEventListener('click', () => {
  coloresActuales = coloresB;
  actualizarColores(); //Llama a la función que actualiza los colores de las partículas
});

/*

//Esta logica funciona de forma diferente pero también es interesante

btnColoresOg.addEventListener('click', () => {
  coloresActuales = coloresOriginales;
  init(); // Regenera las partículas con la paleta de colores original
});

btnColoresB.addEventListener('click', () => {
  coloresActuales = coloresB; // Cambia a la nueva lista de colores
  init(); // Regenera las partículas con la nueva paleta de colores
});
*/

/*
btnColoresB.onclick = () => {

};
*/

//Para redimensionar nuestro lienzo (Canvas)
addEventListener('resize', () => {
  lienzo.width = innerWidth;
  lienzo.height = innerHeight;

  init();
});

// Definir la clase Partícula: Especifica cómo luce una partícula y en qué parte de la pantalla deben ir estas partículas,
//cuál es el radio de cada partícula (tienen radios diferentes)
class Particula {
  x: number;
  y: number;
  radio: number;
  color: string;

  constructor(x: number, y: number, radio: number, color: string) {
    this.x = x;
    this.y = y;
    this.radio = radio;
    this.color = color;
  }

  dibujar() {
    c.beginPath();
    c.arc(this.x, this.y, this.radio, 0, Math.PI * 2, false); //arc es otra palabra para definir un círculo
    c.shadowColor = this.color;
    c.shadowBlur = 15; //Efecto de desenfoque para la partícula
    c.fillStyle = this.color;
    c.fill();
    c.closePath();
  }

  actualizar() {
    this.dibujar();
  }
}

// Implementation - Crear las partículas y asegurarse de que lucen diferentes la una de la otra
let particulas: Particula[];
function init() {
  particulas = [];

  //En este loop el numero "1500" se refiere al número total de partículas que se crean.
  for (let i = 0; i < 1500; i++) {
    // Puedes agregar instancias de Particula aquí
    // Particulas.push(new Particula(...))
    // Para cada iteración de nuestro loop, vamos a crear un una nueva partícula

    //Creamos una variable para guardar el ancho del lienzo y le sumamos 300 para
    //asegurarnos de que las partículas se puedan ver bien en pantallas más anchas y con diferentes relaciones de aspecto.
    const anchoLienzo = lienzo.width + 1000;
    const altoLienzo = lienzo.height + 2000;

    const x = Math.random() * anchoLienzo - anchoLienzo / 2; //Para obtener un valor aleatorio entre 0 y el valor del ANCHO total de nuestro Lienzo (Canvas)
    //En cada iteración de este loop obtenemos un nuevo valor para la coordenada en "x" de la particula.
    //Se usan valores positivos y negativos ya que más adelante hacemos rotar nuestro lienzo para dar la ilusión de que nuestra galaxia está en movimiento.

    const y = Math.random() * altoLienzo - altoLienzo / 2; //Para obtener un valor aleatorio entre 0 y el valor del ALTO total de nuestro Lienzo (Canvas)
    //En cada iteración de este loop obtenemos un nuevo valor para la coordenada en "y" de la particula.

    const radio = 2 * Math.random(); //Asignamos un tamaño aleatorio para cada partícula para que hayan partículas más pequeñas, pero con una radio máximo de 2

    const color = coloresActuales[Math.floor(Math.random() * coloresActuales.length)]; //Aquí seleccionamos un color de forma aleatoria de la lista "coloresActuales[]"

    particulas.push(new Particula(x, y, radio, color));
  }

  //console.log(particulas);
}

let radianes = 0; //variable que se utiliza para rotar el Lienzo y dar la ilusión de movimiento.
let opacidad = 1; //Variable para asignar el valor opacidad del 'rgba()'. Esta variable cambia dependiendo del tiempo que se mantenga presionado el click.

// Animation Loop
function animate() {
  requestAnimationFrame(animate);

  //Pintamos el fondo de color negro para dar la ilusión de que estamos en el espacio para luego "pintar" sobre ese fondo.
  //El valor opacidad del 'rgba()' es muy importante para dar la ilusión de que cada partícula deja una estela de luz
  c.fillStyle = `rgba(10, 10, 10, ${opacidad})`;
  c.fillRect(0, 0, lienzo.width, lienzo.height);

  //A continuación, creamos la ilusión optica haciendo que nuestro Lienzo (Canvas) rote usando radianes.

  //Nos inserta en este modo que nos permite afectar la rotación de algo de forma independiente al resto del Lienzo (Canvas)
  c.save();
  //Debemos hacerlo rotar desde el centro, no desde las esquinas
  //Movemos el punto de anclaje desde la esquina izquierda superior hacia el centro para hacerlo rotar desde allí:
  c.translate(lienzo.width / 2, lienzo.height / 2);

  //Debemos asegurarnos de que el valor de la rotación este incrementando en el tiempo para que gire nuestro Lienzo
  c.rotate(radianes);

  //Debemos hacer que las partículas se rendericen después de que nuestro lienzo rote para que se cree la ilusión de movimiento.

  //Para cada Partícula en nuestro arreglo o lista "particulas" vamos a llamar su
  //función actualizar() que, a su vez, llama a la función dibujar() que dibuja o renderiza CADA partícula
  particulas.forEach((particula) => {
    particula.actualizar();
  });

  c.restore();

  radianes += 0.004; //actualizamos el valor de los radianes al final del loop de animación. Al modificar este valor modificacmos la velocidad de rotación del Lienzo (Canvas)

  //Al modificar el valor con el se compara opacidad (es decir, el número despues de ">=") cambia la longitud de la estela que dejan las partículas.
  if (hayClic && opacidad >= 0.03) {
    opacidad -= 0.025; //Si damos click se reduce el valor de opacidad/transparencia
  } else if (!hayClic && opacidad < 1) {
    opacidad += 0.015; //Aumentamos el valor de opacidad/transparencia al soltar el click.
  }
}

init();

animate();
