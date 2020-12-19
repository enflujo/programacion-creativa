# Interpretar el clima

Una de las herramientas más divertidas y potentes que tenemos actualmente en Internet son los API's. Estos nos dan acceso a los datos de una aplicación sin que necesariamente tengamos que usarlos de la misma forma en que sus creadores lo han pensado. Es una herramienta que refuerza los ideales del Internet ya que permite la interpretación, estudio, mezcla y apropiación de datos que se hacen públicos sin imponer la forma especifica en que deben ser utilizados.

En este ejercicio vamos a utilizar el API the [OpenWeather](https://openweathermap.org/api) bajo una lógica creativa. Este API gratuito nos da acceso al clima en tiempo real de virtualmente todo el mundo.

## Objetivo

- Crear una página donde se pueda consultar el clima:
  - ¿Van a hacer que el usuario pueda consultar cualquier lugar del mundo? (un buscador, un mapa, etc.)
  - ¿Quieren que sea sólo en relación a un lugar especifico? (definiendo el lugar a priori)
  - ¿Van a dar la opción de una lista especifica de lugares? (mapa con puntos, una lista)
  - ¿quieren que el clima sea específicamente el de las coordenadas desde donde el usuario se conecta? (usando `navigator.geolocation` en JS).
  - ¿O que otra manera se les ocurre?
- La forma como representan el clima debe proponer una mirada propia, ¿cómo represento un "día soleado", "lluvia", "tormenta", etc.?

## Requisitos

- Como en todos los ejercicios, seguir las [instrucciones generales](../).
- Crear una cuenta gratuita en [OpenWeather](https://home.openweathermap.org/users/sign_up).
- Deben usar su propio `{API token}` que les dan cuando crean la cuenta.
- El _endpoint_ del API debe ser el de [Current Weather Data](https://openweathermap.org/current)
- Usar `fetch` como método para solicitar datos al API.
- La representación puede ser visual, escrita, sonora, o mezclas de estos. Pueden crear sus propios materiales o sacarlo de otros lugares usando API's de aplicaciones como YouTube, Vimeo, Giphy, Instagram, Twitter, Flickr, etc.

No es una aplicación comercial sobre el clima, es una aplicación que interpreta poéticamente el clima de un lugar en el mundo - en tiempo presente además -. Es una nueva forma de arte impresionista.

> El fósil es el resultado del azar. La imagen fotografiada ha sido escogida para su conservación. La imagen dibujada contiene la experiencia de mirar. Una foto es la prueba del encuentro entre un suceso y un fotógrafo. Un dibujo cuestiona sin prisa la apariencia de un suceso y, al hacerlo, nos recuerda que las apariencias son siempre una construcción con una historia. (Nuestra aspiración a la objetividad solo puede derivarse de admitir la subjetividad). Utilizamos las fotografías llevándolas con nosotros, en nuestras vidas, nuestros razonamientos, nuestros recuerdos; somos nosotros quienes las movemos. Por el contrario, un dibujo o una pintura nos obligan a detenernos y a meternos en su tiempo. Una fotografía es estática porque ha detenido el tiempo. Un dibujo o una pintura son estáticos porque abarcan el tiempo.
>
> > John Berger "Sobre el Dibujo" p.55-56
