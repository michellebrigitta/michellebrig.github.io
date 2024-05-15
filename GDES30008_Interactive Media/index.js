let petals = [];
let numPetals = 12;
let petalColor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  petalColor = color(173, 216, 230); // Pink color
  for (let i = 0; i < numPetals; i++) {
    petals.push(new Petal(random(width), random(height)));
  }
}

function draw() {
  background(220);
  
  for (let i = 0; i < petals.length; i++) {
    petals[i].display();
    petals[i].float();
  }
}

function mousePressed() {
  for (let i = 0; i < petals.length; i++) {
    if (petals[i].contains(mouseX, mouseY)) {
      petals.splice(i, 1);
      break;
    }
  }
}

class Petal {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = random(20, 100);
    this.speed = random(1, 3);
    this.direction = random(TWO_PI);
  }
  
  display() {
    fill(petalColor);
    noStroke();
    ellipse(this.x, this.y, this.size, this.size);
    textAlign(CENTER, CENTER);
    fill(255);
    text("Pop the bubble!", this.x, this.y);
  }
  
  float() {
    this.x += cos(this.direction) * this.speed;
    this.y += sin(this.direction) * this.speed;
    
    // Wrap around the canvas
    if (this.x > width + this.size) {
      this.x = -this.size;
    } else if (this.x < -this.size) {
      this.x = width + this.size;
    }
    if (this.y > height + this.size) {
      this.y = -this.size;
    } else if (this.y < -this.size) {
      this.y = height + this.size;
    }
  }
  
  contains(px, py) {
    let d = dist(px, py, this.x, this.y);
    return d < this.size / 2;
  }
}