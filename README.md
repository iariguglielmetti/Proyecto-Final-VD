Proyecto Svelte
Este proyecto utiliza varias herramientas y librerías de Svelte para implementar diversas funcionalidades. 
A continuación, se describe cada una de ellas y su propósito dentro del proyecto.

Librerías Utilizadas
1. tweened de svelte/motion
import { tweened } from 'svelte/motion';
Utilizamos esta librería para modificar el largo de algunos elementos, como las líneas que se extienden para mostrar la distancia de la Tierra al Sol.
Esta herramienta permite crear transiciones suaves y animadas entre diferentes valores numéricos, facilitando la visualización de cambios de longitud en los elementos.

3. cubicOut de svelte/easing
import { cubicOut } from 'svelte/easing';
Esta librería se emplea para controlar la velocidad de las animaciones implementadas. Utilizamos la función cubicOut para crear animaciones que empiezan rápidamente y
desaceleran hacia el final, proporcionando un efecto de animación natural y fluido.

5. onMount de svelte
import { onMount } from 'svelte';
En nuestro proyecto, la empleamos para realizar un scrolleo limpio y funcional, asegurando que determinadas acciones ocurran inmediatamente después de que los componentes
estén disponibles en la interfaz.

7. writable de svelte/store
import { writable } from 'svelte/store';
Utilizamos writable para gestionar el estado reactivo de ciertos elementos.
Esta herramienta nos permite crear variables que pueden ser actualizadas y sus cambios ser automáticamente reflejados en la interfaz de usuario.
Es especialmente útil para hacer que determinados elementos respondan a cambios específicos de estado, mejorando la interactividad y la experiencia del usuario.

