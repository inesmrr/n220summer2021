// get div
let element = document.getElementById("question");
element.addEventListener("click", showAnswers);

function showAnswers(event){
    // get attribute
    let answer = event.target.getAttribute("data-answer");
    // change innerHTML to display what is in the attribute
    event.target.innerHTML = answer;

    // show answer in console
    console.log(answer);
}