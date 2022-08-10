const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const increaseBtn = document.getElementById('increase')
const decreaseBtn = document.getElementById('decrease')
const sizeEl = document.getElementById('size')
const colorEl = document.getElementById('color')
const clearEl = document.getElementById('clear')

let size = 15
colorEl.value = 'red'
let color = colorEl
let isClicked = false
let x
let y

canvas.addEventListener('mousedown',(e)=>{
    isClicked = true

    x = e.offsetX
    y = e.offsetY
})

canvas.addEventListener('mouseup',(e)=>{
    isClicked = false

    x = undefined
    y = undefined
})
canvas.addEventListener('mousemove',(e)=>{
    if(isClicked){
        x2 = e.offsetX
        y2 = e.offsetY

        darwCircle(x2,y2)
        drawLine(x,y,x2,y2)

        x = x2
        y = y2
    }
})

function darwCircle(x,y){
    ctx.beginPath()
    ctx.arc(x,y,size,0,Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
}

function drawLine(x1,y1,x2,y2){
    ctx.beginPath()
    ctx.moveTo(x1,y1)
    ctx.lineTo(x2,y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size * 2
    ctx.stroke()
}

function updateSize(){
    sizeEl.innerText = size
}

increaseBtn.addEventListener('click',()=>{
    size +=5

    if(size>50){
        size = 50
    }
    updateSize()
})

decreaseBtn.addEventListener('click',()=>{
    size -=5

    if(size<5){
        size = 5
    }
    updateSize()
})

colorEl.addEventListener('change', (e)=>color = e.target.value)
clearEl.addEventListener('click',(e)=> ctx.clearRect(0,0,canvas.width,canvas.height))