<script>

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
    
    <h2 id="subtitulo2">Características del planeta Tierra que permiten el desarrollo de la vida</h2>

    <div class="paraTexto"></div>
    <img id="tierra" src="/images/tierra.png" width="700" alt=""/>
    <div class="planetaTierra">
      <p id="información"></p>

    </div>
  </div>

</main>

<style>
  #titulo {
    position: relative;
    bottom: 764px;
    letter-spacing: 30px;
    text-align: center;
    font-family: "Bruno Ace", sans-serif;
    z-index: 1;

  }
  #subtitulo1 {
    position: relative;
    bottom: 774px;
    letter-spacing: 5px;
    text-align: center;
    font-family: "Bruno Ace", sans-serif;
    font-size: 28px;
    z-index: 1;

  }

  #integrantes{
    position: relative;
    bottom: 774px;
    letter-spacing: 5px;
    text-align: center;
    font-family: "Baskervville", sans-serif;
    font-size: 20px;
    z-index: 1;

  }
  
  #introduccion {
    position: relative;
    bottom: 600px;
    text-align: center;
    font-family: "Merriweather", sans-serif;
    margin-left: 200px;
    margin-right: 200px;
    line-height: 2;
    z-index: 1;

  } 
  #subtitulo2{
    position: relative;
    bottom: 455px;
    text-align: center;
    font-family: "Merriweather", sans-serif;
    margin-left: 200px;
    margin-right: 200px;
    line-height: 2;
    z-index: 1;

  }

  .paraTexto{
    height: 582px;
    width: 674.5px;
    background-color: rgb(217, 217, 217); 
    position: relative;
    bottom: 400px;
    z-index: 1; 
  }

  #luz{
    position: relative;
    bottom: 64px;
    z-index: 1;
  }
  #sol {
    position: relative;
    bottom: 714px;
    right: 350px;
    z-index: 1;

  } 
  #luna {
    position: relative;
    bottom: 750px;
    left: 350px;
    z-index: 1;

  }  

  #tierra{
    position: relative;
    z-index: 1;
    bottom: 900px;
    left: 670px;
  }
  #fondo{
    position: fixed;
    bottom: 0px;
    opacity: 0.7;
  }
  
</style>
