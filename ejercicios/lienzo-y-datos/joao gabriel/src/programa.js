import './scss/estilos.scss';
import Papa from 'papaparse';
import csv from './datos.csv';

let intencionalidad = [];
let activismo = 0
    
Papa.parse(csv, {
  download: true, // Este es necesario para que descargue el archivo csv tuyo
  header: true, // Para que lea la primera fila como variables
  delimiter: ',',
  complete: inicio,
});

// Esta función corre cuando Papaparse termina de convertir los datos
function inicio(datos) {
    const index = datos.data
    console.log(datos); // Aquí puedes ver tus datos y comenzar a trabajar con ellos en JS
 
    
    for (let i=0; i < 219; i++){
        let intencion = String(index[i].INTENCIONALIDAD)
        if (intencion.includes(",") == true){
            let separados = index[i].INTENCIONALIDAD.split(",")
            for (let i=0; i < separados.length; i++){
             intencionalidad.push(separados[i])   
            }
        }
            else {
                intencionalidad.push(String(index[i].INTENCIONALIDAD))
            }
        
        }
  
  for (let i=0; i <intencionalidad.length; i++){
      if ( (intencionalidad[i] == '"activismo"' ) || (intencionalidad[i] == '"Activismo"') 
          || (intencionalidad[i] == ' "activismo"') || (intencionalidad[i] == ' "Activismo"')
         || (intencionalidad[i] == ' "activismo"') || (intencionalidad[i] == '"Afirmacion de grupo" "Activismo"')
         || (intencionalidad[i] == '"ativismo"') || (intencionalidad[i] == 'Â¨activismoÂ¨')){
          activismo = activismo+1
      } 
  }
    console.log(intencionalidad.sort())
     console.log(activismo)
}

