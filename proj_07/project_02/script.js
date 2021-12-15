const header = document.querySelector('header');
const main = document.querySelector('main');
const container = document.querySelector('.container')
const inputI = document.querySelectorAll('input');
const button = document.querySelectorAll('button');
let pageTitle = document.querySelector('.pageTitle');
let logo = document.querySelector('.logo');

pageTitle.textContent = 'Register/Login page'
logo.textContent = 'Login/Register page'

header.addEventListener('mouseover', ()=>{
    header.style.boxShadow = '1px 1px 5px 1px white'
    header.style.transition = '1s'
})
header.addEventListener('mouseout', ()=>{
    header.style.boxShadow = ''
    header.style.transition = '1s'
})
main.addEventListener('mouseover', ()=>{
    main.style.boxShadow = '1px 1px 5px 1px white'
    main.style.zIndex = '0'
    main.style.transition = '1s'
    main.style.opacity = '1'
    main.style.transform = 'scale(1.1)'
    main.style.borderTopRightRadius = '6px'
    main.style.borderTopLeftRadius = '6px'
})
main.addEventListener('mouseout', ()=>{
    main.style.boxShadow = ''
    main.style.zIndex = ''
    main.style.transition = '1s'
    main.style.opacity = '1'
    main.style.transform = ''
    main.style.borderTopRightRadius = ''
    main.style.borderTopLeftRadius = ''
})

container.addEventListener('mouseover', ()=>{
    main.style.boxShadow = '1px 1px 5px 1px white'
    main.style.zIndex = '1'
    main.style.transition = '1s'
    main.style.opacity = '1'
})
inputI.forEach((inputI)=>{
    inputI.addEventListener('mouseover', ()=>{
        inputI.style.boxShadow = '1px 1px 5px 1px black'
        inputI.style.transform = 'scale(1.05)'
        inputI.style.transition = '.2s'
    })
    inputI.addEventListener('mouseout', ()=>{
        inputI.style.boxShadow = ''
        inputI.style.transform = ''

    })
})
button.forEach((button)=>{
    button.addEventListener('mouseover', ()=>{
        button.style.boxShadow = '1px 1px 5px 1px black'
        button.style.transition = '.5s'
        button.style.transform = 'scale(1.05)'
    })
    button.addEventListener('mouseout', ()=>{
        button.style.boxShadow = ''
        button.style.transform = ''
    })
})