// getting the ids from html
let dvOutput = document.getElementById("dvOutput");
let inputName = document.getElementById("inputName");

// when button is clicked, it will appear on the div whatever was inputted on the text box
function greet(){
    dvOutput.innerHTML = "Hello " + inputName.value;

    // clears out what was written in input
    inputName.value = "";

    console.log(dvOutput.innerHTML);
}
