# Lienzo y Datos

Un ejercicio por fases, aumentando su complejidad.

## Fase 1

- Usar plantilla de webpack.
- Crear un `<canvas>` en el HTML. Este debe tener un ID único.
- El Canvas debe ocupar toda la pantalla.
- En JS deben:
  - Buscar en el DOM el canvas por su ID.
  - Crear 2 eventos: `onresize` y `onmousemove`. En `onresize` deben ajustar el canvas al tamaño de la pantalla y definir las propiedades del contexto. En `onmousemove` deben extraer las coordenadas del mouse y pintar en el canvas algo dentro de esas coordenadas.

## Fase 2

-Modificar el código para implementar un loop eterno con requestAnimationFrame (RAF)
-Dentro del loop poner la lógica con la que se pinta el lienzo
-Dentro del evento onmousemove solo actualizar las variables que se usan para pintar en el loop de RAF

### Ejemplo

```html
<canvas id="lienzo"></canvas>
```

```js
const canvas = document.getElementById('lienzo');
const ctx = canvas.getContext('2d');

function actualizar() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

canvas.onmousemove = (evento) => {
  // extraer del evento las coordenadas y pintar algo en el canvas.
};

window.onresize = actualizar;

actualizar();
```
