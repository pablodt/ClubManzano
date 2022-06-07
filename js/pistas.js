const pista1 = document.querySelector('#pista1');
const pista2 = document.querySelector('#pista2');
const pista3 = document.querySelector('#pista3');

//random
var random1 = getRandomArbitrary(1, 3);
var random2 = getRandomArbitrary(1, 3);
var random3 = getRandomArbitrary(1, 3);

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function listarPistas(indice) {
    if (random1.toString() == "1") {
        
    } else if (random2.toString() == "2") {
        
    }


    time_element1.innerHTML = '';
    time_element2.innerHTML = '';
    time_element3.innerHTML = '';
    let amount_hour = 12;

    for (let i = 0; i < amount_hour; i++) {
        const hour_element = document.createElement('buttom');
        hour_element.classList.add('boton-fecha');

        if ((i == random1 || i == random2 || i == random3)) {
            hour_element.classList.add('disabled');
            hour_element.setAttribute('disabled', true);
        }

        hour_element.textContent = i + 9 + ":00";


        if (indice == i) {
            hour_element.classList.add('selected');
        }

        hour_element.addEventListener('click', function () {
            if (hour_element.getAttribute('disabled') != "true") {
                if (indice == i) {
                    indice = -1;
                    seleccionado = false;
                } else {
                    seleccionado = true;
                    indice = i;
                }
                cambiarHora(indice);
                listarBotones(indice);
            }
        });

        if (i >= 0 && i <= 3) {
            time_element1.appendChild(hour_element);
        } else if (i >= 4 && i <= 7) {
            time_element2.appendChild(hour_element);
        } else {
            time_element3.appendChild(hour_element);
        }

    }

}

function calcularRandom() {
    random1 = Math.floor(Math.random() * (11 - 0 + 1) + 0);
    random2 = Math.floor(Math.random() * (11 - 0 + 1) + 0);
    random3 = Math.floor(Math.random() * (11 - 0 + 1) + 0);
}

function cambiarHora(hora) {
    if (hora == -1) {
        selected_hora = undefined;
    } else {
        selected_hora = hora + 9 + ":00";
    }
}