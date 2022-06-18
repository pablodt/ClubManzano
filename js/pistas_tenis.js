const pistas = document.getElementById('pistas');
let pista1 = document.querySelector('#pista1');
let pista2 = document.querySelector('#pista2');

pista1.innerHTML = '<button class="btn btn-outline-secondary w-100 m-3 col" disabled>Pista 1</button>';
pista2.innerHTML = '<button class="btn btn-outline-secondary w-100 m-3 col" disabled>Pista 2</button>';

let selected_pista;

let disponibleP1 = true;
let disponibleP2 = true;

// FUNCTIONS
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function listarPistas() {
    pistas.style.display = "inline-block";

    //random
    var random1 = getRandomArbitrary(1, 4);
    var random2 = getRandomArbitrary(1, 4);
    var randomExtra = getRandomArbitrary(1, 3);

    console.log(random1);
    console.log(random2);

    disponibleP1 = true;
    disponibleP2 = true;

    pista1.innerHTML = '';
    pista2.innerHTML = '';

    if (random1.toString() == "1") {
        disponibleP1 = false;
    } else if (random1.toString() == "2") {
        disponibleP2 = false;
    }

    if (random2.toString() == "1") {
        disponibleP1 = false;
    } else if (random2.toString() == "2") {
        disponibleP2 = false;
    }

    if (!disponibleP1 && !disponibleP2) {
        if (randomExtra.toString() == "1") {
            disponibleP1 = true;
        } else if (randomExtra.toString() == "2") {
            disponibleP2 = true;
        }
    }

    if (!disponibleP1) {
        pista1.innerHTML = '<button class="btn btn-outline-secondary w-100 m-3 col" disabled>Pista 1</button>';
    } else {
        pista1.innerHTML = '<button class="btn btn-outline-secondary w-100 m-3 col">Pista 1</button>';
        pista1.addEventListener('click', function () {
            if (disponibleP1) {
                selected_pista = "1";
                console.log(selected_pista);

                if (disponibleP2) {
                    pista2.innerHTML = '<button class="btn btn-outline-secondary w-100 m-3 col">Pista 2</button>';
                } else {
                    pista2.innerHTML = '<button class="btn btn-outline-secondary w-100 m-3 col" disabled>Pista 2</button>';
                }

                pista1.innerHTML = '<button class="btn btn-outline-secondary w-100 m-3 col active">Pista 1</button>';
            }
        });
    }

    if (!disponibleP2) {
        pista2.innerHTML = '<button class="btn btn-outline-secondary w-100 m-3 col" disabled>Pista 2</button>';
    } else {
        pista2.innerHTML = '<button class="btn btn-outline-secondary w-100 m-3 col">Pista 2</button>';
        pista2.addEventListener('click', function () {
            if (disponibleP2) {
                selected_pista = "2";
                console.log(selected_pista);

                if (disponibleP1) {
                    pista1.innerHTML = '<button class="btn btn-outline-secondary w-100 m-3 col">Pista 1</button>';
                } else {
                    pista1.innerHTML = '<button class="btn btn-outline-secondary w-100 m-3 col" disabled>Pista 1</button>';
                }

                pista2.innerHTML = '<button class="btn btn-outline-secondary w-100 m-3 col active">Pista 2</button>';
            }
        });
    }
}

function calcularRandom() {
    random1 = Math.floor(Math.random() * (11 - 0 + 1) + 0);
    random2 = Math.floor(Math.random() * (11 - 0 + 1) + 0);
    random3 = Math.floor(Math.random() * (11 - 0 + 1) + 0);
}

function setNone() {
    pista1.innerHTML = '<button class="btn btn-outline-secondary w-100 m-3 col" disabled>Pista 1</button>';
    pista2.innerHTML = '<button class="btn btn-outline-secondary w-100 m-3 col" disabled>Pista 2</button>';
    disponibleP1 = false;
    disponibleP2 = false;
    selected_pista = undefined;
}