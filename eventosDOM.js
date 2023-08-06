/*Eventos DOM: Crie uma página HTML com um botão que, quando clicado, exiba um alerta que diga “Você clicou no botão!”.
 */

<button id="myButton"> CLIQUE EM MIM! </button>

<script>
    document.getElementById("myButton").addEventListener("click",function() { alert("Voce clicou no botão!"); });
</script>