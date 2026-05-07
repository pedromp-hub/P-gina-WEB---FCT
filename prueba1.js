//---------- ANIMACION ESCRIBIR EL TITULO PORTADA ----------

const text = "armonik "; //Se define el texto que se va a escribir
const speed = 150; //Velocidad en milisegundos de cada letra
const element = document.getElementById("typewriter"); //Busca el id en el HTML
let i = 0; //Creamos un contador que comienza en 0

function typeWriter() { //Declaramos la función que hace el trabajo
    if (i < text.length) { //Si todavia quedan letras por escribir
        if (i === text.length - 1) { //Si es la ultima posición
            element.classList.add("show-dot"); //Añadir clase
        } else { //Si no
            element.innerHTML += text.charAt(i); //Añade el contenido del elemento
        }
        
        i++; //Contador suma 1
        setTimeout(typeWriter, speed); //Vuelve a llamar a la función
    }
}

window.onload = typeWriter; //Ordena a la funcion para que se haga cuando la pagina se carge

//-------------- ANIMACION ESCRIBIR EL TITULO SOBRE MI -------------

const observador = new IntersectionObserver((entries) => { //Crea el observador que vigila elementos
    entries.forEach(entry => { //Recorre cada uno de los elementos
        const titulo = entry.target.querySelector('h1'); //Dentro del contenedor busca la etiqueta h1
        
        if (entry.isIntersecting) { //Si el elemento es visible ahora mismo
            titulo.classList.add('animar-escritura'); //Le pone la clase para que empiece a escribirse
        } else { //Si no
            titulo.classList.remove('animar-escritura'); //Le quita la clase de la animación
            titulo.style.width = "0"; //Resetea el ancho a 0
        }
    });
}, { threshold: 0.5 }); //Para que se active cuando el 50% del elemento sea visible

observador.observe(document.querySelector('.tittle')); //Para que observe especificamente el contenedor que tiene la clase tittle