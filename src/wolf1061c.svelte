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
        const triggerPosition = 1800;
        const hastaPosition = 2150;
  
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
  
  <main>
    <div class="info">
        <p id="texto1">
            Por estas razones, existe la posibilidad de que la Tierra deje de 
            ser habitable. Como sociedad, consciente de este posible suceso es fundamental investigar 
            y explorar nuevos exoplanetas que sean capaces de alojar vida, es decir, 
            que cumplan las condiciones ya mencionadas.
          </p>
    </div>
    <div class="infoWolf">
        <h2 id="exoplanetas">posibles exoplanetas</h2>
        <h2 id="wolf1061c">Wolf1061c</h2>


    </div>
  </main>
  
  <style>
    #texto1 {
        font-family: "Merriweather", serif;
        color: white;
        text-align: center;
        margin-left: 250px;
        margin-right: 250px;
        position: relative;
        bottom: 140px;
        line-height: 2;
        z-index: 1;

    } 
    #exoplanetas{
        text-align: center;
        font-family: "Merriweather", serif;
        position: relative;
        bottom: 120px;
        z-index: 1;
    }

    #wolf1061c{
        font-family: "Bruno Ace SC";
        position: relative;
        bottom: 100px;
        left: 100px;
        z-index: 1;
    }

    #imgwolf1061c{
      position: relative;
      right: 570px;
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
      bottom: 180px;
      left: 780px;
      background: rgba(161, 161, 161, 0.5);
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
        <img id="imgwolf1061c" src="/public/images/Wolf 1061c.png" width="350" alt="" in:fade={{ duration: 400 }} out:fade={{ duration: 400 }} />
      {/if}
    </div>
  </div>