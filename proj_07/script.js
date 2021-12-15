const link = document.querySelectorAll('.link');
const burger = document.querySelector('.bi-list')
const closeBurger = document.querySelector('.bi-x-lg')
const header = document.querySelector('header')
const nav = document.querySelector('.navigation')
const container = document.querySelectorAll('.container')
const selectButton = document.querySelectorAll('.select')

link.forEach((link)=>{
    link.style.transition = '.8s'
})
container.forEach((container)=>{
    container.style.transition = '1s'
})
selectButton.forEach((selectButton)=>{
    selectButton.style.transition = '1s'
})
headerSize = header.style.height;
headerAdd = '2rem'
nav.style.display = 'none'
closeBurger.style.display = 'none'
burger.addEventListener('click', ()=>{
    burger.style.display = 'none'
    closeBurger.style.display = 'flex'
    header.style.transition = '1s'
    header.style.height = '30vh'
    nav.style.display = 'flex'
})
closeBurger.addEventListener('click',()=>{
    closeBurger.style.display = 'none'
    burger.style.display = 'flex'
    header.style.transition = '1s'
    header.style.alignItems = 'center'
    header.style.paddingTop = ''
    header.style.height = ''
    nav.style.display = 'none'
})


   