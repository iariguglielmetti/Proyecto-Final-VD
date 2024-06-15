<script>
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  let isFixed = false;

  onMount(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerPosition = 450; // Ajusta esta posición según tu necesidad

      if (scrollPosition >= triggerPosition) {
        isFixed = true;
      } else {
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
  <img id="espacio" src="/images/espacio.png" width="" alt=""/>
  <div class="proyecto">
    <img id="luz" src="/images/luzSolLuna.png" width="1366" alt=""/>
    <h1 id="titulo">I N T E R E S T E L A R</h1>
    <p id="introduccion">
      En la actualidad, la Tierra es el único planeta conocido que alberga 
      vida, gracias a la presencia de agua líquida, temperaturas moderadas, una atmósfera 
      protectora y otros factores importantes. Todas estas condiciones permitieron que se desarrolle 
      la vida tal y como la conocemos. Sin embargo, con el paso 
      del tiempo, estas condiciones se están deteriorando debido al avance del calentamiento 
      global, la intervención humana en el planeta y diversos desastres naturales. 
    </p>
    <p id="introduccion">
      Por estas razones, existe la posibilidad de que la Tierra deje de 
      ser habitable. Como sociedad, consciente de este posible suceso es fundamental investigar 
      y explorar nuevos exoplanetas que sean capaces de alojar vida, es decir, 
      que cumplan las condiciones ya mencionadas.
    </p>
    
    <h2 id="subtitulo">Características que permiten el desarrollo de la vida, 
      basado en el planeta Tierra</h2>
    
    <img id = "wolf1061c" src="/images/Wolf 1061c.png" width="250" alt=""/>

    <img id = "gliese12b" src="/images/Gliese12b.png" width="250" alt=""/>
  </div>
</main>

<style>
  .proyecto{
    color: white;
    text-align: center;
    font-family: "Merriweather", serif;
    position: relative;
    z-index: 1;
  }
  #espacio{
    width: 1410px;
    position: fixed;
    bottom: 0px;
    z-index: 0;
  }
  #titulo{
    font-family: "Bruno Ace SC"; 
    font-size: 40px;
    position: relative;
    bottom: 370px;  
  }

  #luz{
    position: relative;
    bottom: 65px;
  } 

  #subtitulo{
    text-align: center;
    position: relative;
    bottom: 200px;
  }
  
  p{
    color: white;
    text-align: center;
    margin-left: 250px;
    margin-right: 250px;
    position: relative;
    bottom: 270px;
  }

  #wolf1061c{
    float: left;
    margin-right: 50px;
    position: relative;
    top: 500px;
  }

  #gliese12b{
    float:right;
    margin-right: 50px;
    position: relative;
    top: 500px;
  }

  /* Info de la tierra */
  .container {
    display: flex;
  }

  .content {
    flex: 1;
    padding-right: 50px; /* Espacio para la imagen */
  }
  
  .subT{
    position: relative;
    bottom: 150px;
    right: 200px;
    white-space: nowrap;
  }


  .image-container {
    width: 350px;
    position: absolute;
    right: 70px;
    top: 200px; /* Ajusta esta posición según tu necesidad */
    transition: top 0.3s;
    opacity: 0;
    transition: opacity 1s;
  }

  .image-container.fixed {
    position: fixed;
    top: 130px; /* Ajusta esta posición según tu necesidad */
    opacity: 1;
  }

  /* termina la info de la tierra */

</style>

<div class="container">
  <div class="content">
    <!-- Contenido que cambia -->
    <div class="subT">
      <h2 id="atmComp">Atmósfera: componentes</h2>
      <h2>Agua Liquida</h2>
      <h2>Energía solar</h2>
      <h2>Contenido 4</h2>
      <h2>Contenido 5</h2>
      <h2>Contenido 6</h2>
    </div>
    <!-- Añade más contenido para hacer scroll -->
  </div>

  <div class={`image-container ${isFixed ? 'fixed' : ''}`}>
    <img src="public/images/tierra.png" width='350' alt="Tierra" />
  </div>
</div>

<!--
<link rel="stylesheet" href="./public/styles.css">

<main class="container">
  <div class="galaxy">
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>   
  </div>
</main>
-->


