# Ojos

Este ejercicio tiene 3 objetivos:

- Entender Clases en JS.
- Usar condicionales.
- Darle personalidad a unos objetos animados.

Van a partir de un código que de momento es bastante aburrido. Muestra unos ojos cuadrados (sin mucha personalidad), se mueven de manera lineal con la posición del mouse (les falta "swing") y el espacio de la pantalla no dice mucho con sus dos colores que podrían ser cualquier cosa.

Lo que deben hacer es crear un espacio donde esos ojos que siguen el mouse tienen personalidad, dicen algo a partir de cómo se ven, su manera de moverse en relación al mouse y el espacio que ocupan en la pantalla.

## Ejercicio

- Cambiar la forma de los ojos, darles personalidad por medio de sus características visuales.
- Cuando hacemos clic en la pantalla, otro par de ojos deben aparecer en un lugar distinto de la pantalla y desde esa posición deben moverse en relación al movimiento del mouse. (al final uno puede llenar la pantalla de ojos y todos siguen el mouse desde diferentes lugares)
- Cambiar el fondo para que sea coherente con la personalidad de los ojos.
- Con condicionales, no dejar que ningún ojo se salga del recuadro interior. Pueden rebotar en los limites, volverse pequeños, parar de moverse cuando tocan una pared, etc.
- Modificar algunas propiedades de los ojos en relación a la pantalla. Esto puede ser por ejemplo: que cuando estén subiendo en la pantalla, les cambie el tamaño, o que la velocidad con la que uno mueve el mouse afecte su animación, o que cambie el color si se acercan a una pared...piensen esto en clave a cual es la personalidad de estos ojos y el efecto que quieren provocar en nosotros cuando interactuamos.

## Referencia

Usando una plantilla con Babel (Webpack o Parcel) crear los siguientes archivos.

### Archivo `index.html`

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>PONER ACÁ EL NOMBRE DE SU PROYECTO</title>
  </head>
  <body>
    <main id="main">
      <canvas id="lienzo"></canvas>
    </main>
  </body>
</html>
```

### Estilos CSS

```css
html {
  box-sizing: border-box;
  height: 100%;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

html,
body {
  margin: 0;
  padding: 0;
}

body {
  background-color: rgb(135, 174, 180);
}

main {
  width: 80vw;
  height: 80vh;
  background-color: rgb(33, 43, 43);
  display: block;
  margin: 10vh auto;
}
```

### JavaScript

```js
import './scss/styles.scss'; // si usan webpack necesita esto
import Ojos from './componentes/Ojos';

const contenedor = document.getElementById('main');
const lienzo = document.getElementById('lienzo');
const ctx = lienzo.getContext('2d');
const ojos = new Ojos(ctx);
let ancho = 0;
let alto = 0;
let x = 0;
let y = 0;

actualizarDimensiones();

contenedor.onmousemove = (e) => {
  const _x = e.clientX - x;
  const _y = e.clientY - y;

  ctx.clearRect(0, 0, ancho, alto);
  ojos.pintar(_x, _y);
};

function actualizarDimensiones() {
  const dimensiones = contenedor.getBoundingClientRect();

  x = dimensiones.x | 0;
  y = dimensiones.y | 0;
  lienzo.width = ancho = dimensiones.width | 0;
  lienzo.height = alto = dimensiones.height | 0;
}

window.onresize = actualizarDimensiones;
```

Van a separar el archivo llamado `Ojos.js` y lo ponen en una carpeta `./componentes/Ojos.js` relativo a su JS principal.

```js
export default class Ojos {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 0;
    this.y = 0;
  }

  pintar(x, y) {
    const ctx = this.ctx;
    const margenX = 20;
    const margenY = 10;
    const ancho = 15;
    const alto = 15;

    const ojoIzX = x - margenX - margenX / 2;
    const ojoIzY = y - margenY;
    const ojoDeX = x + margenX;
    const ojoDeY = ojoIzY;

    ctx.fillRect(ojoIzX, ojoIzY, ancho, alto);
    ctx.fillRect(ojoDeX, ojoDeY, ancho, alto);
  }
}
```

La estructura archivos debe ser algo así:

```bash
- ejercicios/
  - ojos/
    - SU-USUARIO-GITHUB/
      - src/
        - componentes/
          - Ojos.js
        - scss/
          - estilos.scss
        - index.html
        - programa.js
      - ... los archivos de la plantilla
```
