# Clases

Cuando trabajamos con datos en JavaScript normalmente pensamos en variables que podemos definir como constantes que nunca cambian `const`, o mutables `let`, o la más genérica `var` (pero acá vamos a dejar a un lado `var` y siempre usar las palabras claves de JS moderno que son `const`y `let`). Al mismo tiempo, pensamos en funciones para organizar la lógica del programa.

Veamos un ejemplo sencillo donde tenemos una variable constante, otra mutable y una función que las usa:

```js
// siempre vamos a incrementar 10, entonces es constante
const incremento = 10;
// queremos ir modificando x entonces es let
let x = 0;

// Una función que al ser ejecutada le suma 10 a la variable x.
function avanzar() {
  x += incremento;
}
```

El ejemplo anterior es típico de todos los lenguajes de programación, creamos variables para guardar datos y funciones para componer la lógica.

Ahora pasemos a otra forma de pensar este mismo ejemplo. Lo que acabamos de hacer tiene sentido si estoy usando `x` para un elemento que tengo en mi aplicación, pero ¿qué pasa si tengo muchos elementos que tienen su propia coordenada `x`? por ejemplo, varios personajes en un videojuego, o varias figuras geométricas en un dibujo generativo. Si continuamos con el mismo paradigma, terminamos repitiendo mucho código. Hay varias formas de hacerlo pero digamos que una opción sería algo así:

```js
const incremento1 = 10;
const incremento2 = 8;
const incremento3 = 25;
let x1 = 0;
let x2 = 100;
let x3 = 200;

function avanzar(x, incremento) {
  return (x += incremento);
}

x1 = avanzar(x1, incremento1);
x2 = avanzar(x2, incremento2);
x3 = avanzar(x3, incremento3);
```

Es fácil de leer, pero en realidad es muy póco práctico en la vida real ya que escalar la complejidad va a ser un dolor de cabeza. Si cambiamos algo, tenemos que cambiar en muchas partes nuestro código. Para solucionar esto podemos usar la idea de **Object Oriented Programming (OOP)** que implica pensar nuestros elementos como Objetos.

Si recuerdan el tutorial sobre manipulación del DOM, pueden ver que en JS la idea de Objetos esta inscrita dentro del lenguaje. Todos los elementos del HTML se representan en el DOM como Objetos. En esa misma lógica, podemos pensar nuestros elementos como Objetos y eso nos obliga a hacer un nivel de abstracción diferente al que veníamos haciendo para escribir nuestra aplicación.

Primero vamos a dar un paso a la idea de Objetos antes de entrar a Clases para entender mejor el concepto de **OOP**. Volvamos a escribir nuestra aplicación, pero en este caso vamos a pensar que tenemos varios personajes en pantalla y cada uno debe tener sus propias variables:

```js
// Cada personaje es un objeto que lo define singularmente
const personaje1 = {
  x: 0,
  incremento: 10,
};
const personaje2 = {
  x: 100,
  incremento: 8,
};
const personaje3 = {
  x: 200,
  incremento: 25,
};

// Hacemos un cambio importante a nuestra función que es usar el . para encontrar las variables.
function avanzar(personaje) {
  personaje.x += personaje.incremento;
}

// Cuando ejecutamos la función, podemos pasar el personaje que queremos modificar,
// y al ser objetos, cada personaje contiene sus propias variables.
avanzar(personaje1);
avanzar(personaje2);
avanzar(personaje3);
```

Aquí ya comenzamos a hacer el paso a Objetos, pero sigue siendo póco práctico ya que los Objetos los estamos definiendo literalmente (Object Literal) o a mano. El problema con esto sigue siendo que si quiero definir una nueva propiedad del personaje, por ejemplo su coordenada `y`, tendría que ir a cada objeto y agregar esta variable en cada personaje. De nuevo, prendan las alarmas cuando estén repitiendo código.

¡La solución a esto le da sentido a las Clases! Las Clases las podemos pensar como plantillas que definen un Objeto. Esa plantilla la podemos usar en personajes con propiedades distintas, así que la clase lo que hace es construir nuestro Objeto para que no sea literal sino modular. Veamos como sería nuestra Clase o plantilla.

```js
// Por convesión, los nombres de las clases se escriben con Mayuscula.
class Personaje {
  // Todas las clases comienzan con una función que usa la palabra clave constructor.
  // Es aquí donde se inicia el Objeto.
  constructor(x, incremento) {
    // Dentro de las clases debemos definir las variables usando otra palabra clave,
    // ya no usamos const o let sino this.

    // Esto es una abstracción de los personajes que veniamos haciendo,
    // ya no los definimos literalmente sino a partir de variables que le pasamos al constructor.
    this.x = x;
    this.incremento = incremento;
  }

  // Dentro de nuestro Objeto también podemos crear funciones, que en las clases
  // (al igual que en el DOM) se llaman métodos del objeto.
  avanzar() {
    // el this hace referencia a "este" objeto, es decir, con this podemos acceder a todas
    // las variables y funciones de este objeto.
    this.x += this.incremento;
  }
}

// Ahora podemos crear el Objeto usando la clase anterior.
// Para eso hay otra palabra clave de JS que es new.
// Le pasamos al constructor nuestros valores iniciales de "x" e "incremento" para que construya el Objeto.
const personaje1 = new Personaje(0, 10);
const personaje2 = new Personaje(100, 8);
const personaje3 = new Personaje(200, 25);

// Ahora tenemos cada uno de los personaje como objetos y entre ellos comparten la función avanzar.
// Pero cada uno avanza según sus propias variables.
personaje1.avanzar();
personaje2.avanzar();
personaje3.avanzar();
```

A primera vista esto parece mucho más largo y complicado que repetir el código para 3 personajes como lo hicimos antes. Pero en realidad se vuelve mucho más cómodo de trabajar en algo que se va expandiendo. Si queremos agregar una nueva coordenada `y` a los personajes, simplemente vamos a la Clase y se la sumamos a la plantilla. Sólo agregando una linea ya tenemos `y` en todos los personajes que se construyen con esta clase.

Lo mismo aplica para las funciones que controlan el personaje, si queremos que haga otra cosa diferente a `avanzar()`, agregamos esa función a la clase y queda disponible en todos los personajes. Hagamos esto para completar el ejemplo:

```js
class Personaje {
  constructor(x, incremento) {
    this.x = x;
    this.incremento = incremento;
    // Agregamos aca una nueva variable, estas las podemos incluso definir de manera literal.
    // en nuestro caso hipotetico, todos los personajes empiezan en el mismo eje y.
    this.y = 200;
  }

  avanzar() {
    this.x += this.incremento;
  }
  // Agregamos un nuevo método a la clase
  saltar() {
    // el personaje salta moviendose en -y, y dependiendo de su volecidad (incremento en x)
    // decimos que su salto es ese incremento * 2 en el eje y.
    // Estamos modularizando, creando plantillas y por eso es bueno pensarlas como tal.
    this.y -= incremento * 2;
  }
}

// No tenemos que pasar nuevos parametros ya que "y" lo definimos dentro de la clase.
const personaje1 = new Personaje(0, 10);
const personaje2 = new Personaje(100, 8);
const personaje3 = new Personaje(200, 25);

personaje1.avanzar();
personaje2.avanzar();
personaje3.avanzar();

// En otra instancia del programa, podemos llamar el nuevo método saltar()
personaje2.saltar();
```

Como el salto lo definimos con las variables que ya existen, no tenemos que pasar parámetros.
Pero podríamos mandar datos al método del objeto.

```js
class Personaje {
  ...
  saltar(velocidadY) {
    this.y -= velocidadY;
  }
}

personaje2.saltar(200);
```

Espero que esta explicación les sirva de introducción a las clases. Estas requieren de un nivel particular de abstracción, en un principio parecen requerir más código pero cuando se empiecen a familiarizar con este paradigma de **OOP**, van a ver que es un placer hacer operaciones complejas como arte generativo, videojuegos, o cualquier aplicación que tenga muchos elementos (objetos) por definir.

Ahora les recomiendo comenzar a usar clases en sus ejercicios, no quiere decir que sirvan para todo, pero en la práctica van a tener sentido o no.
