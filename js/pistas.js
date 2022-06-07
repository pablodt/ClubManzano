const pista1 = document.querySelector('#pista1');
const pista2 = document.querySelector('#pista2');
const pista3 = document.querySelector('#pista3');

//random
var random1 = getRandomArbitrary(1, 3);
var random2 = getRandomArbitrary(1, 3);
var random3 = getRandomArbitrary(1, 3);

let selected_pista;

let disponibleP1 = true;
let disponibleP2 = true;
let disponibleP3 = true;

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function listarPistas() {
    pista1.innerHTML = '';
    pista2.innerHTML = '';
    pista3.innerHTML = '';


    if (random1.toString() == "1") {
        disponibleP1 = false;
    } else if (random1.toString() == "2") {
        disponibleP2 = false;
    } else if (random1.toString() == "3") {
        disponibleP3 = false;
    }

    if (random2.toString() == "1") {
        disponibleP1 = false;
    } else if (random2.toString() == "2") {
        disponibleP2 = false;
    } else if (random2.toString() == "3") {
        disponibleP3 = false;
    }

    if (random3.toString() == "1") {
        disponibleP1 = false;
    } else if (random3.toString() == "2") {
        disponibleP2 = false;
    } else if (random3.toString() == "3") {
        disponibleP3 = false;
    }

    const pista1_element = document.createElement('button');
    pista1_element.classList.add('btn btn-outline-secondary w-25 m-3 col');

    const pista2_element = document.createElement('button');
    pista2_element.classList.add('btn btn-outline-secondary w-25 m-3 col');

    const pista3_element = document.createElement('button');
    pista3_element.classList.add('btn btn-outline-secondary w-25 m-3 col');
    
    if (!disponibleP1) {
        pista1_element.classList.add('disabled');
        pista1_element.setAttribute('disabled', true);
    }

    pista1_element.textContent("Pista 1");

    pista1_element.addEventListener('click', function () {
        if (pista1_element.getAttribute('disabled') != "true") {
            cambiarPista("1");
            //listarBotones(indice);
        }
    });

    pista1.appendChild(pista1_element);

    if (!disponibleP2) {
        pista2_element.classList.add('disabled');
        pista2_element.setAttribute('disabled', true);
    }

    pista2_element.textContent("Pista 2");

    pista2_element.addEventListener('click', function () {
        if (pista2_element.getAttribute('disabled') != "true") {
            cambiarPista("2");
            //listarBotones(indice);
        }
    });

    pista2.appendChild(pista2_element);

    if (!disponibleP3) {
        pista3_element.classList.add('disabled');
        pista3_element.setAttribute('disabled', true);
    }

    pista3_element.textContent("Pista 3");

    pista3_element.addEventListener('click', function () {
        if (pista3_element.getAttribute('disabled') != "true") {
            cambiarPista("3");
            //listarBotones(indice);
        }
    });

    pista3.appendChild(pista3_element);

}

function calcularRandom() {
    random1 = Math.floor(Math.random() * (11 - 0 + 1) + 0);
    random2 = Math.floor(Math.random() * (11 - 0 + 1) + 0);
    random3 = Math.floor(Math.random() * (11 - 0 + 1) + 0);
}

function cambiarPista(pista) {
    selected_pista = pista;
    console.log(selected_pista);
}