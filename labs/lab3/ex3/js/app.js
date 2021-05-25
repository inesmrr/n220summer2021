function setup() { 
    createCanvas(600, 600);
  } 
  
  function draw() { 
    //   spacing between circles
    var spacing = width/6;
      translate(spacing, spacing);
    background(0);
    
    
    // y axis circles
    for(var i=0; i < 5; i++){
    // x axis circles
      for(var j=0; j < 5; j++){
        // both loops
        var diam = (i+j+1) * 100;
        var x = i*spacing;
        var y = j*spacing;
            // mouse interactivity
            var d = dist(x,y,mouseX - spacing,mouseY - spacing);
            var mappedDiam = map(d,0, 700, 150, 45)
        // circle style
        fill(255, 0, 0);
        noStroke();
      ellipse(x,y,mappedDiam);
      }
     }
  }