# Ejercicios

Acá vamos a poner todos los ejercicios que hagan. Pueden hacerlos en desorden si quieren.

Para hacer un ejercicio deben seguir siempre los mismos pasos:

1. Crear un _branch_ con el nombre del ejercicio, por ejemplo: `bodegon` (siempre sin tildes, espacios y en minúsculas).
2. Dentro de la carpeta del ejercicio, crear una nueva carpeta con su usuario de Github, en mi caso esa carpeta siempre va a ser `1cgonza`.
3. En esta carpeta poner los archivos de su plantilla y asegurarse que la compilación exporte a una carpeta llamada `www`. **IMPORTANTE** Si no van a usar plantilla, poner los archivos estáticos en la carpeta `www` directamente y no usar `.gitignore` ya que siempre omitimos la carpeta `www` en `.gitignore`.
4. Cuando terminen mandan un _Pull Request_ desde su branch a éste repositorio.
5. Esperan comentarios y si les pido cambios los hacen haciendo `push` desde el branch. (El _Pull Request_ se actualiza con cada push nuevo).
6. Cuando se acepten los cambios y yo haga _merge_ de su _Pull Request_. Pueden borrar el branch que crearon para el ejercicio.

Ejemplo de la estructura que deben crear para cada ejercicio:

## Sin Plantilla o compilador

```bash
/programación-creativa
  /ejercicios
    /bodegon
      /1cgonza
        /www
          index.html
        .gitignore
```

El `.gitignore` en este caso es muy sencillo, sólo queremos evitar archivos temporales del sistema operativo.

```bash
# Temporales
.DS_Store
._*
.Spotlight-V100
.Trashes
ehthumbs.db
Thumbs.db
```

## Con Parcel

```bash
/programación-creativa
  /ejercicios
    /bodegon
      /1cgonza
        /.cache (ignorado en .gitignore)
        /node_modules (ignorado en .gitignore)
        /src
          index.html
        /www (ignorado en .gitignore)
        .gitignore
        package.json
        yarn.lock
```

El `package.json` es algo así:

```json
{
  "name": "bodegon",
  "version": "0.0.1",
  "author": "Juan Camilo González Jiménez <info@juancgonzalez.com>",
  "license": "MIT",
  "scripts": {
    "clean": "rimraf www/",
    "start": "yarn run clean && parcel src/index.html --out-dir www -p 8080",
    "build": "parcel build index.html --out-dir www"
  },
  "devDependencies": {
    "parcel-bundler": "^1.12.4"
  }
}
```

El archivo `.girignore` es algo así:

```bash
# Carpetas de desarrollo
www # IGNORAMOS www YA QUE NUESTRO CÓDIGO ESTA EN /src ASÍ QUE NO NECESITAMOS DUPLICADOS.
node_modules
.cache
*.log

# Temporales
.DS_Store
._*
.Spotlight-V100
.Trashes
ehthumbs.db
Thumbs.db
```

## Con browsersync

```bash
/programacion-creativa
  /ejercicios
    /bodegon
      /1cgonza
        /node_modules (ignorado en .gitignore)
        /www
          index.html
        .gitignore
        package.json
        servidor.js
        yarn.lock
```

Usamos `.gitignore` pero en este caso NO ignoramos la carpeta `www` como en el caso de Parcel y otros compiladores.

```bash
# Carpetas de desarrollo (NO TENEMOS www EN ESTE CASO)
node_modules
.cache
*.log

# Temporales
.DS_Store
._*
.Spotlight-V100
.Trashes
ehthumbs.db
Thumbs.db
```
