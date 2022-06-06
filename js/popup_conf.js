const popupConf = document.querySelector('.popup_conf');
const closeConf = document.querySelector('.popup-close');


function pop_upConf() {

    $(document).ready(function () {
        $('.popup_conf').css("display", "block");
    });
    $('.btn2').click(function () {
        $('.popup_conf').css("display", "none");
        window.location.href = "/";
    });
}
