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

//logica filtros
const filtros=document.querySelectorAll(".filtro");

filtros.forEach(boton => {
    boton.addEventListener("click", function() {
        let id=boton.dataset.filtro;

        document.startViewTransition(() => {

            pizzas.forEach(pizza => {
                if(id==="todas"){
                    if(pizza.classList.contains("ocultar-filtro")){
                        pizza.classList.remove("ocultar-filtro");
                    }
                }else{
                    if(pizza.dataset.categoria!=id){
                        pizza.classList.add("ocultar-filtro");
                    }else{
                        if(pizza.classList.contains("ocultar-filtro")){
                            pizza.classList.remove("ocultar-filtro");
                        }
                    }
                }
            });
        });
    });
});