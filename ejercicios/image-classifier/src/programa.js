import './scss/estilos.scss';
import { iniciarCamara } from './utilidades/ayuda';

const classifier = knnClassifier.create();
const webcamElement = document.getElementById('webcam');
const intro = document.getElementById('intro')
const modelo = document.getElementById('modelo');
const presentacion = document.getElementById('presentacion');

intro.addEventListener('click', () => {
  intro.classList.add('hidden');
  presentacion.classList.remove('hidden');
});

presentacion.addEventListener('click', () => {
  presentacion.classList.add('hidden');
  modelo.classList.remove('hidden');
});
  
async function app() {
    let dims = [0, 0];
    let camara;
    let modelo;

    console.log('Loading mobilenet..');
    // Load the model.
    camara = await iniciarCamara(dims);
    modelo = await mobilenet.load();
    console.log('Successfully loaded model');

    // const webcam = await tf.data.camara(canvas);

    // Create an object from Tensorflow.js data API which could capture image 
    // from the web camera as Tensor.
    const webcam = await tf.data.webcam(webcamElement);
    dims = [camara.videoWidth, camara.videoHeight];
    webcamElement.width = dims[0];
    webcamElement.height = dims[1];

    // Reads an image from the webcam and associates it with a specific class
    // index.
    const addExample = async classId => {
      // Capture an image from the web camera.
      const img = await webcam.capture();

      // Get the intermediate activation of MobileNet 'conv_preds' and pass that
      // to the KNN classifier.
      const activation = modelo.infer(img, true);

      // Pass the intermediate activation to the classifier.
      classifier.addExample(activation, classId);

      // Dispose the tensor to release the memory.
      img.dispose();
    };

    // When clicking a button, add an example for that class.
    document.getElementById('class-a').addEventListener('click', () => addExample(0));
    document.getElementById('class-b').addEventListener('click', () => addExample(1));
    document.getElementById('class-c').addEventListener('click', () => addExample(2));

    while (true) {
      if (classifier.getNumClasses() > 0) {
        const img = await webcam.capture();

        // Get the activation from mobilenet from the webcam.
        const activation = modelo.infer(img, 'conv_preds');
        // Get the most likely class and confidence from the classifier module.
        const result = await classifier.predictClass(activation);

        const classes = ['A', 'B', 'C'];
        document.getElementById('console').innerText = `
          prediction: ${classes[result.label]}\n
          probability: ${result.confidences[result.label]}
        `;

        // Dispose the tensor to release the memory.
        img.dispose();
      }

      await tf.nextFrame();
    }
  }

  app();


