const buttom_element = document.querySelector('.boton-fecha');
const time_element1 = document.querySelector('#col1');
const time_element2 = document.querySelector('#col2');
const time_element3 = document.querySelector('#col3');

//random
var random1 = Math.floor(Math.random() * (11 - 0 + 1) + 0);
var random2 = Math.floor(Math.random() * (11 - 0 + 1) + 0);
var random3 = Math.floor(Math.random() * (11 - 0 + 1) + 0);

function listarBotones(indice) {
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
                $.getScript("js/pistas_tenis.js", function () {
                    setNone();
                });
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
        console.log(selected_hora);
        $.getScript("js/pistas.js", function () {
            listarPistas();
        });
    }
}