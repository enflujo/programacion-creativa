# Taller local para desarrolladores <img  src="https://emojis.slackmojis.com/emojis/images/1643514599/6027/meow_wow.png?1643514599" width="30"/>

El taller debe ser cómodo, propio, a nuestra medida.

Configurar el computador donde trabajamos parece inicialmente un proceso técnico frío. lo vamos a asumir diferente, hagamos de este espacio de trabajo algo que nos genere gusto de pasar tiempo creando cosas allí.

Al ser un espacio personal, puede ser diferente para cada uno, les voy a mostrar el mío.

## El espacio

Mi taller principal es una carpeta del computador que se llama "dev" (por _development_, pero acortado no tener que escribir mucho cada vez que entro)pero puede llamarse como quieran "desarrollo", "perro", "gato", "Javiera". Idealmente algo que sea práctico y no se confunda con eso. 

Me gusta tenerla inmediatamente accesible desde el terminal, entonces esta en `~/dev` (`~` significa la primera carpeta del computador, en un Windows sería por ejemplo `C:`, o `D:` si es otro disco donde tengo más espacio, etc.).

Así cuando abro el terminal, sólo tengo que escribir `cd dev/` y ya estoy en el taller :boom:

Dentro de esta tengo diferentes espacios de trabajo:

```bash
dev/
lab/
referentes/
apps/
libs/
sitios/
```

### lab

Donde hago experimentos, pruebo herramientas, boceto ideas y a veces desde donde hago pequeños proyectos creativos. Mi espacio favorito y donde paso más tiempo jugando y aprendiendo. Por acá paso todos los días haciendo algo.

![Taller](https://cbsnews2.cbsistatic.com/hub/i/r/2014/01/24/be234dce-2373-4d42-8fa3-bb65880d6340/resize/620x465/3b596fbea169b03d4dc0721e96a09987/Art%20of%20Rube%20Goldberg_190g.jpg)

_"Self-Operating Napkin" - Rube Goldberg_

### referentes

Donde hago clones (`git clone ....`) de repositorios que quiero investigar, hacerle modificaciones para ver cómo funcionan y luego ver si me sirven para un proyecto. En este espacio traigo código de otros para abrirlo, entenderlo y después sacar partes que me sirven y luego borro la carpeta. Algunos repositorios interesantes los dejo y actualizo (`git pull`) para volver a verlos.

![Disección japonesa](https://1843magazine.static-economist.com/sites/default/files/MSTR65_Diva_00004.jpg)

_Del libro "Shishi bessho zui" de Hozumi Koremas (1820)_

### apps

Principalmente para crear apps de escritorio. Me gusta crear herramientas propias para trabajar usando [Electron](https://www.electronjs.org/). Aquí desarrollo por ejemplo una aplicación para crear assets para web desde un archivo de Photoshop, otro de procesamiento y limpieza de bases de datos, otro para partir imágenes muy grandes en un banco de cuadros para ser vistos como mapas, etc. Estos apps necesitan ciertos procesos nativos del computador, uso mucho NodeJS y me permiten crear interfaces gráficas para facilitar procesos muy repetitivos y/o de alta computación.

![Automaton](https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Racknitz_-_The_Turk_3.jpg/1200px-Racknitz_-_The_Turk_3.jpg)

_"The Mechanical Turk" - Me encanta esta historia del automata_

### libs

Donde creo librerías de JavaScript para ser publicadas en NPM. Es otro tipo de herramientas que me gusta crear para facilitar mis proyectos. Por ejemplo, para el doctorado cree una librería llamada [dddrawings](https://www.npmjs.com/package/dddrawings) que me facilitaba la creación de proyectos de animación con datos. Ejemplos de librerías populares son: `P5js`, `D3`, `pixi-js`... Como programadores creativos es útil saber crear nuestras propias herramientas, hechas a la medida de nuestras propias idiosincrasias de creación. Saber que podemos crear nuestras propias librerías nos da un mejor criterio a la hora de usar una existente o de crear una propia.

![Ganson](https://i.ytimg.com/vi/f0UNz-ayzrE/hqdefault.jpg)

_(escuchen a Arthur Ganson hablar sobre la creación de sus propias herramientas para sus esculturas cinéticas: https://www.ted.com/talks/arthur_ganson_moving_sculpture?language=es)_

### sitios

Donde desarrollo páginas web que se van a publicar. Acá uso diferentes tecnologías que van desde simple HTML estático compilado, a aplicaciones con Node, PHP y CMS como WordPress. Para desarrollo de WordPress (que uso mucho para trabajos comerciales) tengo instalado en esta carpeta [VVV - Varying Vagrant Vagrants](https://github.com/Varying-Vagrant-Vagrants/VVV) que me permite crear nuevos contendedores para un WordPress singular y también tengo uno _multisite_ donde tengo las páginas de diferentes proyectos que manejo como [Moebius Animación](http://moebiusanimacion.com) o mi propia página personal [juancgonzalez](http://juancgonzalez.com).

![Salida de la Fábrica](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Sortieusinelumiere.jpg/1200px-Sortieusinelumiere.jpg)

_"La salida de la fábrica" (1895) de los hermanos Lumière, o en éste caso...Lo que sale de la fábrica_

## Software

Los software con los que trabajo son:

- **Homebrew**: Para instalar software globales que uso en el terminal. Tengo un pequeño rito que me ayudó cuando estaba aprendiendo y es que todos los días abria el terminal y actualizaba el homebrew `brew update` y luego actualizaba las aplicaciones que tenia instaladas `brew upgrade`, eso para perderle susto al terminal y aprenderme de memoria algunos comandos.
- **iTerm2**: un terminal más agradable para Mac.
- **VSCode**: Editor de código con muchas extensiones que se puede ajustar al gusto. Lo tengo configurado con precisión pues es donde hago todo.
- **FileZilla**: para todo lo que necesite FTP.
- **Chrome**: Tengo todos los exploradores instalados (menos Opera) para probar, pero uso Chrome y el `chrome-inspector` todo el tiempo.
- **Virtualbox**: Para crear imágenes de Linux y probar cosas en ese sistema operativo, sobre todo para trabajo con servidores (back-end).
- **Adobe**: Todas sus aplicaciones para crear assets.
- **Spotify**: porque no puede faltar, me gusta la música que parece triste pero a mí me hace feliz.
- [**TinyPNG**](https://tinypng.com/): es más una herramienta online, comprime imágenes para web sin perder calidad.
- **Processing**: Para hacer bocetos de arte generativo.
- **Arduino**: Me encanta la computación física y a veces lo uso en proyectos de instalación.
- **Stremio**: Para ver pelis y series. Soy muy pirata, desde joven aprendí a descargar películas y animaciones experimentales pensando que era por puro gusto del cine raro, pero también estaba aprendiendo sobre sistemas, comunidades open-source y algo de hacktivismo. Cuando tenía unos 12 años aprendí a descifrar los códigos de tarjetas de crédito en Estados Unidos (yo estando en Manizales), nunca me atreví a comprar nada para mi sino que ponía a prueba mis habilidades como hacker comprando productos de 1 dólar (por lo general un paquete de gomas) y se las mandaba al dueño de la tarjeta :ghost: - Hoy veo esto como mi primera escuela de programación -.
