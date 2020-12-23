const Loki = require('lokijs');

module.exports = () => {
  return new Promise((res, rech) => {
    const bd = new Loki('admin/datos.db', {
      autoload: true,
      autoloadCallback: iniciarBd,
      autosave: true,
      autosaveInterval: 4000,
    });

    function iniciarBd() {
      let entradas = bd.getCollection('entradas');

      if (entradas === null) {
        entradas = bd.addCollection('entradas');
      }

      res(entradas);
    }
  });
};
