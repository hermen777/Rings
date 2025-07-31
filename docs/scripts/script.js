document.addEventListener("DOMContentLoaded", function () {

    document.querySelector(".logo a").addEventListener("click", function(event) {
        event.preventDefault();
        window.location.href = "/homepage/";
    });


    document.querySelectorAll(".social-icons a").forEach(icon => {
        icon.addEventListener("click", function(event) {
            event.preventDefault();
            alert("Red social no configurada");
        });
    });

    document.querySelector(".whatsapp").addEventListener("click", function() {
        window.open("https://wa.me/1234567890", "_blank");
    });

    var carousel = new bootstrap.Carousel(document.querySelector('#carouselExample'), {
        interval: 3000,
        wrap: true
    });
});

/* área de contacto */
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Formulario enviado!');
});
