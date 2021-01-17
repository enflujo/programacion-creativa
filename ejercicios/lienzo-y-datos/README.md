# Lienzo y Datos

Este ejercicio lo van a hacer por fases, la primera la describo acá y con cáda Pull Request les pido algo adicional para ir complejizando la aplicación.

## Fase 1

- Como en todos los ejercicios, seguir las [instrucciones generales](../). (crear branch, etc...)
- Usar plantilla de webpack.
- Crear un `<canvas>` en el HTML. Este debe tener un ID único.
- El Canvas debe ocupar toda la pantalla.
- En JS deben:
  - Buscar en el DOM el canvas por su ID.
  - Crear 2 eventos: `onresize` y `onmousemove`. En `onresize` deben ajustar el canvas al tamaño de la pantalla y definir las propiedades del contexto. En `onmousemove` deben extraer las coordenadas del mouse y pintar en el canvas algo dentro de esas coordenadas.

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