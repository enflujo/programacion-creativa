# Herramientas de desarrollo

Esta es una lista básica de herramientas para tener un taller local de desarrollo. Sobre esta base pueden instalar otras herramientas y extensiones según el gusto de cada uno.

## Gestor de aplicaciones

Con estos instalamos aplicaciones de manera global en el computador.

### Windows

Instalar [Chocolatey](https://chocolatey.org/install). Comando para ejecutarlo `choco`.

### Mac

Instalar [Homebrew](https://brew.sh/). Comando para ejecutarlo es `brew`.

### Linux

Ya viene con APT _(Advanced Package Tool)_. Comando para ejecutarlo es: `apt-get`.

## Aplicaciones globales

Con el gestor instalado para su sistema operativo, instalar:

- NodeJS
- [Git](#sobre-git-y-github)
- Yarn

### Windows

```bash
choco install nodejs git yarn
```

### Mac

```bash
brew install node git yarn
```

### Linux

```bash
sudo apt-get update
sudo apt-get dist-upgrade
sudo apt-get install nodejs git yarn
```

## Editor de código

Por consenso y porque nos gustan algunas de sus herramientas, en este espacio usamos Visual Studio Code. Puedes descargarlo aquí: [VSCode](https://code.visualstudio.com/).
[Breve guía de configuración]('/tutoriales/vscode.md')

## Algunas extensiones recomendadas para VSCode

- GitHub Pull Requests and Issues
- GitLens - Git supercharged
- Glitch
- Gitmoji
- indent-raindow
- Settings Sync
- Prettier
- Better Comments
- Github Markdown Preview + sus Extensions Packs.
- Android iOS Emulator
- Color Picker
- CodeStream

## Sobre Git y Github

[Git](https://git-scm.com/) es un software de control de versiones para desarrolladores, es decir, permite manejar distintas versiones de un solo archivo o proyecto e ir y venir entre versiones cómodamente, como si pudiéramos pasear entre dimensiones paralelas de un mismo mundo, probar cosas distintas en cada una y volver atrás, si hace falta. 

[Github](https://github.com/) es una plataforma web para alojar archivos de código que facilita la colaboración entre varias personas que usan Git. Al igual que este, permite controlar los cambios y las versiones de los archivos y, además, sirve para la gestión y la organización de los proyectos. A veces puede ser confuso y tal vez frustrante pero es muy útil. 

Conceptos clave para trabajar con Git y GitHub en repositorios (proyectos) compartidos:

1. Fork: copiar el código de otra persona en el propio repositorio para modificarlo.
2. Pull: enviar los cambios realizados a la otra persona para que los apruebe (Pull Request). 
3. Merge (fusionar): Integrar los cambios hechos por otros al repositorio original, una vez aprobados.
4. Branch(es) (rama(s)): bifurcaciones dentro de un mismo repositorio que permiten tener distintas versiones de los archivos. La rama principal en Git y GitHub solía llamarse Master pero en las últimas versiones se llama Main por polémicas sobre el lenguaje, las jerarquías, el racismo y la esclavitud (a las ramas que no eran Master se les llamaba 'slaves'). 

[Más sobre el trabajo con Git y GitHub]('/tutoriales/git-github/guia_breve.md')
