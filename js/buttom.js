const buttom_element = document.querySelector('.boton-fecha');


// EVENT LISTENERS
buttom_element.addEventListener('click', toggleButtomPicker);


// FUNCTIONS
function toggleButtomPicker(event) {
    if (!checkEventPathForClass(event.path || (event.composedPath && event.composedPath()), 'boton-fecha')) {
        buttom_element.classList.toggle('active');
        console.log("cambio");
    }
    buttom_element.classList.toggle('active');
    console.log("cambio");
}

