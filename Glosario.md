## Glosario: Términos / Conceptos <img src="https://emojis.slackmojis.com/emojis/images/1643516767/28156/spellbook.gif?1643516767" width="30"/>

Una serie de términos que nos sirven para tener un lenguaje común y aprender a buscar soluciones a problemas específicos.

<!-- prettier-ignore -->
|Español|Inglés|
|---|---|
|[Compilador / Transpilador (Babel)](#compilador-/-transpilador-babel) [ref.](https://www.stevefenton.co.uk/2012/11/compiling-vs-transpiling/)|Compiler / Transpiler|
|Comunicación en tiempo real (WebSockets, WebRTC)|Real-time communication|
|[CSS Compilado (SASS o LESS -> CSS)](#css-compilado-SASS-o-LESS-->-CSS)|Compiled CSS / superset of CSS|
|CSS Nativo|CSS / Vanilla CSS|
|[Dibujo Generativo](#dibujo-generativo)|Generative Drawing|
|[Elementos del MOD](#elementos-del-mod)|DOM Elements|
|[Empaquetador (Webpack, Parcel, Rollup, Snowpack, ...)](#empaquetador)|Bundler|
|[Eventos Sensibles](#eventos-sensibles-eventlisteners)|Eventlisteners|
|Frontal - *backend* / servidor (JS, NodeJS) |Frontend - Backend|
|[Interfaz de Programación de Aplicaciones (API)](#interfaz-de-programación-de-aplicaciones-api)|Application Programming Interface API|
|[Intérprete de comandos](#intérprete-de-comandos)|Shell|
|JavaScript Compilado (ES6 o TypeScript -> JS)|Compiled JavaScript|
|JavaScript Nativo|Vanilla JavaScript|
|[Logica Vs. Algoritmo](#logica-vs-algoritmo)|Logic vs. Algorithms|
|Manipulación del MOD|DOM Manipulation|
|Manipulación de pixeles|Pixel Manipulation|
|Matrices, Matriz|Matrices, Matrix|
|[Modelo de Objetos del Documento (MOD)](#modelo-de-objetos-del-documento-mod)|Document Object Model (DOM)|
|[MOD virtual](#mod-virtual)|Virtual DOM|
|Paquetes|Package Manager (NPM)|
|[Programación creativa](#programación-creativa)|Creative Programing|
|[Programación orientada a objetos (POO)](#programación-orientada-a-objetos-poo)|Object Oriented Programming (OOP)|
|Render con CPU vs. GPU (contexto del `canvas` 2d vs WebGL)|CPU vs GPU rendering|
|Sincrónico - Asincrónico (Promises, Async, Await)|Blocking - Non-Blocking / Synchronous - Asynchronous|
|[Sintaxis](#sintaxis)|Sintax|
|[Sistema de control de versiones](#sistema-de-control-de-versiones)|Version Control System (VCS)|
|[Telemática](#telemática)|Telematic|
|[Tipos de funciones (`function(){...}` vs. `() => {...}` vs. `() => ...` )](#tipos-de-funciones)|Arrow functions|
|[Tipos de variables (diferencias entre `const`, `let`, `var`)](#tipos-de-variables)|Variables|
|[Live coding](#live-coding)|Live coding|
|Vectores|Vectors|

## Ejercicio

- Crear un branch con el nombre `glosario`.
- Seleccionar al menos 2 términos (más si quieren) y escribir definiciones cortas de estos en un lenguaje que tenga sentido para ustedes. Si el término ya esta definido en "Definiciones" pueden sugerir cambios o agregar contenido.
- Buscar 1 término adicional que les interesa entender, sumarlos a la lista y escribir su definición corta.
- Hacer un hipervínculo desde el término en español en la tabla y la definición usando anclas.

## Definiciones

Definiciones no-técnicas de conceptos técnicos.

---

### Compilador / Transpilador (Babel)

Los lenguajes de programación se ubican en diferentes rangos de abstracción, un lenguaje de alto nivel es el que se acerca a la forma de escribir / expresar humana, mientras que uno de bajo nivel se acerca al lenguaje máquina (formado por unos y ceros). Los compiladores traducen de un lenguaje a otro para que pueda ser leído y ejecutado sin problemas, esa traducción puede ser de un lenguaje de alto nivel a uno de bajo nivel.
Cuando la traducción se da entre el mismo lenguaje o se mantiene el mismo nivel de abstracción se usa también la palabra transpilación, por ejemplo: Babel traduce de JavaScript ES6 a ES5 para aumentar su compatibilidad sin cambiar de lenguaje. Un equivalente humano sería traducir de un idioma a otro (compilar) o hacer el mismo proceso de traducción de un dialecto a otro dentro del mismo idioma (transpilar).

### CSS Compilado (SASS o LESS -> CSS)

Sass y Less son preprocesadores de CSS. Un preprocesador permite ampliar las posibilidades de un lenguaje (en este caso CSS) mediante una sintaxis específica. Del lado humano SASS y LESS nos ayudan a escribir de forma más organizada, sintetizada y legible los estilos de una página web usando características que no están presentes en CSS nativo, como variables, anidamientos de estilo, operaciones y mixins... Del otro lado, la máquina se encarga de traducir (compilar) el archivo .less o .scss a la sintaxis nativa de CSS.

### Dibujo generativo

Gráficas creadas o modificadas a partir de una serie de órdenes lógicas (algoritmos).

### Elementos del MOD

Un elemento del MOD representa un elemento HTML. Esto significa que los elementos MOD son todos aquellos elementos HTML admitidos por el WWW Consortium. Ejemplos de estos elementos son las etiquetas `<div>`, `<p>`, `<a>`, `<table>`, `<ul>`, etc.

### Empaquetador

Un empaquetador ('bundler' o 'module bundler') es una herramienta utilizada en el desarrollo Frontend para convertir los distintos archivos de una aplicación web (Javascript, imágenes, JSON, CSS, dependencias, etc.) en un solo archivo ejecutable en el navegador, con el fin de organizarlos y facilitar su manejo. Para esto, a partir de un archivo de entrada, el empaquetador genera un diagrama de las relaciones entre los distintos fragmentos de código y archivos que componen la aplicación. Este diagrama se llama gráfico de dependencias ('dependency graph'). Una vez trazadas las relaciones, todos los archivos son empaquetados en uno solo.`<br>`
Existen varios empaquetadores, entre ellos Webpack, Parcel, Fusebox, Rollup, etc. Más información sobre empaquetadores:
['What is module bundler and how does it work?' - Tan Li Hau] https://lihautan.com/what-is-module-bundler-and-how-does-it-work/
['Build Your Own Webpack' - Ronen Amiel] https://youtu.be/Gc9-7PBqOC8

### Eventos Sensibles (Eventlisteners)

El `eventlistener` es un método del DOM que es llamado según la acción que haya sido configurada para ello. El `eventlistener` permite por ejemplo que, al hacer clic a un botón, se abra un cuadro de diálogo. Es literalmente un método que está a la escucha de que ocurra algún evento para el cual está programado escuchar. Con `addEventListener` podemos registrar un evento que ocurre no sólo en el HTML sino en todo el DOM, así como agregar más de un _listener_ a un solo evento, es decir, que un mismo evento active varias funciones por ejemplo.

### Intérprete de comandos (Shell)
 
El _shell_, o intérprete de comandos, es el programa que nos provee una interfaz para, a partir de comandos de texto, acceder a los servicios y aplicaciones del sistema operativo (abrir programas, crear carpetas, ejecutar acciones, dar instrucciones, etc). 

Existen diferentes intérpretes y cada programa usa comandos diferentes dependiendo del sistema operativo. Para sistemas operativos de Windows se
usan [cmd (Command Prompt)](https://es.wikipedia.org/wiki/S%C3%ADmbolo_del_sistema_de_Windows) o [PowerShell](https://es.wikipedia.org/wiki/PowerShell). Para sistemas operativos Linux y macOS (basados en [Unix](https://es.wikipedia.org/wiki/Unix)), se usan [Bash](https://es.wikipedia.org/wiki/Bash) o [Zsh](https://es.wikipedia.org/wiki/Zsh)(que es una versión más enchulable de la interfaz Bash para que se vea bonita con colores y otro tipo de configuraciones).

Como en 𝕰𝖓𝕱𝖑𝖚𝖏𝖔 trabajamos en diferentes sistemas operativos paralelamente (macOS, Linux, Windows) y no es muy común usar los comandos de Windows en servidores, optamos por usar el lenguaje de los comandos de Unix para unificar los comandos que usamos entre nosotrxs con nuestros computadores. Para trabajar en Windows con los comandos propios de macOS o Linux, [recomendamos usar](https://github.com/enflujo/programacion-creativa/blob/main/tutoriales/general/herramientas-desarrollo.md) un emulador de comandos de Unix que los traduce por nosotrxs; su nombre es [cmder](https://cmder.app/).

### Interfaz de Programación de Aplicaciones API

Conjunto de reglas que hacen posible la comunicación entre distintas aplicaciones, por ejemplo entre sistemas operativos, bases de datos, redes sociales y otras plataformas online. Son especialmente útiles porque permiten aprovechar fragmentos de código de un programa en otro, sin necesidad de reinventarlos ni reescribirlos.

### Logica vs Algoritmo

- Lógica: Conjunto de reglas que determinan las operaciones y relaciones en un sistema (muchas veces numérico). La lógica proposicional es quizás el sistema más comunmente utilizado. En este sistema, un conjunto de predicados se unen por medio de un operador lógico, y en conjunto generan un consecuente. Tanto predicados como consecuentes pueden adoptar un valor de VERDADERO o FALSO, y los operadores definidos son la negación (NOT), Y (AND), O (OR) y la OR Exclusiva (XOR). Cada operador está asociado a una tabla de verdad. La negación afecta un predicado, mientras que Y y O operan entre dos resultados.

Sean A y B predicados que pueden ser VERDADEROS o FALSOS definimos...

Negación
| A | NOT A |
|---|-------|
| V |   F   |
| F |   V   |

O
| A | B | A O B |
|---|---|-------|
| F | F |   F   |
| F | V |   V   |
| V | F |   V   |
| V | V |   V   |

Y
| A | B | A Y B |
|---|---|-------|
| F | F |   F   |
| F | V |   F   |
| V | F |   F   |
| V | V |   V   |

XOR
| A | B | A Y B |
|---|---|-------|
| F | F |   F   |
| F | V |   V   |
| V | F |   V   |
| V | V |   F   |

Existen otros marcos (o sistemas) lógicos. Como el de la lógica difusa, donde los predicados no existen en uno u otro estado, sino que tienen valores intermedios. La aritmética presenta otro sistema lógico, en el que los predicados son números, y los operadores son operaciones matemáticas. Estos sistemas nos permiten abstraer estados posibles de un sistema y representarlos de una manera directa, y de esta forma podemos formular problemas cada vez más grandes y modelar el comportamiento de un sistema mucho más complejo, como ecuaiones a resolver en un texto de matemáticas del colegio.

En la computación se utiliza un sistema binario, basado en las reglas lógicas antes mencionadas. Estas gobiernan completamente el funcionamiento de un procesador y representamos todo por medio de estas proposiciones, desde los valores lógicos de un booleano, hasta el brillo del canal rojo en la pantalla. Y esta es una buena forma de diferenciar los algoritmos de la lógica. Si la lógica describe las reglas que sigue el sistema, entonces podemos definir por ejemplo la suma como un conjunto de estas operaciones lógicas entre un conjunto definido de bits.

Sean A, y C B tres conjuntos de 2 bits, y 0 y 1 siendo las representaciones respectivas de los valores FALSO y VERDADERO podemos definir la suma entre A+B=C de la siguiente forma:

| A_2 | A_1 | B_2 | B_1 | C_2 | C_1 |
|---|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 0 | 1 | 0 | 1 |
| 0 | 0 | 1 | 0 | 1 | 0 |
| 0 | 0 | 1 | 1 | 1 | 1 |
| 0 | 1 | 0 | 0 | 0 | 1 |
| 0 | 1 | 0 | 1 | 1 | 0 |
| 0 | 1 | 1 | 0 | 1 | 1 |
| 0 | 1 | 1 | 1 | 0 | 0 |
| 1 | 0 | 0 | 0 | 1 | 0 |
| 1 | 0 | 0 | 1 | 1 | 1 |
| 1 | 0 | 1 | 0 | 0 | 0 |
| 1 | 0 | 1 | 1 | 0 | 1 |
| 1 | 1 | 0 | 0 | 1 | 1 |
| 1 | 1 | 0 | 1 | 0 | 0 |
| 1 | 1 | 1 | 0 | 0 | 1 |
| 1 | 1 | 1 | 1 | 1 | 0 |

- Algoritmo
Un algoritmo, por su parte, es una secuencia de operaciones lógicas para obtener un resultado determinado. Los algoritmos existen bajo el marco lógico que gobierna el comportamiento de las partes que se operan. Si la lógica es el hilo y la aguja, el algoritmo es el procedimiento que te enseña tu abuela para tejer una bufanda. La algorítmica es entonces lo que enriquece y le da vida a lo que de lo contrario sería sólo una muestra inerte de reglas (sin quitarle a éstas su propia belleza). Hay algoritmos que se funcionan secuencialmente, es decir, una secuencia definida de pasos, que sabemos siempre qué nos va a significar resolver. Mientras que otros algoritmos son recursivos, y se llaman a si mismos una y otra vez y no es siempre posible saber que terminaran de calcularse en un tiempo finito. Un algoritmo sencillo podría ser el encontrar el factorial de un número determinado:

Si factorial(x) = x*(x-1)*(x-2)*(x-3)*...*3*2*1
Podríamos establecer el algoritmo recursivo para encontrar el factorial de x como:

	factorial(x)
		if x==2: return 2
		else: return x*factorial(x-1)



### Live coding (Código en vivo)

Definición tomada de [Proyecto-IDIS]:

Live coding se refiere a una forma de arte performático y técnica creativa que se basa en el uso de programación interactiva de manera improvisada. Presentaciones en vivo donde uno o varios Live Coders (programadores en vivo) generan visuales y música a medida que avanza la presentación. Tanto las visuales como la escritura del código deben ser proyectadas, la idea es la de improvisar mediante el uso de la escritura de código, para generar un espectáculo audiovisual interactivo para el espectador.

Una plataforma para hacer visuales en vivo con live coding basada en el explorador web y hecha a partir de WebRTC es [Hydra], de [Olivia Jack].

[proyecto-idis]: https://proyectoidis.org/live-coding/
[hydra]: https://hydra.ojack.xyz/
[olivia jack]: https://ojack.xyz/articles/hydra/index.html

### Modelo de Objetos del Documento (MOD)

El MOD es una interfaz multiplataforma que trata la estructura del documento HTML o XML en forma de árbol. Las ramas de este árbol terminan en nodos: objetos que representan las partes de las que se compone el documento. Así, la estructura más común de el MOD sería:

```bash
documento
  /head
  /body
    //section
      ///p
```

Del 'Document Object', es decir del 'documento', nacen dos ramas: `/head` y `/body`. De body nacen más ramas, que serían `//section` y dentro de ella `///p`. El final de cada una de estas ramas es un objeto que pude contener tanto un elemento como un método del MOD. Toda la estructura, el contenido y el estilo de los nodos pueden ser modificados por medio de los métodos MOD.

### MOD virtual

El MOD virtual (virtualDOM) es una abstracción de los nodos de la estructura arbórea del MOD. Esta abstracción permite que la actualización de los datos de la interfaz de usuario sea mucho más eficiente. Por ejemplo, en HTML tenemos una tabla con valores dinámicos que el usuario modifica por medio de un formulario. Cada nuevo valor introducido transforma un valor ya existente de la tabla. Sin el MOD virtual, el navegador debe cargar todos los nodos de la estructura del HTML, consumiendo grandes recursos informáticos cuando los cambios son frecuentes o la información es pesada. Gracias al MOD virtual, el framework en el que se está ejecutando el código (React, por ejemplo) guarda una abstracción o copia ‘ideal’ del MOD, de tal manera que, al actualizar los datos, se carguen solamente los nuevos valores del nodo modificado y no toda la estructura y objetos del documento.

### Programación Creativa

Negociar con las máquinas un gesto artístico. Es un acto de agenciamiento entre potencias físicas y potencias del dispositivo. En el mejor de los casos produce un devenir en artista post-humano.

### Programación orientada a objetos POO

Es un paradigma de programación (es decir, una forma de entender la construcción de un programa) en el cual se estructura el código en piezas simples y reutilizables llamadas clases, a partir de las cuales se crean objetos. Estos objetos y clases se relacionan entre sí, tienen ciertas características (atributos) y son capaces de llevar a cabo ciertas acciones (funciones) dentro del programa. Algunas clases (hijas) pueden heredar atributos y funciones de otras clases (madres). `<br>` Típico ejemplo: Una clase madre Animal puede tener clases hijas Perro, Gato, Vaca. Todos los objetos de la clase Animal (y por extensión Perro, Gato, Vaca) tendrán un color, un peso, un tamaño (atributos) y podrán desplazarse y alimentarse (funciones). Un objeto de la clase Gato, por ejemplo, heredará de su clase madre Animal los atributos y funciones anteriores y sumará los suyos propios: colorDeBigotes (atributo) y maullar (función).

### Sintaxis

La forma, las reglas y la estructura que debe tener un lenguaje de programación para que la máquina lo entienda correctamente.

### Telemática

Del libro [Telematic embrace] de Roy Ascott:

> “computer-mediated communications networking between geographically dispersed individuals and institutions . . . and between the human mind and artificial systems of intelligence and perception”
> (p. 9)
>
> **_Comunicaciones mediadas por redes computacionales entre individuxs e instituciones geográficamente dispersxs (en diferentes lugares)... y entre la mente humana y sistemas de inteligencia y percepción artificial_**;

> "The rubric “telematics” not only refers to the convergence of computers and telecommunications systems but qualifies a whole class of consciousness and culture in which new modalities of knowledge and the means of their distribution are being tested and extended. Telematics implies interaction, negotiation, and collaboration amongst human beings and intelligent machines. Telematic process involves ambiguity, uncertainty, and incompleteness; meaning is not given but negotiated, endlessly reconstituted and redefined; truth, always relative, does not lie in an absolute location but is embedded in process, is telematically inscribed in the networking that is human behaviour at its most liberated." (p. 202)
>
> **_La palabra "telemática" no sólo se refiere a la convergencia entre computadores y sistemas de telecomunicación sino que además califica una forma completa de conciencia y cultura en la que nuevas modalidades de conocimiento y sus medios de su distribución son testeados y extendidos. Telemática implica interacción, negociación y colaboración entre seres humanos y máquinas inteligentes. Los procesos telemáticos involucran ambigüedad, incertidumbre e incompletud; el significado no está dado sino que se negocia, perpetuaemente reconstituidos y redefinidos; la verdad, siempre relativa, no recae en una autoridad absoluta sino que es integrada en el proceso, está telemáticamente inscrita en la red que constituye el comportamiento humano en su forma más libre"._**

[Telematic Embrace](https://drive.google.com/file/d/1T2RzUeWnkB23X7mVr2dwHorU0rO_C4VZ/view?usp=sharing)

### Tipos de variables

Las variables son elementos empleados para almacenar un valor. Estos valores pueden ser llamados de forma tal que un programa pueda funcionar independientemente de los valores introducidos (`boolean`, `string`, `number`). Aunque depende del tipo, las variables se pueden declarar asignando un nombre (identificador) y un valor (aunque las variables `var` y `let` se pueden declarar sin asignarle valor alguno). Cuando en una variable se declara no sólo su identificador sino también un valor, se dice que la variable ha sido inicializada. En las versiones modernas de JavaScript no sólo se emplea la palabra reservada `var` sino también `let` y `const`. La introducción de `let` permitió solucionar algunos errores o confusiones que se generaban con `var`. Por ejemplo, con `var` se puede declarar una variable después de inicializada, debido a la elevación (hoisting). Esto significa que, a pesar de que la declaración es levantada hasta el inicio del ámbito de aplicación, la asignación del valor permanece en el mismo sitio donde se realizó. Esta elevación ya no existe con `let`, evitando de esta manera algunas confusiones en el código. También, con `var` es posible declarar la misma variable tantas veces sea requerido. Con `let` la variable sólo puede ser declarada una vez, es decir, el identificador no puede ser reasignado, pero el valor sí puede ser actualizado. La variable `const` se diferencia de `var` y de `let` principalmente por la imposibilidad de reasignar sus valores. Una vez declarada e inicializada, `const` mantiene el mismo valor para todo el bloque de código. Sin embargo, que no se puede reasignar no significa que los valores de `const` sean inmutables. A partir de un método del DOM (MOD) se puede modificar el valor de un `string` o de un `number` por ejemplo, mutando así entonces el valor primeramente asignado a `const`.

### Tipos de funciones

En JavaScript, una función es el conjunto de pasos que el navegador debe seguir para realizar una acción o calcular un valor. Para que estos procedimientos o pasos puedan ser denominados una función, debe haber unos datos de entrada y otros de salida. En general, casi todas las funciones están compuestas de un nombre o identificador (como en las variables), una lista de parámetros y las declaraciones de JavaScript que definen la función. Por más compleja que sea ésta, en el fondo toda función es un _valor_, que podemos emplear en otras funciones o en otras partes del bloque de código.

Dependiendo de la sintaxis, puede haber una declaración de función (Function Declaration) o una expresión de función (Function Expression). En la primera se declaran todos los elementos de la función: identificador, parámetros y declaraciones (sentencias), mientras que la segunda puede ser una función no declarada o anónima, integrada al interior de una expresión u otra construcción sintáctica. En este caso, la expresión de función es un valor, mientras que la declaración de función es un bloque de código. Por esta razón, se recomienda poner un punto y coma al final de la expresión de función, lo cual resulta innecesario en el caso de la declaración de función. Una otra diferencia estriba en el ámbito (scope) de cada una de estas funciones. Mientras que la declaración de función es reconocida globalmente cuando aparece como una sentencia separada (ya que puede ser elevada (hoisted)), el ámbito de la expresión de función está determinado por el lugar dentro del cual la expresión ha sido creada. Lo mismo ocurre con las funciones anidadas: sólo se puede acceder a ellas en el interior del bloque de código en el que se encuentran.

Una característica de las funciones en JavaScript es que, a diferencia de otros lenguajes de programación, éstas deben ser llamadas para ejecutarse. El ámbito de las llamadas de activación de una función está determinado por el lugar que ocupa la función dentro del código. Si la llamada está por fuera del alcance de la función, ésta no se activará.

Junto a las expresiones de funciones y las declaraciones de funciones, hay otras sintaxis para construirlas. Una de estas es la función flecha (Arrow Function). Las funciones flecha siempre son más cortas que las otras funciones y son además siempre anónimas, es decir, no poseen un identificador. Se consideran una alternativa más concisas frente a una expresión de función tradicional. Así, podríamos pasar de una sintaxis tradicional a la sintaxis de la función flecha así:

```js
// 1)
function(a) {
  return a * 10;
}

// 2)
(a) => {
  return a * 10;
}

// 3)
(a) => a * 10;

// 4)
a => a * 10;
```

### Sistema de control de versiones

Es una forma de gestionar la evolución de un proyecto de forma colaborativa. Git es un software de control de versiones mientras que GitHub es un sitio web / comunidad que hace uso de las posibilidades de Git.
