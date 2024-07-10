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
  background-color: rgba(8, 51, 77, 0.5);
  transition: transform 2s ease-out;
}
#wolf{
  font-family: "Bruno Ace", sans-serif;
  position: relative;
  top: 100px;
  text-align: center;
}
#infoWolf{
  font-family: "Poppins", sans-serif;
  line-height: 1.7;
  font-size: 19px;
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

