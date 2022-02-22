// Скрипт popup для подписки
let popupBlock = document.querySelector('.popup__block'),
blockPopupClick = document.querySelector('.block__popup-click'),
popupBlockClose = document.querySelector('.popup__block-close');

blockPopupClick.addEventListener('click', function() {
    popupBlock.style.display = 'block';
});

popupBlockClose.addEventListener('click', function() {
    popupBlock.style.display = 'none';
});
// Скрипт popup для подписки end