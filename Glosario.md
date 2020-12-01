## Glosario: Términos / Conceptos

Una serie de términos que nos sirven para tener un lenguaje común y aprender a buscar soluciones a problemas específicos.

|Español|Inglés|
|---|---|
|[Tipos de variables (diferencias entre `const`, `let`, `var`)](#tipos-de-variables)|Variables|
|Tipos de funciones (`function(){...}` vs. `() => {...}` vs. `() => ...` )|Arrow functions|
|[Modelo de Objetos del Documento (MOD)](#modelo-de-objetos-del-documento-mod)|Document Object Model (DOM)|
|[Elementos del MOD](#elementos-del-mod)|DOM Elements|
|[MOD virtual](#mod-virtual)|Virtual DOM|
|Manipulación del MOD|DOM Manipulation|
|[Eventos Sensibles](#eventos-sensibles-eventlisteners)|Eventlisteners|
|[Sintaxis](#sintaxis)|Sintax|
|JavaScript Nativo|Vanilla JavaScript|
|JavaScript Compilado (ES6 o TypeScript -> JS)|Compiled JavaScript|
|CSS Nativo|CSS / Vanilla CSS|
|[CSS Compilado (SASS o LESS -> CSS)](#css-compilado-SASS-o-LESS-->-CSS)|Compiled CSS / superset of CSS|
|[Compilador / Transpilador (Babel)](#compilador-/-transpilador-babel) [ref.](https://www.stevefenton.co.uk/2012/11/compiling-vs-transpiling/)|Compiler / Transpiler|
|Empaquetador (Webpack, Parcel, Rollup, Snowpack, ...)|Bundler|
|Manipulación de pixeles|Pixel Manipulation|
|Dibujo Generativo|Generative Drawing|
|Telemática|Telematic|
|[Programación creativa](#programación-creativa)|Creative Programing|
|Comunicación en tiempo real (WebSockets, WebRTC)|Real-time communication|
|Sincrónico - Asincrónico (Promises, Async, Await)|Blocking - Non-Blocking / Synchronous - Asynchronous|
|[Programación orientada a objetos (POO)](#programación-orientada-a-objetos-poo)|Object Oriented Programming (OOP)|
|Frontal - *backend* / servidor (JS, NodeJS) |Frontend - Backend|
|Paquetes|Package Manager (NPM)|
|Interfaz programable de aplicación|Application Programmable Interface (API)|
|Lógica vs. Algoritmo|Logic vs. Algorithms|
|Vectores|Vectors|
|Matrices, Matriz|Matrices, Matrix|
|Render con CPU vs. GPU (contexto del `canvas` 2d vs WebGL)|CPU vs GPU rendering|
|[Interfaz de Programación de Aplicaciones (API)](#interfaz-de-programación-de-aplicaciones-api)|Application Programming Interface API|
|[Sistema de control de versiones](#sistema-de-control-de-versiones)|Version Control System (VCS)|


## Ejercicio

- Crear un branch `terminos-NOMBRE`.
- Seleccionar al menos 2 términos (más si quieren) y escribir definiciones cortas de estos en un lenguaje que tenga sentido para ustedes. Si el término ya esta definido en "Definiciones" pueden sugerir cambios o agregar contenido.
- Buscar 1 término adicional que les interesa entender, sumarlos a la lista y escribir su definición corta.
- Hacer un hipervínculo desde el término en español en la tabla y la definición usando anclas.

## Definiciones

Definiciones no-técnicas de conceptos técnicos.

### Sintaxis

La forma, las reglas y la estructura que debe tener un lenguaje de programación para que la máquina lo entienda correctamente. 

### CSS Compilado (SASS o LESS -> CSS)

Sass y Less son preprocesadores de CSS. Un preprocesador permite ampliar las posibilidades de un lenguaje (en este caso CSS) mediante una sintaxis específica. Del lado humano SASS y LESS nos ayudan a escribir de forma más organizada, sintetizada y legible los estilos de una página web usando características que no están presentes en CSS nativo, como variables, anidamientos de estilo, operaciones y mixins... Del otro lado, la máquina se encarga de traducir (compilar) el archivo .less o .scss a la sintaxis nativa de CSS.

### Compilador / Transpilador (Babel)

Los lenguajes de programación se ubican en diferentes rangos de abstracción, un lenguaje de alto nivel es el que se acerca a la forma de escribir / expresar humana, mientras que uno de bajo nivel se acerca al lenguaje máquina (formado por unos y ceros). Los compiladores traducen de un lenguaje a otro para que pueda ser leído y ejecutado sin problemas, esa traducción puede ser de un lenguaje de alto nivel a uno de bajo nivel. 
Cuando la traducción se da entre el mismo lenguaje o se mantiene el mismo nivel de abstracción se usa también la palabra transpilación, por ejemplo: Babel traduce de JavaScript ES6 a ES5 para aumentar su compatibilidad sin cambiar de lenguaje. Un equivalente humano sería traducir de un idioma a otro (compilar) o hacer el mismo proceso de traducción de un dialecto a otro dentro del mismo idioma (transpilar).

### Programación Creativa

Negociar con las máquinas un gesto artístico. Es un acto de agenciamiento entre potencias físicas y potencias del dispositivo. En el mejor de los casos produce un devenir en artista post-humano.

### Programación orientada a objetos POO
Es un paradigma de programación (es decir, una forma de entender la construcción de un programa) en el cual se estructura el código en piezas simples y reutilizables llamadas clases, a partir de las cuales se crean objetos. Estos objetos y clases se relacionan entre sí, tienen ciertas características (atributos) y son capaces de llevar a cabo ciertas acciones (funciones) dentro del programa. Algunas clases (hijas) pueden heredar atributos y funciones de otras clases (madres). <br> Típico ejemplo: Una clase madre Animal puede tener clases hijas Perro, Gato, Vaca. Todos los objetos de la clase Animal (y por extensión Perro, Gato, Vaca) tendrán un color, un peso, un tamaño (atributos) y podrán desplazarse y alimentarse (funciones). Un objeto de la clase Gato, por ejemplo, heredará de su clase madre Animal los atributos y funciones anteriores y sumará los suyos propios: colorDeBigotes (atributo) y maullar (función). 

### Interfaz de Programación de Aplicaciones API

Conjunto de reglas que hacen posible la comunicación entre distintas aplicaciones, por ejemplo entre sistemas operativos, bases de datos, redes sociales y otras plataformas online. Son especialmente útiles porque permiten aprovechar fragmentos de código de un programa en otro, sin necesidad de reinventarlos ni reescribirlos.

### Tipos de variables

Las variables son elementos empleados para almacenar un valor. Estos valores pueden ser llamados de forma tal que un programa pueda funcionar independientemente de los valores introducidos (boolean, string, number). Aunque depende del tipo, las variables se pueden declarar asignando un nombre (identificador) y un valor (aunque las variables *var* y *let* se pueden declarar sin asignarle valor alguno). Cuando en una variable se declara no sólo su identificador sino también un valor, se dice que la variable ha sido inicializada. En las versiones modernas de JavaScript no sólo se emplea la palabra reservada *var* sino también *let* y *const*. La introducción de *let* permitió solucionar algunos errores o confusiones que se generaban con *var*. Por ejemplo, con *var* se puede declarar una variable después de inicializada, debido a la elevación (hoisting). Esto significa que, a pesar de que la declaración es levantada hasta el inicio del ámbito de aplicación, la asignación del valor permanece en el mismo sitio donde se realizó. Esta elevación ya no existe con *let*, evitando de esta manera algunas confusiones en el código. También, con *var* es posible declarar la misma variable tantas veces sea requerido. Con *let* la variable sólo puede ser declarada una vez, es decir, el identificador no puede ser reasignado, pero el valor sí puede ser actualizado. La variable *const* se diferencia de *var* y de *let* principalmente por la imposibilidad de reasignar sus valores. Una vez declarada e inicializada, *const* mantiene el mismo valor para todo el bloque de código. Sin embargo, que no se puede reasignar no significa que los valores de *const* sean inmutables. A partir de un método del DOM (MOD) se puede modificar el valor de un string o de un number por ejemplo, mutando así entonces el valor primeramente asignado a *const*.    

### Modelo de Objetos del Documento (MOD)

El MOD es una interfaz multiplataforma que trata la estructura del documento HTML o XML en forma de árbol. Las ramas de este árbol terminan en nodos: objetos que representan las partes de las que se compone el documento. Así, la estructura más común de el MOD sería:

```
documento
  /head
  /body
    //section
      ///p
```

Del 'Document Object', es decir del'documento', nacen dos ramas: /head y /body. De body nacen más ramas, que serían //Section y dentro de ella ///p. El final de cada una de estas ramas es un objeto que pude contener tanto un elemento como un método del MOD. Toda la estructura, el contenido y el estilo de los nodos pueden ser modificados por medio de los métodos MOD.

### Elementos del MOD

Un elemento del MOD representa un elemento HTML. Esto significa que los elementos MOD son todos aquellos elementos HTML admitidos por el WWW Consortium. Ejemplos de estos elementos son las etiquetas DIV, P, A, TABLE, UL, etc.

### MOD virtual

El MOD virtual (virtualDOM) es una abstracción de los nodos de la estructura arbórea del MOD. Esta abstracción permite que la actualización de los datos de la interfaz de usuario sea mucho más eficiente. Por ejemplo, en HTML tenemos una tabla con valores dinámicos que el usuario modifica por medio de un formulario. Cada nuevo valor introducido transforma un valor ya existente de la tabla. Sin el MOD virtual, el navegador debe cargar todos los nodos de la estructura del HTML, consumiendo grandes recursos informáticos cuando los cambios son frecuentes o la información es pesada. Gracias al MOD virtual, el framework en el que se está ejecutando el código (React, por ejemplo) guarda una abstracción o copia ‘ideal’ del MOD, de tal manera que, al actualizar los datos, se carguen solamente los nuevos valores del nodo modificado y no toda la estructura y objetos del documento. 

### Eventos Sensibles (Eventlisteners)
  
El Eventlistener es un método del DOM que es llamado según la acción que haya sido configurada para ello. El Eventlistener permite por ejemplo que, al hacer click a un botón, se abra un cuadro de diálogo. Es literalmente un método que está a la escucha de que ocurra algún evento para el cual está programado escuchar. Con addEventListener podemos registrar un evento que ocurre no sólo en el HTML sino en todo el DOM, así como agregar más de un listener a un solo evento, es decir, que un mismo evento active varias funciones por ejemplo.

### Sistema de control de versiones

Es una forma de gestionar la evolución de un proyecto de forma colaborativa. Git es un software de control de versiones mientras que GitHub es un sitio web / comunidad que hace uso de las posibilidades de Git.
