import './scss/estilos.scss';


const button = document.querySelector('.button');
const inputValue = document.querySelector('.inputValue');
const name = document.querySelector('.name');
const desc = document.querySelector('.desc');
const temp = document.querySelector('.temp');
const otros = document.querySelector('.otros');

button.addEventListener('click', function () {
  var key = '44f3307752745b5ea4641ada8dc2e312';
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputValue.value + '&appid=' + key)
  .then(response => response.json())
    .then(data => {
      drawWeather(data);
      let nameValue = data['name'];
      let tempValue = data['main']['temp'];
      let celcius = Math.round(parseFloat(tempValue)-273.15);
      let descValue = data['weather'][0]['description'];
      let otrosValue = data['main']['feels_like'];

      name.innerHTML = nameValue;
      temp.innerHTML = celcius;
      desc.innerHTML = descValue;
      otros.innerHTML = otrosValue;

      console.log(data);
  })

  .catch(err => alert("El nombre de la ciudad es inexistente!"))
})

// function weatherBalloon( cityID ) {
//     var key = '44f3307752745b5ea4641ada8dc2e312';
//     fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&appid=' + key)  
//     .then(function(resp) { return resp.json() }) 
//     .then(function(data) {
// 		drawWeather(data); 
// 	})
//     .catch(function() {
//       // catch any errors
//     });
//   }

//   function drawWeather( d ) {
// 	var celcius = Math.round(parseFloat(d.main.temp)-273.15);
// 	var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32); 
	
// 	document.getElementById('description').innerHTML = d.weather[0].description;
// 	document.getElementById('temp').innerHTML = celcius + '&deg;';
//       document.getElementById('location').innerHTML = d.name;
      
//       if( description.indexOf('rain') > 0 ) {
//         document.body.className = 'rainy';
//     } else if( description.indexOf('cloud') > 0 ) {
//         document.body.className = 'cloudy';
//     } else if( description.indexOf('sunny') > 0 ) {
//         document.body.className = 'sunny';
//     }
// }
  
//   window.onload = function() {
//     weatherBalloon( 6167865 );
//   }