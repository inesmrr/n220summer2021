// getting ids from html
let dvTip = document.getElementById("dvTip");
let dvTotal = document.getElementById("dvTotal");
let inputText = document.getElementById("inputText");

// onclick function
function calculate(){
    // var for value in input box
    let inputNumber = Number(inputText.value);
    // created a set tip equation
    let tipped = Number(inputNumber * .15);
    // outputs calculated tip
    dvTip.innerHTML = "Tip: " + tipped;
    // outputs generated tip plus input value to get the total
    dvTotal.innerHTML = "Total: " + (tipped += inputNumber );
    // console logging the input value for my sake lol
    console.log(inputNumber);
}