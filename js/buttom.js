const buttom_element = document.querySelector('.boton-fecha');
const time_element1 = document.querySelector('#col1');
const time_element2 = document.querySelector('#col2');
const time_element3 = document.querySelector('#col3');

let buttom_hour = -1;
let selected_hora;

listarBotones();

function listarBotones(e) {
    time_element1.innerHTML = '';
    time_element2.innerHTML = '';
    time_element3.innerHTML = '';
    let amount_hour = 12;

    for (let i = 0; i < amount_hour; i++) {
        const hour_element = document.createElement('buttom');
        hour_element.classList.add('boton-fecha');

        if (i == 3 || i == 5 || i == 10) {
            hour_element.classList.add('disabled');
            hour_element.setAttribute('disabled', true);
        }

        hour_element.textContent = i + 9 + ":00";


        if (buttom_hour == i) {
            hour_element.classList.add('selected');
        }

        hour_element.addEventListener('click', function () {
            if (hour_element.getAttribute('disabled') != "true") {
                if (buttom_hour == i) {
                    buttom_hour = -1;
                } else {
                    buttom_hour = i;
                }
                cambiarHora(buttom_hour);
                listarBotones();
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

function cambiarHora(hora) {
    if (hora == -1) {
        selected_hora = undefined;
    } else {
        selected_hora = hora + 9 + ":00";
    }
}