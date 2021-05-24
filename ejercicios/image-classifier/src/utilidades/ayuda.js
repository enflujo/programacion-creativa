export async function iniciarCamara(dims) {
  let fuente = null;

  try {
    fuente = await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: { width: { min: 400, ideal: 540, max: 960 }, height: { min: 225, ideal: 360, max: 540 } },
    });
    const camara = document.getElementById('webcam');
    camara.srcObject = fuente;
    camara.onloadedmetadata = () => {
      camara.play();
    };
    return camara;
  } catch (err) {
    console.log(`Tipo de error: ${err.name}\nExplicación del error: ${err.message}`);
    return;
  }
}