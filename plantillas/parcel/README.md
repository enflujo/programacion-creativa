# Parcel

Uno de tantos compiladores que tiene la opción de crear un servidor local.

- :white_check_mark: Compila el JS a ES6 con Babel usando una configuración básica (se puede extender).
- :white_check_mark: Tiene "Live reload" predeterminado.
- :white_check_mark: Mínima configuración para comenzar rápido escribiendo código.
- :white_check_mark: "HMR" incluido, recompila rápido al guardar cambios en el código.
- :x: Al tener tantas opciones preconfiguradas, puede ser un poco pesado.
- :x: Abstrae mucho la configuración, si necesita más control sobre el compilador es mejor usar Webpack.

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
