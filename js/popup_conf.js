const popupConf = document.querySelector('.popup_conf');
const closeConf = document.querySelector('.popup-close');


function pop_upConf(hora, dia, pista, val) {

    $(document).ready(function () {
        $('.popup_conf').css("display", "block");
        $('.fecha_hora_reserva').text(dia + " a las " + hora);
        if (val == "1") {
            $('.pista_reserva').text("Pista " + pista);
        }
    });
    $('.btn2').click(function () {
        $('.popup_conf').css("display", "none");
        window.location.href = "index.html";
    });
}
