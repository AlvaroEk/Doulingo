window.addEventListener('scroll', function() {
    var navPrincipal = document.getElementById('navPrincipal');
    var idiomaBtn = document.getElementById('idioma_btn');
    var menuVertical = document.getElementById('menu_vertical');

    if (window.scrollY > 50) {
        idiomaBtn.innerHTML = 'Empieza ahora';
        idiomaBtn.setAttribute('href', '#empiezaAhora');
        menuVertical.style.display = 'none';
    } else {
        idiomaBtn.innerHTML = 'idioma de la pagina ▼';
        idiomaBtn.setAttribute('href', '#');
        if (!menuMostrado) {
            menuVertical.style.display = 'block';
        }
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // Obtener elementos del DOM
    var idiomaBtn = document.getElementById("idioma_btn");
    var menuVertical = document.getElementById("menu_vertical");
    var menuMostrado = false; // Variable para rastrear si el menú está mostrado
    var ultimoScroll = 0; // Variable para rastrear la posición del último scroll

    // Agregar evento de clic al botón de idioma
    idiomaBtn.addEventListener("click", function(event) {
        // Alternar la visibilidad del menú vertical
        if (!menuMostrado) {
            menuVertical.style.display = "block";
            menuMostrado = true; // Actualizar el estado del menú a mostrado
        } else {
            menuVertical.style.display = "none";
            menuMostrado = false; // Actualizar el estado del menú a oculto
        }
        event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
    });

    // Evento de desplazamiento de la ventana
    window.addEventListener("scroll", function() {
        var scrollActual = window.pageYOffset || document.documentElement.scrollTop;

        // Verificar si el menú está mostrado y el usuario ha desplazado hacia arriba más de 100px
        if (menuMostrado && scrollActual < ultimoScroll) {
            menuVertical.style.display = "none"; // Ocultar el menú cuando el usuario hace scroll hacia arriba
            menuMostrado = false; // Actualizar el estado del menú a oculto
        }

        ultimoScroll = scrollActual; // Actualizar la posición del último scroll
    });
});

//para que se reproduzca infinitamente el gif
const gif = document.getElementById('gif');

function reiniciarAnimacion() {
  gif.src = gif.src;
}

setInterval(reiniciarAnimacion, 1000); // Reiniciar la animación cada segundo

function scrollMenuLeft() {
    const menu = document.querySelector('.menu');
    menu.scrollLeft -= 50; // Puedes ajustar el valor según sea necesario
}

function scrollMenuRight() {
    const menu = document.querySelector('.menu');
    menu.scrollLeft += 50; // Puedes ajustar el valor según sea necesario
}

//Funcio para que se abra en dispositivos pequeños
function navegacionFija(){
    const barra = document.querySelector('.hheader');
    const principal = document.querySelector('.principal');

    window.addEventListener('scroll', function(){
        if(principal.getBoundingClientRect().top < 0){
            barra.classList.add('fijo');
        }else{
            barra.classList.remove('fijo');
        }
    });
}
