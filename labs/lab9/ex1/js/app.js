// getting html elements
let inputNumber = document.getElementById("inputNumber");
let dvSum = document.getElementById("dvSum");
let dvAvg = document.getElementById("dvAvg");

function breakCalc(){
    // var for input values from user
    let values = inputNumber.value;

    // take away the commas
    let valArray = values.split(",");

    console.log(valArray);
  
    // reduce array
    let sum = 0;
  
    // typecasting array into number and summing them
    for( let i = 0; i < valArray.length; i++){
      sum += Number(valArray[i]);  
    }

    console.log(sum);

    // avg calculation
    var avg = sum / valArray.length;
    console.log(avg);
  
    // output the results on page
    dvSum.innerHTML = "Sum: " + sum;
    dvAvg.innerHTML = "Average: " + avg;

    // clear input box
    inputNumber.value = "";
}