<script>
    import { onMount } from 'svelte';
    import { fade, fly } from 'svelte/transition';
    import { tweened } from 'svelte/motion';
    import { cubicOut } from 'svelte/easing';
  
    let isFixed = false;
    let showImage = false;
    let showText = false;
    let scrollY = tweened(0, {
      duration: 400,
      easing: cubicOut
    });
  
    onMount(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const triggerPosition = 350;
        const hastaPosition = 1000;
  
        if (scrollPosition >= triggerPosition && scrollPosition <= hastaPosition) {
          isFixed = true;
          showImage = true;
          showText = true;
          scrollY.set(scrollPosition);
        } else {
          showImage = false;
          showText = false;
          scrollY.set(0);
        }
        if(scrollPosition < triggerPosition){
            isFixed = false;
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    });
  </script>
  
  
  <style>
    .container {
      display: flex;
      z-index: 1;
    }
    
    .content {
      flex: 1;
      padding-right: 350px;
      font-family: "Merriweather", serif;
    }
    
    .section {
      position: relative;
      bottom: 180px;
      left: 180px;
      z-index: 1;
      background: rgba(201, 170, 33, 0.5);
      padding: 10px;
      border-radius: 20px;
      text-align: center;
      white-space: nowrap;
      width: 400px; /* Ancho del rectangulo */
      margin: 20px;
    }
  
    #textoCarac{
      margin-bottom: 5px;
      display: inline-block;
      position: relative;
      z-index: 1;
    }
    
    #textoCarac::after{
      content: '';
      position: absolute;
      width: 100%;
      height: 1px; /* Grosor del subrayado */
      background-color: white; /* Color del subrayado */
      bottom: 0;
      left: 0;
    }
  
    #textoAtm{
      margin-bottom: 5px;
      display: inline-block;
      position: relative;
    }
  
    #textoAtm::after{
      content: '';
      position: absolute;
      width: 100%;
      height: 1px; 
      background-color: white;
      bottom: 0;
      left: 0;
    }
  
    #texto3{
      margin-bottom: 5px;
      display: inline-block;
      position: relative;
    }
  
    #texto3::after{
      content: '';
      position: absolute;
      width: 100%;
      height: 1px; 
      background-color: white; 
      bottom: 0;
      left: 0;
    } 
    
    #texto4{
      margin-bottom: 5px;
      display: inline-block;
      position: relative;
    }
  
    #texto4::after{
      content: '';
      position: absolute;
      width: 100%;
      height: 1px; 
      background-color: white; 
      bottom: 0;
      left: 0;
    }
    
    .image-container {
      width: 350px;
      position: absolute;
      right: 180px;
      z-index: 1;
      top: 580px;
      opacity: 0;
      transition: opacity 0.5s, transform 0.5s ease;
    }
    
    .image-container.fixed {
      position: fixed;
      top: 130px;
      opacity: 1;
    }

    </style>
<main>
    <div class="container">
      <div class="content">
        <div class="section" in:fly={{ x: -100, duration: 500 }}>
          <h3 id="textoCarac">Características</h3>
          <p>Presencia de agua líquida</p>
          <p>Necesidad de energía solar</p>
          <p>Atmosfera protectora</p>
          <p>Ubicada en la "Zona Ricitos de Oro"</p>
          <p>Campo Magnético</p>
          <p>Medida justa de la gravedad</p>
          <p>Júpiter como escudo gravitacional</p>

        </div> 
        <div class="section" in:fly={{ x: -100, duration: 500 }}>
          <h3 id="textoAtm">Atmósfera: componentes</h3>
          <p id="componentes">Oxígeno, dióxido de carbono, <br>nitrógeno, capa de ozono</p>
        </div>
        <div class="section" in:fly={{ x: -100, duration: 500 }}>
          <h3 id="texto3">Zona Ricitos de Oro</h3>
          <p>Gracias</p>
          <p>Información 2</p>
          <p>Información 3</p>
        </div> 
        <div class="section" in:fly={{ x: -100, duration: 500 }}>
          <h3 id="texto4">Contenido 4</h3>
          <p>Información 1</p>
          <p>Información 2</p>
          <p>Información 3</p>
        </div>
      </div>
      
      <div class={`image-container ${isFixed ? 'fixed' : ''}`}>
        {#if showImage}
          <img src="/public/images/tierra.png" width="350" alt="Tierra" in:fade={{ duration: 400 }} out:fade={{ duration: 400 }} />
        {/if}
      </div>
    </div>
  </main>
  
  