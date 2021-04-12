# Analizar audio

Este ejercicio está basado en la API AudioContext, a partir de la cual es posible procesar gráficamente una fuente sonora. Según el sitio web de Mozilla: "The AudioContext interface represents an audio-processing graph built from audio modules linked together, each represented by an AudioNode. An audio context controls both the creation of the nodes it contains and the execution of the audio processing, or decoding."

El ejercicio propone explorar algunas de las formas en las que podemos visualizar una fuente de audio, a partir de una estructura que se repetirá en todo proyecto que utilice la API AudioContext. Esta estructura permite en este caso crear un visualizador de audio a partir de barras horizontales que crecen o disminuyen según los datos extraidos por la API.

## Objetivo

- Personalizar el visualizador de audio propuesto en el ejemplo.

## Ejemplo

```js

//Importamos la ruta de nuestra fuente de audio (adaptada para webpack)
import ruta from './assets/nombre_archivo.mp3';

//En el HTML hay un botón con id button1 y Id container
const button1 = document.getElementById('button1');
const container = document.getElementById('container');

// Creamos el canvas donde graficaremos los datos
const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
canvas.width = window.InnerWidth;
canvas.height = window.InnerHeight;

//Creamos unas variables vacías que emplearemos más adelante
let audioSource;
let analyser;

//Construimos una función con la que, al dar click sobre cualquier punto de la pantalla, reproduzca la fuente de audio, la analice y la grafique.
container.addEventListener('click', function(){
  audio.play();

  // Crea y devuelve un objeto AudioContext
  const audioContext = new AudioContext();

  // En la variable audio1 está contenido el audio como un objeto
  const audio1 = document.getElementById('audio1')
  audio1.src = ruta;

  //Definimos la fuente del audio con el método createMediaElementSource. Este método crea un nodo asociado con un elemento HTML. Esto permite reproducir y manipular audio desde los elementos <video> <audio>
  audioSource = audioContext.createMediaElementSource(audio1);

  // Con el método BaseAudioContext.createAnaliser() creamos un nodo de análisis (analiser node) que nos permitirá visualizar los datos, pero con el cual también sería posible exponer los datos de frecuencia y el tiempo de nuestra fuente de audio.
  analyser = audioContext.CrateAnalyser();

  //Conectamos la fuente del audio con el nodo de análisis
  audioSource.connect(analyser);

  // destination hace referencia aquí al dispositivo de salida de audio por defecto de nuestro equipo. En este caso son los parlantes.
  analyser.connect(audioContext.destination)

  //El nodo de análisis viene predeterminado con la propiedad fftSize, que representa el número de muestras de audio que queremos en el archivo de datos del analizador (32, 64, 128, 256, 512, 1024, ...). En este ejercicio vamos a crear una barra por cada conjunto de muestras de audio. Así, entre más alto sea este número, más barras de análisis serán dibujadas en el canvas. 
  analiser.fftSize = 64;

  // analiser.frecuencyBinCount es una propiedad de solo lectura de la interfaz del nodo de análisis. Contiene un número entero sin signo que es la mitad del valor de fttSize (en este caso 32, que será el número de barras animadas que dibujaremos)
  const bufferLength = analiser.frecuencyBinCount;

  // Con Uint8Array creamos un tipo especial de arreglo que sólo contiene elementos enteros de 8 bits no asignados. Lo que hacemos aquói en resumen es convertir los datos de bufferLength en el formato que necesitamos para analizarlo. 
  const dataArray = new Uint8Array(bufferLength);

  //Queremos luego animar algo con estos datos. Lo que haremos es dibujar una serie de barras animadas de izquierda a derecha y que crezcan de abajo hacia arriba. 

  // Creamos una variable con la que definimos el ancho de las barras a partir del ancho del canvas dividido por el número de barras que serán dibujadas (en este caso, 32)

const barWidth = canvas.width/bufferLength;

// Emplearemos let para definir el alto de las barras, ya que este tamaño cambiará constantemente según los datos de la fuente sonora
let barHeight;

//Definimos una variable x para determinar la coordenadas horizontales de las barras. Cada vez que dibujamos una barra, saltamos horizontalmente a la derecha según el ancho de la barra dibujada, de tal manera que podamos dibujar una barra junto a la otra
let x;

//Creamos una función con la que animemos las barras
function animate(){
  x = 0;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //El método predeterminado del nodo de análisis, getByteFrecuencyData, nos permite tomar los datos de la variable dataArray y pasarlos como un argumento, copiando los datos de frecuencia en este arreglo. Cada elemento dentro del arreglo representa los decibeles para una frecuencia específica, que está compuesta por número enteros de 0 a 255. Esto determinará el alto de cada una de las barras. 
  analyser.getByteFrecuencyData(dataArray);

  for (let i = 0; i < bufferLength; i++){
    barHeight = dataArray[i];//sonidos más fuertes producirán barras más altas
    ctx.fillStyle = 'white';
    ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
    x += barWidth; //De esta manera la coordenada horizontal se va corriendo según el ancho de las barras dibujadas

  }
  requestAnimationFrame(animate);
}
animate();
});

```
