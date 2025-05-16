// Espera a que el DOM esté completamente cargado antes de ejecutar el código
document.addEventListener("DOMContentLoaded", function() {
    const themeButton = document.getElementById("toggleTheme"); // Selecciona el botón de cambio de tema
    const body = document.body; // Obtiene el elemento <body> para modificar el tema

    // Agrega un evento de escucha para detectar clics en el botón
    themeButton.addEventListener("click", function() {
        body.classList.toggle("dark-mode"); // Alterna entre el modo oscuro y normal

        // Verifica si el modo oscuro está activado y actualiza el texto del botón
        if (body.classList.contains("dark-mode")) {
            themeButton.textContent = "Modo Normal"; // Texto cuando el modo oscuro está activo
        } else {
            themeButton.textContent = "Modo Nocturno"; // Texto cuando el modo nocturno está inactivo
        }
    });
});

// Espera a que el DOM esté completamente cargado antes de ejecutar el código
document.addEventListener("DOMContentLoaded", function() {
    // Selecciona todos los elementos multimedia dentro de las galerías de video y audio
    const multimediaElements = document.querySelectorAll(".video-gallery, .audio-gallery");

    // Función que activa la animación cuando el usuario se desplaza hacia la sección multimedia
    function animateOnScroll() {
        multimediaElements.forEach(element => {
            const rect = element.getBoundingClientRect(); // Obtiene la posición del elemento en la pantalla

            // Verifica si el elemento es visible en la ventana del usuario (ajuste de 50px)
            if (rect.top < window.innerHeight - 50) {
                element.style.opacity = "1"; // Hace el elemento visible
                element.style.animation = "slideIn 1s ease-in-out forwards"; // Aplica la animación de entrada
            }
        });
    }

    // Agrega un evento de escucha para activar la animación al hacer scroll en la página
    window.addEventListener("scroll", animateOnScroll);

    // Ejecuta la función al cargar la página por si algunos elementos ya están en pantalla
    animateOnScroll();
});
