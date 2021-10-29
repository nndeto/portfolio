//global variables
const tamagotchiImage = document.getElementById("tamagotchi-img");
const journeyImage = document.getElementById("journey-img");
const wandererImage = document.getElementById("wanderer-img");
const rooImage = document.getElementById("roo-img")

//img sources
const tSOne = "images/project-images/tamagotchi-landing.webp";
const tSTwo = "images/project-images/tamagotchi-gameplay.webp";
const jSOne = "images/project-images/journ.ey-landing.webp";
const jSTwo = "images/project-images/journ-ey-all.webp";
const wSOne = "images/project-images/wanderer-landing.webp";
const wSTwo = "images/project-images/wanderer-about.webp";
const rSOne = "images/project-images/roo-landing.webp";
const rSTwo = "images/project-images/roo-roommate.webp";

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


console.log("hello")
