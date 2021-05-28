import './scss/estilos.scss';

const next = document.querySelector('.next');
const next2 = document.querySelector('.next2');
const next3 = document.querySelector('.next3');
const save = document.querySelector('.save');
const save2 = document.querySelector('.save2');
const save3 = document.querySelector('.save3');
const input = document.querySelector('input');
const searchbutton = document.querySelector('.searchbutton');
const cleanbutton = document.querySelector('.cleanbutton');
const botonInicio = document.querySelector('.botonInicio');
const introToBuscar1 = document.querySelector('.introToBuscar1');
const introParte2ToBuscar2 = document.querySelector('.introParte2ToBuscar2');
const introParte3ToBuscar3 = document.querySelector('.introParte3ToBuscar3');
const introParte4ToFinal = document.querySelector('.introParte4ToFinal');
const contadorNum = document.querySelector('.contadorNum');

let pagenr = 1;
let search = false;
let query = '';
let seleccionados = [];

///// 



function pg2() {
  input.addEventListener('input', (e) => {
    e.preventDefault();
    query = e.target.value;
  })

  async function SearchPhotos(query) {
    const url = `https://www.metmuseum.org/api/collection/collectionlisting?q=${query}`;
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    crearGaleria(datos.results, '.gallery')
  }
  async function metPhotos() {
    const url = `https://www.metmuseum.org/api/collection/collectionlisting?q=test&offset=0&pageSize=0&sortBy=Relevance&sortOrder=asc&perPage=20`;
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    crearGaleria(datos.results, '.gallery')
  }
  metPhotos();

  next.addEventListener('click', () => {
    buscar1.classList.add('hidden');
    introParte2.classList.remove('hidden');
  })

  searchbutton.addEventListener('click', () => {
    if (input.value === '') return;
    clear();
    search = true;
    SearchPhotos(query);
    pagenr++;
  });
}
///////

function crearGaleria(datos, selector) {
  datos.forEach(img => {
    let checkboxID = img.url;
    const largeImage = img.primaryImage ? `<img src="${img.primaryImage}">` : `<img src=https://images.metmuseum.org/CRDImages/${img.largeImage}>`;
    const pic = document.createElement('div.itemGaleria');
    pic.innerHTML = `<input type="checkbox" id="${checkboxID}">
  <label for="${checkboxID}">${largeImage}</label>
  <p class="first">Título: ${img.title}</p>
  <p>Artista: ${img.artist}</p>
  <p>Fecha: ${img.date}</p>
  <p><a href="${img.primaryImage}">Ampliar imagen</a></p>
  `;
    document.querySelector(selector).appendChild(pic);
  })
}

/////

function pg3() {
  input.addEventListener('input', (e) => {
    e.preventDefault();
    query = e.target.value;
  })
  async function SearchPhotos(query) {
    const url = `https://www.metmuseum.org/api/collection/collectionlisting?q=${query}`;
    const respuesta = await fetch(url);
    const {results} = await respuesta.json();
    crearGaleria(results, '.gallery2');
  }
  async function cargarImagenesPorId() {
    const grupo = [];
    for (let i = 0; i < 30; i++) {
      const datos = await metPhotos2();
      if (datos.primaryImage) {
        grupo.push({
          url: datos.objectID,
          primaryImage: datos.primaryImage,
          artist: datos.artistDisplayName,
          date: datos.objectDate,
          title: datos.title
        });
      } else {
        // Que hacer cuando no encuentra la imagen?
      }
    }
    console.log(contador, contador2, grupo);
    crearGaleria(grupo, '.gallery2');
  }

  function randomID(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  let contador = 0;
  let contador2 = 0;

  async function metPhotos2() {
    // Sacar los ids disponibles desde antes
    // este endpoint los muestra todos: https://collectionapi.metmuseum.org/public/collection/v1/objects
    let ID = randomID(0, 4700);
    // https://collectionapi.metmuseum.org/public/collection/v1/objects/
    const url = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${ID}`;
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    
    // let ID = randomID(0, objectIDs.length); Fetch para traer los IDs
    // // https://collectionapi.metmuseum.org/public/collection/v1/objects/
    // const url = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectIDs[ID]}`;
    // const respuesta = await fetch(url);
    // const datos = await respuesta.json();
    
    if (datos.objectID) {
      contador++;
      return datos;
    } else {
      contador2++;
      return await metPhotos2();
    }
    
  }

  cargarImagenesPorId();

  next2.addEventListener('click', () => {
    buscar2.classList.add('hidden');
    introParte3.classList.remove('hidden');
  });

  searchbutton.addEventListener('click', () => {
    if (input.value === '') return;
    clear();
    search = true;
    SearchPhotos(query);
    pagenr++;
  });
}

//////

function pg4() {
  input.addEventListener('input', (e) => {
    e.preventDefault();
    query = e.target.value;
  })
  async function SearchPhotos(query) {
    const url = `https://www.metmuseum.org/api/collection/collectionlisting?q=${query}`;
    const respuesta = await fetch(url);
    const {results} = await respuesta.json();
    crearGaleria(results, '.gallery3');
  }
  async function cargarImagenesPorId() {
    const grupo = [];
    for (let i = 0; i < 30; i++) {
      const datos = await metPhotos2();
      if (datos.primaryImage) {
        grupo.push({
          url: datos.objectID,
          primaryImage: datos.primaryImage,
          artist: datos.artistDisplayName,
          date: datos.objectDate,
          title: datos.title
        });
      } else {
        // Que hacer cuando no encuentra la imagen?
      }
    }
    console.log(contador, contador2, grupo);
    crearGaleria(grupo, '.gallery3');
  }

  function randomID(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  let contador = 0;
  let contador2 = 0;

  async function metPhotos2() {
    // Sacar los ids disponibles desde antes
    // este endpoint los muestra todos: https://collectionapi.metmuseum.org/public/collection/v1/objects
    let ID = randomID(0, 4700);
    // https://collectionapi.metmuseum.org/public/collection/v1/objects/
    const url = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${ID}`;
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    
    // let ID = randomID(0, objectIDs.length); Fetch para traer los IDs
    // // https://collectionapi.metmuseum.org/public/collection/v1/objects/
    // const url = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectIDs[ID]}`;
    // const respuesta = await fetch(url);
    // const datos = await respuesta.json();
    
    if (datos.objectID) {
      contador++;
      return datos;
    } else {
      contador2++;
      return await metPhotos2();
    }
    
  }

  cargarImagenesPorId();

  next3.addEventListener('click', () => {
    buscar3.classList.add('hidden');
    introParte4.classList.remove('hidden');
  });

  searchbutton.addEventListener('click', () => {
    if (input.value === '') return;
    clear();
    search = true;
    SearchPhotos(query);
    pagenr++;
  });
}


////

cleanbutton.addEventListener('click', () => {
  clear();
});
inicio.addEventListener('click', () => {
  inicio.classList.add('hidden');
  intro.classList.remove('hidden');
  pg2();
});
introToBuscar1.addEventListener('click', () => {
  intro.classList.add('hidden');
  buscar1.classList.remove('hidden');
})
introParte2ToBuscar2.addEventListener('click', () => {
  introParte2.classList.add('hidden');
  buscar2.classList.remove('hidden');
  pg3();
})
introParte3ToBuscar3.addEventListener('click', () => {
  introParte3.classList.add('hidden');
  buscar3.classList.remove('hidden');
  pg4();
})
introParte4ToFinal.addEventListener('click', () => {
  introParte4.classList.add('hidden');
  galeriaFinal.classList.remove('hidden');
  seleccionadasFinal();
  setTimeout(function () {
    document.querySelector('.miniaturas4').innerHTML = '';
    galeriaFinal.classList.add('hidden');
    palabrasFinales.classList.remove('hidden');
  }, 20000);
})

function clear() {
  input.value = '';
  document.querySelector('.gallery').innerHTML = '';
  pagenr = 1;
}

save.addEventListener('click', () => {
  GetSelected();
  for (let i = 0; i < seleccionados.length; i++){
    const thumbImg = seleccionados[i];
    const element = document.createElement('div');
    element.className = 'miniaturasImg'
    element.innerHTML = `<img src=${thumbImg}>`;
    document.querySelector('.miniaturas').appendChild(element);
  }
});
save2.addEventListener('click', () => {
  GetSelected();
  for (let i = 0; i < seleccionados.length; i++){
    const thumbImg = seleccionados[i];
    const element = document.createElement('div');
    element.className = 'miniaturasImg'
    element.innerHTML = `<img src=${thumbImg}>`;
    document.querySelector('.miniaturas2').appendChild(element);
  }
});
save3.addEventListener('click', () => {
  GetSelected();
  for (let i = 0; i < seleccionados.length; i++){
    const thumbImg = seleccionados[i];
    const element = document.createElement('div');
    element.className = 'miniaturasImg'
    element.innerHTML = `<img src=${thumbImg}>`;
    document.querySelector('.miniaturas3').appendChild(element);
  }
});

function GetSelected() {
  let chks = document.getElementsByTagName("input");
  for (let i = 0; i < chks.length; i++) {
    const input = chks[i];
    if (input.checked) {
      const img = document.querySelector(`label[for="${input.id}"] img`);
      if (!seleccionados.includes(img.src)) {
        seleccionados.push(img.src);
      }
      
    }
  }
  console.log(seleccionados);
};

function seleccionadasFinal() {
  for (let i = 0; i < seleccionados.length; i++){
    const imgSeleccionada = seleccionados[i];
    const element = document.createElement('div');
    element.className = 'imagenesFinales'
    element.innerHTML = `<img src=${imgSeleccionada}>`;
    document.querySelector('.miniaturas4').appendChild(element);
  }
}

