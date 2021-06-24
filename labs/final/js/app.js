// random footer creation and style
let newEl = document.createElement("div");
newEl.innerHTML = '<p>by : Inés Rivera :p</p>';
newEl.style.fontSize = 30 + "px";
newEl.style.textDecorationColor = "#312F2F";
newEl.style.backgroundColor = "#F6E8EA"
// place on page
document.body.appendChild(newEl);


// getting card classes from html
let cards = document.querySelectorAll('.card');
// adding event listener to each card class
cards.forEach(card => card.addEventListener('click', flipCard));

// flipped cards var
let flippedCard = 2;
let unoCard, dosCard;

// lock board var
let lockBoard = false;

// shuffle cards on load
window.onload = shuffle();

function flipCard(){
    // console.log("I was clicked")

    if(lockBoard) return;

    // if class is there, remove it / if Not, add it
    this.classList.toggle("flip");

    // console.log(!flippedCard);

    if (flippedCard == 2) {
        // first click
        flippedCard = 1;
        unoCard = this; //the card that was clicked

        // console logging the data attribute
        console.log(unoCard.dataset.letter);
    } 
    else {
        // second click
        flippedCard = 2;
        dosCard = this;
        // console.log( unoCard, dosCard );
        
        // console logging the data attribute
        console.log(dosCard.dataset.letter);

        checkMatch();
    }
}

function checkMatch(){
    // check if cards match
    if (unoCard.dataset.letter === dosCard.dataset.letter) {
        // match!!
        // let matched cards stay up and disable them
        unoCard.removeEventListener('click', flipCard);
        dosCard.removeEventListener('click', flipCard);

        // cards.style.backgroundColor = 

        console.log("match");
    } 
    else {
        // not match!!

        // lock board so user cannot click any other card
        lockBoard = true;
        
        // let cards stay up for 2 seconds before unflipping
        setTimeout(() => {
            // unflip cards
            unoCard.classList.remove('flip');
            dosCard.classList.remove('flip');
            // only unlock cards when they flipped back
            lockBoard = false;
        }, 2000);

        console.log("no match");
    }
}

// initiated by play again button
function playAgain(){
    console.log("play again");

    // unflipped matched cards and add click listener to all of them
    cards.forEach(card => card.classList.remove( 'flip'));
    cards.forEach(card => card.addEventListener('click', flipCard));

    // shuffle cards
    shuffle();
}

function shuffle(){
    // assign random # to each card and change its order
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 16);
        card.style.order = randomPos;
    })
}