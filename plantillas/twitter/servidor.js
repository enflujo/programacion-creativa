const { createReadStream } = require('fs');
const Koa = require('koa');
const Router = require('@koa/router');
const Twitter = require('twitter');
const dotEnv = require('dotenv');

dotEnv.config();

const app = new Koa();
const router = new Router();
app.use(require('koa-static')('./www'));

const cliente = new Twitter({
  consumer_key: process.env.COSUMER_KEY,
  consumer_secret: process.env.COSUMER_SECRET,
  access_token_key: process.env.TOKEN,
  access_token_secret: process.env.TOKEN_SECRET,
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
