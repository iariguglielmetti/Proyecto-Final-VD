<script>
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';

  let isFixed = false;
  let showImage = false;
  let scrollY = tweened(0, {
    duration: 400,
    easing: cubicOut
  });

 onMount(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerPosition = 4600;
      const hastaPosition = 6000;

      if (scrollPosition >= triggerPosition && scrollPosition <= hastaPosition) {
        isFixed = true;
        showImage = true;
        scrollY.set(scrollPosition);
      } else if (scrollPosition > hastaPosition) {
        isFixed = false;
        showImage = true;
      } else {
        showImage = false;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
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

  .image-container {
    width: 350px;
    position: absolute;
    right: 800px;
    top: 580px;
    z-index: 1;
    transition: top 0.3s;
    opacity: 0;
    transition: opacity 1s;
  }
  
  .image-container.fixed {
    position: fixed;
    top: 130px;
    opacity: 1;
  }
</style>
  
   
<div class={`image-container ${isFixed ? 'fixed' : ''}`}>
  {#if showImage}
    <img id="imgwolf1061c" src="/public/images/Wolf 1061c.png" width="350" alt="" in:fade={{ duration: 400 }} out:fade={{ duration: 400 }} />
  {/if}
</div>
