import Papa from 'papaparse';
import csv from './datos2.csv'; // Suponiendo que el .csv esta junto a tu js

Papa.parse(csv, {
  download: true, // Este es necesario para que descargue el archivo csv tuyo
  header: true, // Para que lea la primera fila como variables
  delimiter: ',',
  complete: inicio,
});

// Esta función corre cuando Papaparse termina de convertir los datos
function inicio(datos) {
  console.log(datos); // Aquí puedes ver tus datos y comenzar a trabajar con ellos en JS
}