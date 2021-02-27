function random(min, max) {
  return Math.random() * (max - min) + min;
}

export default class Ojos {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 0;
    this.y = 0;
    this.radio = 0;
  }

  pintar(x, y, color) {
    const ctx = this.ctx;

    const margenY = 10;
    const radio = Math.abs(y / 3.5);
    this.radio = radio;
    const margenX = radio;
    const radioPupIz = random(radio / 3, radio / 2);
    const radioPupDe = radioPupIz;
    const ojoIzX = x - margenX;
    const ojoIzY = y - margenY;
    const ojoDeX = x + margenX + radio / 2;
    const ojoDeY = ojoIzY;

    const pupIzX = ojoIzX;
    const pupIzY = y - margenY;
    const pupDeX = ojoDeX;
    const pupDeY = y - margenY;

    //Ojo
    ctx.fillStyle = color;
    ctx.strokeStyle = 'rgb(0, 0, 255)';
    ctx.beginPath();
    ctx.arc(ojoIzX, ojoIzY, radio, 0, 2 * Math.PI);
    ctx.arc(ojoDeX, ojoDeY, radio, 0, 2 * Math.PI);
    ctx.fill();

    //Pupila
    ctx.fillStyle = 'rgb(20, 20, 20)';
    ctx.beginPath();
    ctx.arc(pupDeX, pupDeY, radioPupDe, 0, 2 * Math.PI);
    ctx.arc(pupIzX, pupIzY, radioPupIz, 0, 2 * Math.PI);
    ctx.fill();

    //Brillo
    ctx.fillStyle = 'rgb(200, 150, 150)';
    ctx.beginPath();
    ctx.arc(ojoDeX + radio * 0.2, ojoDeY - radio * 0.2, radioPupDe / 2, 0, 2 * Math.PI);
    ctx.arc(ojoIzX + radio * 0.2, ojoIzY - radio * 0.2, radioPupIz / 2, 0, 2 * Math.PI);
    ctx.fill();

    //ceja izq
    if (y > 50) {
      ctx.strokeStyle = 'rgb(0, 0, 0)';
      ctx.lineWidth = radio / 8;
      ctx.beginPath();
      ctx.moveTo(ojoIzX - radio, ojoIzY - radio * 1.1);
      ctx.lineTo(ojoIzX + radio, ojoIzY - radio * 1.7 + x / 10);
      ctx.stroke();
    }

    //ceja der
    if (y > 50) {
      ctx.strokeStyle = 'rgb(0, 0, 0)';
      ctx.lineWidth = radio / 8;
      ctx.beginPath();
      ctx.moveTo(ojoDeX - radio, ojoDeY - radio * 1.7 + x / 10);
      ctx.lineTo(ojoDeX + radio, ojoDeY - radio * 1.1);
      ctx.stroke();
    }

    return this.radio;
  }
}
