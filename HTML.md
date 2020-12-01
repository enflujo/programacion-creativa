# HTML

Estos ejercicios contienen solamente un archivo: `index.html`. Es el único archivo que es absolutamente indispensable para una página de Internet.

El nombre es **importante** para un servidor. Si creamos una carpeta en un servidor y ponemos el archivo `index.html`, este es el primer archivo que se le envía al usuario.

Veamos cómo funciona una página web sencilla.

```html
<html>
  <head>
    <title>Título</title>
    <link href="estilos.css" rel="stylesheet">
  <head>

  <body>
    <h1>Título principal</h1>
    <p>Un párrafo.</p>
    <img src="/imagenes/una-imagen.jpg" alt="" />

    <script src="programa.js"></script>
  </body>
</html>
```

```bash
     ------------                         ----------
    | Explorador |                       | Servidor |
     ------------                         ----------
          |
Escribimos una url  
(Petición http con método GET)
          |
          |
El explorador busca la IP
registrada al dominio (DNS)
          |
          |
Con la IP, sabe donde esta el
servidor y hace nuestra
petición HTTP.
          |
          |       Petición GET
          -------------------------> El servidor lee la petición,
                                     busca lo que pedimos y lo manda
                                     de vuelta. Generalmente lo primero
                                     es el index.html
                                              |
                             Descarga         |
                     <-------------------------
El explorador recibe este archivo
y comienza a renderizar en orden
(de arriba a abajo):

- Lee el <head>
- Encuentra el tag <title> y lo
pone en la pestaña del explorador.
(no lo vemos en pantalla)
- Encuentra el tag <link> de tipo
"stylesheet" y una url en "href".
          |
          |       Petición GET
          -------------------------> Busca ese archivo en el servidor,
                                     en este caso debe estar junto al
                                     index.html ya que lo escribimos
                                     "estilos.css".
                                              |
                             Descarga         |
                     <-------------------------
El explorador recibe el archivo
"estilos.css" y lo lee en orden.
Estos estilos se van a aplicar a
los elementos que encuentre dentro
de <body>....</body>

- Termina el <head> y pasa a <body>
- Encuentra un <h1>
- Pone el texto en la pantalla.
- El texto se ve con estilos predeterminados.
- Encuentra un <p>
- Pone el texto en la pantalla.
- El texto se ve con estilos predeterminados.
- Encuentra una imagen <img>
            |
            |       Petición GET
            -------------------------> Busca la imagen la imagen dentro de
                                       la carpeta "imagenes" ya que el "src"
                                       es: imagenes/una-imagen.jpg
                                              |
                             Descarga         |
                     <-------------------------
- El explorador comienza a descargar
la imagen. Las imágenes para web tienen
una construcción "progresiva" generalmente,
por eso cuando pesan mucho vamos viendo que
se ven por partes.
- Encuentra otro archivo, el <script>
            |
            |       Petición GET
            -------------------------> Busca el archivo "programa.js" junto al
                                       index.html y lo manda de vuelta.
                                              |
                             Descarga         |
                     <-------------------------
- Carga el archivo de JavaScript (.js) y lo corre
linea por linea.
¿porqué el archivo .js lo ponemos antes de cerrar
<body>?
porque en ese punto, todos los elementos del "DOM"
esten cargados y el JavaScript puede hacer lo suyo.
En exploradores modernos, a veces vemos que se pone
en el head con el parametro "defer":
<head>
 ...
 <script src="programa.js" defer></script>
</head>
Esto significa que le pedimos al explorador
que pida este archivo, pero "difiera" su
procesamiento hasta el final, cuando el DOM
este listo.
            |
            |
Aplica los estilos de CSS en el DOM.
            |
            |
Vemos la página finalizada en pantalla
y el JavaScript puede controlar el DOM
y los estilos de esos elementos de ahí
en adelante.

```

¡¡¡¡Mierda!!!!! que paseo para mostrar una página muy sencilla. Esto sucede bastante rápido generalmente, pero debemos tener en cuenta este proceso a la hora de crear cualquier aplicación. No sólo para ser conscientes de cuanto pesan los recursos que ponemos en el servidor, sino también para entender que hace cada archivo: HTML, CSS y JavaScript.

¿Porqué es importante entonces llamar el HTML `index.html`?
Porque en la petición HTTP el usuario no tiene cómo saber el nombre del HTML que pusimos. Así que todo servidor responde a esa primera petición con el archivo `index.html`. Todo los otros recursos que están dentro del HTML tiene nombres y esos pueden ser lo que sea.

## Iniciar un HTML

No es lo mismo abrir un HTML en el computador que pedirlo a un servidor. La diferencia principal es que el archivo local no esta conectado a Internet y por ende, es limitado lo que podemos hacer en él. Sobre todo si queremos usar JavaScript en este archivo, el explorador no puede hacer mucho con un archivo que se abre localmente.

A la hora de desarrollar, podemos inventarnos una regla general: Si sólo tiene HTML y CSS se puede abrir localmente, si tiene JavaScript necesitamos un servidor.

Para todos nuestros ejercicios, nos vamos a acostumbrar a que corran desde un servidor, en últimas es la forma como los mostramos.

### Servicios en Internet

Si no queremos entrar al terminal, ejecutar comandos y demás, podemos desarrollar en aplicaciones gratuitas que ya ofrecen un servidor y todo lo necesario para escribir código.

- [Code Pen](https://codepen.io/) - Es la más sencilla y rápida para empezar pero abstrae bastante la estructura de HTML. Recomendada para bocetos rápidos.
- [Glitch](https://glitch.com/) - Es lo más parecido a la libertad de tener un servidor propio, recomendada cuando necesitamos hacer operaciones entre la aplicación y el servidor.
- [Repl](https://repl.it/) - Parecida que Glitch.

### Servidor local

Sirve para desarrollar sin las complicaciones de montar un servidor en Internet, incluso funciona sin conexión a Internet (si todos los recursos los tenemos en el computador). Es la forma de trabajar aplicaciones más robustas y como desarrolladores es fundamental saber cómo trabajar localmente. Es donde tenemos más libertad de experimentar, no tenemos limitaciones de espacio (el disco duro del computador), tampoco de velocidad ya que los archivos no se tiene que descargar. Parece la más complicada inicialmente, pero es el método más recomendado a largo plazo.

Ver [Plantillas](/plantillas/README.md) para ver formas de crear un servidor local.

## Ejercicio

Vamos a hacer de la pantalla un espacio para pintar. Vamos a usar la analogía del lienzo y el bodegón. Todo debe quedar en un sólo archivo `index.html`.

### Objetivo

Pintar un bodegón observándolo directamente en sus casas. Es pintura digital al natural pero la manera de componer esta imagen en la pantalla es a partir de bloques y formas de color en HTML.

### Requisitos

- Sólo debe producirse 1 pedido al servidor: que nos mande un `index.html`.
- Dentro de este no pueden incluir imágenes externas, fuentes, sonidos, videos, etc. Sólo vamos a trabajar con bloques de HTML y CSS dentro del mismo archivo de HTML.
- Pueden usar CSS "enlinea" o dentro del tag `<style>`:

**CSS enlinea**

```html
<div style="background-color:#e03f34;"></div>
```

**CSS en `<style>`**

```html
<head>
  <!-- ... otros tags ... -->
  <style>
    .fondoRojo {
      background-color: #e03f34;
    }
  </style>
</head>

<body>
  <div class="fondoRojo"></div>
</body>
```

- Debe tener un nombre que se imprima en la pestaña del explorador (`<title>` dentro de `<head>`).
- No pueden usar JavaScript, sólo HTML y CSS.
- El único tag de html que **NO** pueden usar es `svg`.

¿Inspiración? Tatsuo Horiuchi pinta en Excel :)

[![Tatsuo Horiuchi](https://img.youtube.com/vi/OrwBc6PwAcY/0.jpg)](https://www.youtube.com/watch?v=OrwBc6PwAcY)
