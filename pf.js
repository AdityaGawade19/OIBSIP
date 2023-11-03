// JavaScript for the portfolio image gallery

function openModal(itemId) {
    var modal = document.getElementById('modal');
    var modalContent = document.getElementById('modal-content');
    var item = document.getElementById(itemId);

    modal.style.display = 'block';
    modalContent.innerHTML = item.innerHTML;
}

function closeModal() {
    var modal = document.getElementById('modal');
    modal.style.display = 'none';
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

var modal = document.getElementById('modal');
modal.addEventListener('click', function (event) {
    if (event.target === modal) {
        closeModal();
    }
});
