## Términos

|Términos|Significado / Traducción|
|----------- | ----------- |
|Directory|Carpeta (Directorio).|
|Terminal / Command Line|Línea de comandos.|
|CLI|Interfaz de línea de comandos.|
|cd|Cambio de carpeta (Change Directory).|
|Repo|Proyecto o carpeta donde está el proyecto (Repositorio).|
|fork|copiar el código de otra persona en el propio repositorio para modificarlo.|
|clone|Descargar el repositorio desde internet (Clonar).|
|branch(es)|bifurcación(es) dentro de un mismo repositorio que permiten tener distintas versiones de los archivos (rama). La rama principal en Git y GitHub solía llamarse Master pero en las últimas versiones se llama Main por polémicas sobre el lenguaje, las jerarquías y el racismo (a las ramas que no eran Master se les llamaba 'slaves'). |
|add|Actualizar cambios en Git.|
|commit|Guardar cambios en Git.|
|push|Sincronizar los cambios guardados en Git a un repositorio remoto, como Github.|
|pull|Descargar cambios de un repositorio remoto a tu computadora.|
|merge|Integrar los cambios hechos por otros al repositorio original, una vez aprobados (Fusión).|
|SSH|Protocolo de seguridad que permite el acceso seguro a un repositorio remoto (Secure Shell).|

## Navegar en la terminal - Agregar archivos

```bash
# Devolverse a la carpeta anterior
cd ..

# Devolverse a la ruta inicial del computador
cd ~

# Entrar a alguna carpeta. Nota: "<>" no se escribe
cd <nombre-de-carpeta>

# Truco: para entrar a una carpeta también se puede arrastrar hasta la terminal.

# Crear carpeta mkdir: make directory
mkdir <nombre-de-carpeta>

# Crear un archivo dentro de la carpeta
touch <nombre-de-archivo.extension>

# Abrir VSCode desde la consola
code .

# (En Windows) en caso de tener dos discos duros (C: y D:) cambiar de C a D
D:
```

## Algunos pasos para trabajar con este repositorio usando Git y Github
### Git

1. Descargar e instalar Git con Hombrew o Chocolate. Ver [Herramientas de desarrollo](/tutoriales/general/herramientas-desarrollo.md)
2. Configurar su identidad en Git (nombre de usuario y correo electrónico. Para esto abrir la Terminal (Mac) o el CMD (Windows) y escribir:
```bash
git config --global user.name "Pepa Isaza"
git config --global user.email pepa@example.com
```
3.  Configurar la rama principal por defecto escribiendo en la terminal:
```bash
git config --global init.defaultBranch main
```
4. Pueden confirmar que está correctamente configurado escribiendo en la terminal: 
```bash
git config --list
```

### GitHub - Descargar repositorio

1. Crear una cuenta en [GitHub](https://github.com/).
2. Ir al repositorio original de [enflujo/programación-creativa](https://github.com/enflujo/programacion-creativa) y hacer un fork (copia) en su propia cuenta de GitHub. Para esto deben hacer click en el botón 'fork' de la esquina superior derecha.
3. En su computador, elegir una carpeta donde se alojará su copia local del repositorio de enflujo. Puede ser en sus documentos o directamente en la carpeta de su usuario.
4. Para ubicarse en la carpeta, escribir en la terminal:
```bash
cd la-ruta-de-tu-carpeta-local. 
```
5. Volver a GitHub. En el fork que acaban de crear, hacer click en el botón verde “Code” y copiar la dirección. 
6. De nuevo en la terminal escribir:
```bash
git clone url-repositorio-github
#Ej.: git clone https://github.com/tu-usuario/programacion-creativa.git
```
Esto creará una copia local del repositorio en su computador, conectada con su fork del repositorio en GitHub.

Antes de continuar, deberían descargar [Visual Studio Code](https://code.visualstudio.com/) y configurarlo siguiendo esta [guía]('/tutoriales(vscode.md').

## Branch / rama

Para comenzar a trabajar en cualquiera de los ejercicios, deben crear una rama con el nombre del ejercicio. En la terminal:

```bash
# Crear nueva rama (branch)
git checkout -b <nombre-de-nueva-branch>

# Para cambiar de rama
git checkout <nombre-de-branch>

# Para ver en qué rama estás
git branch
```
Otra forma de crear una nueva rama es abrir la carpeta del proyecto en VSCode (File - Open...). En la esquina inferior izquierda debe aparecer el símbolo de las ramas (parecido al de 'fork' en GitHub) y el nombre de la rama en la que están actualmente (probablemente 'main'). Al hacer click ahí pueden crear una nueva rama. Automáticamente cambiarán a ella. 

## Origin & Upstream

Como nuestro repositorio local está conectado con la copia de GitHub y ambas se actualizarán entre sí cuando lo solicitemos, es importante entender un poco esta lógica de comunicación. Comandos clave:


- Chequear el origen / upstream para asegurarse de que están descargando / subiendo la información desde o hacia el lugar correcto:
(Nota: todo esto en la consola ubicados en la carpeta donde clonaron el repositorio.)
```bash
git remote -v
```
- Si necesitan modificar el link de origen desde donde descargan (en principio, no):
```bash
git remote add origin <link-del-repositorio>
```
- Si necesitan modificar el link hacia el cual están subiendo la información (en principio, no):
```bash
git remote add upstream <link-del-repositorio>
```
- Cambiar la rama 'master' a 'main'
```bash
git branch -M main
```
- Traer actualizaciones del upstream remoto al local
```bash
git fetch upstream
# También puedes usar:
git pull origin main
```
- Unir upstream
```bash
git merge upstream/main <nombre-del-branch>
```
- Traer actualizaciones del origen remoto al local
```bash
git pull origin <nombre-de-branch>
```

## Agregar archivos a un repositorio remoto

Luego de ubicarse en la carpeta creada y en la rama en la que trabajaron:

```bash
# Estado del proyecto
git status

# Agregar toda la carpeta a Git
git add .

# o si quieren agregar un archivo específico a Git
git add <nombre-de-archivo.extension>

# Guardar en Git con un comentario -m: mensaje (2do) -m: comentario
git commit -m "Arreglé el error..." -m "Descripción detallada del error"

# Sincronizar de Git a Github
git push origin <nombre-de-branch>
```

## Enlaces

- [Git and GitHub for Beginners (Video)](https://youtu.be/RGOj5yH7evk)
- [Git Forking & Fetch (Video)](hhttps://youtu.be/deEYHVpE1c8) 
- [Lil Git and Github Tutorial (Video)](https://youtu.be/PdLTopQ253g)
- [Generate SSH Key (Articulo)](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
- [Introducción a Git y Github (Lista de videos)](https://youtube.com/playlist?list=PLozRqGzj97d02YjR5JVqDwN2K0cAiT7VK)