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
        const triggerPosition = 2500;
        const hastaPosition = 3000;
  
        if (scrollPosition >= triggerPosition && scrollPosition < hastaPosition) {
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
      z-index: 1;
    }
    
    .section {
      position: relative;
      bottom: 180px;
      left: 180px;
      background: rgba(0, 0, 0, 0.5);
      padding: 10px;
      border-radius: 20px;
      text-align: center;
      white-space: nowrap;
      width: 400px; /* Ajusta esta posición según tu necesidad */
      margin: 20px;
    }
  
    #textoCarac{
      margin-bottom: 5px;
      display: inline-block;
      position: relative;
    }
    
    #textoCarac::after{
      content: '';
      position: absolute;
      width: 100%;
      height: 2px; /* Ajusta el grosor del subrayado */
      background-color: white; /* Ajusta el color del subrayado */
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
      height: 2px; /* Ajusta el grosor del subrayado */
      background-color: white; /* Ajusta el color del subrayado */
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
      height: 2px; /* Ajusta el grosor del subrayado */
      background-color: white; /* Ajusta el color del subrayado */
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
      height: 2px; /* Ajusta el grosor del subrayado */
      background-color: white; /* Ajusta el color del subrayado */
      bottom: 0;
      left: 0;
    }
    
    .image-container {
      width: 350px;
      position: absolute;
      right: 180px;
      top: 580px;
      transition: top 0.3s;
      opacity: 0;
      transition: opacity 1s;
      z-index: 1;
    }
    
    .image-container.fixed {
      position: fixed;
      top: 130px;
      opacity: 1;
    }

    </style>
  
  <div class="container">
    <div class="content">
      <div class="section" in:fly={{ x: -100, duration: 500 }}>
        <h3 id="textoCarac">Características</h3>
        <p>Agua Líquida</p>
        <p>Energía solar</p>
      </div> 
      <div class="section" in:fly={{ x: -100, duration: 500 }}>
        <h3 id="textoAtm">Atmósfera: componentes</h3>
        <p>Oxígeno</p>
        <p>Dióxido de carbono</p>
        <p>Nitrógeno</p>
      </div>
      <div class="section" in:fly={{ x: -100, duration: 500 }}>
        <h3 id="texto3">Contenido 3</h3>
        <p>Información 1</p>
        <p>Información 2</p>
        <p>Información 3</p>
      </div> 
      <div class="section" in:fly={{ x: -100, duration: 500 }}>
        <h3 id="texto4">Contenido 4</h3>
        <p>Dato 1</p>
        <p>Dato 2</p>
        <p>Dato 3</p>
      </div>
    </div>
    
    <div class={`image-container ${isFixed ? 'fixed' : ''}`}>
      {#if showImage}
        <img id="gliese12b" src="/public/images/Gliese12b.png" width="350" alt="" in:fade={{ duration: 400 }} out:fade={{ duration: 400 }} />
      {/if}
    </div>
  </div>
  