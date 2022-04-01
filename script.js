'use strict'

//Creating DOM objects
const modal = document.querySelector('.modal')

const overlay = document.querySelector('.overlay')

const header = document.querySelector('.header')

const btnsShowModal = document.querySelectorAll('.show-modal')

const btnCloseModal = document.querySelectorAll('.close-modal')

//Function to handle Show Modal click events
const showModal = function () {
  modal.classList.remove('hidden')
  overlay.classList.remove('hidden')
}

//Function to handle Close Modal click event
const closeModal = function () {
  modal.classList.add('hidden')
  overlay.classList.add('hidden')
}

//Loop to access each and every element of NodeList
for (let i = 0; i < btnsShowModal.length; i++)
  btnsShowModal[i].addEventListener('click', showModal) //EventListener

//EventListener
btnCloseModal[0].addEventListener('click', closeModal)

overlay.addEventListener('click', closeModal)

//To handle Esc keydoen event
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal()
  }
})
