import './scss/estilos.scss';

const c = document.getElementById('canvas');
const ctx = c.getContext('2d');

c.width = window.innerWidth;
c.height = window.innerHeight;
let ciudad = '';

function actualizar() {
  const urlA = 'http://api.openweathermap.org/data/2.5/weather?q=';
  const urlB = '&units=metric&APPID=b1c43b2e69342ccea61cc5aea15c82c8';

  ciudad = pedirCiudad();
  const url = `${urlA}${ciudad}${urlB}`;

  fetch(url)
    .then((response) => response.json())
    //.then(data => console.log(data))
    .then((data) => (ctx.fillStyle = definirColor(data.main.feels_like, data.main.humidity, data.clouds.all)))
    .then((data) => ctx.fillRect(0, 0, c.width, c.height));
  //.then(data => ctx.fillText(data, c.width/2, c.height/2));
}
/*
let temp = function () {
  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data));
  return data;
};

console.log(temp);
*/
function definirColor(x, y, z) {
  const r = Math.floor((Math.abs(x) * 255) / 45);
  const g = Math.floor((y * 255) / 100);
  const b = Math.floor((z * 255) / 100);
  const alpha = 1;
  //console.log("r: "+r+", g: "+g+", b: "+b);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function pedirCiudad() {
  ciudad = prompt('ingrese ciudad y código del país para ver el color del clima. Ej.: bogota,co: ');
  ctx.font = 'italic 100pt Calibri';
  let x = Math.floor(Math.random() * c.width + 1);
  let y = Math.floor(Math.random() * c.height + 1);
  //ctx.fillText(ciudad, x, y);
  //console.log(ciudad);
  return ciudad;
}

ctx.font = 'italic 140pt Calibri';
ctx.fillText('click', c.width / 3, c.height / 2);
c.onmousedown = actualizar;
