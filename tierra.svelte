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
      const triggerPosition = 600;
      const hastaPosition = 3550;

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
        <h2 id="texto1">
        Por estas razones, existe la posibilidad de que la Tierra deje de
        ser habitable. Como sociedad, consciente de este posible suceso es
        fundamental investigar y explorar nuevos exoplanetas que sean capaces de alojar vida, es decir,
        que cumplan las condiciones anteriormente mencionadas.
      </h2>
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
    bottom: 50px;
    left: 150px;
    background: rgba(61, 177, 162, 0.5);
    padding: 10px;
    border-radius: 10px;
    text-align: center;
    white-space: nowrap;
    width: 400px; /* Ajusta esta posición según tu necesidad */
    margin: 20px;
    margin-bottom: 300px;
  }

  .sectionExtra{
    position: relative;
    bottom: 50px;
    left: 150px;
    background: rgba(61, 177, 162, 0.5);
    padding: 10px;
    border-radius: 10px;
    text-align: center;
    white-space: nowrap;
    width: 400px; /* Ajusta esta posición según tu necesidad */
    margin: 20px;   
  }

  #texto1 {
    margin-left: 250px;
    margin-right: 0px;
    text-align: center;
    position: relative;
    top: 220px;
    left: 50px;
    z-index: 1;
    font-family: "Baskervville", serif;
    line-height: 2;
  }
  
  .image-container {
    position: relative;
    left: 820px;
    bottom: 550px;
    z-index: 1;
    
  }

  .image-container.fixed {
    position: fixed;
    top: 120px;
    opacity: 1;
  }

</style>

<div class={`image-container ${isFixed ? 'fixed' : ''}`}>
  {#if showImage}
  <img id="imgtierra" src="/public/images/tierra.png" width="350" alt="tierra" in:fade={{ duration: 250 }} out:fade={{ duration: 250 }} />
  {/if}
</div>
