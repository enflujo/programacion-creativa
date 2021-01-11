## Terminos

|Terminos|Significado / Traducción|
|----------- | ----------- |
|Directory|Carpeta (Directorio)|
|Terminal / Command Line|Linea de comandos|
|CLI|Interfaz de línea de comandos|
|cd|Cambio de carpeta (Change Directory)|
|Repo|Proyecto o carpeta donde está el proyecto (Repositorio)|
|clone|Descargar el repositorio desde internet (clonar)|
|add|Actualizar cambios en Git|
|commit|Guardar cambios en Git|
|push|Sincronizar los cambios guardados en Git a un repositorio remoto, como Github|
|pull|Descargar cambios de un repositorio remoto a tu computadora|
|SSH|Protocolo de seguridad que permite el acceso seguro a un repositorio remoto (Secure Shell)|

## Navegar - Agregar archivos

```bash
# cd: Cambiar Directorio ..: ir hacia atrás
cd ..

# Entrar a alguna carpeta. Nota: "<>" no se escribe
cd <nombre-de-carpeta>

# Crear carpeta mkdir: make directory
mkdir <nombre-de-carpeta>

# Crear un archivo dentro de la carpeta
touch <nombre-de-archivo.extension>

# Abrir VSCode desde la consola
code .

# (En Windows) en caso de tener dos discos duros (C: y D:) cambiar de C a D
D:
```

## Descargar repositorio
```bash
# Recuerda estar en la carpeta local en la que quieres clonar el repositorio
git clone <pegar SSH o link>
```

## Agregar archivos a un repositorio remoto

```bash
# Luego de ubicarte en la carpeta creada: iniciar un repositorio local
git init

# Estado del proyecto
git status

# Agregar toda la carpeta a Git
git add .

# o si quieres agregar un archivo específico a Git
git add <nombre-de-archivo.extension>

# Guardar en Git con un comentario -m: mensaje (2do) -m: comentario
git commit -m "Arreglé el error..." -m "Descripción detallada del error"

# Sincronizar de Git a Github
git push origin <nombre-de-branch>
```

## Branch / rama

```bash
# Crear nuevo rama (branch)
git checkout -b <nombre-de-nuevo-branch>

# Para cambiar de rama
git checkout <nombre-de-branch>
```

## Origin & Upstream

```bash
# Chequear el origen / upstream
git remote -v

# Agregar repositorio al origen
git remote add origin <link-del-repositorio>

# Agregar upstream al repositorio
git remote add upstream <link-del-repositorio>

# Traer actualizaciones del upstream remoto al local
git fetch upstream

# Unir upstream
git merge upstream/main <nombre-del-branch>

# Cambiar de master a main
git branch -M main

# Traer actualizaciones del origen remoto al local
git pull origin <nombre-de-branch>
```

## Enlaces


- [Git and GitHub for Beginners (Video)](https://youtu.be/RGOj5yH7evk)
- [Git Forking & Fetch (Video)](hhttps://youtu.be/deEYHVpE1c8) 
- [Lil Git and Github Tutorial (Video)](https://youtu.be/PdLTopQ253g)
- [Generate SSH Key (Articulo)](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
- [Introducción a Git y Github (Lista de videos)](https://youtube.com/playlist?list=PLozRqGzj97d02YjR5JVqDwN2K0cAiT7VK)