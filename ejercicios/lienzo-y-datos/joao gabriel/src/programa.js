import './scss/estilos.scss';
import Papa from 'papaparse';
import csv from './datos.csv';

// intencionalidades:

let activismo = 0
let mediacion = 0
let oda = 0
let publicidad = 0
let soporte = 0
let spam = 0
let afirmacion_de_grupo = 0
let chiste = 0
let coronavirus = 0
let duelo = 0
let espiritualidad = 0
let gesto_vacio = 0
let genero = 0
let incitacion_violencia = 0
let religiosidad = 0
let pregunta = 0
let otros = 0
let mujer = 0

// interacciones por intencionalidades:

let total_interacciones = 0
let int_activismo = 0
let int_mediacion = 0
let int_oda = 0
let int_publicidad = 0
let int_soporte = 0
let int_spam = 0
let int_afirmacion_de_grupo = 0
let int_chiste = 0
let int_coronavirus = 0
let int_duelo = 0
let int_espiritualidad = 0
let int_gesto_vacio = 0
let int_genero = 0
let int_incitacion_violencia = 0
let int_religiosidad = 0
let int_pregunta = 0
let int_otros = 0
let int_mujer = 0

//compartidas por intencionalidades

let total_compartidos = 0
let comp_activismo = 0
let comp_mediacion = 0
let comp_oda = 0
let comp_publicidad = 0
let comp_soporte = 0
let comp_spam = 0
let comp_afirmacion_de_grupo = 0
let comp_chiste = 0
let comp_coronavirus = 0
let comp_duelo = 0
let comp_espiritualidad = 0
let comp_gesto_vacio = 0
let comp_genero = 0
let comp_incitacion_violencia = 0
let comp_religiosidad = 0
let comp_pregunta = 0
let comp_otros = 0
let comp_mujer = 0

// grupo por intencionalidade

let comp_grupo = 0
let int_grupo = 0
let total_grupo = 0
let grupo_activismo = 0
let grupo_mediacion = 0
let grupo_oda = 0
let grupo_publicidad = 0
let grupo_soporte = 0
let grupo_spam = 0
let grupo_afirmacion_de_grupo = 0
let grupo_chiste = 0
let grupo_coronavirus = 0
let grupo_duelo = 0
let grupo_espiritualidad = 0
let grupo_gesto_vacio = 0
let grupo_genero = 0
let grupo_incitacion_violencia = 0
let grupo_religiosidad = 0
let grupo_pregunta = 0
let grupo_otros = 0
let grupo_mujer = 0

// pagina por intencionalidad

let comp_pagina = 0
let int_pagina = 0
let total_pagina = 0
let pagina_activismo = 0
let pagina_mediacion = 0
let pagina_oda = 0
let pagina_publicidad = 0
let pagina_soporte = 0
let pagina_spam = 0
let pagina_afirmacion_de_grupo = 0
let pagina_chiste = 0
let pagina_coronavirus = 0
let pagina_duelo = 0
let pagina_espiritualidad = 0
let pagina_gesto_vacio = 0
let pagina_genero = 0
let pagina_incitacion_violencia = 0
let pagina_religiosidad = 0
let pagina_pregunta = 0
let pagina_otros = 0
let pagina_mujer = 0

// video por intencionalidad

let comp_video = 0
let int_video = 0
let total_video = 0
let video_activismo = 0
let video_mediacion = 0
let video_oda = 0
let video_publicidad = 0
let video_soporte = 0
let video_spam = 0
let video_afirmacion_de_grupo = 0
let video_chiste = 0
let video_coronavirus = 0
let video_duelo = 0
let video_espiritualidad = 0
let video_gesto_vacio = 0
let video_genero = 0
let video_incitacion_violencia = 0
let video_religiosidad = 0
let video_pregunta = 0
let video_otros = 0
let video_mujer = 0

// texto por intencionalidad

let comp_texto = 0
let int_texto = 0
let total_texto = 0
let texto_activismo = 0
let texto_mediacion = 0
let texto_oda = 0
let texto_publicidad = 0
let texto_soporte = 0
let texto_spam = 0
let texto_afirmacion_de_grupo = 0
let texto_chiste = 0
let texto_coronavirus = 0
let texto_duelo = 0
let texto_espiritualidad = 0
let texto_gesto_vacio = 0
let texto_genero = 0
let texto_incitacion_violencia = 0
let texto_religiosidad = 0
let texto_pregunta = 0
let texto_otros = 0
let texto_mujer = 0

// fotos por intencionalidad

let comp_fotos = 0
let int_fotos = 0
let total_fotos = 0
let fotos_activismo = 0
let fotos_mediacion = 0
let fotos_oda = 0
let fotos_publicidad = 0
let fotos_soporte = 0
let fotos_spam = 0
let fotos_afirmacion_de_grupo = 0
let fotos_chiste = 0
let fotos_coronavirus = 0
let fotos_duelo = 0
let fotos_espiritualidad = 0
let fotos_gesto_vacio = 0
let fotos_genero = 0
let fotos_incitacion_violencia = 0
let fotos_religiosidad = 0
let fotos_pregunta = 0
let fotos_otros = 0
let fotos_mujer = 0

// memes por intencionalidad

let comp_memes = 0
let int_memes = 0
let total_memes = 0
let memes_activismo = 0
let memes_mediacion = 0
let memes_oda = 0
let memes_publicidad = 0
let memes_soporte = 0
let memes_spam = 0
let memes_afirmacion_de_grupo = 0
let memes_chiste = 0
let memes_coronavirus = 0
let memes_duelo = 0
let memes_espiritualidad = 0
let memes_gesto_vacio = 0
let memes_genero = 0
let memes_incitacion_violencia = 0
let memes_religiosidad = 0
let memes_pregunta = 0
let memes_otros = 0
let memes_mujer = 0

// fotomontaje por intencionalidad

let comp_fotomontaje = 0
let int_fotomontaje = 0
let total_fotomontaje = 0
let fotomontaje_activismo = 0
let fotomontaje_mediacion = 0
let fotomontaje_oda = 0
let fotomontaje_publicidad = 0
let fotomontaje_soporte = 0
let fotomontaje_spam = 0
let fotomontaje_afirmacion_de_grupo = 0
let fotomontaje_chiste = 0
let fotomontaje_coronavirus = 0
let fotomontaje_duelo = 0
let fotomontaje_espiritualidad = 0
let fotomontaje_gesto_vacio = 0
let fotomontaje_genero = 0
let fotomontaje_incitacion_violencia = 0
let fotomontaje_religiosidad = 0
let fotomontaje_pregunta = 0
let fotomontaje_otros = 0
let fotomontaje_mujer = 0

// republica dominicana por intencionalidad

let comp_rep_dominicana = 0
let int_rep_dominicana = 0
let total_rep_dominicana = 0
let rep_dominicana_activismo = 0
let rep_dominicana_mediacion = 0
let rep_dominicana_oda = 0
let rep_dominicana_publicidad = 0
let rep_dominicana_soporte = 0
let rep_dominicana_spam = 0
let rep_dominicana_afirmacion_de_grupo = 0
let rep_dominicana_chiste = 0
let rep_dominicana_coronavirus = 0
let rep_dominicana_duelo = 0
let rep_dominicana_espiritualidad = 0
let rep_dominicana_gesto_vacio = 0
let rep_dominicana_genero = 0
let rep_dominicana_incitacion_violencia = 0
let rep_dominicana_religiosidad = 0
let rep_dominicana_pregunta = 0
let rep_dominicana_otros = 0
let rep_dominicana_mujer = 0

// EUA por intencionalidad

let comp_eua = 0
let int_eua = 0
let total_eua = 0
let eua_activismo = 0
let eua_mediacion = 0
let eua_oda = 0
let eua_publicidad = 0
let eua_soporte = 0
let eua_spam = 0
let eua_afirmacion_de_grupo = 0
let eua_chiste = 0
let eua_coronavirus = 0
let eua_duelo = 0
let eua_espiritualidad = 0
let eua_gesto_vacio = 0
let eua_genero = 0
let eua_incitacion_violencia = 0
let eua_religiosidad = 0
let eua_pregunta = 0
let eua_otros = 0
let eua_mujer = 0

// Colombia por intencionalidad

let comp_colombia = 0
let int_colombia = 0
let total_colombia = 0
let colombia_activismo = 0
let colombia_mediacion = 0
let colombia_oda = 0
let colombia_publicidad = 0
let colombia_soporte = 0
let colombia_spam = 0
let colombia_afirmacion_de_grupo = 0
let colombia_chiste = 0
let colombia_coronavirus = 0
let colombia_duelo = 0
let colombia_espiritualidad = 0
let colombia_gesto_vacio = 0
let colombia_genero = 0
let colombia_incitacion_violencia = 0
let colombia_religiosidad = 0
let colombia_pregunta = 0
let colombia_otros = 0
let colombia_mujer = 0

// Ecuador por intencionalidad

let comp_ecuador = 0
let int_ecuador = 0
let total_ecuador = 0
let ecuador_activismo = 0
let ecuador_mediacion = 0
let ecuador_oda = 0
let ecuador_publicidad = 0
let ecuador_soporte = 0
let ecuador_spam = 0
let ecuador_afirmacion_de_grupo = 0
let ecuador_chiste = 0
let ecuador_coronavirus = 0
let ecuador_duelo = 0
let ecuador_espiritualidad = 0
let ecuador_gesto_vacio = 0
let ecuador_genero = 0
let ecuador_incitacion_violencia = 0
let ecuador_religiosidad = 0
let ecuador_pregunta = 0
let ecuador_otros = 0
let ecuador_mujer = 0

// Mexico por intencionalidad

let comp_mexico = 0
let int_mexico = 0
let total_mexico = 0
let mexico_activismo = 0
let mexico_mediacion = 0
let mexico_oda = 0
let mexico_publicidad = 0
let mexico_soporte = 0
let mexico_spam = 0
let mexico_afirmacion_de_grupo = 0
let mexico_chiste = 0
let mexico_coronavirus = 0
let mexico_duelo = 0
let mexico_espiritualidad = 0
let mexico_gesto_vacio = 0
let mexico_genero = 0
let mexico_incitacion_violencia = 0
let mexico_religiosidad = 0
let mexico_pregunta = 0
let mexico_otros = 0
let mexico_mujer = 0

// Ghana por intencionalidad

let comp_ghana = 0
let int_ghana = 0
let total_ghana = 0
let ghana_activismo = 0
let ghana_mediacion = 0
let ghana_oda = 0
let ghana_publicidad = 0
let ghana_soporte = 0
let ghana_spam = 0
let ghana_afirmacion_de_grupo = 0
let ghana_chiste = 0
let ghana_coronavirus = 0
let ghana_duelo = 0
let ghana_espiritualidad = 0
let ghana_gesto_vacio = 0
let ghana_genero = 0
let ghana_incitacion_violencia = 0
let ghana_religiosidad = 0
let ghana_pregunta = 0
let ghana_otros = 0
let ghana_mujer = 0


let tester = []
let set = new Set()

// lienzo

/*const c = document.getElementById('lienzo');
const ctx = c.getContext('2d');
const raton = { x: 0, y: 0, anteriorX: 0, anteriorY: 0 };
const hex_numbers = ["1","2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
let hexcode = "";
let color = "white";
let aceleracion = 0;*/


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

    // tester de categorias - lista organizada en set para verificar posibles categorias erradas

    for (let i = 0; i < index.length; i++) {
  let categoria = String(index[i].PAIS);
    tester.push(categoria)
    }
    tester.forEach(item => set.add(item))
    console.log(set)


 /* if (intencion.includes(",")) { // Puedes borrar el == true ya que si es en si mismo true pues pasa o no el if()
    let separados = index[i].INTENCIONALIDAD.split(",");
    for (let ii = 0; ii < separados.length; ii++) {
      intencionalidad.push(separados[ii])
    }
  } else {
    intencionalidad.push(index[i].INTENCIONALIDAD);
  }
}*/


    // correlaciones intencionalidad

  for (let i=0; i <index.length; i++){
      const inte = String(index[i].INTENCIONALIDAD).toLowerCase().trim();
      const grupo_pagina = String(index[i].GRUPO).toLowerCase().trim();
      const tipo = String(index[i].TIPO).toLowerCase().trim();
      const pais = String(index[i].DOCUMENT_POSITION_CONTAINS).toLowerCase().trim();

      // vuelve esto lowercase y borra espacios al principio o fin.
  if (inte.includes('tivismo')) {
    activismo += 1;
    int_activismo = int_activismo +  parseFloat(index[i].INTERACCIONES)
    total_interacciones = total_interacciones + parseFloat(index[i].INTERACCIONES)
    comp_activismo = comp_activismo + parseFloat(index[i].COMPARTIDAS)
    total_compartidos = total_compartidos + parseFloat(index[i].COMPARTIDAS)
    if (grupo_pagina.includes("grupo")){
        grupo_activismo += 1
        total_grupo += 1
        comp_grupo = comp_grupo + parseFloat(index[i].COMPARTIDAS)
        int_grupo = int_grupo + parseFloat(index[i].INTERACCIONES)
    }
    if (grupo_pagina.includes("pagina")){
        pagina_activismo += 1
        total_pagina += 1
        comp_pagina = comp_pagina + parseFloat(index[i].COMPARTIDAS)
        int_pagina = int_pagina + parseFloat(index[i].INTERACCIONES)
    }
    if (tipo.includes("texto") || tipo.includes("escrito")){
       texto_activismo += 1
       total_texto += 1
       int_texto = int_texto + parseFloat(index[i].INTERACCIONES)
       comp_texto = comp_texto + parseFloat(index[i].COMPARTIDAS)
    }
    if (tipo.includes("video")){
       video_activismo += 1
       total_video += 1
       int_video = int_video + parseFloat(index[i].INTERACCIONES)
       comp_video = comp_video + parseFloat(index[i].COMPARTIDAS)
    }
    if (tipo.includes("foto")){
       fotos_activismo += 1
       total_fotos += 1
       int_fotos = int_fotos + parseFloat(index[i].INTERACCIONES)
       comp_fotos = comp_fotos + parseFloat(index[i].COMPARTIDAS)
    }
    if (tipo.includes("meme")){
       memes_activismo += 1
       total_memes += 1
       int_memes = int_memes + parseFloat(index[i].INTERACCIONES)
       comp_memes = comp_memes + parseFloat(index[i].COMPARTIDAS)
    }
    if (tipo.includes("fotomontaje")){
       fotomontaje_activismo += 1
       total_fotomontaje += 1
       int_fotomontaje = int_fotomontaje + parseFloat(index[i].INTERACCIONES)
       comp_fotomontaje = comp_fotomontaje + parseFloat(index[i].COMPARTIDAS)
    }
    if (pais.includes("dominicana")){
       rep_dominicana_activismo += 1
       total_rep_dominicana += 1
       int_rep_dominicana = int_rep_dominicana + parseFloat(index[i].INTERACCIONES)
       comp_rep_dominicana = comp_rep_dominicana + parseFloat(index[i].COMPARTIDAS)
    }
    if (pais.includes("eua") || pais.includes("usa") || pais.includes("eeuu")){
       eua_activismo += 1
       total_eua += 1
       int_eua = int_eua + parseFloat(index[i].INTERACCIONES)
       comp_eua = comp_eua + parseFloat(index[i].COMPARTIDAS)
        }
      if (pais.includes("colombia")){
       colombia_activismo += 1
       total_colombia += 1
       int_colombia = int_colombia + parseFloat(index[i].INTERACCIONES)
       comp_colombia = comp_colombia + parseFloat(index[i].COMPARTIDAS)
        }
      if (pais.includes("ecuador")){
       ecuador_activismo += 1
       total_ecuador += 1
       int_ecuador= int_ecuador + parseFloat(index[i].INTERACCIONES)
       comp_ecuador = comp_ecuador + parseFloat(index[i].COMPARTIDAS)
        }
      if (pais.includes("xico")){
       mexico_activismo += 1
       total_mexico += 1
       int_mexico= int_mexico + parseFloat(index[i].INTERACCIONES)
       comp_mexico = comp_mexico + parseFloat(index[i].COMPARTIDAS)
        }
      if (pais.includes("ghana")){
       ghana_activismo += 1
       total_ghana += 1
       int_ghana= int_ghana + parseFloat(index[i].INTERACCIONES)
       comp_ghana = comp_ghana + parseFloat(index[i].COMPARTIDAS)
        }


      }


   if (inte.includes('mediac')) {
    mediacion += 1;
    int_mediacion = int_mediacion + parseFloat(index[i].INTERACCIONES)
    comp_mediacion = comp_mediacion + parseFloat(index[i].COMPARTIDAS)
    total_interacciones = total_interacciones + parseFloat(index[i].INTERACCIONES)
    total_compartidos = total_compartidos + parseFloat(index[i].COMPARTIDAS)

    if (grupo_pagina.includes("grupo")){
        grupo_mediacion += 1
        total_grupo += 1
        comp_grupo = comp_grupo + parseFloat(index[i].COMPARTIDAS)
        int_grupo = int_grupo + parseFloat(index[i].INTERACCIONES)
    }
    if (grupo_pagina.includes("pagina")){
        pagina_mediacion += 1
        total_pagina += 1
        comp_pagina = comp_pagina + parseFloat(index[i].COMPARTIDAS)
        int_pagina = int_pagina + parseFloat(index[i].INTERACCIONES)
    }
    if (tipo.includes("texto") || tipo.includes("escrito")){
       texto_mediacion += 1
       total_texto += 1
       int_texto = int_texto + parseFloat(index[i].INTERACCIONES)
       comp_texto = comp_texto + parseFloat(index[i].COMPARTIDAS)
    }
    if (tipo.includes("video")){
       video_mediacion += 1
       total_video += 1
       int_video = int_video + parseFloat(index[i].INTERACCIONES)
       comp_video = comp_video + parseFloat(index[i].COMPARTIDAS)
    }
    if (tipo.includes("foto")){
       fotos_mediacion += 1
       total_fotos += 1
       int_fotos = int_fotos + parseFloat(index[i].INTERACCIONES)
       comp_fotos = comp_fotos + parseFloat(index[i].COMPARTIDAS)
    }
    if (tipo.includes("meme")){
       memes_mediacion += 1
       total_memes += 1
       int_memes = int_memes + parseFloat(index[i].INTERACCIONES)
       comp_memes = comp_memes + parseFloat(index[i].COMPARTIDAS)
    }
    if (tipo.includes("fotomontaje")){
       fotomontaje_mediacion += 1
       total_fotomontaje += 1
       int_fotomontaje = int_fotomontaje + parseFloat(index[i].INTERACCIONES)
       comp_fotomontaje = comp_fotomontaje + parseFloat(index[i].COMPARTIDAS)
    }

   }
    if (inte.includes('oda')) {
    oda += 1;
    int_oda = int_oda + parseFloat(index[i].INTERACCIONES)
    comp_oda = comp_oda + parseFloat(index[i].COMPARTIDAS)
    total_interacciones = total_interacciones + parseFloat(index[i].INTERACCIONES)
    total_compartidos = total_compartidos + parseFloat(index[i].COMPARTIDAS)

    if (grupo_pagina.includes("grupo")){
        grupo_oda += 1
        total_grupo += 1
        comp_grupo = comp_grupo + parseFloat(index[i].COMPARTIDAS)
        int_grupo = int_grupo + parseFloat(index[i].INTERACCIONES)
    }
    if (grupo_pagina.includes("pagina")){
        pagina_oda += 1
        total_pagina += 1
        comp_pagina = comp_pagina + parseFloat(index[i].COMPARTIDAS)
        int_pagina = int_pagina + parseFloat(index[i].INTERACCIONES)
    }
    if (tipo.includes("texto") || tipo.includes("escrito")){
       texto_oda += 1
       total_texto += 1
       int_texto = int_texto + parseFloat(index[i].INTERACCIONES)
       comp_texto = comp_texto + parseFloat(index[i].COMPARTIDAS)
    }
    if (tipo.includes("video")){
       video_oda += 1
       total_video += 1
       int_video = int_video + parseFloat(index[i].INTERACCIONES)
       comp_video = comp_video + parseFloat(index[i].COMPARTIDAS)
    }
    if (tipo.includes("foto")){
       fotos_oda += 1
       total_fotos += 1
       int_fotos = int_fotos + parseFloat(index[i].INTERACCIONES)
       comp_fotos = comp_fotos + parseFloat(index[i].COMPARTIDAS)
    }
    if (tipo.includes("meme")){
       memes_oda += 1
       total_memes += 1
       int_memes = int_memes + parseFloat(index[i].INTERACCIONES)
       comp_memes = comp_memes + parseFloat(index[i].COMPARTIDAS)
    }
    if (tipo.includes("fotomontaje")){
       fotomontaje_oda += 1
       total_fotomontaje += 1
       int_fotomontaje = int_fotomontaje + parseFloat(index[i].INTERACCIONES)
       comp_fotomontaje = comp_fotomontaje + parseFloat(index[i].COMPARTIDAS)
    }

    }
       if (inte.includes('publicidad')) {
    publicidad += 1;
    int_publicidad = int_publicidad + parseFloat(index[i].INTERACCIONES)
    comp_publicidad = comp_publicidad + parseFloat(index[i].COMPARTIDAS)
    total_interacciones = total_interacciones + parseFloat(index[i].INTERACCIONES)
    total_compartidos = total_compartidos + parseFloat(index[i].COMPARTIDAS)

    if (grupo_pagina.includes("grupo")){
        grupo_publicidad += 1
        total_grupo += 1
        comp_grupo = comp_grupo + parseFloat(index[i].COMPARTIDAS)
        int_grupo = int_grupo + parseFloat(index[i].INTERACCIONES)
    }
    if (grupo_pagina.includes("pagina")){
        pagina_publicidad += 1
        total_pagina += 1
        comp_pagina = comp_pagina + parseFloat(index[i].COMPARTIDAS)
        int_pagina = int_pagina + parseFloat(index[i].INTERACCIONES)
    }
    if (tipo.includes("texto") || tipo.includes("escrito")){
       texto_publicidad += 1
       total_texto += 1
       int_texto = int_texto + parseFloat(index[i].INTERACCIONES)
       comp_texto = comp_texto + parseFloat(index[i].COMPARTIDAS)
    }
    if (tipo.includes("video")){
       video_publicidad += 1
       total_video += 1
       int_video = int_video + parseFloat(index[i].INTERACCIONES)
       comp_video = comp_video + parseFloat(index[i].COMPARTIDAS)
    }
    if (tipo.includes("foto")){
       fotos_publicidad += 1
       total_fotos += 1
       int_fotos = int_fotos + parseFloat(index[i].INTERACCIONES)
       comp_fotos = comp_fotos + parseFloat(index[i].COMPARTIDAS)
    }
    if (tipo.includes("meme")){
       memes_publicidad += 1
       total_memes += 1
       int_memes = int_memes + parseFloat(index[i].INTERACCIONES)
       comp_memes = comp_memes + parseFloat(index[i].COMPARTIDAS)
    }
    if (tipo.includes("fotomontaje")){
       fotomontaje_publicidad += 1
       total_fotomontaje += 1
       int_fotomontaje = int_fotomontaje + parseFloat(index[i].INTERACCIONES)
       comp_fotomontaje = comp_fotomontaje + parseFloat(index[i].COMPARTIDAS)
    }

      }

       if (inte.includes('soporte')) {
    soporte += 1;
    int_soporte = int_soporte + parseFloat(index[i].INTERACCIONES)
    comp_soporte = comp_soporte + parseFloat(index[i].COMPARTIDAS)
    total_interacciones = total_interacciones + parseFloat(index[i].INTERACCIONES)
    total_compartidos = total_compartidos + parseFloat(index[i].COMPARTIDAS)
       if (grupo_pagina.includes("grupo")){
        grupo_soporte += 1
        total_grupo += 1
        comp_grupo = comp_grupo + parseFloat(index[i].COMPARTIDAS)
        int_grupo = int_grupo + parseFloat(index[i].INTERACCIONES)
    }
    if (grupo_pagina.includes("pagina")){
        pagina_soporte += 1
        total_pagina += 1
        comp_pagina = comp_pagina + parseFloat(index[i].COMPARTIDAS)
        int_pagina = int_pagina + parseFloat(index[i].INTERACCIONES)
    }
    if (tipo.includes("texto") || tipo.includes("escrito")){
       texto_soporte += 1
       total_texto += 1
       int_texto = int_texto + parseFloat(index[i].INTERACCIONES)
       comp_texto = comp_texto + parseFloat(index[i].COMPARTIDAS)
    }
    if (tipo.includes("video")){
       video_soporte += 1
       total_video += 1
       int_video = int_video + parseFloat(index[i].INTERACCIONES)
       comp_video = comp_video + parseFloat(index[i].COMPARTIDAS)
    }
    if (tipo.includes("foto")){
       fotos_soporte += 1
       total_fotos += 1
       int_fotos = int_fotos + parseFloat(index[i].INTERACCIONES)
       comp_fotos = comp_fotos + parseFloat(index[i].COMPARTIDAS)
    }
    if (tipo.includes("meme")){
       memes_soporte += 1
       total_memes += 1
       int_memes = int_memes + parseFloat(index[i].INTERACCIONES)
       comp_memes = comp_memes + parseFloat(index[i].COMPARTIDAS)
    }
    if (tipo.includes("fotomontaje")){
       fotomontaje_soporte += 1
       total_fotomontaje += 1
       int_fotomontaje = int_fotomontaje + parseFloat(index[i].INTERACCIONES)
       comp_fotomontaje = comp_fotomontaje + parseFloat(index[i].COMPARTIDAS)
    }
       }

       if (inte.includes('spam')) {
    spam += 1;
    int_spam = int_spam + parseFloat(index[i].INTERACCIONES)
    comp_spam = comp_spam + parseFloat(index[i].COMPARTIDAS)
    total_interacciones = total_interacciones + parseFloat(index[i].INTERACCIONES)
    total_compartidos = total_compartidos + parseFloat(index[i].COMPARTIDAS)

       if (grupo_pagina.includes("grupo")){
        grupo_spam += 1
        total_grupo += 1
        comp_grupo = comp_grupo + parseFloat(index[i].COMPARTIDAS)
        int_grupo = int_grupo + parseFloat(index[i].INTERACCIONES)
    }
    if (grupo_pagina.includes("pagina")){
        pagina_spam += 1
        total_pagina += 1
        comp_pagina = comp_pagina + parseFloat(index[i].COMPARTIDAS)
        int_pagina = int_pagina + parseFloat(index[i].INTERACCIONES)
    }
    if (tipo.includes("texto") || tipo.includes("escrito")){
       texto_spam += 1
       total_texto += 1
       int_texto = int_texto + parseFloat(index[i].INTERACCIONES)
       comp_texto = comp_texto + parseFloat(index[i].COMPARTIDAS)
    }
    if (tipo.includes("video")){
       video_spam += 1
       total_video += 1
       int_video = int_video + parseFloat(index[i].INTERACCIONES)
       comp_video = comp_video + parseFloat(index[i].COMPARTIDAS)
    }
    if (tipo.includes("foto")){
       fotos_spam += 1
       total_fotos += 1
       int_fotos = int_fotos + parseFloat(index[i].INTERACCIONES)
       comp_fotos = comp_fotos + parseFloat(index[i].COMPARTIDAS)
    }
    if (tipo.includes("meme")){
       memes_spam += 1
       total_memes += 1
       int_memes = int_memes + parseFloat(index[i].INTERACCIONES)
       comp_memes = comp_memes + parseFloat(index[i].COMPARTIDAS)
    }
    if (tipo.includes("fotomontaje")){
       fotomontaje_spam += 1
       total_fotomontaje += 1
       int_fotomontaje = int_fotomontaje + parseFloat(index[i].INTERACCIONES)
       comp_fotomontaje = comp_fotomontaje + parseFloat(index[i].COMPARTIDAS)
    }

      }
       if (inte.includes('afirmaci')) {
    afirmacion_de_grupo += 1;
    int_afirmacion_de_grupo = int_afirmacion_de_grupo + parseFloat(index[i].INTERACCIONES)
    comp_afirmacion_de_grupo = comp_afirmacion_de_grupo + parseFloat(index[i].COMPARTIDAS)
    total_interacciones = total_interacciones + parseFloat(index[i].INTERACCIONES)
    total_compartidos = total_compartidos + parseFloat(index[i].COMPARTIDAS)


    if (grupo_pagina.includes("grupo")){
        grupo_afirmacion_de_grupo += 1
        total_grupo += 1
        comp_grupo = comp_grupo + parseFloat(index[i].COMPARTIDAS)
        int_grupo = int_grupo + parseFloat(index[i].INTERACCIONES)
    }
    if (grupo_pagina.includes("pagina")){
        pagina_afirmacion_de_grupo += 1
        total_pagina += 1
        comp_pagina = comp_pagina + parseFloat(index[i].COMPARTIDAS)
        int_pagina = int_pagina + parseFloat(index[i].INTERACCIONES)
    }
    if (tipo.includes("texto") || tipo.includes("escrito")){
       texto_afirmacion_de_grupo += 1
       total_texto += 1
       int_texto = int_texto + parseFloat(index[i].INTERACCIONES)
       comp_texto = comp_texto + parseFloat(index[i].COMPARTIDAS)
    }
    if (tipo.includes("video")){
       video_afirmacion_de_grupo += 1
       total_video += 1
       int_video = int_video + parseFloat(index[i].INTERACCIONES)
       comp_video = comp_video + parseFloat(index[i].COMPARTIDAS)
    }
    if (tipo.includes("foto")){
       fotos_afirmacion_de_grupo += 1
       total_fotos += 1
       int_fotos = int_fotos + parseFloat(index[i].INTERACCIONES)
       comp_fotos = comp_fotos + parseFloat(index[i].COMPARTIDAS)
    }
    if (tipo.includes("meme")){
       memes_afirmacion_de_grupo += 1
       total_memes += 1
       int_memes = int_memes + parseFloat(index[i].INTERACCIONES)
       comp_memes = comp_memes + parseFloat(index[i].COMPARTIDAS)
    }
    if (tipo.includes("fotomontaje")){
       fotomontaje_afirmacion_de_grupo += 1
       total_fotomontaje += 1
       int_fotomontaje = int_fotomontaje + parseFloat(index[i].INTERACCIONES)
       comp_fotomontaje = comp_fotomontaje + parseFloat(index[i].COMPARTIDAS)
    }
      }
       if (inte.includes('chiste')) {
    chiste += 1;
    int_chiste = int_chiste + parseFloat(index[i].INTERACCIONES)
    comp_chiste = comp_chiste + parseFloat(index[i].COMPARTIDAS)
    total_interacciones = total_interacciones + parseFloat(index[i].INTERACCIONES)
    total_compartidos = total_compartidos + parseFloat(index[i].COMPARTIDAS)

           if (grupo_pagina.includes("grupo")){
        grupo_chiste += 1
        total_grupo += 1
        comp_grupo = comp_grupo + parseFloat(index[i].COMPARTIDAS)
        int_grupo = int_grupo + parseFloat(index[i].INTERACCIONES)
    }
    if (grupo_pagina.includes("pagina")){
       pagina_chiste += 1
        total_pagina += 1
        comp_pagina = comp_pagina + parseFloat(index[i].COMPARTIDAS)
        int_pagina = int_pagina + parseFloat(index[i].INTERACCIONES)
    }
    if (tipo.includes("texto") || tipo.includes("escrito")){
       texto_chiste += 1
       total_texto += 1
       int_texto = int_texto + parseFloat(index[i].INTERACCIONES)
       comp_texto = comp_texto + parseFloat(index[i].COMPARTIDAS)
    }
    if (tipo.includes("video")){
       video_chiste += 1
       total_video += 1
       int_video = int_video + parseFloat(index[i].INTERACCIONES)
       comp_video = comp_video + parseFloat(index[i].COMPARTIDAS)
    }
    if (tipo.includes("foto")){
       fotos_chiste += 1
       total_fotos += 1
       int_fotos = int_fotos + parseFloat(index[i].INTERACCIONES)
       comp_fotos = comp_fotos + parseFloat(index[i].COMPARTIDAS)
    }
    if (tipo.includes("meme")){
       memes_chiste += 1
       total_memes += 1
       int_memes = int_memes + parseFloat(index[i].INTERACCIONES)
       comp_memes = comp_memes + parseFloat(index[i].COMPARTIDAS)
    }
    if (tipo.includes("fotomontaje")){
       fotomontaje_chiste += 1
       total_fotomontaje += 1
       int_fotomontaje = int_fotomontaje + parseFloat(index[i].INTERACCIONES)
       comp_fotomontaje = comp_fotomontaje + parseFloat(index[i].COMPARTIDAS)
    }
             }
       if (inte.includes('coronavirus')) {
    coronavirus += 1;
    int_coronavirus = int_coronavirus + parseFloat(index[i].INTERACCIONES)
    comp_coronavirus = comp_coronavirus + parseFloat(index[i].COMPARTIDAS)
    total_interacciones = total_interacciones + parseFloat(index[i].INTERACCIONES)
    total_compartidos = total_compartidos + parseFloat(index[i].COMPARTIDAS)

          if (grupo_pagina.includes("grupo")){
        grupo_coronavirus += 1
        total_grupo += 1
        comp_grupo = comp_grupo + parseFloat(index[i].COMPARTIDAS)
        int_grupo = int_grupo + parseFloat(index[i].INTERACCIONES)
    }
    if (grupo_pagina.includes("pagina")){
       pagina_coronavirus += 1
       total_pagina += 1
       comp_pagina = comp_pagina + parseFloat(index[i].COMPARTIDAS)
        int_pagina = int_pagina + parseFloat(index[i].INTERACCIONES)
    }
    if (tipo.includes("texto") || tipo.includes("escrito")){
       texto_coronavirus += 1
       total_texto += 1
       int_texto = int_texto + parseFloat(index[i].INTERACCIONES)
       comp_texto = comp_texto + parseFloat(index[i].COMPARTIDAS)
    }
    if (tipo.includes("video")){
       video_coronavirus += 1
       total_video += 1
       int_video = int_video + parseFloat(index[i].INTERACCIONES)
       comp_video = comp_video + parseFloat(index[i].COMPARTIDAS)
    }
    if (tipo.includes("foto")){
       fotos_coronavirus += 1
       total_fotos += 1
       int_fotos = int_fotos + parseFloat(index[i].INTERACCIONES)
       comp_fotos = comp_fotos + parseFloat(index[i].COMPARTIDAS)
    }
    if (tipo.includes("meme")){
       memes_coronavirus += 1
       total_memes += 1
       int_memes = int_memes + parseFloat(index[i].INTERACCIONES)
       comp_memes = comp_memes + parseFloat(index[i].COMPARTIDAS)
    }
    if (tipo.includes("fotomontaje")){
       fotomontaje_coronavirus += 1
       total_fotomontaje += 1
       int_fotomontaje = int_fotomontaje + parseFloat(index[i].INTERACCIONES)
       comp_fotomontaje = comp_fotomontaje + parseFloat(index[i].COMPARTIDAS)
    }
      }
       if (inte.includes('duelo')) {
    duelo += 1;
    int_duelo = int_duelo + parseFloat(index[i].INTERACCIONES)
    comp_duelo = comp_duelo + parseFloat(index[i].COMPARTIDAS)
    total_interacciones = total_interacciones + parseFloat(index[i].INTERACCIONES)
    total_compartidos = total_compartidos + parseFloat(index[i].COMPARTIDAS)

    if (grupo_pagina.includes("grupo")){
        grupo_duelo += 1
        total_grupo += 1
        comp_grupo = comp_grupo + parseFloat(index[i].COMPARTIDAS)
        int_grupo = int_grupo + parseFloat(index[i].INTERACCIONES)
    }
    if (grupo_pagina.includes("pagina")){
       pagina_duelo += 1
       total_pagina += 1
       comp_pagina = comp_pagina + parseFloat(index[i].COMPARTIDAS)
        int_pagina = int_pagina + parseFloat(index[i].INTERACCIONES)
    }
    if (tipo.includes("texto") || tipo.includes("escrito")){
       texto_duelo += 1
       total_texto += 1
       int_texto = int_texto + parseFloat(index[i].INTERACCIONES)
       comp_texto = comp_texto + parseFloat(index[i].COMPARTIDAS)
    }
    if (tipo.includes("video")){
       video_duelo += 1
       total_video += 1
       int_video = int_video + parseFloat(index[i].INTERACCIONES)
       comp_video = comp_video + parseFloat(index[i].COMPARTIDAS)
    }
    if (tipo.includes("foto")){
       fotos_duelo += 1
       total_fotos += 1
       int_fotos = int_fotos + parseFloat(index[i].INTERACCIONES)
       comp_fotos = comp_fotos + parseFloat(index[i].COMPARTIDAS)
    }
    if (tipo.includes("meme")){
       memes_duelo += 1
       total_memes += 1
       int_memes = int_memes + parseFloat(index[i].INTERACCIONES)
       comp_memes = comp_memes + parseFloat(index[i].COMPARTIDAS)
    }
    if (tipo.includes("fotomontaje")){
       fotomontaje_duelo += 1
       total_fotomontaje += 1
       int_fotomontaje = int_fotomontaje + parseFloat(index[i].INTERACCIONES)
       comp_fotomontaje = comp_fotomontaje + parseFloat(index[i].COMPARTIDAS)
    }

       }

       if (inte.includes('gesto')) {
    gesto_vacio += 1;
    int_gesto_vacio = int_gesto_vacio + parseFloat(index[i].INTERACCIONES)
    comp_gesto_vacio = comp_gesto_vacio + parseFloat(index[i].COMPARTIDAS)
    total_interacciones = total_interacciones + parseFloat(index[i].INTERACCIONES)
    total_compartidos = total_compartidos + parseFloat(index[i].COMPARTIDAS)

    if (grupo_pagina.includes("grupo")){
        grupo_gesto_vacio += 1
        total_grupo += 1
    }
    if (grupo_pagina.includes("pagina")){
       pagina_gesto_vacio += 1
       total_pagina += 1
    }
    if (tipo.includes("texto") || tipo.includes("escrito")){
       texto_gesto_vacio += 1
       total_texto += 1
       int_texto = int_texto + parseFloat(index[i].INTERACCIONES)
       comp_texto = comp_texto + parseFloat(index[i].COMPARTIDAS)
    }
    if (tipo.includes("video")){
       video_gesto_vacio += 1
       total_video += 1
       int_video = int_video + parseFloat(index[i].INTERACCIONES)
       comp_video = comp_video + parseFloat(index[i].COMPARTIDAS)
    }
    if (tipo.includes("foto")){
       fotos_gesto_vacio += 1
       total_fotos += 1
       int_fotos = int_fotos + parseFloat(index[i].INTERACCIONES)
       comp_fotos = comp_fotos + parseFloat(index[i].COMPARTIDAS)
    }
    if (tipo.includes("meme")){
       memes_gesto_vacio += 1
       total_memes += 1
       int_memes = int_memes + parseFloat(index[i].INTERACCIONES)
       comp_memes = comp_memes + parseFloat(index[i].COMPARTIDAS)
    }
    if (tipo.includes("fotomontaje")){
       fotomontaje_gesto_vacio += 1
       total_fotomontaje += 1
       int_fotomontaje = int_fotomontaje + parseFloat(index[i].INTERACCIONES)
       comp_fotomontaje = comp_fotomontaje + parseFloat(index[i].COMPARTIDAS)
    }
      }
       if (inte.includes('espiritualidad')) {
    espiritualidad += 1;
    int_espiritualidad = int_gesto_vacio + parseFloat(index[i].INTERACCIONES)
    comp_espiritualidad = comp_espiritualidad + parseFloat(index[i].COMPARTIDAS)
    total_interacciones = total_interacciones + parseFloat(index[i].INTERACCIONES)
    total_compartidos = total_compartidos + parseFloat(index[i].COMPARTIDAS)


    if (grupo_pagina.includes("grupo")){
        grupo_espiritualidad += 1
        total_grupo += 1
    }
    if (grupo_pagina.includes("pagina")){
       pagina_espiritualidad += 1
        total_pagina += 1
    }
    if (tipo.includes("texto") || tipo.includes("escrito")){
       texto_espiritualidad += 1
       total_texto += 1
       int_texto = int_texto + parseFloat(index[i].INTERACCIONES)
       comp_texto = comp_texto + parseFloat(index[i].COMPARTIDAS)
    }
    if (tipo.includes("video")){
       video_espiritualidad += 1
       total_video += 1
       int_video = int_video + parseFloat(index[i].INTERACCIONES)
       comp_video = comp_video + parseFloat(index[i].COMPARTIDAS)
    }
    if (tipo.includes("foto")){
       fotos_espiritualidad += 1
       total_fotos += 1
       int_fotos = int_fotos + parseFloat(index[i].INTERACCIONES)
       comp_fotos = comp_fotos + parseFloat(index[i].COMPARTIDAS)
    }
    if (tipo.includes("meme")){
       memes_espiritualidad += 1
       total_memes += 1
       int_memes = int_memes + parseFloat(index[i].INTERACCIONES)
       comp_memes = comp_memes + parseFloat(index[i].COMPARTIDAS)
    }
    if (tipo.includes("fotomontaje")){
       fotomontaje_espiritualidad += 1
       total_fotomontaje += 1
       int_fotomontaje = int_fotomontaje + parseFloat(index[i].INTERACCIONES)
       comp_fotomontaje = comp_fotomontaje + parseFloat(index[i].COMPARTIDAS)
    }
      }
       if (inte.includes('nero')) {
    genero += 1;
    int_genero = int_genero + parseFloat(index[i].INTERACCIONES)
    comp_genero = comp_genero + parseFloat(index[i].COMPARTIDAS)
    total_interacciones = total_interacciones + parseFloat(index[i].INTERACCIONES)
    total_compartidos = total_compartidos + parseFloat(index[i].COMPARTIDAS)

    if (grupo_pagina.includes("grupo")){
        grupo_genero += 1
        total_grupo += 1
    }
    if (grupo_pagina.includes("pagina")){
       pagina_genero += 1
       total_pagina += 1
    }
    if (tipo.includes("texto") || tipo.includes("escrito")){
       texto_genero += 1
       total_texto += 1
       int_texto = int_texto + parseFloat(index[i].INTERACCIONES)
       comp_texto = comp_texto + parseFloat(index[i].COMPARTIDAS)
    }
    if (tipo.includes("video")){
       video_genero += 1
       total_video += 1
       int_video = int_video + parseFloat(index[i].INTERACCIONES)
       comp_video = comp_video + parseFloat(index[i].COMPARTIDAS)
    }
    if (tipo.includes("foto")){
       fotos_genero += 1
       total_fotos += 1
       int_fotos = int_fotos + parseFloat(index[i].INTERACCIONES)
       comp_fotos = comp_fotos + parseFloat(index[i].COMPARTIDAS)
    }
    if (tipo.includes("meme")){
       memes_genero+= 1
       total_memes += 1
       int_memes = int_memes + parseFloat(index[i].INTERACCIONES)
       comp_memes = comp_memes + parseFloat(index[i].COMPARTIDAS)
    }
    if (tipo.includes("fotomontaje")){
       fotomontaje_genero += 1
       total_fotomontaje += 1
       int_fotomontaje = int_fotomontaje + parseFloat(index[i].INTERACCIONES)
       comp_fotomontaje = comp_fotomontaje + parseFloat(index[i].COMPARTIDAS)
    }
      }
       if (inte.includes('incitaci')) {
    incitacion_violencia += 1;
    int_incitacion_violencia = int_incitacion_violencia + parseFloat(index[i].INTERACCIONES)
    comp_incitacion_violencia = comp_incitacion_violencia + parseFloat(index[i].COMPARTIDAS)
    total_interacciones = total_interacciones + parseFloat(index[i].INTERACCIONES)
    total_compartidos = total_compartidos + parseFloat(index[i].COMPARTIDAS)

    if (grupo_pagina.includes("grupo")){
        grupo_genero += 1
        total_grupo += 1
    }
    if (grupo_pagina.includes("pagina")){
       pagina_genero += 1
       total_pagina += 1
    }
    if (tipo.includes("texto") || tipo.includes("escrito")){
       texto_incitacion_violencia += 1
       total_texto += 1
       int_texto = int_texto + parseFloat(index[i].INTERACCIONES)
       comp_texto = comp_texto + parseFloat(index[i].COMPARTIDAS)
    }
    if (tipo.includes("video")){
       video_incitacion_violencia += 1
       total_video += 1
       int_video = int_video + parseFloat(index[i].INTERACCIONES)
       comp_video = comp_video + parseFloat(index[i].COMPARTIDAS)
    }
    if (tipo.includes("foto")){
       fotos_incitacion_violencia += 1
       total_fotos += 1
       int_fotos = int_fotos + parseFloat(index[i].INTERACCIONES)
       comp_fotos = comp_fotos + parseFloat(index[i].COMPARTIDAS)
    }
    if (tipo.includes("meme")){
       memes_incitacion_violencia += 1
       total_memes += 1
       int_memes = int_memes + parseFloat(index[i].INTERACCIONES)
       comp_memes = comp_memes + parseFloat(index[i].COMPARTIDAS)
    }
    if (tipo.includes("fotomontaje")){
       fotomontaje_incitacion_violencia += 1
       total_fotomontaje += 1
       int_fotomontaje = int_fotomontaje + parseFloat(index[i].INTERACCIONES)
       comp_fotomontaje = comp_fotomontaje + parseFloat(index[i].COMPARTIDAS)
    }
      }
       if (inte.includes('religios')) {
    religiosidad += 1;
    int_religiosidad = int_religiosidad + parseFloat(index[i].INTERACCIONES)
    comp_religiosidad = comp_religiosidad + parseFloat(index[i].COMPARTIDAS)
    total_interacciones = total_interacciones + parseFloat(index[i].INTERACCIONES)
    total_compartidos = total_compartidos + parseFloat(index[i].COMPARTIDAS)

    if (grupo_pagina.includes("grupo")){
        grupo_religiosidad += 1
        total_grupo += 1
    }
    if (grupo_pagina.includes("pagina")){
       pagina_religiosidad += 1
       total_pagina += 1
    }
    if (tipo.includes("texto") || tipo.includes("escrito")){
       texto_religiosidad += 1
       total_texto += 1
       int_texto = int_texto + parseFloat(index[i].INTERACCIONES)
       comp_texto = comp_texto + parseFloat(index[i].COMPARTIDAS)
    }
    if (tipo.includes("video")){
       video_religiosidad += 1
       total_video += 1
       int_video = int_video + parseFloat(index[i].INTERACCIONES)
       comp_video = comp_video + parseFloat(index[i].COMPARTIDAS)
    }
    if (tipo.includes("foto")){
       fotos_religiosidad += 1
       total_fotos += 1
       int_fotos = int_fotos + parseFloat(index[i].INTERACCIONES)
       comp_fotos = comp_fotos + parseFloat(index[i].COMPARTIDAS)
    }
    if (tipo.includes("meme")){
       memes_religiosidad += 1
       total_memes += 1
       int_memes = int_memes + parseFloat(index[i].INTERACCIONES)
       comp_memes = comp_memes + parseFloat(index[i].COMPARTIDAS)
    }
    if (tipo.includes("fotomontaje")){
       fotomontaje_religiosidad += 1
       total_fotomontaje += 1
       int_fotomontaje = int_fotomontaje + parseFloat(index[i].INTERACCIONES)
       comp_fotomontaje = comp_fotomontaje + parseFloat(index[i].COMPARTIDAS)
    }
      }
       if (inte.includes('pregunta')) {
    pregunta += 1;
    int_pregunta = int_pregunta + parseFloat(index[i].INTERACCIONES)
    comp_pregunta = comp_pregunta + parseFloat(index[i].COMPARTIDAS)
    total_interacciones = total_interacciones + parseFloat(index[i].INTERACCIONES)
    total_compartidos = total_compartidos + parseFloat(index[i].COMPARTIDAS)

    if (grupo_pagina.includes("grupo")){
        grupo_pregunta += 1
        total_grupo += 1
    }
    if (grupo_pagina.includes("pagina")){
       pagina_pregunta += 1
       total_pagina += 1
    }
    if (tipo.includes("texto") || tipo.includes("escrito")){
       texto_pregunta += 1
       total_texto += 1
       int_texto = int_texto + parseFloat(index[i].INTERACCIONES)
       comp_texto = comp_texto + parseFloat(index[i].COMPARTIDAS)
    }
    if (tipo.includes("video")){
       video_pregunta += 1
       total_video += 1
       int_video = int_video + parseFloat(index[i].INTERACCIONES)
       comp_video = comp_video + parseFloat(index[i].COMPARTIDAS)
    }
    if (tipo.includes("foto")){
       fotos_pregunta += 1
       total_fotos += 1
       int_fotos = int_fotos + parseFloat(index[i].INTERACCIONES)
       comp_fotos = comp_fotos + parseFloat(index[i].COMPARTIDAS)
    }
    if (tipo.includes("meme")){
       memes_pregunta += 1
       total_memes += 1
       int_memes = int_memes + parseFloat(index[i].INTERACCIONES)
       comp_memes = comp_memes + parseFloat(index[i].COMPARTIDAS)
    }
    if (tipo.includes("fotomontaje")){
       fotomontaje_preguntad += 1
       total_fotomontaje += 1
       int_fotomontaje = int_fotomontaje + parseFloat(index[i].INTERACCIONES)
       comp_fotomontaje = comp_fotomontaje + parseFloat(index[i].COMPARTIDAS)
    }
      }
       if (inte.includes('otros')) {
    otros += 1;
    int_otros = int_otros + parseFloat(index[i].INTERACCIONES)
    comp_otros = comp_otros + parseFloat(index[i].COMPARTIDAS)
    total_interacciones = total_interacciones + parseFloat(index[i].INTERACCIONES)
    total_compartidos = total_compartidos + parseFloat(index[i].COMPARTIDAS)

    if (grupo_pagina.includes("grupo")){
        grupo_otros += 1
        total_grupo += 1
    }
    if (grupo_pagina.includes("pagina")){
       pagina_otros += 1
       total_pagina += 1
    }
    if (tipo.includes("texto") || tipo.includes("escrito")){
       texto_otros += 1
       total_texto += 1
       int_texto = int_texto + parseFloat(index[i].INTERACCIONES)
       comp_texto = comp_texto + parseFloat(index[i].COMPARTIDAS)
    }
    if (tipo.includes("video")){
       video_otros += 1
       total_video += 1
       int_video = int_video + parseFloat(index[i].INTERACCIONES)
       comp_video = comp_video + parseFloat(index[i].COMPARTIDAS)
    }
    if (tipo.includes("foto")){
       fotos_otros += 1
       total_fotos += 1
       int_fotos = int_fotos + parseFloat(index[i].INTERACCIONES)
       comp_fotos = comp_fotos + parseFloat(index[i].COMPARTIDAS)
    }
    if (tipo.includes("meme")){
       memes_otros += 1
       total_memes += 1
       int_memes = int_memes + parseFloat(index[i].INTERACCIONES)
       comp_memes = comp_memes + parseFloat(index[i].COMPARTIDAS)
    }
    if (tipo.includes("fotomontaje")){
       fotomontaje_otros += 1
       total_fotomontaje += 1
       int_fotomontaje = int_fotomontaje + parseFloat(index[i].INTERACCIONES)
       comp_fotomontaje = comp_fotomontaje + parseFloat(index[i].COMPARTIDAS)
    }

      }
       if (inte.includes('mujer')) {
    mujer += 1;
    int_mujer = int_mujer + parseFloat(index[i].INTERACCIONES)
    comp_mujer = comp_mujer + parseFloat(index[i].COMPARTIDAS)
    total_interacciones = total_interacciones + parseFloat(index[i].INTERACCIONES)
    total_compartidos = total_compartidos + parseFloat(index[i].COMPARTIDAS)

    if (grupo_pagina.includes("grupo")){
        grupo_mujer += 1
        total_grupo += 1
    }
    if (grupo_pagina.includes("pagina")){
       pagina_mujer += 1
       total_pagina += 1
    }
    if (tipo.includes("texto") || tipo.includes("escrito")){
       texto_mujer += 1
       total_texto += 1
       int_texto = int_texto + parseFloat(index[i].INTERACCIONES)
       comp_texto = comp_texto + parseFloat(index[i].COMPARTIDAS)
    }
    if (tipo.includes("video")){
       video_mujer += 1
       total_video += 1
       int_video = int_video + parseFloat(index[i].INTERACCIONES)
       comp_video = comp_video + parseFloat(index[i].COMPARTIDAS)
    }
    if (tipo.includes("foto")){
       fotos_mujer += 1
       total_fotos += 1
       int_fotos = int_fotos + parseFloat(index[i].INTERACCIONES)
       comp_fotos = comp_fotos + parseFloat(index[i].COMPARTIDAS)
    }
    if (tipo.includes("meme")){
       memes_mujer += 1
       total_memes += 1
       int_memes = int_memes + parseFloat(index[i].INTERACCIONES)
       comp_memes = comp_memes + parseFloat(index[i].COMPARTIDAS)
    }
    if (tipo.includes("fotomontaje")){
       fotomontaje_mujer += 1
       total_fotomontaje += 1
       int_fotomontaje = int_fotomontaje + parseFloat(index[i].INTERACCIONES)
       comp_fotomontaje = comp_fotomontaje + parseFloat(index[i].COMPARTIDAS)
    }
      }
  }
    console.log(colombia_activismo)

}

var img = document.getElementById("brick");
const c = document.getElementById('lienzo');
const botón = document.getElementById("teste");
const ctx = c.getContext('2d');
const raton = { x: 0, y: 0, anteriorX: 0, anteriorY: 0 };
const hex_numbers = ["1","2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
let hexcode = "";
let color = "white";
let aceleracion = 0;

function ChangeColor(){
let hexcode = "";
for (var i = 0 ; i < 6 ; i++){
let random_index = Math.floor(Math.random() * hex_numbers.length); 
hexcode += hex_numbers[random_index];
};
color = "#" + hexcode;
console.log(hexcode);
};


c.onclick = ChangeColor();

function actualizar() {
  c.width = window.innerWidth;
  c.height = window.innerHeight;
  /*ctx.fillStyle = color;
  ctx.fillRect(0, 0, c.width, c.height);*/
  ctx.drawImage(img, 0, 0, c.width, c.height);
ctx.font = "30px Mostwasted";
ctx.fillText("Hello World", 10, 50);
};



/*c.onmousemove = (evento) => {
raton.x = evento.clientX;
raton.y = evento.clientY;
ctx.beginPath();
ctx.arc(raton.x, 50, raton.y, 0, 2 * Math.PI);
ctx.stroke();
};*/
window.onresize = actualizar;
actualizar();