# Webpack

Un compilador robusto con muchas opciones para configurarlo. Si queremos tener control total de la compilación, es la mejor opción.

Si quieren aprender sobre compiladores, es bueno aprender Webpack para saber lo que hacen los otros internamente.

- :white_check_mark: Cada detalle de la compilación la podemos configurar a la medida.
- :white_check_mark: Uso masivo en la comunidad, muchos tutoriales y extensiones.
- :white_check_mark: No abstrae tanto como los otros compiladores, lo que le ponemos es lo que hace.
- :x: La libertad de configuración implica una alta curva de aprendizaje.
- :x: Puede ser confuso ya que hay tantas formas de configurarlo.

Configurarlo desde cero y que funcione bien toma tiempo, si queremos abstraer ese proceso y comenzar rápido un proyecto puede ser mejor utilizar uno preconfigurado como Parcel, Rollup, Snowpack, etc. (:zap: O usar esta plantilla y modificarla si es necesario :zap:)

## Lo que esta configurado en esta plantilla

- Compila JS con Babel.
- Compila SCSS.
- Usa "autoprefixer" para el CSS (ver `"browserslist" : {...}` en `package.json`)
- Crea servidor local con `yarn start`.
- "Live reloading".
- Minifica HTML, CSS y JS en `yarn build`.

## Instalación

```bash
yarn
```

## Iniciar servidor local

```bash
yarn start
```

## Compilar archivos para subir a servidor

```bash
yarn build
```

Lo que subimos al servidor queda en la carpeta `/www`.
