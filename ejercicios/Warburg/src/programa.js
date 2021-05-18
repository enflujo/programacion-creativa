import './scss/estilos.scss';

const auth = '563492ad6f917000010000019af70a7194ed4e84b6d4c151fe304fd1';
const next = document.querySelector('.next');
const save = document.querySelector('.save');
const input = document.querySelector('input');
const searchbutton = document.querySelector('.searchbutton');
const cleanbutton = document.querySelector('.cleanbutton');
const botonInicio = document.querySelector('.botonInicio');
const introToBuscar1 = document.querySelector('.introToBuscar1');

let pagenr = 1;
let search = false;
let query = '';

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
    datos.results.forEach(img => {
      let checkboxID = img.url;
      const pic = document.createElement('div');
      pic.innerHTML = `<input type="checkbox" id="${checkboxID}">
    <label for="${checkboxID}"><img src=https://images.metmuseum.org/CRDImages/${img.largeImage}></label>
    <p class="first">Título: ${img.title}</p>
    <p>Artista: ${img.artist}</p>
    <p>Fecha: ${img.date}</p>
    `;
      document.querySelector('.gallery').appendChild(pic);
    })
  }
  async function metPhotos() {
    const url = `https://www.metmuseum.org/api/collection/collectionlisting?q=test&offset=0&pageSize=0&sortBy=Relevance&sortOrder=asc&perPage=3`;
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    console.log(datos);
    datos.results.forEach(img => {
      let checkboxID = img.url;
      const pic = document.createElement('div.itemGaleria');
      pic.innerHTML = `<input type="checkbox" id="${checkboxID}">
    <label for="${checkboxID}"><img src=https://images.metmuseum.org/CRDImages/${img.largeImage}></label>
    <p class="first">Título: ${img.title}</p>
    <p>Artista: ${img.artist}</p>
    <p>Fecha: ${img.date}</p>
    `;
      document.querySelector('.gallery').appendChild(pic);
    })
  }
  metPhotos();

  next.addEventListener('click', () => {
    if (!search) {
      pagenr++;
      metPhotos();
    }
    else {
      if (query.value === '') return;
      pagenr++;
      SearchPhotos(query)
    }
  })
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
function clear () {
  input.value = '';
  document.querySelector('.gallery').innerHTML = '';
  pagenr = 1;
}

save.addEventListener('click', () => {
  GetSelected();
})

function GetSelected() {
  let seleccionados = [];
  let chks = document.getElementsByTagName("input");
  for (let i = 0; i < chks.length; i++) {
    const input = chks[i];
    if (input.checked) {
      const img = document.querySelector(`label[for="${input.id}"] img`);
      seleccionados.push(img.src);
    }
    if (seleccionados.length > 0) {
      alert("Valores: " + seleccionados.join(","));
    }
  }
  
};

