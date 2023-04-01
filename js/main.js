const burgerBtn = document.querySelector('.burger')
const barIcon = document.querySelector('.fa-bars')
const xIcon = document.querySelector('.fa-times')
const nav = document.querySelector('nav ul')

const handleNav = () => {
	nav.classList.toggle('active')
	burgerBtn.classList.toggle('active')
	barIcon.classList.toggle('hide')
	xIcon.classList.toggle('hide')
}

burgerBtn.addEventListener('click', handleNav)
