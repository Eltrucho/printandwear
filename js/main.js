 
      // js/main.js
const swiper = new Swiper(".mySwiper", {
    loop: true,                         /* Hace que la galería sea infinita */
    autoplay: {
        delay: 3000,                    /* Cambia de foto automáticamente cada 3 segundos */
        disableOnInteraction: false,    /* No se para aunque el usuario pinche en las flechas */
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,                /* Permite clicar en los puntitos inferiores */
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",  /* Activa las flechas laterales */
    },
});
