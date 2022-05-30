const popup = document.querySelector('.popup-wrapper');
const close = document.querySelector('.popup-close');

function pop_up() {
    popup.style.display = 'block';

    close.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    popup.addEventListener('click', e => {
        if (e.target.className == 'popup-wrapper' || 'popup-close') {
            popup.style.display = 'none';
        }
    });
}
