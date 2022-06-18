const popupConf = document.querySelector('.popup_conf');
const closeConf = document.querySelector('.popup-close');


function pop_upConf(hora, dia, pista) {

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


