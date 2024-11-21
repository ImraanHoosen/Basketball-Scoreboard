let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
console.log(homeScore, guestScore)

let currHomeScore = 0
let currGuestScore = 0

//Adding the home teams score buttons funtions
function add1Home(){
    currHomeScore += 1
    homeScore.textContent = currHomeScore
}

function add2Home(){
    currHomeScore += 2
    homeScore.textContent = currHomeScore
}

function add3Home(){
    currHomeScore += 3
    homeScore.textContent = currHomeScore
}

// adding the guest teams score buttons funtions 

function add1Guest(){
    currGuestScore += 1
    guestScore.textContent = currGuestScore}

function add2Guest(){
    currGuestScore += 2
    guestScore.textContent = currGuestScore}

function add3Guest(){
    currGuestScore += 3
    guestScore.textContent = currGuestScore
}


//adding the new game button funtion

function newGame(){
    currHomeScore = 0
    currGuestScore = 0
    homeScore.textContent = currHomeScore
    guestScore.textContent = currGuestScore
}
