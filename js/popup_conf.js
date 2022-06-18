const popupConf = document.querySelector('.popup_conf');
const closeConf = document.querySelector('.popup-close');
const popupBox = document.querySelector('.popup-box')

function pop_upConfPista(hora, dia, pista) {

    $(document).ready(function () {
            $('.popup_conf').css("display", "block");
            $('.fecha_hora_reserva').text(dia + " a las " + hora);
            $('.pista_reserva').text("Pista " + pista);
    });
    $('.btn2').click(function () {
        $('.popup_conf').css("display", "none");
        window.location.href = "index.html";
    });
}


function pop_upConf(hora, dia) {

    $(document).ready(function () {
            $('.popup_conf').css("display", "block");
            $('.fecha_hora_reserva').text(dia + " a las " + hora);
    });
    $('.btn2').click(function () {
        $('.popup_conf').css("display", "none");
        window.location.href = "index.html";
    });
}

function pop_upContacto() {

    $(document).ready(function () {
            $('.popup_conf').css("display", "block");
            $('.contacto').text("Se le responderá con la mayor brevedad posible");
    });
    $('.btn2').click(function () {
        $('.popup_conf').css("display", "none");
        window.location.href = "index.html";
    });
}

function pop_upMisReservas(evento,hora,dia,indice) {

    $(document).ready(function () {
            $('.popup_box').css("display", "block");
            $('.fecha_hora_reserva').text(dia + " a las " + hora);
            $('.evento_reserva').text(evento);
    });
    
    $('.btn4').click(function () {
        $('.popup_box').css("display", "none");
        window.location.href = "misReservas.html?indice="+indice;
    });

    $('.btn3').click(function () {
        $('.popup_box').css("display", "none");
        window.location.href = "misReservas.html?indice=-1";
    });
}

