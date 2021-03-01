import './scss/estilos.scss';
// import pg2 from './pg2';

window.addEventListener('load', () => {
  

const name = document.querySelector('.name');
const desc = document.querySelector('.desc');
const temperatura = document.querySelector('.temperatura');
  const icono = document.querySelector('.icono');
  const mainWeather = document.querySelector('.mainWeather');
// const inicio = document.getElementById('inicio');
// const intro = document.getElementById('pg1');
// const pg2Div = document.getElementById('pg2');

// inicio.addEventListener('click', () => {
//   intro.classList.add('hidden');
//   pg2Div.classList.remove('hidden');

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      let long; 
      let lat;
      long = position.coords.longitude;
      lat = position.coords.latitude;
      let key = '44f3307752745b5ea4641ada8dc2e312';
      fetch('https://api.openweathermap.org/data/2.5/weather?' + 'lat=' + `${lat}` + '&lon=' + `${long}` + '&appid=' + key)
      .then(response => response.json())
        .then(data => {
          const { temp, feels_like, humidity, pressure, temp_max, temp_min } = data.main;
          const { description, icon, id, main} = data.weather[0];
          let nameValue = data['name'];
          let valorTemperatura = temp;
          let descValue = description;
          let weatherMain = main;
          let iconSrc = "http://openweathermap.org/img/w/" + `${icon}` + ".png";
          let celcius = Math.round(parseFloat(valorTemperatura) - 273.15);
          let img = new Image();
  
          name.innerHTML = nameValue;
          temperatura.innerHTML = celcius + '&deg;C';
          desc.innerHTML = descValue;
          icono.innerHTML = '<img src=' + iconSrc + '>';
          mainWeather.innerHTML = weatherMain;
          
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
          // canvas.width = img.width*10;
          // canvas.height = img.height * 10;
          img.src = iconSrc;
          img.onload = function () {
            fill_canvas(img);  
            animate();
        }
          
        function animate() {
          img.src;
          setInterval(fill_canvas(img), 100);
          requestAnimationFrame(animate);
         }

        function fill_canvas(img) {
          let canvas = document.getElementById('canvasIcon');
          let canvas2 = document.getElementById('canvasIcon2');
          let canvas3 = document.getElementById('canvasIcon3');
          let canvas4 = document.getElementById('canvasIcon4');
          let canvas5 = document.getElementById('canvasIcon5');
          let ctx = canvas.getContext('2d');
          let ctx2 = canvas2.getContext('2d');
          let ctx3 = canvas3.getContext('2d');
          let ctx4 = canvas4.getContext('2d');
          let ctx5 = canvas5.getContext('2d');
          ctx.fillStyle = 'rgba(0,0,0,0.4)';
               ctx.strokeStyle = 'rgba(0,153,255,0.4)';
               ctx.save();
               ctx.translate(150,150); 
               
               let time = new Date(); 
               ctx.rotate( (((celcius/5)*Math.PI)/6)*time.getSeconds() + ( ((celcius/5)*Math.PI)/6000)*time.getMilliseconds() );
               ctx.translate(10,78.5);
               ctx.drawImage(img,-3.5,-3.5);
          ctx.restore();
          
          
              
               ctx2.drawImage(img,-3.5,-3.5);
            
          ctx3.fillStyle = 'rgba(0,0,0,0.4)';
               ctx3.strokeStyle = 'rgba(0,153,255,0.4)';
               ctx3.save();
               ctx3.translate(150,150); 
               
               let time3 = new Date(); 
               ctx3.rotate( ((2*Math.PI)/6)*time3.getSeconds() + ( (2*Math.PI)/6000)*time3.getMilliseconds() );
               ctx3.translate(0,28.5);
               ctx3.drawImage(img,-3.5,-3.5);
          ctx3.restore();
          ctx4.fillStyle = 'rgba(0,0,0,0.4)';
               ctx4.strokeStyle = 'rgba(0,153,255,0.4)';
               ctx4.save();
               ctx4.translate(150,150); 
               
               let time4 = new Date(); 
               ctx4.rotate( ((2*Math.PI)/6)*time4.getSeconds() + ( (2*Math.PI)/6000)*time4.getMilliseconds() );
               ctx4.translate(0,28.5);
               ctx4.drawImage(img,-3.5,-3.5);
          ctx4.restore();
          ctx5.fillStyle = 'rgba(0,0,0,0.4)';
               ctx5.strokeStyle = 'rgba(0,153,255,0.4)';
               ctx5.save();
               ctx5.translate(150,150); 
               
               let time5 = new Date(); 
               ctx5.rotate( ((2*Math.PI)/6)*time5.getSeconds() + ( (2*Math.PI)/6000)*time5.getMilliseconds() );
               ctx5.translate(0,28.5);
               ctx5.drawImage(img,-3.5,-3.5);
          ctx5.restore();
          
        }
        console.log(data);
    })
  
    .catch(err => console.log(err))
    })
  }
});



// button.addEventListener('click', function () {
//   let key = '44f3307752745b5ea4641ada8dc2e312';
//   fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputValue.value + '&appid=' + key)
//   .then(response => response.json())
//   .then(data => {
//       let nameValue = data['name'];
//       let tempValue = data['main']['temp'];
//       let celcius = Math.round(parseFloat(tempValue)-273.15);
//       let descValue = data['weather'][0]['description'];
//       let otrosValue = data['main']['feels_like'];

//       name.innerHTML = nameValue;
//       temp.innerHTML = celcius + '&deg;C';
//       desc.innerHTML = descValue;
//       otros.innerHTML = otrosValue;

//       console.log(data);
//   })

//   .catch(err => alert("El nombre de la ciudad es inexistente!"))
// })