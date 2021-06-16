let dvOutput = document.getElementById("dvOutput");

// string array
let myArray = [
    "Pancakes",
    "Shirt",
    "Cats",
]

// target any button and output specific string corresponding to that button
function target(num) {
    dvOutput.innerHTML = num;
    console.log(num);
}
