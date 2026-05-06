const text = "armonik";
    const speed = 150; // Velocidad en milisegundos por letra
    const element = document.getElementById("typewriter");
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    
    window.onload = typeWriter;