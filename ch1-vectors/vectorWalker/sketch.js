var w;

function setup() {
    createCanvas(640, 360);
    w = new Walker();
    background(255);
}

function draw() {
  w.step();
  w.display();
}

function Walker() {

    this.loc = createVector(width/2,height/2);
    this.offset = createVector(1,1);

    this.display = function() {
        stroke(0);
        fill(127);
        ellipse(this.loc.x, this.loc.y, 20, 20);
    }

    this.step = function() {
        this.offset.set(random(-2,2), random(-2,2));

        this.loc.add(this.offset);
    }
}
