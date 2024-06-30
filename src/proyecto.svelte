<script>
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';
  import { onMount } from 'svelte';

  let showAnimacion = true;
  let scrollY = 0;
  let scrollTimeout;
  let opacidad = 1;
  // Posiciones iniciales de la imagen #tierra
  const initialTop = -630;
  const initialLeft = 2000;
  
  // Posiciones finales de la imagen #tierra (posición de tierra2)
  const finalTop = -630;
  const finalLeft = 550;
  
  // Límite de desplazamiento
  const maxOffset = 1000; // Ajusta este valor según tu diseño

  // Variables animadas para las posiciones top y left
  const topOffset = tweened(initialTop, { duration: 500, easing: cubicOut });
  const leftOffset = tweened(initialLeft, { duration: 500, easing: cubicOut });
  
  // Variable animada para la anchura de la línea
  const lineaWidth = tweened(0, { duration: 1000, easing: cubicOut });

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
      }
      
      topOffset.set(newTopOffset);
      leftOffset.set(newLeftOffset);
    }, 50);
  };

  onMount(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  let lastScrollTop = 0; // Variable para almacenar la última posición de scroll
  
  window.addEventListener('scroll', function() {
    const subtitulo2 = document.getElementById('subtitulo2');
    const animacion1 = document.querySelector('.animacion1');
    const windowHeight = window.innerHeight;
    const subtitulo2Top = subtitulo2.getBoundingClientRect().top;
  
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
    let newWidth = 0;
    if (scrollTop > lastScrollTop) {
      // Hacia abajo
      if (subtitulo2Top < windowHeight) {
        animacion1.style.transform = 'translateX(0)';
        newWidth = 430;
        lineaWidth.set(newWidth);
      }
      if(true){

      }
    } else {
      // Hacia arriba
      if (subtitulo2Top > windowHeight - 500) {
        animacion1.style.transform = 'translateX(-100vw)';
        newWidth = 0;
        lineaWidth.set(newWidth);
      }

    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Evita valores negativos
  });
</script>

<main>
  <div class="proyecto">
    <img id="fondo" src="/images/espacio.jpeg" width="1349" alt=""/>
    <img id="luz" src="/images/luz.svg" width="1349" alt=""/>
    <img id="sol" src="/images/sol.png" width="780" alt=""/>
    <img id="luna" src="/images/luna.png" width="400" alt=""/>

    <h1 id="titulo">INTERESTELAR</h1>
    <h2 id="subtitulo1">Explorando el espacio</h2>
    <h5 id="integrantes">Visualización de Datos: Proyecto Final <br> por Iara Guglielmetti y Tomás Gallo</h5>

    <h3 id="introduccion" class="interlineado">
      En la actualidad, la Tierra es el único planeta conocido que alberga
      vida, gracias a la presencia de agua líquida, temperaturas moderadas, una atmósfera 
      protectora y otros factores importantes. Todas estas condiciones permitieron que se desarrolle 
      la vida tal y como la conocemos. Sin embargo, con el paso 
      del tiempo, estas condiciones se están deteriorando debido al avance del calentamiento 
      global, la intervención humana en el planeta y diversos desastres naturales. 
    </h3>
    
    <div class="infoTierra">
    <p id="iT">
      Informacion de la tierra Informacion de la tierra <br>
      Informacion de la tierra Informacion de la tierra <br>
      Informacion de la tierra Informacion de la tierra <br>
      Informacion de la tierra Informacion de la tierra <br>
      Informacion de la tierra Informacion de la tierra <br>
      Informacion de la tierra Informacion de la tierra <br>    
    </p>
     
    </div>
    <img id="tierra" src="/images/tierra.png" width="700" alt="" style="transform: translate({$leftOffset}px, {$topOffset}px);"/>

    <h2 id="subtitulo2">Características del planeta Tierra que permiten el desarrollo de la vida</h2>
   <!-- PONER TODAS LAS ANIMACIONES EN ANIMACIONES 1 Y AHI HAGO LOS IF DENTRO DE LA MISMA ANIMACION DONDE LES CAMBIO LA OPACIDAD -->
   {#if showAnimacion}
    <div class="animacion1">
      <p id="zonaRicitosDeOro">
        Para que un planeta sea habitable, debe ubicarse en la "Zona Ricitos de Oro", 
        región habitable de su órbita con la estrella. Esta región tiene temperaturas que posibilitan la 
        existencia de agua líquida, un elemento esencial para la vida tal como la conocemos. 
      </p>
      <p id="campoMagnetico">
        La Tierra posee un campo magnético que protege al planeta de<br> 
        los vientos solares y la radiación  cósmica, permitiendo así un entorno adecuado para la vida.
      </p>
      <p id="rotacion">
        Además, la rotación de la Tierra ayuda a moderar las temperaturas al alternar entre el día y la noche, 
        creando un clima estable.
      </p>
  </div>
  <div class="animacion1img">
      <p id="linea" style="width: {$lineaWidth}px;"></p>
      <p id="distanciaSolTierra">150.000.000 km</p>
      <img id="sol2" src="/images/sol.png" width="550" alt="" />
      <img id="tierra2" src="/images/tierra.png" width="250" alt=""/>
  </div>
  {:else}
  <div class="animacion1">
    <h2 id="atmosfera">Atmósfera</h2>
  <p id="atmosferaRol">
    La atmósfera cumple un rol fundamental en la protección del planeta, siendo 
    capaz de filtrar los altos niveles de rayos X y UV emitidos 
    por su estrella, así como los eventuales meteoritos y objetos que podrían 
    impactar la superficie.
  </p>
  <p id="gases">
    Esto es posible gracias a su composición, dominada por diversos gases, principalmente 
    oxígeno y nitrógeno. En menor proporción, también contiene argón, dióxido de carbono 
    y vapor de agua.
    </p> 
  </div>
  <div class="animacion1img">
      <img id="tierra3" src="/images/tierra.png" width="540" alt=""/>
      <svg class="circulo" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">      
        <!-- círculo rojo -->
        <circle cx="50" cy="50" r="40" stroke="#D32F2F" stroke-width="10" fill="none"
                stroke-dasharray="252 252" stroke-dashoffset="0" />
      
        <!-- círculo blanco -->
        <circle cx="50" cy="50" r="40" stroke="#4A90E2" stroke-width="10" fill="none"
                stroke-dasharray="53 252" stroke-dashoffset="116" />
        
        <!-- círculo azul -->
        <circle cx="50" cy="50" r="40" stroke="#FFFFFF" stroke-width="10" fill="none"
                stroke-dasharray="3 252" stroke-dashoffset="13" />
      </svg>
      <div class="nitrogeno">
        <p id="linea1"></p>
        <p id="cuadro1"></p>
        <p id="texto1a">Nitrógeno</p>
        <p id="texto1b">78.08%</p>
      </div>
    
      <div class="oxigeno">
        <p id="linea2"></p>
        <p id="cuadro2"></p>
        <p id="texto2a">Oxígeno</p>
        <p id="texto2b">20.95%</p>
      </div>
    
      <div class="otrosGases">
        <p id="linea3"></p>
        <p id="cuadro3"></p>
        <p id="texto3a">Otros Gases</p>
        <p id="texto3b">0.97%</p>
      </div>

      </div>
  {/if}
</div>
</main>

<style>
  #titulo {
    position: relative;
    bottom: 764px;
    letter-spacing: 40px;
    text-align: center;
    font-family: "Bruno Ace", sans-serif;
  }
  #subtitulo1 {
    position: relative;
    bottom: 774px;
    letter-spacing: 6px;
    text-align: center;
    font-family: "Merriweather", sans-serif;
    font-size: 26px;
  }

  #integrantes{
    position: relative;
    bottom: 770px;
    letter-spacing: 4px;
    text-align: center;
    font-family: "Merriweather", sans-serif;
    line-height: 2;
    font-size: 16px;
  }
  
  #introduccion {
    position: relative;
    bottom: 600px;
    text-align: center;
    font-family: "Merriweather", sans-serif;
    margin-left: 200px;
    margin-right: 200px;
    line-height: 2;
  } 
  .infoTierra{
    color: white;
    font-family: "Merriweather", sans-serif;
    margin-left: 10%;
    position: relative;
    bottom: 320px;
  }
  
  #tierra{
    position: relative;
    transition: transform 2.0s ease-out;
  }
  #subtitulo2{
    position: relative;
    bottom: 600px;
    text-align: center;
    font-family: "Bruno Ace", sans-serif;
    margin-left: 200px;
    margin-right: 200px;
    line-height: 2;
  }

  .animacion1{
    height: 582px;
    width: 630px;
    background-color: rgb(227, 245, 238); 
    position: sticky;
    bottom: 0px;
    transition: transform 3s ease;
    color: rgb(0, 0, 0);
    font-family: "Poppins", sans-serif;
    text-align: center;
  }
  #zonaRicitosDeOro{
    padding: 30px;
    margin-left: 5%;
    margin-right: 5%;
    position: relative;
    top: 70px;
  }

  #campoMagnetico{
    padding: 15px;
    margin-left: 5%;
    margin-right: 5%;
    position: relative;
    top: 70px;
  }
  
  #rotacion{
    padding: 15px;
    margin-left: 5%;
    margin-right: 5%;
    position: relative;
    top: 70px;
  }
  #linea{
    height: 5px;
    overflow: hidden;
    line-height: 6px;
    background-color: rgb(226, 248, 246);
    color: white;
    position: relative;
    left: 820px;
    bottom: 740px;
    z-index: 1;
    transition: width 2s ease;
  }
  
  #distanciaSolTierra{
    color: white;
    font-family: "Bruno Ace", sans-serif;
    position: relative;
    bottom: 740px;
    left: 950px;
  }

  #sol2{
    position: relative;
    left: 540px;
    bottom: 1115px;
  }
  #tierra2{
    position: relative;
    bottom: 1210px;
    left: 570px;
  }
  
  #atmosfera{
    padding: 30px;
    margin-left: 5%;
    margin-right: 5%;
    font-family: "Bruno Ace", sans-serif;
    font-size: 32px;
    position: relative;
    top: 30px;
  }

  #atmosferaRol{
    padding: 15px;
    margin-left: 5%;
    margin-right: 5%;
    position: relative;
    top: 20px;
  }

  #gases{
    padding: 30px;
    margin-left: 5%;
    margin-right: 5%;
    position: relative;
    top: 20px;
  }
  #tierra3{
    position: relative;
    bottom: 1055px;
    left: 713px;
  }

  .circulo{
    position: relative;
    bottom: 1026px;
    left: 230px;
    width: 420px;
    height: 420px;    
  }

  #linea1{
    height: 245px;
    width: 5px;
    background-color: rgb(255, 255, 255);
    position: relative;
    bottom: 1505px;
    left: 815px;
  }

  #cuadro1{
    height: 30px;
    width: 100px;
    background-color: rgb(255, 255, 255);
    position: relative;
    bottom: 1790px;
    left: 815px;
  }
  
  #texto1a{
    color: rgb(255, 255, 255);
    font-family: "Bruno Ace", sans-serif;
    position: relative;
    bottom: 1865px;
    left: 815px;
  }  
  
  #texto1b{
    color: rgb(0, 0, 0);
    font-family: "Bruno Ace", sans-serif;
    position: relative;
    bottom: 1872px;
    left: 831px;
  }

  .oxigeno{
    position: relative;
    bottom: 80px;
  }

  #linea2{
    height: 150px;
    width: 5px;
    background-color: rgb(255, 255, 255);
    position: relative;
    bottom: 1840px;
    left: 1090px;
  }

  #cuadro2{
    height: 30px;
    width: 100px;
    background-color: rgb(255, 255, 255);
    color: black;
    position: relative;
    bottom: 2015px;
    left: 1090px;
  }

  #texto2a{
    color: rgb(255, 255, 255);
    font-family: "Bruno Ace", sans-serif;
    position: relative;
    bottom: 2090px;
    left: 1100px;
  }  
  
  #texto2b{
    color: rgb(0, 0, 0);
    font-family: "Bruno Ace", sans-serif;
    position: relative;
    bottom: 2097px;
    left: 1107px;
  }

  .otrosGases{
    position: relative;
    bottom: 160px;
  }
  #linea3{
    height: 150px;
    width: 5px;
    background-color: rgb(255, 255, 255);
    position: relative;
    bottom: 1960px;
    left: 1145px;
  }

  #cuadro3{
    height: 30px;
    width: 100px;
    background-color: rgb(255, 255, 255);
    color: black;
    position: relative;
    bottom: 2126px;
    left: 1145px;
  }

  #texto3a{
    color: rgb(255, 255, 255);
    font-family: "Bruno Ace", sans-serif;
    position: relative;
    bottom: 2200px;
    left: 1135px;
  }  
  
  #texto3b{
    color: rgb(0, 0, 0);
    font-family: "Bruno Ace", sans-serif;
    position: relative;
    bottom: 2208px;
    left: 1170px;
  }
  #luz{
    position: relative;
    bottom: 64px;
  }
  #sol {
    position: relative;
    bottom: 714px;
    right: 350px;
  } 
  #luna {
    position: relative;
    bottom: 750px;
    left: 350px;
  }  
  #fondo{
    position: fixed;
    bottom: 0px;
    opacity: 0.4;
    z-index: -0.2;
  }
  
</style>
