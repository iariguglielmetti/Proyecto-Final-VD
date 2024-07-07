<script>
import { tweened } from 'svelte/motion';
import { cubicOut } from 'svelte/easing';
import { onMount } from 'svelte';

let scrollY = 0;
let scrollTimeout;

// Posiciones iniciales de la imagen #tierra
const initialTop = -520;
const initialLeft = -700;

// Posiciones finales de la imagen #tierra (posición de tierra2)
const finalTop = -520;
const finalLeft = 0;

// Límite de desplazamiento
const maxOffset = 3500; // Ajusta este valor según tu diseño

// Variables animadas para las posiciones top y left
const topOffset = tweened(initialTop, { duration: 300, easing: cubicOut });
const leftOffset = tweened(initialLeft, { duration: 300, easing: cubicOut });

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
  <div class="Gliese12b">
    <img id="imgGliese12b" src="/images/gliese12b.png" width="750" alt=""/>
    <div id="introGliese" style="transform: translate({$leftOffset}px, {$topOffset}px);">
      <h1 id="gliese">Gliese 12 b</h1>
      <p id="infoGliese">
        En mayo de 2024, se descubrió el exoplaneta más reciente gracias a observaciones 
        realizadas por telescopios como el satélite TESS de la NASA, CARMENES en el Observatorio 
        de Calar Alto y MuSCAT2 en el Observatorio del Teide. Este hallazgo fue realizado por la 
        NASA y un equipo hispano-japonés.
      </p>
    </div>
  </div>
</main>

<style>
  .Gliese12b{
    position: relative;
    bottom: 2352px;
  }
  #introGliese{
    height: 582px;
    width: 630px;
    background-color: rgba(255, 255, 255, 0.25);
    text-align: center;
    position: relative;
    transition: transform 2s ease-out;    
  }
  #gliese{
    font-family: "Bruno Ace", sans-serif;
    position: relative;
    top: 100px;
  }
  #infoGliese{
    font-family: "Poppins", sans-serif;
    line-height: 1.7;
    margin-left: 10%;
    margin-right: 10%;
    position: relative;
    top: 150px;
  }
  #imgGliese12b{
    position: relative;
    left: 620px;
    top: 100px;
    opacity: 0.9;
  }
</style>
