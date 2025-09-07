let homeBt = document.getElementById("home-bt")
let guestBt = document.getElementById("guest-bt")
let saveEl = document.getElementById("save-el")
let aheadEl = document.getElementById("ahead-el")
let containerEl = document.querySelector(".container")
let homeEl = document.querySelector(".home")
let guestEl = document.querySelector(".guest")

count = 0
counT = 0
function one(){
    count += 1
    homeBt.textContent = count 
    ahead()
}

function two(){
    count += 2
    homeBt.textContent = count 
    ahead()
}

function three(){
    count += 3
    homeBt.textContent = count 
    ahead()
}


function oneG(){
    counT += 1
    guestBt.textContent = counT
    ahead()
}

function twoG(){
    counT += 2
    guestBt.textContent = counT
    ahead()
}

function threeG(){
    counT += 3
    guestBt.textContent = counT 
    ahead()
}
function save(){
    let totalScore = count + " - " + counT 
   saveEl.textContent = totalScore 
}
function reset() {
    homeBt.textContent = 0
    guestBt.textContent = 0
    count = 0
    counT = 0
    aheadEl.textContent = " "
    homeEl.classList.remove("win", "loss")
    guestEl.classList.remove("win", "loss")
    containerEl.classList.remove("tie")
}

function ahead(){
    homeEl.classList.remove("win", "loss")
    guestEl.classList.remove("win", "loss")
    containerEl.classList.remove("tie")
    if ( count > counT ){
        aheadEl.textContent = "home is winning "
         homeEl.classList.add("win")
         guestEl.classList.add("loss")
    } else if (counT > count){
        aheadEl.textContent = "guest town is winning"
         homeEl.classList.add("loss")
         guestEl.classList.add("win")
    } else {
        aheadEl.textContent = "tie"
        containerEl.classList.add("tie")
    }
}


// create a function that saves the scores 
// create a function that display who is ahead in the current game 