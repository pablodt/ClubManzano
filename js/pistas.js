const pistas = document.getElementById('pistas');

let selected_pista;

pistas.style.display = "none";

// FUNCTIONS
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function listarPistas() {
    let pista1 = document.querySelector('#pista1');
    let pista2 = document.querySelector('#pista2');
    let pista3 = document.querySelector('#pista3');

    pistas.style.display = "inline-block";

    //random
    var random1 = getRandomArbitrary(1, 5);
    var random2 = getRandomArbitrary(1, 5);
    var random3 = getRandomArbitrary(1, 5);
    var randomExtra = getRandomArbitrary(1, 4);

    console.log(random1);
    console.log(random2);
    console.log(random3);

    let disponibleP1 = true;
    let disponibleP2 = true;
    let disponibleP3 = true;

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

    if (!disponibleP1 && !disponibleP2 && !disponibleP3) {
        if (randomExtra.toString() == "1") {
            disponibleP1 = true;
        } else if (randomExtra.toString() == "2") {
            disponibleP2 = true;
        } else if (randomExtra.toString() == "3") {
            disponibleP3 = true;
        }
    }

    if (!disponibleP1) {
        pista1.innerHTML = '<button class="btn btn-outline-secondary w-25 m-3 col" disabled>Pista 1</button>';
    } else {
        pista1.innerHTML = '<button class="btn btn-outline-secondary w-25 m-3 col">Pista 1</button>';
        pista1.addEventListener('click', function () {
            selected_pista = "1";
            console.log(selected_pista);
        });
    }

    if (!disponibleP2) {
        pista2.innerHTML = '<button class="btn btn-outline-secondary w-25 m-3 col" disabled>Pista 2</button>';
    } else {
        pista2.innerHTML = '<button class="btn btn-outline-secondary w-25 m-3 col">Pista 2</button>';
        pista2.addEventListener('click', function () {
            selected_pista = "2";
            console.log(selected_pista);
        });
    }

    if (!disponibleP3) {
        pista3.innerHTML = '<button class="btn btn-outline-secondary w-25 m-3 col" disabled>Pista 3</button>';
    } else {
        pista3.innerHTML = '<button class="btn btn-outline-secondary w-25 m-3 col">Pista 3</button>';
        pista3.addEventListener('click', function () {
            selected_pista = "3";
            console.log(selected_pista);
        });
    }
}

function calcularRandom() {
    random1 = Math.floor(Math.random() * (11 - 0 + 1) + 0);
    random2 = Math.floor(Math.random() * (11 - 0 + 1) + 0);
    random3 = Math.floor(Math.random() * (11 - 0 + 1) + 0);
}

function setNone() {
    pistas.style.display = "none";
    selected_pista = undefined;
}