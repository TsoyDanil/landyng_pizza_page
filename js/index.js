const orderForm = document.getElementById('orderForm');
const nameInput = document.getElementById('name');
const addressInput = document.getElementById('adress');
const phoneInput = document.getElementById('phone');
const promoImages = document.querySelectorAll('.repertoire-img');
const imageModal = document.querySelector('.image-modal');
const modalImage = document.querySelector('#modalImage');
const closeImageModal = document.querySelector('#closeImageModal');

nameInput.addEventListener('input', function () {
    this.value = this.value.replace(/\./g, '');
    this.value = this.value.replace(/\s+/g, ' ').trim();
});

phoneInput.addEventListener('input', function () {
    this.value = this.value.replace(/\s+/g, ' ').trim();
});

addressInput.addEventListener('input', function () {
    this.value = this.value.replace(/\s+/g, ' ').trim();
});

orderForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const name = nameInput.value.trim()
    const adress = addressInput.value.trim()
    const number = phoneInput.value.trim()
    if (!name || !adress || !number) {
        alert('Введите все данные!')
    } else {
        setTimeout(function() {
            nameInput.value = '';
            phoneInput.value = '';
            addressInput.value = '';
            const modal = document.createElement("div");
            modal.classList.add('modal-window')
            document.body.appendChild(modal);
            const modalContent = document.createElement('div');
            modalContent.innerHTML = '<h1 class ="modal-text">Спасибо за заказ!<h1/>';
            modal.appendChild(modalContent);
            window.onclick = function() {
                modal.style.display = 'none';
            }
        }, 1000);
    }
})  
//setTimeout() в данном коде исзображает отправку информации на бэк 

promoImages.forEach(image => {
    image.addEventListener('click', () => {
        modalImage.src = image.src;
        imageModal.style.display = 'flex';
        imageModal.style.alignItems = 'center';
    });
});

closeImageModal.addEventListener('click', () => {
    imageModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === imageModal) {
        imageModal.style.display = 'none';
    }
});
