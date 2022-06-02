const buttom_element = document.querySelector('.boton-fecha');
const time_element1 = document.querySelector('.ejem');
const time_element2 = document.querySelector('.ejem');
const time_element3 = document.querySelector('.ejem');



/* // EVENT LISTENERS
buttom_element.addEventListener('click', toggleButtomPicker);


// FUNCTIONS
function toggleButtomPicker(event) {
    if (!checkEventPathForClass(event.path || (event.composedPath && event.composedPath()), 'boton-fecha')) {
        buttom_element.classList.toggle('active');
        console.log("cambio");
    }
    buttom_element.classList.toggle('active');
    console.log("cambio");
} */

listarBotones();

function listarBotones(e) {
    time_element.innerHTML = '';
    let amount_hour = 12;

    for (let i = 0; i < amount_hour; i++) {
        const hour_element = document.createElement('div');
        hour_element.classList.add('boton-fecha');
        hour_element.classList.add('margin-buttom');

        hour_element.textContent = i + 1 + ":00";

        /*         if (selectedDay == (i + 1) && selectedYear == year && selectedMonth == month) {
                    hour_element.classList.add('selected');
                } */

        buttom_element.addEventListener('click', function () {

        });

        time_element.appendChild(hour_element);
    }

}