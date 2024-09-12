## ¿Qué es Node.js?

Node.js es un entorno de ejecución para Javascript y permite que puedas usar JavaScript para crear servidores web, trabajar con bases de datos, y construir aplicaciones completas. En otras palabras, <u>te permite usar JavaScript para hacer aplicaciones tanto del lado del servidor (backend), como en el navegador (frontend).</u>

#### ¿Por qué instalar Node.js?
Algunas de las razones comunes por las que podrías querer instalar Node.js son:

**Desarrollo de Aplicaciones:** Si estás desarrollando aplicaciones web, especialmente si usas tecnologías como React, Angular, o Vue, Node.js es muy útil porque muchas herramientas de desarrollo y frameworks están basados en él.

**Ejecución de Scripts:** Puedes usar Node.js para ejecutar scripts que realicen tareas automáticas, como procesar archivos, interactuar con APIs, etc.

**Servidor Web:** Puedes usar Node.js para construir servidores web que manejen peticiones y respuestas, similar a cómo funcionan servicios en línea.

**Manejo de Paquetes:** Node.js incluye un gestor de paquetes llamado npm (Node Package Manager), que te permite instalar y gestionar librerías y herramientas que facilitan el desarrollo :raised_hands:.

## **¿Cómo instalar Node.js desde la terminal?**
A continuación, te mostraremos una guía rápida para instalar Node.js en sistemas basados en Debian/Ubuntu (como en la mayoría de las distribuciones de Linux):

1. Abre la **Terminal**.

2. Actualiza la lista de paquetes (opcional pero recomendado):
```bash
sudo apt update
```
3. **Instala Node.js**. (En la mayoría de los sistemas, puedes usar el siguiente comando para instalar la versión estable):
```bash
sudo apt install nodejs
```

4. Instala **npm** (gestor de paquetes para Node.js en el que se encuentran gran variedad de librerías de código que te pueden servir para facilitar tu desarrollo con Javascript):
```bash
sudo apt install npm
```

5. Verifica la instalación. Puedes comprobar que Node.js y npm se instalaron correctamente con estos comandos (que también sirven para verificar la versión de **Node.js** y de **npm** que tienes actualmente):
```bash
node -v
```
```bash
npm -v
```

6. Como paso adicional vamos a instalar un paquete para gestionar las versiones de Node, utilizando npm (Node Package Manager). Tranquilo, vamos a desglosar qué hace cada parte del comando:

```bash
sudo npm install -g n
```
- `sudo`: Ejecuta el siguiente comando con privilegios de **superusuario**. Esto es necesario para instalar paquetes globalmente porque requiere **permisos de administrador**.

- `npm`: Es el gestor de paquetes para Node.js, utilizado para instalar y gestionar librerías y herramientas.

- `install`: Es el comando de npm que se usa para instalar paquetes.

- `-g`: Significa "global". Cuando instalas un paquete globalmente, está disponible para todos los usuarios y se puede ejecutar desde cualquier lugar del sistema. Los paquetes globales suelen ser herramientas o utilidades que se utilizan desde la línea de comandos.
- `n`: Es el nombre del paquete que estás instalando. n es un <u>gestor de versiones para Node.js</u>. Permite instalar, actualizar y cambiar entre diferentes versiones de Node.js de manera sencilla.

### ¿Qué hace `n`?
El paquete `n` es una herramienta que facilita el manejo de múltiples versiones de Node.js en tu sistema. Con `n`, puedes:

- **Instalar diferentes versiones de Node.js:** Si necesitas probar tu aplicación en diferentes versiones de Node.js, n te permite instalar y cambiar entre esas versiones fácilmente.
**Actualizar Node.js:** Puedes actualizar a la última versión de Node.js con un simple comando.
**Gestionar versiones:** Puedes listar, seleccionar y usar diferentes versiones de Node.js sin complicaciones.

### ¿Cómo usar `n` después de instalarlo?
Una vez que has instalado `n` con el comando `sudo npm install -g n`, puedes usarlo para gestionar versiones de Node.js. Aquí hay algunos comandos útiles:

- **Instalar una versión específica de Node.js. Ejemplo:**
```bash
sudo n 18.15.0
```
Instalará la versión 18.15.0 de Node.js.
- **Actualizar a la última versión LTS (en inglés Long-Term Support o Soporte a Largo Plazo):**
```bash
sudo n lts
```
- **Instalar la última versión de Node.js:**
```bash
sudo n latest
```
- **Ver las versiones:**
```bash
n
```
- **Cambiar entre versiones instaladas:** Ejecuta `n` y selecciona la versión deseada desde el menú interactivo.

¡Y eso es todo! Con Node.js y npm instalados, estás listo para empezar a desarrollar aplicaciones y usar herramientas modernas basadas en JavaScript. :clap::clap::clap:

Mucha suerte en tu viaje. :rocket::milky_way: