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

//logica aparicion de pizzas
const observador=new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
        if(entrada.isIntersecting){
            entrada.target.classList.remove("oculto");
            entrada.target.classList.add("mostrar");
        }
    });
});

const pizzas=document.querySelectorAll(".post");

pizzas.forEach(pizza => {
    observador.observe(pizza);   
});