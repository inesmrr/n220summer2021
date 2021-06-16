// getting the ids from html
let dvOutput = document.getElementById("dvOutput");
let inputNumber = document.getElementById("inputNumber");
let amt = inputNumber.value;

function check(){
    // calls other function with the strings so i can return them
    let amt = inputNumber.value;
    var res = isDivisible(amt);
    console.log(res);

    // use res variable to return strings and say true or false
    if(inputNumber.value % 7 == 0){
        dvOutput.innerHTML = res;
    }
    else {
        dvOutput.innerHTML = res;
    }
}

// calling inputNumber.value
function isDivisible(amt) {
    // checks condition
    if(amt % 7 == 0){
        // these strings are what will be shown in the console when this function is called in check
        var tString = "True";
        return tString;
    }
    else{
        var fString = "False";
        return fString;
    }

}


