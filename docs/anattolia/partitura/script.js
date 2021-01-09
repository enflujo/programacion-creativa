
// Canvas
var c = document.getElementById("myCanvas");
c.width = window.innerWidth;
c.height = window.innerHeight;

var ctx = c.getContext("2d");

//Fondo
ctx.fillStyle = "#00091d";
ctx.fillRect(0, 0, c.width, c.height);

var x = window.innerWidth;
var y = window.innerHeight;


var separacion = 32;
function dibujarLinea(i){
    // Dibujar línea vertical
    ctx.lineTo(i-separacion, y);
    ctx.strokeStyle = "rgba(233, 205, 244, 0.01)";
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.moveTo(i, 0);
}

function dibujarCirculo(i,v){
    ctx.beginPath();
    ctx.arc(i, v, 2, 0, 2 * Math.PI);
    //ctx.lineWidth = 1;
    ctx.fillStyle = "rgba(230, 189, 25, 0.8)";
    //ctx.stroke();
    ctx.fill();
}

function dibujarDelay(i,v){
    var gradient = ctx.createLinearGradient(0, 0, 170, 0);
    
    var k, j;
    for(j=45, k=8; j > 0; j=j-2, k=k+4){
        gradient.addColorStop("0", "rgba(102, 108, 106, 0.2)");
    
    gradient.addColorStop("1.0", "rgba(255, 169, 196, 0.2)");
        ctx.beginPath();
        ctx.arc(k+i, v, j, 0, 2 * Math.PI);
        ctx.lineWidth = 1;
        ctx.strokeStyle = gradient;

        ctx.fillStyle = "rgba(126, 166, 126, 0.07)";
        ctx.stroke();
        //ctx.fill();
    }
}

//nota 
function dibujarNota(i,n){
    ctx.beginPath();
    ctx.arc(i, n, 10, 0, 2 * Math.PI);
    ctx.lineWidth = 0;
    //ctx.stroke();
    ctx.fill();
}

function dibujarGrilla(){
    for(var i=0; i < x+64; i=i+separacion){
        ctx.moveTo(i-separacion, 0);
        dibujarLinea(i);
        //ctx.moveTo(i+20, 0);
    }
}

//DIBUJAR SISTEMA
function dibujarSistema(v){
    //1er tiempo
    for(var i=0; i < x; i=i+256){
        var color = ctx.strokeStyle = "#FF5B79";
        dibujarCirculo(i,v)
        ctx.moveTo(i, i);
    }
    //4to tiempo
    for(var i=0; i < x; i=i+256){
        dibujarCirculo(i+96,v)
        ctx.moveTo(i, i);
    }
    //2er tiempo, 2do compás
    for(var i=0; i < x; i=i+256){
        dibujarCirculo(i+192,v)
        ctx.moveTo(i, i);
    }
    //delay 1er tiempo
    for(var i=0; i < x; i=i+256){
        dibujarDelay(i-20,v);
        ctx.moveTo(i, i);
    }
    //delay 4to tiempo
    for(var i=0; i < x; i=i+256){
        dibujarDelay(i+86,v);
        ctx.moveTo(i, i);
    }
    //delay 2do tiempo, 2do compás
    for(var i=0; i < x; i=i+256){
        dibujarDelay(i+180,v);
        ctx.moveTo(i, i);
    }
}

//dibujar todos los sistemas
for(var i=50; i < y-20; i = i+80){
    dibujarSistema(i);
}

//MELODÍA
//8va = 80
//20:sol, 25:fa#, 30:fa, 35:mi, 45:re, 55:do, 60:si, 
//I
ctx.strokeStyle = "rgba(247, 176, 13, 0.7)";
ctx.fillStyle = "rgba(200, 84, 104, 0.6)";
//primera línea 00:25
dibujarNota(768,20); //sol
dibujarNota(785,25); //fa#
dibujarNota(798,60); //si
dibujarNota(808,60);

//II
//100:sol, 105:fa#, 110:fa, 115:mi, 125:re, 135:do, 140:si, 
//segunda línea I 00:43
dibujarNota(74,105); //fa#
dibujarNota(91,140); //si 
dibujarNota(104,115); //mi
dibujarNota(114,115);

//segunda línea II 01:03
dibujarNota(704,100); //sol
dibujarNota(721,105); //fa# 
dibujarNota(734,140); //si
dibujarNota(744,140);

//segunda línea III 01:18
dibujarNota(1184,105); //fa#
dibujarNota(1201,115); //mi 
dibujarNota(1211,115);

//III
//180:sol, 185:fa#, 190:fa, 195:mi, 205:re, 215:do, 220:si, 
//tercera línea I 01:34
dibujarNota(432,215); //do
dibujarNota(449,205); //re 
dibujarNota(465,180); //sol
dibujarNota(475,180);

//tercera línea II 01:52
dibujarNota(891,185); //fa#
dibujarNota(908,220); //si 
dibujarNota(918,220);

//IV
//260:sol, 265:fa#, 270:fa, 275:mi, 285:re, 295:do, 300:si,
//310:la, 320:sol, 325:fa#, 335:mi 
//cuarta línea I 2:00
dibujarNota(0,310); //la
dibujarNota(17,300); //si 
dibujarNota(34,325); //fa#8b
dibujarNota(44,325);

//cuarta línea II 2:19
dibujarNota(608,335); //mi
dibujarNota(625,300); //si 
dibujarNota(642,320); //sol8b
dibujarNota(652,320);

//cuarta línea III 2:30
dibujarNota(940,325); //fa#
dibujarNota(957,310); //la
dibujarNota(967,310);

//V
//315:do, 320:si 330:la, 340:sol, 345:fa#, 350:fa, 355:mi, 365:re, 375:do, 380:si,
//390:la, 400:sol, 405:fa#  
//quinta línea  I (biS) 02:45
dibujarNota(160,340); //sol
dibujarNota(177,345); //fa#
dibujarNota(194,380); //si
dibujarNota(204,380);

//quinta línea II 03:02
dibujarNota(736,315); //do8va
dibujarNota(753,320); //si8va 
dibujarNota(770,355); //mi
dibujarNota(780,355);

//VI
//420:sol, 425:fa#, 430:fa, 435:mi, 445:re, 455:do, 460:si,
//470:la, 480:sol, 485:fa# 
//sexta línea II 03:20
dibujarNota(17,445); //re
dibujarNota(24,420); //sol 
dibujarNota(40,430); //fa
dibujarNota(50,430);

//sexta línea II 03:38
dibujarNota(575,395); //do8va
dibujarNota(592,400); //si8va 
dibujarNota(611,435); //mi
dibujarNota(621,435);

//sexta línea II 03:55
dibujarNota(1087,410); //la
ctx.fillStyle = "rgb(255, 55, 0, 0.7)";
dibujarNota(1087,405); //sib

ctx.fillStyle = "rgba(200, 84, 104, 0.6)";
dibujarNota(1100,445); //re
dibujarNota(1121,420); //sol
dibujarNota(1131,420);

//VII
// 475:do 480:si 490:la 500:sol, 505:fa#, 510:fa, 515:mi, 525:re, 535:do, 540:si,
//550:la, 560:sol, 565:fa# 
//séptima línea  I  04:13
dibujarNota(368,475); //do
dibujarNota(385,480); //si
dibujarNota(403,515); //mi
dibujarNota(413,515);

//séptima línea  II  04:27
dibujarNota(893,560); //sol
dibujarNota(910,480); //si
dibujarNota(927,515); //mi
dibujarNota(937,515);

//VIII
//555:do 560:si 570:la 580:sol, 585:fa#, 590:fa, 595:mi, 605:re, 615:do, 620:si,
//630:la, 640:sol, 645:fa# 
//octava línea  II  04:43
dibujarNota(320,630); //la8b
dibujarNota(337,555); //do
dibujarNota(347,555);

//octava línea  II  
dibujarNota(644,630); //la8b
dibujarNota(663,555); //do
dibujarNota(680,590); //fa
dibujarNota(690,590);