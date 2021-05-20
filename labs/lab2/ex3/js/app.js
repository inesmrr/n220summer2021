// diameter of circle
let s = 1;

function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(0);
    fill(255, 0, 0);
    circle(400, 300, s);
    s = s + 1;
  
    // if s is equal or greater than 200, set d back to 1 and start over
  if (s >= 200 ){
      console.log("limit")
    s = 1;
  }
}


// warp fail lol
// let xPos = 0;
// let yPos = 200;

// function setup(){
//     createCanvas(800, 600);
// }

// function draw(){
//     background(0);
//     xPos = xPos + 5;
//     circle(xPos, yPos, 30);

//     if (xPos < 500){
//         console.log("wtf");
//     } else {
//         background(0);
//         xPos = xPos + 5;
//         circle(0, 200, 30);
//     }
// }

