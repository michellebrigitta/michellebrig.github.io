let dice1;
let dice2;
let dice3;
let colours;

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
  
function setup() {
  createCanvas(windowWidth, windowHeight); //hereafter 'width' height
  background(0,255,255);
  fill(255,0,0);
  frameRate(15);
  colours=["#FFF", "#F00", "#00F"];
}

function draw() {
  dice1=random(1,6);
  dice2=random(1,12);
  dice3=random(1,6);
  fill(map(dice3, 1, 6, 0, 255));
  fill(random(colours));
  let circlex=dice1*(12-dice2);
  let circlex_mapped=map (circlex, 0, 66, 0, width); //0 = minimum value, 66 = max value
  let circley=map(dice2*(7-dice1+12), 13, 216, 0, height); // 13 = min. value, 216 = max value
  circle(circlex_mapped, circley, dice2*2);
}