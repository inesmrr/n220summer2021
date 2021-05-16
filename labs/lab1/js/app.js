let snowflakes = []; // array to hold snowflake objects

function setup() {
  createCanvas(800, 600);
  noStroke();
}

function draw(){
  var white = "#f1f4ff";
  var darkBlue = "#221684";
  var blue = "#5576d1";
 
  background(darkBlue);
  let t = frameCount / 60; // update time

  // create a random number of snowflakes each frame
  for (let i = 0; i < random(5); i++) {
    snowflakes.push(new snowflake()); // append snowflake object
  }

  // loop through snowflakes with a for..of loop
  for (let flake of snowflakes) {
    flake.update(t); // update snowflake position
    flake.display(); // draw snowflake
  }

  // background(darkBlue);
  
  
  fill(blue);
  noStroke();
  circle(30,30,200);
  
  fill(white);
  noStroke();
  
  push();
  translate(width * 0.8, height * 0.5);
  // rotate(frameCount / -100.0);
  star(100, 0, 15, 40, 5);
  pop();
  
  push();
  translate(width * 0.8, height * 0.5);
  // rotate(frameCount / -100.0);
  star(-100, -200, 15, 40, 5);
  pop();
  
  push();
  translate(width * 0.8, height * 0.5);
  // rotate(frameCount / -100.0);
  star(-200, 100, 15, 40, 5);
  pop();
  
  push();
  translate(width * 0.8, height * 0.5);
  // rotate(frameCount / -100.0);
  star(-400, -100, 15, 40, 5);
  pop();
  
  function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
    }
    
}

// snowflake class so annoying
function snowflake() {
  // initialize coordinates
  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialangle = random(0, 2 * PI);
  this.size = random(2, 5);

  // radius of snowflake spiral
  // chosen so the snowflakes are uniformly spread out in area
  this.radius = sqrt(random(pow(width / 2, 2)));

  this.update = function(time) {
    // x position follows a circle
    let w = 0.6; // angular speed
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

    // different size snowflakes fall at slightly different y speeds
    this.posY += pow(this.size, 0.5);

    // delete snowflake if past end of screen
    if (this.posY > height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  };

  this.display = function() {
    ellipse(this.posX, this.posY, this.size);
  };
}

