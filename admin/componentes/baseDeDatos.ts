import Loki, { type Collection } from 'lokijs';

export default (): Promise<Collection> => {
  return new Promise((res) => {
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
