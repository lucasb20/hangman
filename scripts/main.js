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

function init(){
    chosen_word = words[Math.floor(Math.random()*words.length)]
    update()
}

function update(){
    draw_gallows()
    ger_word()
}

function ger_word(){
    ctx.font = "100px arial black"
    for(let i=0;i<chosen_word.length;i++){
        ctx.fillText('_ ',sub_posx+i*60,sub_posy)
    }
}

function draw_gallows(){
    ctx.fillRect(gallows_posx,gallows_posy,10,350)
    ctx.fillRect(gallows_posx,gallows_posy,150,10)
    ctx.fillRect(gallows_posx,gallows_posy,150,10)
    ctx.fillRect(gallows_posx+150,gallows_posy,10,40)

}

function draw_hangman

function send(){

}