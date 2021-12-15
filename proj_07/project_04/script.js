const leftItem = document.querySelectorAll('.left-item');
const centerItems = document.querySelectorAll('.center');
const items = document.querySelectorAll('.items');
const rightItem = document.querySelectorAll('.right-item');
const image = document.querySelectorAll('.image')
const user = document.querySelectorAll('.user')

leftItem.forEach((leftItem)=>{
    leftItem.addEventListener('mouseover',() =>{
        leftItem.style.background = '#333'
        leftItem.style.transition = '.3s'
    })
    leftItem.addEventListener('mouseout',() =>{
        leftItem.style.background = ''
    })
})
centerItems.forEach((centerItems)=>{
    centerItems.addEventListener('mouseover', ()=>{
        centerItems.style.background = '#333'
        centerItems.style.transition = '.3s'
    })
    centerItems.addEventListener('mouseout', ()=>{
        centerItems.style.background = ''
    })
})
items.forEach((items)=>{
    items.addEventListener('mouseover', ()=>{
        items.style.background = '#333'
        items.style.transition = '.3s'
    })
    items.addEventListener('mouseout', ()=>{
        items.style.background = ''
    })
})
rightItem.forEach((rightItem)=>{
    rightItem.addEventListener('mouseover', ()=>{
        rightItem.style.background = '#333'
        rightItem.style.transition = '.3s'
    })
    rightItem.addEventListener('mouseout', ()=>{
        rightItem.style.background = ''
    })
})
image.forEach((image)=>{
    image.addEventListener('mouseover', ()=>{
        image.style.background = '#333'
        image.style.transition = '.3s'
        image.style.transform = 'scale(1.05)'
    })
    image.addEventListener('mouseout', ()=>{
        image.style.background = ''
        image.style.transform = 'scale(1)'
        user.style.position = 'absolute'
    })
})