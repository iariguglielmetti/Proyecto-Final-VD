<script>
  import * as d3 from "d3"
  import {onMount} from "svelte"
  
  let personas = [];

  onMount(() => {
    d3.csv("./data/personas.csv", d3.autoType).then(data => {
      console.log(data);
      personas = data;
    });
  });
</script>




<main>
    <div class="header">

      <img src="/images/logo.svg" width="160" alt=""/>
    </div>
  <div class= "headersito">
        <h1 class="headline">Hobbies</h1>
        <h2 class="subtitulo">Arte, Deporte, Educación y Entretenimiento </h2>
        <p id="bajada">Explorando los hobbies a través de datos</p>
  </div>


</main>


<style>
  .header{
    text-align: center;
  }
  .headersito{
    text-align: center;
  }
  .headersito h1 {
    font-family: "krona One";
    font-size: 450%;
    position: relative;
    bottom: 50px;
  }
  .headersito h2{
    font-family: "kameron", serif;
    position: relative;
    bottom: 90px;
  }
  .headersito p{
    font-family: "kameron", serif;
    font-size: 115%;
    position: relative;
    bottom: 105px;
  }
  .rombo{
    width: 100px;
    height: 100px;
    background-color: white;
    transform: rotate(45deg);
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 0px;
    justify-content: center;
    position: relative;
    bottom: 100px;
  }
  .fila{
    margin: 100px;
  }
  .rombo.con-contorno {
    border: 5px solid white;
  }
  .colorVerdeRecursosPocos {
    background-color: #5fc944;
  }
  .colorVerdeRecursosAlgunos {
    background-color: #1dad13;
  }
  .colorVerdeRecursosMuchos {
    background-color: #006207;
  }
  .colorNaranjaRecursosPocos {
    background-color: #FFB83D;
  }
  .colorNaranjaRecursosAlgunos {
    background-color: #FFA200;
  }
  .colorNaranjaRecursosMuchos {
    background-color: #835300;
  }
  .colorRojoRecursosPocos{
    background-color: #FF5757;
  }           
  .colorRojoRecursosAlgunos {
    background-color: #FF0000;
  }
  .colorRojoRecursosMuchos {
    background-color: #920000;
  }
  .colorAzulRecursosPocos {
    background-color: #6c8cf5;
  }
  .colorAzulRecursosAlgunos {
    background-color: #14349E;
  }
  .colorAzulRecursosMuchos {
    background-color: #00124B;
  }

  .nombres{    
    position: fixed;
    top: 110px;
    left: 60px;
    transform: rotate(-45deg);
    font-family: "krona One";
    font-size: 17px;
    white-space: nowrap; 
    }
    .referencias{
      text-align: center;
      font-family: "krona One";
      font-size: 32px;
      position: relative;
      top: 380px;
      right: 180px;
    }
</style>

<div class="grid">
  {#each personas as persona}
    <div class="fila">
      <div class="rombo" 
           style="width: 115px; height: 115px; transform: rotate(45deg); border-radius: 10px;"
           class:con-contorno={persona.antiguedad > 6} 
           class:colorVerdeRecursosPocos={persona.categoria == 'deporte' && persona.recursosNecesarios == 'pocos'}
           class:colorVerdeRecursosAlgunos={persona.categoria == 'deporte' && persona.recursosNecesarios == 'algunos'}
           class:colorVerdeRecursosMuchos={persona.categoria == 'deporte' && persona.recursosNecesarios == 'muchos'}
           class:colorNaranjaRecursosPocos={persona.categoria == 'arte' && persona.recursosNecesarios == 'pocos'}
           class:colorNaranjaRecursosAlgunos={persona.categoria == 'arte' && persona.recursosNecesarios == 'algunos'}
           class:colorNaranjaRecursosMuchos={persona.categoria == 'arte' && persona.recursosNecesarios == 'muchos'}
           class:colorAzulRecursosPocos={persona.categoria == 'educacion' && persona.recursosNecesarios == 'pocos'}
           class:colorAzulRecursosAlgunos={persona.categoria == 'educacion' && persona.recursosNecesarios == 'algunos'}
           class:colorAzulRecursosMuchos={persona.categoria == 'educacion' && persona.recursosNecesarios == 'muchos'}
           class:colorRojoRecursosPocos={persona.categoria == 'entretenimiento' && persona.recursosNecesarios == 'pocos'}
           class:colorRojoRecursosAlgunos={persona.categoria == 'entretenimiento' && persona.recursosNecesarios == 'algunos'}
           class:colorRojoRecursosMuchos={persona.categoria == 'entretenimiento' && persona.recursosNecesarios == 'muchos'}>
<!-- NOMBRES --> 
          <p class="nombres"  style="left: calc(100% - {persona.nombre.length*4}px);">{persona.nombre}</p>
           
<!-- UTILIDAD --> 
          {#if persona.utilidad > 4}
            <svg style = "width=55px; height=6px; transform: rotate(-45deg)">
              <rect x="77" y="43" width="40" height="6" fill="white" stroke-linecap="round" rx="3" ry="3" />
            </svg>
          {/if}
          
<!-- DIFICULTAD -->  
          {#if persona.dificultad == 'baja'}
            <img src="./images/estrella.svg" width="17" alt="17" style="position: absolute; left: 17px; bottom: 82.5px; transform: rotate(27deg);">
          {/if}
          {#if persona.dificultad == 'media'}
            <img src="./images/estrella.svg" width="17" alt="17" style="position: absolute; top: 28px; left: 5px; transform: rotate(27deg);">
            <img src="./images/estrella.svg" width="17" alt="17" style="position: absolute; bottom: 94px; left: 30px; transform: rotate(27deg);">
          {/if}
          {#if persona.dificultad == 'alta'}
            <img src="./images/estrella.svg" width="17" alt="17" style="position: absolute; top: 36px; left: 5px; transform: rotate(27deg);">
            <img src="./images/estrella.svg" width="17" alt="17" style="position: absolute; bottom: 95px; left: 38px; transform: rotate(27deg);">
            <img src="./images/estrella.svg" width="17" alt="17" style="position: absolute; bottom: 87px; left: 13px; transform: rotate(27deg);">
          {/if} 

<!-- FRECUENCIA -->
          {#if persona.categoria == 'educacion'}
            {#if persona.frecuencia <= 2}
              <img src="./images/educacion.svg" width=90px alt="" style="position: absolute; bottom:5px; left: 20px; transform: rotate(-45deg);"/>
              {:else if 3 <= persona.frecuencia && persona.frecuencia <= 5}
              <img src="./images/educacionFrecuenciaMedia.svg" width=90px alt="" style="position: absolute; bottom: 5px; left: 20px; transform: rotate(-45deg);"/>
            {:else if 6 <= persona.frecuencia}
              <img src="./images/educacionFrecuenciaAlta.svg" width=90px alt="" style="position: absolute; bottom:5px; left: 20px; transform: rotate(-45deg);"/>
            {/if}
          {/if}
          
          {#if persona.categoria == 'deporte'}
            {#if persona.frecuencia <= 2}
              <img src="./images/deporte.svg" width=75px alt="" style="position: absolute; bottom:18px; left: 21px; transform: rotate(-45deg);"/>
            {:else if 3 <= persona.frecuencia && persona.frecuencia <= 5}
              <img src="./images/deporte.svg" width=75px alt="" style="position: absolute; bottom:18px; left: 21px; transform: rotate(-45deg);"/>
              <img src="./images/deporteFrecuenciaMedia.svg" width=76px alt="" style="position: absolute; top:35px; left: 7px; transform: rotate(-45deg);"/>
            {:else if 6 <= persona.frecuencia}
              <img src="./images/deporteFrecuenciaAlta.svg" width=75px alt="" style="position: absolute; bottom:18px; left: 21px; transform: rotate(-45deg);"/>
            {/if}
          {/if}

          {#if persona.categoria == 'arte'}
            {#if persona.frecuencia <= 2}
              <img src="./images/arte.svg" width=80px alt="" style="position: absolute; bottom:18px; left: 20px; transform: rotate(-45deg);"/>
            {:else if 3 <= persona.frecuencia && persona.frecuencia <= 5}
              <img src="./images/arte.svg" width=80px alt="" style="position: absolute; bottom:18px; left: 20px; transform: rotate(-45deg);"/>
              <img src="./images/arteFrecuenciaMedia.svg" width=42.5px alt="" style="position: absolute; bottom:4px; left: 25px; transform: rotate(-45deg);"/>
            {:else if 6 <= persona.frecuencia}
              <img src="./images/arteFrecuenciaAlta.svg" width=80px alt="" style="position: absolute; bottom:18px; left: 20px; transform: rotate(-45deg);"/>
            {/if}
          {/if}
          
          {#if persona.categoria == 'entretenimiento'}
            {#if persona.frecuencia <= 2}
              <img src="./images/entretenimiento.svg" width=80px alt="" style="position: absolute; bottom:15px; left: 20px; transform: rotate(-45deg);"/>
            {:else if 3 <= persona.frecuencia && persona.frecuencia <= 5}
              <img src="./images/entretenimiento.svg" width=80px alt="" style="position: absolute; bottom:15px; left: 20px; transform: rotate(-45deg);"/>
              <img src="./images/entretenimientoFrecuenciaMedia.svg" width=40px alt="" style="position: absolute; bottom:0px; left: 0px; transform: rotate(-45deg);"/>
            {:else if 6 <= persona.frecuencia}
              <img src="./images/entretenimientoFrecuenciaAlta.svg" width=80px alt="" style="position: absolute; bottom:15px; left: 20px; transform: rotate(-45deg);"/>
            {/if}
          {/if} 
        </div>
      </div>
      {/each}
      <h2 class="referencias">Referencias</h2>
</div>

