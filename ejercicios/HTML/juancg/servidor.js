const { init, reload } = require('browser-sync').create();

init({
  watch: true,
  open: false,
  server: './www',
});

reload('*.html');
