// selecteren van de elementen die we gebruiken
const openModalButtons = document.querySelectorAll('[data-modal-target]')  //voor de model open btn
const closeModalButtons = document.querySelectorAll('[data-close-button-target]')  // voor de model close btn
const overlay = document.getElementById('overlay')   // voor de overlay

// //voor de model open btn
openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

// voor de overlay
overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})


//voor de model open btn
function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}