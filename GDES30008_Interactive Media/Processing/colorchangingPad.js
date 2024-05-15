function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    }
    
    
    function draw() {
      line(mouseX, mouseY, pmouseX, pmouseY);
    }
    
    function mousePressed() {
      background(random(256), random(256), random(256));
    }    