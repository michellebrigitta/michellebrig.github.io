var img, img2;
function preload() {
  img=loadImage("https://images.unsplash.com/photo-1601979031925-424e53b6caaa?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHVwcHl8ZW58MHx8MHx8fDA%3D")
  img2=loadImage("https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D")
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }

function setup() {
createCanvas(windowWidth, windowHeight);
}


function draw() {
  if (mouseIsPressed) {
  image(img, mouseX-50, mouseY-50, 100, 100/img.width*img.height);
} else {
  image(img2, mouseX-50, mouseY-50, 100, 100/img.width*img.height);
}
}