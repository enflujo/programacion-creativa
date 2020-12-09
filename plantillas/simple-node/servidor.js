// Ejemplo de: https://developer.mozilla.org/en-US/docs/Learn/Server-side/Node_server_without_framework

const http = require('http');
const fs = require('fs');
const { extname } = require('path');

http
  .createServer((request, response) => {
    console.log('request ', request.url);

    let ruta = '.' + request.url;
    if (ruta == './') ruta = './www/index.html';

    const extension = String(extname(ruta)).toLowerCase();
    const mimeTypes = {
      '.html': 'text/html',
      '.js': 'text/javascript',
      '.css': 'text/css',
      '.json': 'application/json',
      '.png': 'image/png',
      '.jpg': 'image/jpg',
      '.gif': 'image/gif',
      '.svg': 'image/svg+xml',
      '.wav': 'audio/wav',
      '.mp4': 'video/mp4',
      '.woff': 'application/font-woff',
      '.ttf': 'application/font-ttf',
      '.eot': 'application/vnd.ms-fontobject',
      '.otf': 'application/font-otf',
      '.wasm': 'application/wasm',
    };

    const contentType = mimeTypes[extension] || 'application/octet-stream';

    fs.readFile(ruta, (error, content) => {
      if (error) {
        if (error.code == 'ENOENT') {
          fs.readFile('./404.html', (error, content) => {
            response.writeHead(404, { 'Content-Type': 'text/html' });
            response.end(content, 'utf-8');
          });
        } else {
          response.writeHead(500);
          response.end('Sorry, check with the site admin for error: ' + error.code + ' ..\n');
        }
      } else {
        response.writeHead(200, { 'Content-Type': contentType });
        response.end(content, 'utf-8');
      }
    });
  })
  .listen(8080);

console.log('Servidor iniciado en localhost:8080');
