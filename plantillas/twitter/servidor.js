const { createReadStream } = require('fs');
const Koa = require('koa');
const Router = require('@koa/router');
const Twitter = require('twitter');

const app = new Koa();
const router = new Router();
app.use(require('koa-static')('./www'));

const cliente = new Twitter({
  consumer_key: 'AYxGY5o2s7IO3H2Ged7zGofcB',
  consumer_secret: 'VmbNrejndhD5bn5Z0Raehy2d1wdJZr0hO3w9A7gRLoWGq2xz3n',
  access_token_key: '2439782282-wdj7emp7QglgeyvdhLhm22dPSn1lV9Bf4ht1jRA',
  access_token_secret: 'K1TceEPrgihcdzU5ESh6WXoJ0K468qTDxpzMzuzIwqW3Z',
});

router.get('/', async (ctx) => {
  ctx.type = 'html';
  ctx.body = createReadStream('index.html');
});

// Aquí buscamos en el API de Twitter desde Node y le enviamos la respuesta al explorador
router.get('/buscar', async (ctx) => {
  const { palabra } = ctx.request.query;

  function buscarEnTwitter() {
    return new Promise((resolver) => {
      cliente.get('search/tweets', { q: palabra }, (error, tweets, response) => {
        resolver(tweets);
      });
    });
  }

  ctx.body = await buscarEnTwitter();
});

app.use(router.routes()).use(router.allowedMethods());
app.listen(8080, () => console.log('Servidor corriendo en puerto 8080'));
