// rect positions
let ypos = 140;
let ystep = 30;
let xpos = 80;
let xstep = 30;

function setup() {
  createCanvas(400, 400);
  noLoop();
}

function draw() {
//   white
  background(255);
//   red
  fill(255, 0, 0);
  noStroke();
  
//   4 rect rows
  let rows = 4;

//   for loop syntax
  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= i; ++j) {
      rect(xpos+(xstep*j), ypos+(ystep*i), 20, 20);
    }
  }
}