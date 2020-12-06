# Bodegón

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
