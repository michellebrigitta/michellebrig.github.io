//this code is sourced from Programming Chaos channel on YouTube, but further explored with self adjustments
let f1;

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100);
  f1 = new Flower();
  //frameRate(1);
}

function draw() {
  //background((f1.hue + 180) % 360, 10, 100);
  push();
  translate(random(width), random(height));
  scale(random(0.3, 0.5));
  //translate(width * 0.5, height * 0.5);
  f1.display();
  pop();
  f1 = new Flower();
}

class Flower {
    constructor() {
      this.hue = random(0, 360);
      this.petalCount = int(random(2, 8)) * 4;
      this.len = random(100, 200);
      this.wid = random(0.2, 0.5);
      this.rowCount = int(random(4, 10));
      this.rotate = random(0.5, 2.0);
    }
  
    display() {
      noStroke();
      let deltaA = (2 * PI) / this.petalCount;
      let petalLen = this.len;
      push();
      for (let r = 0; r < this.rowCount; r++) {
        for (let angle = 0; angle < 2 * PI; angle += deltaA) {
          rotate(deltaA);
          this.petal(petalLen * 0.8, 0, petalLen, petalLen * this.wid, (this.hue + r * 20) % 360);
        }
        rotate(this.rotate);
        petalLen = petalLen * (1 - 3.0 / this.rowCount);
      }
      pop();
    }
  
    petal(x, y, lenP, widP, hueP) {
      noStroke();
      for (let i = 20; i > 0; i--) {
        fill(((hueP + i * 2) % 360), 70, 3.5 * i);
        ellipse(x, y, lenP * i / 20.0, widP * i / 20.0);
        noStroke();
      }
    }
  }