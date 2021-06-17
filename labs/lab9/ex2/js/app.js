let inputText = document.getElementById("inputText");
let dvTally = document.getElementById("tally");
let dvSay = document.getElementById("say");
	
function breakCatch(){
    // var for whatever is on input
  let sentence = inputText.value;

  console.log(sentence);

  // split removes the spaces from the words inputted
  let splitSentence = sentence.split(" ");

  console.log(splitSentence);

//searching for bad words part-----------
    // bad words array
    let badWords = ["clear", "water", "tires"]
    // tally counter start
    var counter = 0;

    for( let i = 0; i < splitSentence.length; i++) {
        // check if any of the words match with index 0
        if(splitSentence[i] == badWords[0]){
            console.log(splitSentence[i], badWords[0]);
            console.log("FOUND");
            // add to tally
            console.log(counter += 1); 
        }
        else{
            console.log(splitSentence[i], badWords[0]);
            console.log("NOT FOUND")
        }
        // check if any of the words match with index 1
        if(splitSentence[i] == badWords[1]){
            console.log(splitSentence[i], badWords[1]);
            console.log("FOUND");
            console.log(counter += 1);
        }
        else{
            console.log(splitSentence[i], badWords[1]);
            console.log("NOT FOUND")
        }
        // check if any of the words match with index 2
        if(splitSentence[i] == badWords[2]){
            console.log(splitSentence[i], badWords[2]);
            console.log("FOUND");
            console.log(counter += 1);
        }
        else{
            console.log(splitSentence[i], badWords[2]);
            console.log("NOT FOUND")
        }

        // since if a bad word was found the counter will be more than 0, the found/not found will be dependent on that condition
        if (counter > 0){
            dvSay.innerHTML = "FOUND";
        }
        else {
            dvSay.innerHTML = "NOT FOUND";
        }

        // this is the total of all the counters from the if statement
        dvTally.innerHTML = "Bad words total: " + counter;

    }

    // clear input box
    inputText.value = "";
}
