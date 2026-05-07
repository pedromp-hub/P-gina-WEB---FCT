const text = "armonik ";
const speed = 150;
const element = document.getElementById("typewriter");
let i = 0;

function typeWriter() {
    if (i < text.length) {
        if (i === text.length - 1) {
            element.classList.add("show-dot");
        } else {
            element.innerHTML += text.charAt(i);
        }
        
        i++;
        setTimeout(typeWriter, speed);
    }
}

window.onload = typeWriter;

const observador = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const titulo = entry.target.querySelector('h1');
        
        if (entry.isIntersecting) {
            // Si aparece en pantalla, añade la clase de animación
            titulo.classList.add('animar-escritura');
        } else {
            // OPCIONAL: Si quieres que se reinicie cada vez que sales y entras
            titulo.classList.remove('animar-escritura');
            titulo.style.width = "0"; 
        }
    });
}, { threshold: 0.5 }); // Se activa cuando se ve el 50% de la sección

// Seleccionamos el contenedor del título para observar
observador.observe(document.querySelector('.tittle'));