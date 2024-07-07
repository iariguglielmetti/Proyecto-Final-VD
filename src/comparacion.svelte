<script>
import { tweened } from 'svelte/motion';
import { cubicOut } from 'svelte/easing';
import { onMount } from 'svelte';

let scrollY = 0;
let scrollTimeou100

// Posiciones iniciales de la imagen sol
const initialTop = -20;
const initialLeft = -450;

// Posiciones finales de la imagen sol
const finalTop = -20;
const finalLeft = -450;

// Límite de desplazamiento
const maxOffset = 5000; // Ajusta este valor según tu diseño

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
    } else if (scrollY < maxOffset) {
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
    <img id="imgGliese" src="/images/gliese12b.png" width="400" alt=""/>
    <p id="textoWolf">
      Aunque los planetas tengan diferentes tamaños y masas, las características de sus estrellas y las 
      distancias a las que orbitan permiten que las temperaturas en estos exoplanetas se mantengan dentro 
      de un rango que podría ser soportado por los seres humanos.
    </p>
    <img id="imgSol" src="/images/sol.png" width="900" alt="" style="transform: translate({$leftOffset}px, {$topOffset}px);"/>
    <img id="imgGliese2" src="/images/gliese12b.png" width="350" alt=""/>
    <img id="imgTierra2" src="/images/tierra.png" width="350" alt="" />
    <img id="imgWolf2" src="/images/Wolf 1061c.png" width="250" alt="" />
    <p id="tempTierra">15°C</p>
    <p id="tempWolf">-20°C</p>
    <p id="tempGliese">42°C</p>
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
    background-color: rgba(255, 255, 255, 0.25);
  }
  #textoWolf{
    position: relative;
    top: 40px;
    font-family: "Poppins", sans-serif;
    margin-left: 200px;
    margin-right: 200px;
    line-height: 2;
    font-size: 17px;  
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
    width: 210px;
    background-color: whitesmoke;
    position: relative;
    top: 195px;
    left: 175px;
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
    top: 570px;
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
    width: 310px;
    background-color: whitesmoke;
    position: relative;
    top: 78px;
    left: 530px;
  }
  #imgWolf{
    position: absolute;
    top: 550px;
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
    top: 560px;
    left: 860px;
  }
  #imgSol{
    transition: transform 2s ease-in;    
  }
  #imgTierra2{
    position: relative;
    bottom: 460px;
    left: 500px;
  }
  #imgWolf2{
    position: relative;
    bottom: 450px;
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
    bottom: 500px;
    left: 660px;
  }
  #tempWolf{
    font-family: "Bruno Ace", sans-serif;

  }
  #tempGliese{
    font-family: "Bruno Ace", sans-serif;

  }
</style>

<!--
  <script>
    import { onMount } from 'svelte';
    
    let rect;
    let isFixed = false;
    let startFixedPosition = 100; // La posición donde el rectángulo se fija
    let endFixedPosition = 500;   // La posición donde el rectángulo deja de ser fijo
    
    onMount(() => {
      window.addEventListener('scroll', handleScroll);
    });
    
  function handleScroll() {
    const rectTop = rect.getBoundingClientRect().top + window.scrollY;

    if (window.scrollY >= startFixedPosition && window.scrollY < endFixedPosition && !isFixed) {
      rect.style.position = 'fixed';
      rect.style.top = '0px';
      rect.style.left = '-100px'; // Inicialmente fuera de la vista
      rect.style.transition = 'left 5s'; // Añade una transición suave
      requestAnimationFrame(() => {
        rect.style.left = '0px'; // Mueve el rectángulo a su posición fija
      });
      isFixed = true;
    } else if ((window.scrollY < startFixedPosition || window.scrollY >= endFixedPosition) && isFixed) {
      rect.style.position = 'relative';
      rect.style.top = 'initial';
      rect.style.left = 'initial';
      rect.style.transition = 'none'; // Remueve la transición al volver a relativo
      isFixed = false;
    }
  }
</script>

<main>
  <div>
    <h1>.</h1>
    <h1>.</h1>
    <h1>.</h1>
    <h1>.</h1>
    <h1>.</h1>
    <h1>.</h1>
    <h1>.</h1>
  <h1>.</h1>
  <h1>.</h1>
</div>
</main>

<style>
  .rectangle {
    width: 100px;
    height: 100px;
    background-color: blue;
  }
</style>

<div bind:this={rect} class="rectangle"></div>




<!--
<script>
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';
  
  let isFixed = false;
  let showImage = false;
  let showImage2 = false;
  let scrollY = tweened(0, {
    duration: 400,
    easing: cubicOut
  });

  onMount(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerPosition = 1120;
      const hastaPosition = 4420;
      
      if (scrollPosition >= triggerPosition+5 && scrollPosition <= hastaPosition+5) {
        isFixed = true;
        showImage = true;
        scrollY.set(scrollPosition);
      } else if (scrollPosition > hastaPosition) {
        isFixed = false;
        showImage = true;
      } else {
        showImage = false;
      }
      if (scrollPosition >= triggerPosition && scrollPosition <= hastaPosition){
        isFixed = true;
        showImage2 = true;
        scrollY.set(scrollPosition);
      } else if (scrollPosition > hastaPosition) {
        isFixed = false;
        showImage2 = true;
      } else {
        showImage2 = false;
      }
      
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
</script>
-->
<!--

<main>
  <div class="container">
    <div class="content">
      <div class="section">
        <p>Presencia de agua líquida <br> ya sea como océano, río o lago</p>
      </div>
      
      <div class="section">
        <p>Ubicada en la “Zona Ricitos de Oro” es <br> 
        considerada una región habitable por que <br>
          se encuentra sobre la órbita de su estrella, <br>
          en este caso el sol, lo que genera temperaturas <br>
          agradables para los organismos vivos.</p>
      </div>
      <div class="section">
        <p>La generación de energía renovables</p>
      </div> 
      <div class="section">
        <p>Tener una atmósfera protectora de los rayos X<br>
          y UV, gracias a sus compuestos como el oxígeno, <br>
          el dióxido de carbono, el nitrógeno, el argón <br>
          y la Capa de Ozono.</p>
        </div>  
        <div class="section">
        <p>El ciclo del Carbono regula de manera eficiente<br>
           el dióxido de carbono y mantiene las <br>
           temperaturas en un rango habitable.</p>
      </div> 
      <div class="section">
        <p>Posee un campo magnético que protege de <br>
        vientos solares y la radiación cósmica</p>
      </div> 
      <div class="section">
        <p>La rotación, el cambio entre el día y <br>
        la noche, ayuda a moderar las temperaturas</p>
      </div> 
      <div class="sectionExtra">
        <p>La gravedad logra un equilibrio para mantener <br>
          una atmosfera y al mismo tiempo no ser <br>
          agresiva para los seres vivos</p>
        </div> 
        <p id="texto1">
        Por estas razones, existe la posibilidad de que la Tierra deje de <br>
        ser habitable. Como sociedad, consciente de este posible suceso es fundamental <br>
        investigar y explorar nuevos exoplanetas que sean capaces <br>
        de alojar vida, es decir, que cumplan las condiciones anteriormente mencionadas.
      </p>
    </div>
  </div>
  </main>
  
  <style>
    #imgtierra {
      position: relative;
    right: 0px;
    z-index: 1;
  }
  
  .container {
    display: flex;
    z-index: 1;
  }
  
  .content {
    flex: 1;
    padding-right: 350px;
    font-family: "Merriweather", serif;
    z-index: 1;
  }
  
  .section {
    position: relative;
    bottom: 350px;
    left: 150px;
    background: rgba(0, 0, 0, 0.5);
    padding: 10px;
    border-radius: 2px;
    text-align: center;
    white-space: nowrap;
    width: 400px; /* Ajusta esta posición según tu necesidad */
    margin: 20px;
    margin-bottom: 300px;
    z-index: 1;
  }
  
  .sectionExtra{
    position: relative;
    bottom: 50px;
    left: 150px;
    background: rgba(0, 0, 0, 0.5);
    padding: 10px;
    border-radius: 2px;
    text-align: center;
    white-space: nowrap;
    width: 400px; /* Ajusta esta posición según tu necesidad */
    margin: 20px;   
    z-index: 1;
  }
  .image-container {
    position: relative;
    left: 820px;
    bottom: 500px; 
    z-index: 1;   
  }
  
  .image-container.fixed {
    position: fixed;
    top: 120px;
    opacity: 1;
    z-index: 1;   
    
  }

  .image-espacio {
    position: relative;
    bottom: 962px;
  }
  
  .image-espacio.Fixed {
    position: fixed;
    top: 0px;
    left: 0px;
    opacity: 0.3;
  }
  
  #texto1 {
    color: white;
    text-align: center;
    font-family: "Baskervville", serif;
    font-size: 22px;
    position: relative;
    z-index: 1;
    left: 244px;
    top: 260px;
    line-height: 1.9;
    /*background-color: rgba(51, 94, 34, 0.541);*/
    padding: 10px;
    border-radius: 2px;
    width: 850px; /* Ajusta esta posición según tu necesidad */
  }
  
</style>

<div class={`image-container ${isFixed ? 'fixed' : ''}`}>
  {#if showImage}
  <img id="imgtierra" src="/public/images/tierra.png" width="350" alt="tierra" in:fade={{ duration: 250 }} out:fade={{ duration: 300 }} />
  {/if}
</div>

<div class={`image-espacio ${isFixed ? 'Fixed' : ''}`}>
  {#if showImage2}
  <img id="espacio" src="/images/espacio.png" width="1350" alt="" in:fade={{ duration: 400 }} out:fade={{ duration: 400 }} />
  {/if}
</div>

-->
