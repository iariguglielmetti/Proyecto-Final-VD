<script>
import { tweened } from 'svelte/motion';
import { cubicOut } from 'svelte/easing';
import { onMount } from 'svelte';

let scrollY = 0;
let scrollTimeout;
// Posiciones iniciales de la imagen #tierra
const initialTop = -510;
const initialRight = 1349;

// Posiciones finales de la imagen #tierra (posición de tierra2)
const finalTop = -510;
const finalRight = 719;

// Límite de desplazamiento
const maxOffset = 3000; // Ajusta este valor según tu diseño

// Variables animadas para las posiciones top y left
const topOffset = tweened(initialTop, { duration: 300, easing: cubicOut });
const rightOffset = tweened(initialRight, { duration: 300, easing: cubicOut });

const handleScroll = () => {
  clearTimeout(scrollTimeout);
  scrollY = window.scrollY;

  scrollTimeout = setTimeout(() => {
    let newTopOffset = initialTop + (finalTop - initialTop) * (scrollY / maxOffset);
    let newRightOffset = initialRight + (finalRight - initialRight) * (scrollY / maxOffset);
    
    // Asegurarse de que no se desplace más allá del límite
    if (scrollY > maxOffset) {
      newTopOffset = finalTop;
      newRightOffset = finalRight;
    } else if (scrollY < maxOffset) {
      newTopOffset = initialTop;
      newRightOffset = initialRight;
    }
    topOffset.set(newTopOffset);
    rightOffset.set(newRightOffset);
  }, 50);
};

onMount(() => {
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
});

</script>

<main>
  <div class="Wolf1061c">
    <img id="wolf1061c"src="/images/Wolf 1061c.png" width="350" alt=""/>
    <div id="introWolf" style="transform: translate({$rightOffset}px, {$topOffset}px);">
      <h1 id="wolf">Wolf 1061 c</h1>
      <p id="infoWolf">El 17 de diciembre de 2015, un grupo de científicos australianos de 
        la Universidad de Nueva Gales del Sur (UNSW, por sus siglas en inglés) 
        descubrió el exoplaneta más cercano a la Tierra hasta ahora, conocido 
        como Wolf 1061 c, gracias al telescopio del Observatorio Europeo Austral, 
        en La Silla (Chile).
      </p>
    </div>
  </div>
</main>

<style>
.Wolf1061c{
  position: relative;
  bottom: 1900px;
}
#introWolf{
  height: 582px;
  width: 630px;
  font-family: "Poppins", sans-serif;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.25);
  transition: transform 2s ease-out;
}
#wolf{
  font-family: "Bruno Ace", sans-serif;
  position: relative;
  top: 100px;
}
#infoWolf{
  font-family: "Poppins", sans-serif;
  line-height: 1.7;
  margin-left: 10%;
  margin-right: 10%;
  position: relative;
  top: 150px;
  
}
#wolf1061c{
  position: relative;
  left: 200px;
}
</style>

<!--
<script>

</script>
<main>
    <div class="infoWolf">
      <h1 id="exoplanetas">posibles exoplanetas</h1>
      <h2 id="wolf1061c">Wolf1061c</h2>
      <div class="section">
        <p>Es el exoplaneta rocoso más <br>
          cercano a la tierra, es porque se <br>
          encuentra a 14 años luz de distancia.</p>
        <p>Es 4.3 veces más grande que <br> nuestro planeta.</p>
        <p>se encuentra cerca del límite <br>
          interior de la denominada zona <br>
          habitable de su sistema extrasolar</p>
        <p>Esta ubicado en la 
          <br> constelación Ofiuco.</p>
        <p>Su estrella es una enana roja <br> 
          que cuenta con una cuarta <br>
          parte de la masa del sol</p>
        <p>Por ahora solo podemos estimar <br>
          su diámetro, que debe rondar <br>
          1,64 veces el de la Tierra siempre y <br>
          cuando su densidad no sea anómala.
        </p>
        <p>periodo de apenas 18 días</p>
</main>
<style>
    #exoplanetas{
      font-family: "Merriweather", serif;
      position: relative;
      bottom: 0px;
    }
  
  .infoWolf{
    text-align: center;
    font-family: "Bruno Ace SC";
    position: relative;
    z-index: 1;
  }

  #wolf1061c{
    float: right;
    position: relative;
    right: 170px;
    background: rgba(177, 61, 61, 0.5);
    padding: 10px;
    border-radius: 30px;
    white-space: nowrap;
    width: 400px; /* Ajusta esta posición según tu necesidad */
    margin: 20px;
    bottom: 0px;
  }

  .section {
    font-family: "Merriweather", serif;
    position: relative;
    top: 100px;
    left: 720px;
    background: rgba(177, 61, 61, 0.5);
    padding: 10px;
    border-radius: 30px;
    text-align: center;
    white-space: nowrap;
    width: 400px; /* Ajusta esta posición según tu necesidad */
    margin: 20px;
  }

</>  
-->
