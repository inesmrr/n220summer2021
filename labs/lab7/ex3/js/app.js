// getting html elements
let dvOutput = document.getElementById("dvOutput");
let userName = document.getElementById("userName");
let passWord = document.getElementById("passWord");

// onclick function
function verify(){
    // if the input text say x&y, then output string
    if((userName.value == "Username") && (passWord.value == "Password")) {
        // output on page div 
        dvOutput.innerHTML = "Success";
        // console info for my sake lol 
        console.log(userName.value + passWord.value);
    } 
    // if info on input text is wrong, output string2
    else {
        // output div
        dvOutput.innerHTML = "Wrong information";
        console.log(userName.value + passWord.value);
    }
}
