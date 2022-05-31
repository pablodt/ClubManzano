const popup = document.querySelector('.popup_box');
const close = document.querySelector('.popup-close');


function pop_up() {

    $(document).ready(function () {
        $('.popup_box').css("display", "block");
    });
    $('.btn1').click(function () {
        $('.popup_box').css("display", "none");
    });
}
