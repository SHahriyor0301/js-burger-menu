// var
const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const img = document.querySelectorAll('.items')
const burger = document.querySelector('.menu-burger')
const menu = document.querySelector('ul')
let html = 0

// function
burger.addEventListener('click' , () => {
    menu.classList.toggle('active')
    burger.classList.toggle('active')
})
next.addEventListener('click', () => {
    img[html].classList.remove('active')
    html++
    if(html == img.length){
        html = 0
    }
    img[html].classList.add('active')
})
prev.addEventListener('click', () => {
    img[html].classList.remove('active')
    if(html == 0){
        html = img.length
    }
    html--
    img[html].classList.add('active')
})