import './scss/estilos.scss';
// import pg2 from './pg2';

window.addEventListener('load', () => {
  

const name = document.querySelector('.name');
const desc = document.querySelector('.desc');
const temperatura = document.querySelector('.temperatura');
const icono = document.querySelector('.icono');
  const mainWeather = document.querySelector('.mainWeather');
  const valorHumedad = document.querySelector('.valorHumedad');
  const valorFeels_like = document.querySelector('.valorFeels_like')
  const valorPresion = document.querySelector('.valorPresion')
  const canvasIcon2 = document.querySelector('.canvasIcon2')

// class Nube {
//   constructor(temp, feels_like, humidity, pressure, temp_max, temp_min) {
//     this.temp = temp;
//     this.feels_like = feels_like;
//     this.humidity = humidity;
//     this.pressure = pressure;
//     this.temp_max = temp_max;
//     this.temp_min = temp_min;
//   }
//   pintar(temp) {
//     ctx3.fillStyle = 'rgb(3, 196, 252)';
//     ctx3.fill();
//   }
// }

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      let long; 
      let lat;
      long = position.coords.longitude;
      lat = position.coords.latitude;
      let key = '44f3307752745b5ea4641ada8dc2e312';
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}`)
      .then(response => response.json())
        .then(data => {
          const { temp, feels_like, humidity, pressure, temp_max, temp_min } = data.main;
          const { description, icon, id, main } = data.weather[0];
          let nameValue = data['name'];
          let valorTemperatura = temp;
          let descValue = description;
          let weatherMain = main;
          let iconSrc = `http://openweathermap.org/img/w/${icon}.png`;
          let celcius = Math.round(parseFloat(valorTemperatura) - 273.15);
          let img = new Image();
          let humedad = humidity;
          let Feels_Like = feels_like;
          let celcius_fells_like = Math.round(parseFloat(Feels_Like) - 273.15);
          let presion = pressure;
  
          name.innerHTML = nameValue;
          temperatura.innerHTML = celcius + '&deg;C';
          desc.innerHTML = descValue;
          icono.innerHTML = `<img src=${iconSrc}>`;
          mainWeather.innerHTML = weatherMain;
          valorHumedad.innerHTML = humedad;
          valorFeels_like.innerHTML = celcius_fells_like;
          valorPresion.innerHTML = presion;
          canvasIcon2.innerHTML = weatherMain;
          
          if (humidity >= 75) {
            valorHumedad.className = 'humedad_alta'
          }
          else if (humidity >= 50 && humidity < 75) {
            valorHumedad.className = 'humedad_media_alta'
          }
          else if (humidity >= 25 && humidity < 50) {
            valorHumedad.className = 'humedad_medio_baja'
          }
          else if (humidity >= 0 && humidity < 25) {
            valorHumedad.className = 'humedad_baja'
          }

          if (celcius_fells_like >=25) {
            valorFeels_like.className = 'fells_like_calor'
          }
          else if (celcius_fells_like >= 15 && celcius_fells_like < 25) {
            valorFeels_like.className = 'fells_like_bien'
          }
          else if (celcius_fells_like >= 1 && celcius_fells_like < 15) {
            valorFeels_like.className = 'fells_like_frio'
          }

          if (pressure >=1050) {
            valorPresion.className = 'pressure_alta'
          }
          else if (pressure >= 1000 && feels_like < 1050) {
            valorPresion.className = 'pressure_normal'
          }
          else if (pressure >= 800 && feels_like < 1000) {
            valorPresion.className = 'pressure_baja'
          }

          if (data.weather.length > 0) {
          const {main} = data.weather[0];
            if(main === 'Clouds') {
              document.body.className = 'clouds';
              canvasIcon2.className = 'cloudsImage';
          }
          else if (main === 'Clear') {
              document.body.className = 'clear';
              canvasIcon2.className = 'clearImage';
          }
          else if (main === 'Snow') {
              document.body.className = 'snow';
              canvasIcon2.className = 'snowImage';
          }
          else if (main === 'Drizzle') {
              document.body.className = 'drizzle';
              canvasIcon2.className = 'drizzleImage';
          }
          else if (main === 'Thunderstorm') {
              document.body.className = 'thunderstorm';
              canvasIcon2.className = 'thunderstormImage';
            }
          } 
          img.src = iconSrc;
          img.onload = function () {
            animate();
          }
          
          function animate() {
          img.src;
          fill_canvas(img);
          requestAnimationFrame(animate);
         }
        function fill_canvas(img) {
          let canvas = document.getElementById('canvasIcon');
          let ctx = canvas.getContext('2d');
          ctx.fillStyle = 'rgba(0,0,0,0.4)';
          ctx.strokeStyle = 'rgba(0,153,255,0.4)';
          ctx.save();
          ctx.translate(150,150); 
               
          let time = new Date(); 
          ctx.rotate( (((celcius/5)*Math.PI)/6)*time.getSeconds() + ( ((celcius/5)*Math.PI)/6000)*time.getMilliseconds() );
          ctx.translate(10,78.5);
          ctx.drawImage(img,-3.5,-3.5);
          ctx.restore();
          
            
          
        }
          console.log(data);
    })
  
        .catch(err => console.log(err))
      
    })
    
  }
});



