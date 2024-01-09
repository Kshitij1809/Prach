let right = document.getElementById("right")
let right0 = document.getElementById("right0")
let right1 = document.getElementById("right1")
// 
let left = document.getElementById("left")
let left0 = document.getElementById("left0")
let left1 = document.getElementById("left1")
// 
let cards = document.getElementById("cards")
let cards0 = document.getElementById("cards0")
let cards1 = document.getElementById("cards1")
let card = document.getElementById("card")

function scrollR() {
    cards.scrollBy(280,0)
}
function scrollR0() {
    cards0.scrollBy(280,0)
}
function scrollR1() {
    cards1.scrollBy(280,0)
}
function scrollL(){
    cards.scrollBy(-280,0)
}
function scrollL0(){
    cards0.scrollBy(-280,0)
}
function scrollL1(){
    cards1.scrollBy(-280,0)
}

right.addEventListener("click", scrollR)
right0.addEventListener("click", scrollR0)
right1.addEventListener("click", scrollR1)
left.addEventListener("click", scrollL)
left0.addEventListener("click", scrollL0)
left1.addEventListener("click", scrollL1)
