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