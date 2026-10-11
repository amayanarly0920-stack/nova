
document.addEventListener("DOMContentLoaded", function () {

    // Actualizar el año automáticamente.
    document.querySelectorAll(".year").forEach(function (elemento) {
        elemento.textContent = new Date().getFullYear();
    });

    // Menú de navegación para celulares.
    const botonMenu = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");

    if (botonMenu && menu) {
        botonMenu.addEventListener("click", function () {
            menu.classList.toggle("abierto");

            const abierto = menu.classList.contains("abierto");
            botonMenu.textContent = abierto ? "✕" : "☰";
            botonMenu.setAttribute("aria-expanded", abierto);
        });
    }

    // Activar y desactivar el modo oscuro.
    const botonModo = document.querySelector("#modo");

    if (botonModo) {
        botonModo.addEventListener("click", function () {
            document.body.classList.toggle("modo-oscuro");

            const oscuro = document.body.classList.contains("modo-oscuro");

            botonModo.textContent = oscuro ? "☀️" : "🌙";
            botonModo.setAttribute(
                "aria-label",
                oscuro ? "Activar modo claro" : "Activar modo oscuro"
            );
        });
    }

    // Validar el formulario de contacto.
    const formulario = document.querySelector("#formulario");

    if (formulario) {
        const respuesta = document.querySelector("#respuesta");

        formulario.addEventListener("submit", function (evento) {
            evento.preventDefault();

            const nombre = document.querySelector("#nombre").value.trim();
            const correo = document.querySelector("#correo").value.trim();
            const servicio = document.querySelector("#servicio").value;
            const mensaje = document.querySelector("#mensaje").value.trim();

            const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (nombre.length < 2) {
                respuesta.textContent =
                    "Escribe un nombre de al menos 2 caracteres.";
                respuesta.style.color = "#c13b3b";
                return;
            }

            if (!formatoCorreo.test(correo)) {
                respuesta.textContent =
                    "Por favor, escribe un correo electrónico válido.";
                respuesta.style.color = "#c13b3b";
                return;
            }

            if (servicio === "") {
                respuesta.textContent =
                    "Selecciona el servicio que necesitas.";
                respuesta.style.color = "#c13b3b";
                return;
            }

            if (mensaje.length < 10) {
                respuesta.textContent =
                    "El mensaje debe tener al menos 10 caracteres.";
                respuesta.style.color = "#c13b3b";
                return;
            }

            respuesta.textContent =
                "¡Excelente! Todos los campos son válidos. " +
                "Esta demostración no envía correos reales.";

            respuesta.style.color = "#63851b";
            formulario.reset();
        });
    }
});
