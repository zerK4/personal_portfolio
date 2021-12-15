const moveArrow = document.querySelector('.move-arrow');
const removeArrow = document.querySelector('.remove-arrow');
let leftPanel = document.querySelector('.left-panel')
let userInfo = document.querySelector('.user-info')
let adminLinks = document.querySelectorAll('.admin-links')
const arrowLeft = document.querySelector('.bi-arrow-left-circle-fill')
const arrowRight = document.querySelector('.bi-arrow-right-circle-fill')
const rightPanel = document.querySelector('.right-panel')


moveArrow.addEventListener('mouseover', ()=>{
    leftPanel.style.transition = '.5s'
    leftPanel.style.boxShadow = '1px 1px 5px 1px black'
    arrowLeft.style.transform = 'scale(1.2)'
    arrowLeft.style.transition = '.5s'
})
moveArrow.addEventListener('mouseout', ()=>{
    leftPanel.style.transition = '.5s'
    leftPanel.style.boxShadow = ''
    arrowLeft.style.transform = 'scale(1)'
    arrowLeft.style.transition = '.5s'
})
removeArrow.addEventListener('mouseover', ()=>{
    leftPanel.style.transition = '.5s'
    leftPanel.style.boxShadow = '1px 1px 5px 1px black'
    arrowRight.style.transition = '.5s' 
    arrowRight.style.transform = 'scale(1.2)'
})
removeArrow.addEventListener('mouseout', ()=>{
    leftPanel.style.transition = '.5s'
    leftPanel.style.boxShadow = ''
    arrowRight.style.transform = 'scale(1)'
})


arrowRight.style.display = 'none'
function moveToRight(){
    adminLinks.forEach((adminLinks)=>{
        leftPanel.style.width = '1%'
        userInfo.style.display = 'none'
        adminLinks.style.display = 'none'
        removeArrow.style.transform = 'translateX(-10%)'
        arrowLeft.style.display = 'none'
        arrowRight.style.display = ''
    })
    rightPanel.style.marginLeft = '2%'
    rightPanel.style.transition = '1s'
}
function moveToLeft(){
    leftPanel.style.width = ('15%')
    removeArrow.style.transform = 'translateX(16.5%)'
    removeArrow.style.display = 'none'
    arrowRight.style.transition = '.5s'
    moveArrow.style.display = ''
    userInfo.style.display = ''
    rightPanel.style.marginLeft = '16%'
    rightPanel.style.transition = '.5s'
    adminLinks.forEach((adminLinks)=>{
        adminLinks.style.display = ''
    })
}

