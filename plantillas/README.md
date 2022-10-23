# Plantillas para desarrollar aplicaciones localmente

Una serie de ejemplos para iniciar una aplicación. Prueben cada una, investiguen cómo funcionan, sepan que existen y aprendan a diferenciarlas, miren a ver cuál les gusta más para iniciar sus experimentos. En la vida real como programadores uno salta de una a otra dependiendo de lo que necesita.

La que les recomiendo por su facilidad de usar, velocidad para [transpilar](../Glosario.md#compilador--transpilador-babel) es [Vite](../plantillas/vite/)

## Algunos conceptos a tener en cuenta

### HTML estático (static HTML)

Cuando lo único que le pedimos al servidor es que nos mande archivos. No tiene base de datos ni puede procesar los recursos antes de mandarlos. Simplemente recibe petición de recursos y los manda tal cual están en el servidor.

Todos los recursos se piden inicialmente desde el `index.html`.

### HTML dinámico

Cuando usamos base de datos o necesitamos hacer algún proceso directamente en el servidor.

Por ejemplo, una página que usa un CMS como WordPress no tiene un `index.html` sino que el punto de entrada es `index.php`. Cuando hacemos la petición de esta página, el `index.html` se construye dinámicamente en el servidor antes de enviarlo como respuesta al explorador.

Una pista es que nunca encontramos un `index.html` sino que este archivo tiene otra extensión: `index.php`, `index.py`, `index.hbs`, etc.

## Tipos de plantillas

### Sólo servidor

- browsersync
- simple-node
- simple-python

### Servidor desde compilador

- parcel
- _rollup_
- _snowpack_
- webpack
