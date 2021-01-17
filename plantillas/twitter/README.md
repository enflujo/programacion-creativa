# Twitter API

Un servidor en Koa para probar el API de Twitter.

## Instalación

Instalar dependencias:

```bash
yarn
```

## Configuración

Crear una cuenta de [desarrollador en Twitter](https://developer.twitter.com/)

Crear un proyecto nuevo para obtener los tokens en [Projects & Apps](https://developer.twitter.com/en/portal/projects-and-apps)

Crear un archivo con el nombre `.env` (o hacer una copia de `.env.ejemplo` y nombrarla `.env`) en la ruta inicial de este repositorio y aquí se ponen los **tokens** del proyecto:

```env
COSUMER_KEY=
COSUMER_SECRET=
TOKEN=
TOKEN_SECRET=
```

Cada variable en el `.env` va sin comillas ni espacios justo después de cada `=`

## Desarrollo

Iniciar servidor local:

```bash
yarn start
```
