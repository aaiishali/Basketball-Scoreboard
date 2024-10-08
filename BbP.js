let homeNumEl = document.getElementById("homeNum")
let guestNumEl = document.getElementById("guestNum")

console.log(homeNumEl)
console.log(guestNumEl)

//HOME
let count = 0
let count2 = 0

function homeBtn1(){
    count += 1
    homeNumEl.innerText = count 
}


function homeBtn2(){
    count += 2
    homeNumEl.innerText = count 
}


function homeBtn3(){
    count += 3
    homeNumEl.innerText = count 
}


// //GUEST

function guestBtn1(){
    count2 += 1
    guestNumEl.textContent = count2
}


function guestBtn2(){
    count2 += 2
    guestNumEl.textContent = count2
}


function guestBtn3(){
    count2 += 3
    guestNumEl.textContent = count2
}


