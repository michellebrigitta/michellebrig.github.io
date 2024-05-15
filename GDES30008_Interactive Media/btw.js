//this code is adopted from https://github.com/matildasutho/matildasutho.github.io/blob/main/InteractiveMedia2024/Week4/sketch.js, with omitted parts and some lines changed
let colors;
let dice1, dice2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(randomColour());
  colors = [
    randomColour(),
    randomColour(),
    randomColour(),
    randomColour(),
    randomColour(),
    randomColour(),
  ];
}

function draw() {
  dice1 = random(0, 5);
  dice2 = random(0, 12);
  rectFill = random(colors);
  x_mapped = map(dice1, 0, 5, 0, width);
  y_mapped = map(dice2, 0, 5, 0, height);
  push();
  noStroke();
  fill(rectFill);
  rect(x_mapped, y_mapped, dice2 * 10, dice1 * 3);
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(randomColour());
}

function randomColour() {
  let r = random(200);
  let g = random(200);
  let b = random(200);
  return color(r, g, b);
}