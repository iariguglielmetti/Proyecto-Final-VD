<script>
  let videoRef;

  function handleVideoEnded() {
    videoRef.play();  // Reproduce el video de nuevo
}
  
</script>

<main>
  <div class="proyecto">
    <img id="luz" src="/images/luzSolLuna.png" width="1350" alt=""/>
    <video id="video" width="" height="760" alt=""
      bind:this={videoRef} 
      on:ended={handleVideoEnded} 
      autoplay 
      loop 
      muted
    >
      <source src="./public/videos/14534528-uhd_3840_2160_24fps.mp4" type="video/mp4">
      <track kind="captions" src="./public/videos/subtitulos.vtt" srclang="es" label="Español">
      Tu navegador no soporta el elemento de video.
    </video>
    <h1 id="titulo">INTERESTELAR</h1>
    <div class="infoProyecto">
      <h5>Visualización de Datos: Proyecto Final <br> Integrantes Gallo Tomás y Guglielmetti Iara</h5>
    </div>
    <p id="introduccion" class="interlineado">
      En la actualidad, la Tierra es el único planeta conocido que alberga
      vida, gracias a la presencia de agua líquida, temperaturas moderadas, una atmósfera 
      protectora y otros factores importantes. Todas estas condiciones permitieron que se desarrolle 
      la vida tal y como la conocemos. Sin embargo, con el paso 
      del tiempo, estas condiciones se están deteriorando debido al avance del calentamiento 
      global, la intervención humana en el planeta y diversos desastres naturales. 
    </p>
    
    <h2 id="subtitulo">Características del planeta Tierra que permiten el<br> desarrollo de la vida</h2>
  </div>
</main>

<style>
  .proyecto {
    color: white;
    text-align: center;
    font-family: "Baskervville", serif;
    font-size: 22px;
    position: relative;
    z-index: 1;
  }
  
  #video {
    position: relative;
    bottom: 555px;
    z-index: 0;  /* Envía el video al fondo */
  }
  
  #titulo {
    font-family: "Bruno Ace SC"; 
    font-size: 40px;
    position: relative;
    bottom: 950px;
    letter-spacing: 40px;
    z-index: 1;
  }

  #luz {
    position: relative;
    bottom: 65px;
    z-index: 1;
  } 

  .infoProyecto{
    font-family: "Baskervville", serif;
    position: relative;
    bottom: 950px;
    color: rgb(255, 255, 255);
    letter-spacing: 5px;
  }


  #subtitulo {
    font-family: "Baskervville", serif; 
    position: relative;
    bottom: 456px;
  }
  
  #introduccion {
    color: white;
    text-align: center;
    margin-left: 250px;
    margin-right: 250px;
    position: relative;
    bottom: 600px;
    line-height: 1.9;
  } 
  
</style>
