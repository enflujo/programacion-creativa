import './scss/estilos.scss';

const auth = '563492ad6f917000010000019af70a7194ed4e84b6d4c151fe304fd1';
const next = document.querySelector('.next');
const input = document.querySelector('input');
const searchbutton = document.querySelector('.searchbutton');
const cleanbutton = document.querySelector('.cleanbutton');

let pagenr = 1;
let search = false;
let query = '';

input.addEventListener('input', (e) => {
  e.preventDefault();
  query = e.target.value;
})

async function SearchPhotos(query) {
  const url = `https://www.metmuseum.org/api/collection/collectionlisting?q=${query}`;
  const respuesta = await fetch(url);
  const datos = await respuesta.json();
  console.log(datos);
  datos.results.forEach(img => {
    console.log(datos);
    const pic = document.createElement('div');
    pic.innerHTML = `<img src=https://images.metmuseum.org/CRDImages/${img.largeImage}>
    <p>Título: ${img.title}</p>
    <p>Artista: ${img.artist}</p>
    <p>Fecha: ${img.date}</p>
    <p>Cultura: ${img.culture}</p>
    `;
    document.querySelector('.gallery').appendChild(pic);
  })
}
async function metPhotos() {
    const url = `https://www.metmuseum.org/api/collection/collectionlisting?q=test&offset=0&pageSize=0&sortBy=Relevance&sortOrder=asc&perPage=20`;
    const respuesta = await fetch(url);
  const datos = await respuesta.json();
  console.log(datos);
  datos.results.forEach(img => {
    const pic = document.createElement('div');
    pic.innerHTML = `<img src=https://images.metmuseum.org/CRDImages/${img.largeImage}>
    <p>Título: ${img.title}</p>
    <p>Artista: ${img.artist}</p>
    <p>Fecha: ${img.date}</p>
    <p>Cultura: ${img.culture}</p>
    `;
    document.querySelector('.gallery').appendChild(pic);
  })
}
searchbutton.addEventListener('click', () => {
  if (input.value === '') return;
  clear();
  search = true;
  SearchPhotos(query);
});
cleanbutton.addEventListener('click', () => {
  document.querySelector('.gallery').innerHTML = '';
  pagenr = 1;
});

function clear () {
  input.value = '';
  document.querySelector('.gallery').innerHTML = '';
  pagenr = 1;
}

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
metPhotos();