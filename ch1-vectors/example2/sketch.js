var loc;
var vel;

function setup() {
    createCanvas(640, 360);
    background(255);

    loc = createVector(100,100);
    vel = createVector(2.5, 5);
}

function draw() {
  background(255);

  loc.add(vel);

  if (loc.x > width || loc. x < 0) {
      vel.x = -vel.x;
  }
  if (loc.y > height || loc. y < 0) {
      vel.y = -vel.y
  }

  stroke(0);
  fill(175);
  ellipse(loc.x, loc.y, 15, 15);
}
