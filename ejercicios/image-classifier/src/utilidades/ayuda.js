export async function iniciarCamara(dims) {
  let fuente = null;

  try {
    fuente = await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: { width: { min: 800, ideal: 1280, max: 1920 }, height: { min: 450, ideal: 720, max: 1080 } },
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