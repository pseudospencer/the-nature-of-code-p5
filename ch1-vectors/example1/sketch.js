var x = 100;
var y = 100;
var xspeed = 1;
var yspeed = 3;

function setup() {
    createCanvas(640, 360);
    background(255);
}

function draw() {
  background(255);

  x = x + xspeed;
  y = y + yspeed;

  if (x > width || x < 0) {
      xspeed = -xspeed;
  }
  if (y > height || y < 0){
      yspeed = -yspeed;
  }

  stroke(0);
  fill(175);
  ellipse(x, y, 15, 15);
}
