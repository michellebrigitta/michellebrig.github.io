let cloudX, cloudY; // Position of the cloud
let raindrops = []; // Array to store raindrop objects
let flower; // Flower object
var word = "CLICK THE CLOUD TO WATER THE FLOWER";
var sentence = "JUST LIKE THE FLOWER, YOU WILL ALSO GROW THROUGH THE CONTENTS OF THIS WEBSITE :)"
let loc = 50;
let pos = 100;

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }

function setup() {
  createCanvas(windowWidth, windowHeight);
  cloudX = width / 2;
  cloudY = height / 4;
  flower = new Flower(width / 2, height - 200);
}

function draw() {
  background(209, 237, 242);

  textSize(50)
  text(word, loc, 400);
  textFont("Trebuchet MS");
  loc = loc + 2;

  textSize(20);
  text(sentence, pos, 430);
  pos = pos - 1;

  // Display the cloud
  drawCloud(cloudX, cloudY, 200);

  // Display and update raindrops
  for (let i = 0; i < raindrops.length; i++) {
    raindrops[i].display();
    raindrops[i].fall();
  }

  // Display the flower
  flower.display();
  
}

function mouseClicked() {
  if (mouseX > cloudX - 100 && mouseX < cloudX + 100 && mouseY > cloudY - 50 && mouseY < cloudY + 50) {
    // Create a new raindrop at the position of the mouse
    let drop = new Raindrop(mouseX, mouseY);
    raindrops.push(drop);
    
    // Grow the flower
    flower.grow();
  }
}

// Function to draw a cloud
function drawCloud(x, y, size) {
  noStroke();
  fill(255);
  ellipse(x, y, size, size * 0.8);
  ellipse(x - size * 0.3, y, size * 0.8, size * 0.6);
  ellipse(x + size * 0.3, y, size * 0.8, size * 0.6);
  ellipse(x - size * 0.6, y + size * 0.1, size * 0.8, size * 0.6);
  ellipse(x + size * 0.6, y + size * 0.1, size * 0.8, size * 0.6);
}

// Raindrop class
class Raindrop {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = random(3, 6);
  }

  // Method to display the raindrop
  display() {
    stroke(20, 100);
    stroke(65, 105, 225);
    line(this.x, this.y, this.x, this.y + 10);
  }

  // Method to update the raindrop's position
  fall() {
    this.y += this.speed;
    if (this.y > height) {
      this.y = random(-200, -100);
    }
  }
}

// Flower class
class Flower {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 10;
    this.maxSize = 100;
  }

  // Method to display the flower
  display() {
    fill(34, 139, 34);
    noStroke()
    rect(this.x-4, this.y, 7, 200);
    fill(255, 113, 181);
    noStroke();
    ellipse(this.x, this.y, this.size, this.size);
  }

  // Method to grow the flower
  grow() {
    if (this.size < this.maxSize) {
      this.size += 5;
    }
  }
}