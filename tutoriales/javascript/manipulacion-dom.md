# El DOM

Una de las operaciones principales en JS tiene que ver con la manipulación del DOM. Entender este concepto es fundamental ya que nos permite entender la paleta de posibilidades de creación con todos los elementos de una página web.

- https://www.w3schools.com/js/js_htmldom.asp

## Atravesar y manipular el DOM

El DOM es una representación de los elementos en HTML dentro de un **objeto** de JS.

Un **objeto** de JS lo podemos entender como un contenedor. Estos contenedores pueden tener datos en variables (propiedades) o funciones (métodos) para hacer operaciones sobre los elementos. La representación de los objetos en JS es: `{}` y dentro de estos corchetes hay variables o funciones:

```js
const ejemploObjeto = {
  unaVariable: 'valor',
  unaFuncion: () => {...}
  elemento: {
    otraVariable: 'Los objetos en JS pueden abrir nuevos objetos.'
    nivel3: {
      masVariables: true,
      masFunciones: () => {...}
    }
  }
}
```

Para acceder a las variables y funciones dentro del objeto debemos usar un `.`. Si el objeto anterior se llama `ejemploObjeto`, entonces para llegar a `masFunciones()` debemos atravesar el objeto de la siguiente forma:

```js
ejemploObjeto.elemento.nivel3.masFunciones();

// o para acceder al valor de una propiedad
ejemploObjeto.elemento.nivel3.masVariables; // Esto es igual a "true"
```

Ahora, el DOM es un **objeto** grande con diferentes propiedades y métodos que nos permiten **acceder**, **cambiar**, **sumar** y **eliminar** elementos en HTML. Este objeto esta disponible en JS cuando todos los elementos de HTML están cargados. Por esa razón vemos que muchas aplicaciones ponen el JS al final del HTML.

```html
<html>
  <head></head>
  <body>
    <script src="programa.js"></script>
  </body>
</html>
```

o usando la propiedad `defer`, que es una palabra clave que le indica al archivo de JS que espere a que todo el DOM este creado antes de ejecutar lo que hay en el archivo de JS.

```html
<html>
  <head>
    <script src="programa.js" defer></script>
  </head>
  <body></body>
</html>
```

Las propiedades y métodos del DOM los podemos encontrar en la siguiente lista: https://www.w3schools.com/jsref/dom_obj_document.asp y en JS podemos acceder a estos usando la palabra `document`.

Usemos el DOM en JS para hacer cada una de las operaciones **acceder**, **cambiar**, **sumar** y **eliminar** sobre el siguiente HTML sencillo:

```html
<html>
  <head></head>
  <body>
    <p>Lorem</p>
    <p id="elemento" class="centrado">Ipsum</p>
    <p class="centrado">Lorem Ipsum</p>
  </body>
</html>
```

### Acceder

Buscar el elemento `<body>` del HTML:

```js
/**
 * Si el DOM se llama "document" y es un objeto, entonces su representación es:
 * document = {
 *  body: '<body>....'
 * }
 */
document.body;
```

Ahora buscar el elemento con id `elemento`:

```js
/**
 * document = {
 *  body: '<body>....',
 *  getElementById: (id) => { return ....}
 * }
 */

// esto nos da acceso a <p id="elemento" class="centrado">Ipsum</p>
document.getElementById('elemento');
```

Ahora todos los elementos con clase `centrado`:

```js
/**
 * document = {
 *  body: '<body>....',
 *  getElementById: (id) => { return ... },
 *  querySelectorAll: (selector) => { return ... }
 * }
 */

/** esto nos da acceso a
 * [
 *  <p id="elemento" class="centrado">Ipsum</p>
 *  <p class="centrado">Lorem Ipsum</p>
 * ]
 */
document.querySelectorAll('.centrado');
```

En caso de ser una propiedad, podemos acceder a su valor así:

```js
document.title;
```

Pero si asignamos un valor al DOM, lo estamos cambiando:

```js
document.title = 'Un nuevo título';
```

### Cambiar

Usemos como ejemplo cambiar los estilos desde JS. Normalmente si queremos aplicar estilos en CSS hacemos esto:

```css
body {
  ...;
}

p {
  ...;
}
```

Pero si queremos algo más especifico:

```css
/* Aplica a todos los p */
p {
  color: #ccc;
}

/* Aplica sólo a uno con este ID */
#elemento {
  font-size: 2em;
}

/* Aplica a todos con class="centrado" */
.centrado {
  text-align: center;
}
```

Pero en este ejemplo queremos modificar el estilo desde el JS: https://www.w3schools.com/jsref/dom_obj_style.asp

Con esto en mente, podemos volver al ejemplo inicial.

```html
<html>
  <head></head>
  <body>
    <p>Lorem</p>
    <p id="elemento" class="centrado">Ipsum</p>
    <p class="centrado">Lorem Ipsum</p>
  </body>
</html>
```

```js
// Buscar un elemento dentro del DOM usando uno de sus atributos (el ID)
const elemento = document.getElementById('elemento');

// Modificar sus estilos, miren que se escribe en "camelCase" y no con guiones como en CSS.
elemento.style.fontSize = '2em';

// Usar eventos para modificar dinámicamente el elemento
elemento.onmouseenter = () => {
  elemento.style.color = '#FFF';
};

elemento.onmouseleave = () => {
  elemento.style.color = '#CCC';
};
```

Pueden ver los diferentes eventos que podemos registrar sobre un elemento en: https://www.w3schools.com/jsref/dom_obj_event.asp

Esto mismo lo podemos hacer directamente en CSS ya que es una operación muy sencilla. Pero entender el concepto de manipulación del DOM es clave para aplicaciones más complejas. Es importante reconocer cuando hacemos algo desde HTML y CSS, cuando debemos manipular el DOM en JS y cuando combinar ambas estrategias.

```css
#elemento {
  font-size: 2em;
  color: #ccc;
}

#elemento:hover {
  color: #fff;
}
```

Hagamos algo más interesante que le de sentido a usar JS para cambiar el estilo de un elemento. Vamos a usar las coordenadas del ratón para cambiar el color de un elemento.

Nuestro HTML en este caso tiene un elemento:

```html
<html>
  <head></head>
  <body>
    <div id="superficie"></div>
  </body>
</html>
```

Le damos algunas propiedades iniciales en CSS.

```css
#superficie {
  width: 100vw;
  height: 100vh;
  background-color: #ccc;
}
```

Y en JS nos podemos inventar diferentes formas de crear los colores de forma dinámica. Es en este punto donde un poco de aritmética se vuelve útil.

```js
const superficie = document.getElementById('superficie');

superficie.onmousemove = (evento) => {
  superficie.style.backgroundColor = definirColor(evento.clientX, evento.clientY);
};

function definirColor(x, y) {
  const r = Math.floor((x / window.innerWidth) * 255);
  const g = Math.floor((y / window.innerHeight) * 255);
  const b = Math.floor((x / window.innerWidth) * 120);
  const alpha = y / window.innerHeight;

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
```

Vean este ejemplo en CodePen, modifiquen el código e intenten entender lo que hace cada parte del código. Si tienen preguntas pueden hacerlas en el canal de Discord.
https://codepen.io/1cgonza/pen/bGwjLpY

### Sumar

Desde JS podemos crear nuevos elementos que no existen en el HTML y su DOM original. Esto es muy útil cuando queremos construir los elementos de HTML desde una estructura de datos. Por ejemplo, si queremos mostrar imágenes que pedimos a un API.

```html
<html>
  <head></head>
  <body>
    <div id="contenedor"></div>
  </body>
</html>
```

```js
const datos = ['texto 1', 'texto 2'];
const contenedor = document.getElementById('contenedor');

datos.foreach((texto) => {
  // Aca creamos un nuevo elemento en el DOM
  const p = document.createElement('p');
  // y lo modificamos con los datos
  p.innerText = texto;
  // por último, lo agregamos al HTML para que se vea en la página
  contenedor.appendChild(p);
});
```

En el caso de imágenes es un poco distinto ya que las imágenes se cargan asincrónicamente.

```js
const datos = ['url_a_imagen1.jpg', 'url_a_imagen2.jpg'];
const contenedor = document.getElementById('contenedor');

datos.foreach((url) => {
  // Creamos una imagen con el constructor
  const img = new Image();
  // Debemos esperar a que cargue antes de usarla
  img.onload = () => {
    // A pesar de estar antes en el orden del código, esta operación es asincrónica.
    // Es acá donde sabemos que la imagen es visible, en nuestro ejemplo es acá cuando la agregamos al HTML.
    contenedor.appendChild(img);
  };
  // le decimos donde esta la imagen para que comience la carga.
  img.src = url;
});
```

### Eliminar

Eliminar un elemento del HTML funciona parecido a **Sumar**, básicamente modificamos el DOM pidiendo eliminar algún elemento:

```html
<html>
  <head></head>
  <body>
    <div id="contenedor">
      <p>Texto 1</p>
      <p>Texto 2</p>
      <p>Texto 3</p>
      <p>Texto 4</p>
    </div>
  </body>
</html>
```

Como ejemplo vamos a eliminar los elementos cuando hacemos clic en cada uno.

```js
const textos = document.querySelectorAll('p');

textos.forEach((elemento) => {
  elemento.onclick = () => {
    elemento.remove();
  };
});
```
