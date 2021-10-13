//global variables
const tamagotchiImage = document.getElementById("tamagotchi-img");
const journeyImage = document.getElementById("journey-img");
const wandererImage = document.getElementById("wanderer-img");
const rooImage = document.getElementById("roo-img")
// const headerText = document.getElementById("title-change")
// let time = 0;
// let timeInterval = null;

// header text change effect 
// function textChange() {
//     if (time < 3) {
//         headerText.textContent = "."
//     } 
//     if (time > 3) {
//         headerText.textContent = ", developer"
//     } 
//     if (time > 6) {
//         headerText.textContent = ", dreamer"
//     } 
//     if (time > 9) {
//         headerText.textContent = ", doer"
//     }
//     if (time > 12) {
//         headerText.textContent = "."
//     }
// }

// function change() {
//     timeInterval = setInterval(function() {
//         time++
//         console.log(time)
//         textChange()
//     }, 1000)
// }

// change()

//img sources
const tSOne = "images/project-images/tamagotchi-landing.png";
const tSTwo = "images/project-images/tamagotchi-gameplay.png";
const jSOne = "images/project-images/journ.ey-landing.png";
const jSTwo = "images/project-images/journ-ey-all.png";
const wSOne = "images/project-images/wanderer-landing.png";
const wSTwo = "images/project-images/wanderer-about.png";
const rSOne = "images/project-images/roo-landing.png";
const rSTwo = "images/project-images/roo-roommate.png";

// image changes
function tChangeOne() {
    tamagotchiImage.src = tSTwo;
}
function tChangeTwo() {
    tamagotchiImage.src = tSOne;
}

function jChangeOne() {
    journeyImage.src = jSTwo;
}
function jChangeTwo() {
    journeyImage.src = jSOne;
}

function wChangeOne() {
    wandererImage.src = wSTwo;
}
function wChangeTwo() {
    wandererImage.src = wSOne;
}

function rChangeOne() {
    rooImage.src = rSTwo;
}
function rChangeTwo() {
    rooImage.src = rSOne;
}

//image event listeners
tamagotchiImage.addEventListener("mouseover", tChangeOne)
tamagotchiImage.addEventListener("mouseout", tChangeTwo)

journeyImage.addEventListener("mouseover", jChangeOne)
journeyImage.addEventListener("mouseout", jChangeTwo)

wandererImage.addEventListener("mouseover", wChangeOne)
wandererImage.addEventListener("mouseout", wChangeTwo)

rooImage.addEventListener("mouseover", rChangeOne)
rooImage.addEventListener("mouseout", rChangeTwo)

