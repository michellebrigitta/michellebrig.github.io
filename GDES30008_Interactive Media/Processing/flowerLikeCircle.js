//this code is sourced from thedotisblack on YouTube, but further explored with self adjustments
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }

function setup() {
    createCanvas(windowWidth, windowHeight);
    background('#eeeeee');
    frameRate(12);
  }
  
  function draw() {
    background(random(255), random(255), random(255));
    
    translate(width/2, height/2);
    for (let n = 0; n < 30; n++) {
      stroke(random(173), random(216), random(230));
      for (let a = 0; a < 360; a += 1) {
        let x = random(50, 150);
        let xx = random(150, 350);
        push();
        rotate(radians(a));
        strokeCap(SQUARE);
        strokeWeight(4);
        line(x, 0, xx, 0);
        pop();
      }
    }
  }
    
  function keyPressed() {
    redraw();
  }