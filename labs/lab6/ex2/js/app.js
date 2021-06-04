let tamaDiv = document.getElementById("tamagotchi");

// tamagotchi object
let myPet = {
    name: "Pebbles",
    energy: 30,
    happiness: 50,
    age: 7,
}

console.log(myPet.name);

// load function right away
window.onload = start();

function start(){
    // display pet stats info
    let name = myPet.name;
    let energy = myPet.energy;
    let happiness = myPet.happiness;
    tamaDiv.innerHTML = `<h1>${name}</h1>` + "Energy" + `<p>${energy}</p>` + "Happiness" + `<p>${happiness}</p>`;

    // style
    // tamaDiv.style.marginLeft = "20px";
}

function feed() {
    // add 5 everytime pet is fed
    myPet.energy = myPet.energy + 5;

    // display pet stats info including the change after button is clicked
    let name = myPet.name;
    let energy = myPet.energy;
    let happiness = myPet.happiness;
    tamaDiv.innerHTML = `<h1>${name}</h1>` + "Energy" + `<p>${energy}</p>` + "Happiness" + `<p>${happiness}</p>`;

    // show on console
    console.log(myPet.energy);
}

function play() {
    // add 5 everytime pet is played with
    myPet.happiness = myPet.happiness + 5;

    // display pet stats info including the change after button is clicked
    let name = myPet.name;
    let energy = myPet.energy;
    let happiness = myPet.happiness;
    tamaDiv.innerHTML = `<h1>${name}</h1>` + "Energy" + `<p>${energy}</p>` + "Happiness" + `<p>${happiness}</p>`;

    // show on console
    console.log(myPet.happiness);
}