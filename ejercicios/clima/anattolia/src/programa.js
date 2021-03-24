import './scss/estilos.scss';
import lluvia from './assets/manuelh_lluvia.jpeg';
import dispersas from './assets/lm_scattered.jpeg';
import over from './assets/daniel_rodr_over.jpeg';
import despejado from './assets/mh_clear.jpeg';
import neblina from './assets/olgaluciahurtado_mist.jpeg';
import niebla from './assets/fog_miguel_angel_rojas.jpeg';
import rotas from './assets/lm_broken.jpeg';
import pocas from './assets/lm_few.jpeg';

const lienzo = document.getElementById('lienzo');
const ctx = lienzo.getContext('2d');
//API Key de Open Weather
const apiKey = 'b1c43b2e69342ccea61cc5aea15c82c8';
const img = new Image();

let datosImagen;
let pixeles = [];
let clima;
let lat;
let lon;
let creditos = document.getElementById('creditos');

function actualizar() {
  lienzo.width = window.innerWidth;
  lienzo.height = window.innerHeight;
  ctx.fillStyle = 'rgba(255, 255, 255)';
  dibujar();
}

function imprimirImg() {
  ctx.drawImage(img, 0, 0, lienzo.width, lienzo.height);
}

function imprimirCoor(r, g, b) {
  ctx.fillStyle = `rgba(${r}, ${g}, ${b}, 0.9)`;
  ctx.font = `${lienzo.width / 75}px Monospace`;
  ctx.fillText(lat + ', ' + lon, lienzo.width / 30, lienzo.height / 15);
}

//Los valores de tamaños son inversamente proporcionales porque dividen el tamaño de pantalla
//La posX no cambia pero la dejo para mantener la estructura
function imprimirTxt(posX, posY, tFuente, r, g, b, p1 = '', p2 = '', p3 = '') {
  const posH = lienzo.width / posX;
  const posV = lienzo.height / posY;
  ctx.font = `${lienzo.width / tFuente}px Monospace`;
  ctx.fillStyle = `rgba(${r}, ${g}, ${b}, 0.8)`;
  ctx.fillText(p1, posH, posV);
  ctx.fillText(p2, posH, posV + ctx.font[0] * 7);
  ctx.fillText(p3, posH, posV + ctx.font[0] * 14);
}

function clear() {
  img.src = despejado;
  imprimirImg();
  var pa1 = 'Transparentes los aires,';
  var pa2 = 'transparentes.';
  imprimirTxt(30, 1.5, 18, 20, 20, 20, pa1, pa2);
  imprimirCoor(0, 0, 0);
  creditos.innerHTML = '"Aeropuerto El Dorado y sus alrededores", Manuel H';
  document.body.style.backgroundColor = 'rgba(10, 10, 10)';
}

function broken_clouds() {
  img.src = rotas;
  imprimirImg();
  var pa1 = 'El temporal fue unánime';
  var pa2 = 'y aborrecible a las miradas fue el mundo';
  imprimirTxt(30, 1.5, 29, 250, 250, 250, pa1, pa2);
  imprimirCoor(50, 50, 50);
  creditos.innerHTML = '"Bomberos apagando un incendio", Leo Matiz';
  document.body.style.backgroundColor = 'rgba(10, 10, 10)';
}

function scattered_clouds() {
  img.src = dispersas;
  imprimirImg();
  var pa1 = 'La numerosa nube que se deshace en el poniente';
  var pa2 = 'es nuestra imagen.';
  imprimirTxt(30, 2, 30, 250, 250, 250, pa1, pa2);
  imprimirCoor(70, 70, 70);
  creditos.innerHTML = 'Foto: Leo Matiz';
  document.body.style.backgroundColor = 'rgba(10, 10, 10)';
}

function overcast_clouds() {
  img.src = over;
  imprimirImg();
  var pa1 = 'No habrá una sola cosa que no sea una nube.';
  imprimirTxt(30, 1.6, 30, 25, 25, 25, pa1);
  imprimirCoor(70, 70, 70);
  creditos.innerHTML = '"La primera chispa del bogotazo 1948 II", Daniel Rodríguez';
  document.body.style.backgroundColor = 'rgba(10, 10, 10)';
}

function few_clouds() {
  img.src = pocas;
  imprimirImg();
  var pa1 = 'Hay soledad en el hogar sin bulla.';
  imprimirTxt(30, 1.6, 30, 250, 250, 250, pa1);
  imprimirCoor(20, 20, 20);
  creditos.innerHTML = 'Foto: Leo Matiz';
  document.body.style.backgroundColor = 'rgba(50, 40, 40)';
}

function rain() {
  img.src = lluvia;
  imprimirImg();
  var pa1 = 'Quiero volver a tierras niñas;';
  var pa2 = 'llévenme a un blando país de aguas.';
  imprimirTxt(30, 2.3, 25, 25, 25, 25, pa1, pa2);
  imprimirCoor(210, 210, 210);
  creditos.innerHTML = '"Carro de Bomberos en la Av. Jiménez por las Lluvias", Leo Matiz';
  document.body.style.backgroundColor = 'rgba(220, 223, 228)';
}

function mist() {
  img.src = neblina;
  imprimirImg();
  var pa1 = 'Esta penumbra es lenta y no duele;';
  var pa2 = 'fluye por un manso declive y se parece a la eternidad.';
  imprimirTxt(30, 2.3, 35, 25, 25, 25, pa1, pa2);
  imprimirCoor(100, 100, 120);
  creditos.innerHTML = '"Evanescente 5", Olga Lucía Hurtado';
  document.body.style.backgroundColor = 'rgba(10, 13, 18)';
}

function fog() {
  img.src = niebla;
  imprimirImg();
  var pa1 = 'Verano, ya me voy. Y me dan pena';
  var pa2 = 'las manitas sumisas de tus tardes.';
  imprimirTxt(30, 1.7, 28, 255, 255, 255, pa1, pa2);
  imprimirCoor(255, 250, 250);
  creditos.innerHTML = '"Fanny (Serie Faenza)",  Miguel Angel Rojas';
  document.body.style.backgroundColor = 'rgba(230, 230, 230)';
}

function dibujar() {
  //Obtener las coordenadas del usuario
  navigator.geolocation.getCurrentPosition((position) => {
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    //con las coordenadas, obtener el clima
    obtenerClima(lat, lon);
  });

  async function obtenerClima(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    const respuesta = await fetch(url);
    const datos = await respuesta.json();

    clima = datos.weather[0].description;
    //console.log(clima);
    if (clima.includes('clear')) {
      clear();
    } else if (clima.includes('broken clouds')) {
      broken_clouds();
    } else if (clima.includes('scattered clouds')) {
      scattered_clouds();
    } else if (clima.includes('overcast clouds')) {
      overcast_clouds();
    } else if (clima.includes('few clouds')) {
      few_clouds();
    } else if (clima.includes('rain')) {
      rain();
    } else if (clima.includes('mist')) {
      mist();
    } else if (clima.includes('fog')) {
      fog();
    } else {
      ctx.fillText(clima, 100, 200);
    }
    datosImagen = ctx.getImageData(0, 0, window.innerWidth, window.innerHeight);
    // Sacar los pixeles que es un Array y cada color tiene 4 valores [r, g, b, a, r, g, b, a, ....];
    pixeles = datosImagen.data;
  }
}

//Cambiar los colores de la imagen al hacer click
function click() {
  let img = 1;
  lienzo.onclick = () => {
    if (pixeles.length) {
      if (img === 1) {
        for (let i = 0; i < pixeles.length; i += 4) {
          pixeles[i] = pixeles[i];
          pixeles[i + 1] = pixeles[200];
          pixeles[i + 2] = pixeles[i + 3];
          document.body.style.backgroundColor = 'rgba(0, 0, 0)';
        }
        img = 0;
      } else if (img === 0) {
        dibujar();
        img = 1;
      }
    }
    //Poner de nuevo los datos en pantalla
    ctx.putImageData(datosImagen, 0, 0);
  };
}

window.onresize = actualizar;
dibujar();
click();
actualizar();
