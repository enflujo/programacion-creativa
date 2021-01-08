const buscador = document.getElementById('buscador');
const resultado = document.getElementById('resultado');

buscador.onkeyup = (e) => {
  if (e.key === 'Enter') {
    const palabra = buscador.value.trim();

    fetch(`/buscar?palabra=${palabra}`).then((respuesta) => {
      respuesta.json().then((tweets) => {
        console.log(tweets);

        if (tweets.statuses) {
          tweets.statuses.forEach((tweet) => {
            const p = document.createElement('p');
            p.innerText = tweet.text;
            resultado.appendChild(p);
          });
        }
      });
    });
  }
};
