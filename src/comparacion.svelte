<script>
import { tweened } from 'svelte/motion';
import { cubicOut } from 'svelte/easing';
import { onMount } from 'svelte';
import { writable } from 'svelte/store';


let scrollY = 0;
let scrollTimeout;
let opacity = writable(0);
const startScroll = 5550; // desde dónde empieza a verse el grafico de la atmosfera
const maxScroll = 5650;   // cuánto scroll se necesita para que se vea por completo

// Posiciones iniciales de la imagen sol
const initialTop = -20;
const initialLeft = -1000;

// Posiciones finales de la imagen sol
const finalTop = -20;
const finalLeft = -500;

// Límite de desplazamiento
const maxOffset = 5350; // Ajusta este valor según tu diseño

// Variables animadas para las posiciones top y left
const topOffset = tweened(initialTop, { duration: 500, easing: cubicOut });
const leftOffset = tweened(initialLeft, { duration: 500, easing: cubicOut });

const handleScroll = () => {
    clearTimeout(scrollTimeout);
    scrollY = window.scrollY;
    
    scrollTimeout = setTimeout(() => {
      let newTopOffset = initialTop + (finalTop - initialTop) * (scrollY / maxOffset);
      let newLeftOffset = initialLeft + (finalLeft - initialLeft) * (scrollY / maxOffset);
      
      // Asegurarse de que no se desplace más allá del límite
      if (scrollY > maxOffset) {
        newTopOffset = finalTop;
        newLeftOffset = finalLeft;
      } 
      else if (scrollY <= maxOffset) {
        newTopOffset = initialTop;
        newLeftOffset = initialLeft;
      }
           
      topOffset.set(newTopOffset);
      leftOffset.set(newLeftOffset);
    }, 50);
};

onMount(() => {
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
});

const handleScroll2 = () => {
    const scrollY = window.scrollY;
    let newOpacity = 0;

    if (scrollY > startScroll) {
      newOpacity = Math.min((scrollY - startScroll) / (maxScroll - startScroll), 1);
    }

    opacity.set(newOpacity);
  };
onMount(() => {
  window.addEventListener('scroll', handleScroll2);
  return () => {
    window.removeEventListener('scroll', handleScroll2);
  };
});

</script>

<main>
  <div class="Comparacion">
    <h2 id="subtitulo3">Ahora, ¿estos exoplanetas cumplen con las condiciones necesarias?</h2>
    <p id="textoWolf">Tanto Wolf 1061 c como Gliese 12 b se encuentran en la región “Ricitos de Oro” 
      desde sus estrellas, Wolf 1061 y Gliese 12, respectivamente. Esta ubicación es de vital 
      importancia, ya que los convierte en buenos candidatos para que exista agua líquida.
      <br>
      <br>
      Por un lado, Wolf 1061 c, catalogado como «Supertierra», tiene un diámetro de 10.194 km y 
      una masa aproximadamente cuatro veces la masa de nuestro planeta. Orbita alrededor de Wolf 1061, 
      una estrella que posee una cuarta parte de la masa del Sol, lo que permite al exoplaneta completar 
      una órbita en tan solo 18 días.
      <br>
      <br>
      En cambio, Gliese 12 b tiene un diámetro de 6.104 km y una masa de 3.87 veces la de la Tierra. 
      Orbita alrededor de su estrella, Gliese 12, que cuenta con un 27% de la masa del Sol. Por lo tanto, 
      este exoplaneta tan solo necesita 12,8 días para completar su órbita.
    </p>
    <div class="tamañoTierra">
      <p id="lineaTierra"></p>
      <p id="cuadroTierra"></p>
      <p id="diametroTierra">6.371 km</p>
    </div>
    <img id="imgTierra" src="/images/tierra.png" width="400" alt="" />
    <div class="tamañoWolf">
      <p id="lineaWolf"></p>
      <p id="cuadroWolf"></p>
      <p id="diametroWolf">10.194 km</p>
    </div>
    <img id="imgWolf" src="/images/Wolf 1061c.png" width="300" alt="" />
    <div class="tamañoGliese">
      <p id="lineaGliese"></p>
      <p id="cuadroGliese"></p>
      <p id="diametroGliese">6.104 km</p>
    </div>
    <img id="imgGliese" src="/images/Gliese12b.png" width="380" alt=""/>
    <p id="textoTemp">
      Aunque los planetas tengan diferentes tamaños y masas, las características de sus estrellas y las distintas
      distancias a las que orbitan permiten que las temperaturas en estos exoplanetas se mantengan dentro 
      de un rango que podría ser soportado por los seres humanos.
    </p>
    <img id="imgSol" src="/images/sol.png" width="900" alt="" style="transform: translate({$leftOffset}px, {$topOffset}px);"/>
    <img id="imgGliese2" src="/images/Gliese12b.png" width="390" alt=""/>
    <img id="imgTierra2" src="/images/tierra.png" width="380" alt="" />
    <img id="imgWolf2" src="/images/Wolf 1061c.png" width="200" alt="" />
    <p id="tempTierra" style="opacity: {$opacity}">15°C</p>
    <p id="tempWolf" style="opacity: {$opacity}">-20°C</p>
    <p id="tempGliese" style="opacity: {$opacity}">42°C</p>
    <img id="termometro" src="/images/termometro.png" width="975" alt=""/>
    <p id="lineaTempGliese"></p>
    <p id="lineaTempTierra"></p>
    <p id="lineaTempWolf"></p>
    <div class="años luz">
      <p id="textoAñosLuz">
        Con respecto a cuál está más próximo a la tierra, tendremos que viajar a la velocidad de la 
        luz durante todo un año terrestre, o también conocido como año luz. Dado que la luz viaja 
        aproximadamente a 299.792.458 km/s, transcurrido el año, se habrá recorrido aproximadamente 
        9.46 billones de kilómetros desde el planeta Tierra. Por un lado Wolf 1061 c es el exoplaneta 
        más cercano a la tierra a tan solo 14 años luz. En cambio Gliese 12 b se encuentra a 40 años 
        luz de la Tierra.
      </p>
      <div class="rectaAñosLuz">
        <svg class="circuloTierra" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">      
          <!-- círculo blanco de la tierra -->
          <circle cx="50" cy="50" r="3" stroke="#FFFFFF" stroke-width="0.25" fill="white"
                  stroke-dasharray="250 250"/>
        </svg>
        <p id="linea1"></p>
        <svg class="circuloWolf" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">      
          <!-- círculo blanco de Wolf -->
          <circle cx="50" cy="50" r="3" stroke="#FFFFFF" stroke-width="0.25" fill="none"
                  stroke-dasharray="250 250"/>
        <text x="50" y="50.2" text-anchor="middle" dominant-baseline="middle" fill="white" font-size="2" font-family="Bruno Ace">14</text>
          
        </svg>
        <p id="linea2"></p>
        <svg class="circuloGliese" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">      
          <!-- círculo blanco de Gliese -->
          <circle cx="50" cy="50" r="3" stroke="#FFFFFF" stroke-width="0.25" fill="none"
                  stroke-dasharray="250 250"/>
        <text x="50" y="50.2" text-anchor="middle" dominant-baseline="middle" fill="white" font-size="2"font-family="Bruno Ace">40</text>
        </svg>
      </div>
      <div class="planetasAñosLuz">
        <img id="imgTierra3" src="/images/tierra.png" width="270" alt="" />
        <img id="imgWolf3" src="/images/Wolf 1061c.png" width="140" alt="" />
        <img id="imgGliese3" src="/images/Gliese12b.png" width="290" alt=""/>
      </div>
    </div>
    <p id="conclusion">
      En conclusión, no se ha determinado si los planetas presentados son habitables. 
      Por ejemplo, no se dispone de información sobre si Gliese 12 b posee una atmósfera. 
      No obstante, la finalidad de nuestro estudio no era descubrir su habitabilidad. 
      El verdadero objetivo era demostrar que, incluso si estos planetas no son habitables, 
      es posible seguir explorando sus características para compararlas con las de un planeta 
      cuya habitabilidad está confirmada, como la Tierra. Este enfoque nos permitirá, en el futuro, 
      evaluar si alguno de los numerosos exoplanetas existentes puede ser habitable.   
     </p>
  </div>
</main>

<style>
  .Comparacion{
    position: relative;
    bottom: 2700px;
  }
  #subtitulo3{
    text-align: center;
    font-family: "Bruno Ace", sans-serif;
    margin-left: 100px;
    margin-right: 100px;
    line-height: 2;
    font-size: 26px;
    background-color: rgba(8, 51, 77, 0.5);
  }
  #textoWolf{
    position: relative;
    top: 40px;
    font-family: "Poppins", sans-serif;
    margin-left: 200px;
    margin-right: 200px;
    line-height: 2;
    font-size: 19px;
  }
  .tamañoTierra{
    position: relative;
    z-index: 1;
    top: 15px;
  }
  #diametroTierra{
    font-family: "Bruno Ace", sans-serif;
    position: relative;
    top: 100px;
    left: 233px;
    font-size: 20px;
    color: black;
  }
  #lineaTierra{
    height: 6px;
    width: 230px;
    background-color: #f5f5f5;
    position: relative;
    top: 195px;
    left: 165px;
  }
  #cuadroTierra{
    height: 40px;
    width: 120px;
    background-color: whitesmoke;
    text-align: center;
    position: relative;
    top: 155px;
    left: 220px;
  }
  #imgTierra{
    position: absolute;
    top: 630px;
    left: 80px;
  }
  .tamañoWolf{
    position: relative;
    z-index: 1;
  }
  #diametroWolf{
    font-family: "Bruno Ace", sans-serif;
    font-size: 20px;
    color: black;
    position: relative;
    bottom: 17px;
    left: 630px;
  }
  #cuadroWolf{
    height: 40px;
    width: 120px;
    background-color: whitesmoke;
    text-align: center;
    position: relative;
    top: 37px;
    left: 623px;
  }
  #lineaWolf{
    height: 6px;
    width: 330px;
    background-color: whitesmoke;
    position: relative;
    top: 78px;
    left: 520px;
  }
  #imgWolf{
    position: absolute;
    top: 610px;
    left: 535px;
  }
  .tamañoGliese{
    position: relative;
    z-index: 1;
  }
  #diametroGliese{
    font-family: "Bruno Ace", sans-serif;
    font-size: 20px;
    color: black;
    position: relative;
    bottom: 148px;
    left: 1010px;
  }
  #lineaGliese{
    height: 6px;
    width: 200px;
    background-color: whitesmoke;
    position: relative;
    bottom: 54px;
    left: 960px;
  }
  #cuadroGliese{
    height: 40px;
    width: 120px;
    background-color: whitesmoke;
    text-align: center;
    position: relative;
    bottom: 94px;
    left: 1000px;
  }
  #imgGliese{
    position: absolute;
    top: 625px;
    left: 870px;
  }
  #textoTemp{
    position: relative;
    top: 40px;
    font-family: "Poppins", sans-serif;
    margin-left: 200px;
    margin-right: 200px;
    line-height: 2;
    font-size: 19px;
  }
  #imgSol{
    transition: transform 1.25s ease-out;
  }
  #imgTierra2{
    position: relative;
    bottom: 465px;
    left: 520px;
  }
  #imgWolf2{
    position: relative;
    bottom: 490px;
    left: 620px;
  }
  #imgGliese2{
    position: relative;
    bottom: 190px;
    right: 700px;
  }
  #tempTierra{
    font-family: "Bruno Ace", sans-serif;
    position: relative;
    bottom: 460px;
    left: 690px;
  }
  #tempWolf{
    font-family: "Bruno Ace", sans-serif;
    position: relative;
    bottom: 500px;  
    left: 1070px;
  }
  #tempGliese{
    font-family: "Bruno Ace", sans-serif;
    position: relative;
    bottom: 540px;
    left: 375px;
  }
  #termometro{
    position: absolute;
    top: 1435px;
    left: 250px;
  }
  #lineaTempGliese{
    width: 5px;
    height: 23px;
    background-color: white;
    position: absolute;
    bottom: 5885px;
    left: 400px;
  }
  #lineaTempTierra{
    width: 5px;
    height: 23px;
    background-color: white;
    position: absolute;
    bottom: 5886px;
    left: 709px;
  }
  #lineaTempWolf{
    width: 5px;
    height: 23px;
    background-color: white;
    position: absolute;
    bottom: 5886px;
    left: 1100px;
  }
  #textoAñosLuz{
    position: relative;
    bottom: 350px;
    font-family: "Poppins", sans-serif;
    margin-left: 200px;
    margin-right: 700px;
    line-height: 2;
    font-size: 19px;
  }
  .rectaAñosLuz{
    position: relative;
    bottom: 75px;
  }
  .circuloTierra{
    position: relative;
    bottom: 1400px;
    left: 350px;
  }
  #linea1{
    width: 5px;
    height: 100px;
    background-color: white;
    position: relative;
    bottom: 2058px;
    left: 1025px;
  }
  .circuloWolf{
    position: relative;
    bottom: 2710px;
    left: 350px;
  }
  #linea2{
    width: 5px;
    height: 150px;
    background-color: white;
    position: relative;
    bottom: 3367px;
    left: 1025px;
  }
  .circuloGliese{
    position: relative;
    bottom: 4019px;
    left: 350px;
  }
  .planetasAñosLuz{
    position: relative;
    bottom: 5245px;
    left: 1030px;
  }
  #imgTierra3{
    position: relative;
    bottom: 70px;
  }
  #imgWolf3{
    position: relative;  
    right: 480px;
    top: 90px;
  }
  #imgGliese3{
    position: relative;
    right: 430px;
    top: 365px;
  }
  #conclusion{
    font-family: "Poppins", sans-serif;
    margin-left: 200px;
    margin-right: 180px;
    line-height: 2;
    font-size: 19px;  
    position: relative;
    bottom: 4800px;
  }
  .creditos{
    position: relative;
    bottom: 7650px;
    margin-left: 10%;
    z-index: 1;
  }
  #titulo{
    font-family: "Bruno Ace";
    color: white;
  }
  .imagenesCreditos{
    position: relative;
    bottom: 7370px;
  }
  #creditosSol{
    position: relative;
  }
  #creditosTierra{
    position: relative;
    right: 200px;
    bottom: 53px;
  }
  #creditosWolf{
    position: relative;
    right: 130px;
    bottom: 80px;
  }
  #creditosGliese{
    position: relative;
    left: 700px;
    bottom: 335px;
  }
  #creditosLuna{
    position: relative;
    left: 600px;
    bottom: 320px;
  }
</style>
<div class="imagenesCreditos">
  <img id="creditosSol" src="/images/sol.png" width="550" alt=""/>
  <img id="creditosWolf" src="/images/Wolf 1061c.png" width="170" alt="" />
  <img id="creditosTierra" src="/images/tierra.png" width="330" alt="" />
  <img id="creditosGliese" src="/images/Gliese12b.png" width="360" alt=""/>
  <img id="creditosLuna" src="/images/luna.png" width="300" alt=""/>
</div>
<div class="creditos">
  <p style="height:2px; width:1100px; background-color: grey; "></p>
  <h2 style="font-family:Bruno Ace;">Visualización de Datos</h2>
  <p id="titulo" style="color: white; font-size: 20px; position: relative; left: 30px;">Creditos</p>
  <p style="font-family: 'Poppins'; position: relative; left: 60px;">Iara Guglielmetti</p>
  <p style="font-family: 'Poppins'; position: relative; left: 60px;">Tomás Gallo</p>
  <p id="titulo" style="color: white; font-size: 20px; position: relative; bottom: 134px; left: 400px;">Correcciones y colaboraciones</p>
  <p style="font-family: 'Poppins'; position: relative; bottom: 134px;left: 430px;">Carlos Araujo</p>
  <p style="font-family: 'Poppins'; position: relative; bottom: 134px;left: 430px;">Juana Copello</p>
  <p style="font-family: 'Poppins'; position: relative; bottom: 134px;left: 430px;">Tomás Curzio</p>
  <a id="titulo" style="font-size: 20px; position: relative; bottom: 304px; left: 930px; text-decoration: underline;" href="https://docs.google.com/document/d/129wqfcetLNkftL2_KyaoMvEl-W0SfKXm7yp_jHls8qI/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Fuentes</a>
</div>
