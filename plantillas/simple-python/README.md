# Servidor local con Python

Para hacer de una carpeta en el computador un servidor local que expone HTML estático.

## Python 2

En el terminal vamos a la carpeta que contenga el `index.html` y corremos este comando

```bash
python -m SimpleHTTPServer 8080
```

Crea un servidor local que abrimos en el explorador en: `localhost:8080`.

El `8080` es el puerto y puede ser otro numero diferente a 8080.

## Python 3

Los mismos pasos que el anterior pero el comando es:

```bash
python -m http.server 8080
```

Crea un servidor local que abrimos en el explorador en: `localhost:8080`.

## Instalar Python

Los Macs vienen con Python 2 instalado así que se puede usar el primero sin hacer nada más.

En Windows debemos instalarlo con "Chocolatey". La versión 2 es estable y muchos tutoriales en Internet usan esta versión.

```bash
choco install python2
```

## Apagar el servidor

En el terminal oprimir Ctrl+C para apagar el proceso.