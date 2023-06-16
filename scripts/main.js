const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')

canvas.style.background = 'white'
canvas.width = 600
canvas.height = 400

let num_error = 0
let chosen_word

const words = ['cavalo','pilantra','javali','acrobata','abajur','beijar','matar','hangman']
const chars = []
const sub_posx = 100,sub_posy = 350
const gallows_posx = 25, gallows_posy = 50
const hangman_posx = 180, hangman_posy = 110

const check_posx = 275,check_posy=100

const but_send = document.querySelector('#but_send')
but_send.addEventListener('click',send)

function init(){
    chosen_word = words[Math.floor(Math.random()*words.length)]
    for(let i=0;i<chosen_word.length;i++)chars.push('')
    update()
}

function update(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    draw_gallows()
    ger_word()
    ctx.font = "50px arial black"
    for(let i=0;i<chars.length;i++){
        ctx.fillText(chars[i],sub_posx+5+i*60,sub_posy-5)
    }
    check_win(draw_hangman(num_error))
}

function check_win(num){
    if(num == 1){
        ctx.font = '40px arial black'
        ctx.fillText('Você perdeu.',check_posx,check_posy)
        but_send.removeEventListener('click',send)

        return 0
    }

    let count=0
    for(let i=0;i<chars.length;i++){
        if(chars[i]!='')count++
    }

    if(count == chars.length){
        ctx.font = '40px arial black'
        ctx.fillText('Você ganhou.',check_posx,check_posy)
        but_send.removeEventListener('click',send)
    }
}

function ger_word(){
    ctx.font = "100px arial black"
    for(let i=0;i<chosen_word.length;i++){
        ctx.fillText('_',sub_posx+i*60,sub_posy)
    }
}

function draw_gallows(){
    ctx.fillRect(gallows_posx,gallows_posy,10,350)
    ctx.fillRect(gallows_posx,gallows_posy,150,10)
    ctx.fillRect(gallows_posx,gallows_posy,150,10)
    ctx.fillRect(gallows_posx+150,gallows_posy,10,40)
}

function draw_hangman(num){
    if(num == 0)return 0
    ctx.beginPath()
    ctx.lineWidth = 3
    ctx.arc(hangman_posx,hangman_posy,20,0,2*Math.PI,false)
    ctx.stroke()
    if(num == 1)return 0
    ctx.fillRect(hangman_posx,hangman_posy+20,3,75)
    if(num === 2)return 0
    ctx.save()
    ctx.translate(hangman_posx,hangman_posy+20)
    ctx.rotate(50/180*Math.PI)
    ctx.fillRect(0,0,3,50)
    ctx.restore()
    if(num == 3)return 0
    ctx.save()
    ctx.translate(hangman_posx,hangman_posy+20)
    ctx.rotate(-50/180*Math.PI)
    ctx.fillRect(0,+3,3,50)
    ctx.restore()
    if(num == 4)return 0
    ctx.save()
    ctx.translate(hangman_posx,hangman_posy+95)
    ctx.rotate(50/180*Math.PI)
    ctx.fillRect(0,-2,3,50)
    ctx.restore()
    if(num == 5)return 0
    ctx.save()
    ctx.translate(hangman_posx,hangman_posy+95)
    ctx.rotate(-50/180*Math.PI)
    ctx.fillRect(0,0,3,50)
    ctx.restore()
    if(num == 6)return 1
}

function send(){
        let char = document.querySelector('#char').value
        if(char == '')return alert('Digite algo.')
        let check = false
        for(let i=0;i<chosen_word.length;i++){
            if(char == chosen_word[i]){
                check = true
                chars[i] = char
            }
        }
        if(!check)num_error++
        update()
        return 0
}