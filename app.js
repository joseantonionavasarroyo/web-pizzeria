const botonOscuro=document.querySelector("#btn-modo");
const cuerpo=document.body;

botonOscuro.addEventListener("click", function() {
    cuerpo.classList.toggle("modo-oscuro");

    if (cuerpo.classList.contains("modo-oscuro")){
        botonOscuro.textContent="☀️";
    }else{
        botonOscuro.textContent="🌙";
    }
});