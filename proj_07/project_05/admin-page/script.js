const navLink = document.querySelectorAll('.nav-link');
const leftLeftItem = document.querySelectorAll('.left-left-item')
const rightContainerIcons = document.querySelectorAll('.id-right-container-icons')

navLink.forEach((navLink) =>{
    navLink.addEventListener('mouseover', ()=>{
        navLink.style.transition = '.5s'
    })
})
leftLeftItem.forEach((leftLeftItem) =>{
    leftLeftItem.addEventListener('mouseover', ()=>{
        leftLeftItem.style.transition = '.5s'
    })
})
rightContainerIcons.forEach((rightContainerIcons) =>{
    rightContainerIcons.addEventListener('mouseover', ()=>{
        rightContainerIcons.style.transition = '.5s'
    })
})