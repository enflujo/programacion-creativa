# Editor de Código

Para escribir en lenguajes de programación se necesita un editor de código.

Hay muchos: unos más sencillos (editores de texto plano) y otros más complejos conocidos como Entornos de Desarrollo Integrado o Integrated Development Environment (IDE).

VSCode ([Visual Studio Code](https://code.visualstudio.com/)) es el que usamos aquí. Nos permite mantener la homogeneidad del código y comunicarnos dejando observaciones y comentarios en el código de otras personas. Para esto, es importante instalar y configurar algunas extensiones antes de comenzar:

1. **Prettier:** Asegura que el formato de nuestro código respete el estilo del repositorio para facilitar la lectura y mantener el orden.
   _Instalación: hacer click en el ícono de Extensiones en la barra lateral izquierda de Visual Studio Code (3 cuadraditos + 1), buscar “prettier” y hacer click en "Install" al lado de la extensión Prettier: Code format..._

## Configuración

Ir al ícono de engranaje ("Manage") en la esquina inferior izquierda y hacer click en "Settings". Usando el buscador allí, buscar lo que aparece entre comillas a continuación y asignar los siguientes valores:

"editor.formatOnSave": chuleado  
"editor.tabSize": 2  
"editor.wordWrapColumn": 120  
"eslint.packageManager": yarn  
"prettier.jsxSingleQuote": chuleado  
"prettier.singleQuote": chuleado
