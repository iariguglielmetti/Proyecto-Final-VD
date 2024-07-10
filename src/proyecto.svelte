<script>
  import { writable } from 'svelte/store';
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';
  import { onMount } from 'svelte';
    
  let scrollY = 0;
  let scrollTimeout;
  let opacity = writable(0);
  const startScroll = 1600; // desde dónde empieza a verse el grafico de la atmosfera
  const maxScroll = 2150;   // cuánto scroll se necesita para que se vea por completo

  // Posiciones iniciales de la imagen #tierra
  const initialTop = -630;
  const initialLeft = 2000;
  
  // Posiciones finales de la imagen #tierra (posición de tierra2)
  const finalTop = -630;
  const finalLeft = 600;
  
  // Límite de desplazamiento
  const maxOffset = 900; // Ajusta este valor según tu diseño
  
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
      }
      lineaWidth.set(newWidth);
    } else {
      // Hacia arriba
      if (subtitulo2Top > windowHeight - 300) {
        animacion1.style.transform = 'translateX(-100vw)';
        newWidth = 0;
        lineaWidth.set(newWidth);
      }
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Evita valores negativos
  });
  
  const handleScroll2 = () => {
    const scrollY = window.scrollY;
    let newOpacity = 0;

    if (scrollY > startScroll) {
      newOpacity = Math.min((scrollY - startScroll) / (maxScroll - startScroll), 1);
    }

    opacity.set(newOpacity);
  };
  onMount(() => {
    window.addEventListener('scroll', handleScroll2);
    return () => {
      window.removeEventListener('scroll', handleScroll2);
    };
  });
</script>

<main>
  <div class="proyecto">
    <img id="fondo" src="/images/espacio.jpeg" width="1349" alt=""/>
    <img id="luz" src="/images/luz.svg" width="1349" alt=""/>
    <img id="sol" src="/images/sol.png" width="780" alt=""/>
    <img id="luna" src="/images/luna.png" width="400" alt=""/>
    <h1 id="titulo">INTERESTELAR</h1>
    <p id="subtitulo1">Explorando el espacio a traves de los datos</p>
    <p id="integrantes">Visualización de Datos: Proyecto Final <br>  por Iara Guglielmetti y Tomás Gallo</p>
    <p id="introduccion">
      En la actualidad, la Tierra es el único planeta conocido que alberga
      vida, gracias a la presencia de agua líquida, temperaturas moderadas, una atmósfera 
      protectora y otros factores importantes. Todas estas condiciones permitieron que se desarrolle 
      la vida tal y como la conocemos. Sin embargo, con el paso 
      del tiempo, estas condiciones se están deteriorando debido al avance del calentamiento 
      global, la intervención humana en el planeta y diversos desastres naturales. 
    </p>
    <div class="infoTierra">
    <p>
      Este es el planeta Tierra, el hogar de la humanidad. <br>
      Es el tercer planeta del sistema solar y el único conocido<br> 
      con condiciones aptas para la vida. Un globo terrestre <br>
      azul y verde, la Tierra es nuestro hogar y el lugar donde <br>
      coexistimos con una multitud de formas de vida.
    </p>
     
    </div>
    <img id="tierra" src="/images/tierra.png" width="700" alt="" style="transform: translate({$leftOffset}px, {$topOffset}px);"/>
    <h2 id="subtitulo2">Características del planeta Tierra que permiten el desarrollo de la vida</h2>
    <div class="animacion1">
      <p id="zonaRicitosDeOro">
        Para que un planeta sea habitable, debe ubicarse en la "Zona Ricitos de Oro", 
        región habitable de su órbita con la estrella. Esta región tiene temperaturas que posibilitan la 
        existencia de agua líquida, un elemento esencial para la vida tal como la conocemos. 
      </p>
      <p id="campoMagnetico">
        La Tierra posee un campo magnético que protege al planeta de
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
  <div class="animacion2">
  <p id="textoAtmosfera">
    La atmósfera juega un rol crucial en la protección del planeta, filtrando altos niveles de rayos X y 
    UV emitidos por su estrella, así como desviando meteoritos y otros objetos potencialmente peligrosos 
    que podrían impactar la superficie. 
    <br>
    <br>
    Esta capacidad de protección se debe a su composición, dominada por diversos gases, principalmente 
    oxígeno y nitrógeno. En menor proporción, la atmósfera también contiene argón, dióxido de carbono y vapor de agua. 
    <br>
    <br>
    Además, la gravedad de la Tierra es lo suficientemente fuerte como para mantener esta atmósfera, 
    pero no tan intensa como para ser hostil para los seres vivos.
  </p>
  </div>
  <div class="animacion2img" style="opacity: {$opacity}">
      <img id="tierra3" src="/images/tierra.png" width="520" alt=""/>
      <svg class="circulo" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">      
        <!-- círculo rojo -->
        <circle cx="50" cy="50" r="38" stroke="#D32F2F" stroke-width="8" fill="none"
                stroke-dasharray="252 252" stroke-dashoffset="10" />
        <!-- círculo azul -->
        <circle cx="50" cy="50" r="38" stroke="#4A80E2" stroke-width="8" fill="none"
                stroke-dasharray="53 252" stroke-dashoffset="126" /> 
        <!-- círculo blanco --> 
        <circle cx="50" cy="50" r="38" stroke="#FFFFFF" stroke-width="8" fill="none"
                stroke-dasharray="3 252" stroke-dashoffset="-230" />
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
  <div class="conclusionTierra">
    <p>
    Por estas razones, existe la posibilidad de que la Tierra deje de ser habitable.
    Como sociedad, consciente de este posible suceso es fundamental investigar 
    y explorar nuevos exoplanetas que sean capaces de alojar vida.
    </p> 
  </div>
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
    letter-spacing: 1px;
    text-align: center;
    font-family: "Bruno Ace", sans-serif;
    font-size: 28px;
  }
  #integrantes{
    position: relative;
    bottom: 770px;
    letter-spacing: 1px;
    text-align: center;
    font-family: "Poppins", sans-serif;
    line-height: 2;
    font-size: 18px;
  }
  #introduccion {
    position: relative;
    bottom: 600px;
    font-family: "Poppins", sans-serif;
    margin-left: 200px;
    margin-right: 200px;
    line-height: 2;
    font-size: 19px;
  } 
  .infoTierra{
    color: white;
    font-family: "Poppins", sans-serif;
    margin-left: 10%;
    font-size: 19px;
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
    margin-left: 100px;
    margin-right: 100px;
    line-height: 2;
    font-size: 26px;
  }
  .animacion1{
    height: 582px;
    width: 630px;
    background-color: rgb(8, 51, 77, 0.5);
    position: relative;
    bottom: 600px;
    transition: transform 5s ease;
    color: rgb(255, 255, 255);
    font-family: "Poppins", sans-serif;
    font-size: 19px;
    transform: translateX(-100vw);
  }
  #zonaRicitosDeOro{
    padding: 15px;
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
    font-family: "Bruno Ace", sans-serif;
    color: rgb(0, 0, 0);
    background-color: white;
    width: 200px;
    font-size: 18px;
    text-align: center;
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
  .animacion2{
    height: 500px;
    width: 630px;
    position: relative;
    color: rgb(255, 255, 255); 
    font-family: "Poppins", sans-serif;
    background-color: rgb(8, 51, 77, 0.5);
    bottom: 980px;
    transition: opacity 2.0s ease;
  }
  #textoAtmosfera{
    padding: 15px;
    margin-left: 5%;
    margin-right: 5%;
    position: relative;
    top: 20px;
    font-size: 19px;
  }
  #tierra3{
    position: relative;
    bottom: 1055px;
    left: 713px;
  }
  .animacion2img{
    position: relative;
    bottom: 355px;
  }
  .circulo{
    position: relative;
    bottom: 1020px;
    left: 240px;
    width: 420px;
    height: 420px;    
  }
  #linea1{
    height: 245px;
    width: 3px;
    background-color: rgb(255, 255, 255);
    position: relative;
    bottom: 1500px;
    left: 815px;
  }
  #cuadro1{
    height: 30px;
    width: 100px;
    background-color: rgb(255, 255, 255);
    position: relative;
    bottom: 1765px;
    left: 815px;
  }  
  #texto1a{
    color: rgb(255, 255, 255);
    font-family: "Bruno Ace", sans-serif;
    position: relative;
    bottom: 1835px;
    left: 815px;
  }  
  #texto1b{
    color: rgb(0, 0, 0);
    font-family: "Bruno Ace", sans-serif;
    position: relative;
    bottom: 1847px;
    left: 831px;
  }
  .oxigeno{
    position: relative;
    bottom: 80px;
  }
  #linea2{
    height: 150px;
    width: 3px;
    background-color: rgb(255, 255, 255);
    position: relative;
    bottom: 1825px;
    left: 1080px;
  }
  #cuadro2{
    height: 30px;
    width: 100px;
    background-color: rgb(255, 255, 255);
    color: black;
    position: relative;
    bottom: 2010px;
    left: 1080px;
  }
  #texto2a{
    color: rgb(255, 255, 255);
    font-family: "Bruno Ace", sans-serif;
    position: relative;
    bottom: 2080px;
    left: 1090px;
  }  
  #texto2b{
    color: rgb(0, 0, 0);
    font-family: "Bruno Ace", sans-serif;
    position: relative;
    bottom: 2092px;
    left: 1099px;
  }
  .otrosGases{
    position: relative;
    bottom: 150px;
    right: 15px;
  }
  #linea3{
    height: 150px;
    width: 3px;
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
  .conclusionTierra{
    position: relative;
    bottom: 2200px;
    font-family: "Poppins", sans-serif;
    margin-left: 200px;
    margin-right: 200px;
    line-height: 2;
    font-size: 19px;
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
