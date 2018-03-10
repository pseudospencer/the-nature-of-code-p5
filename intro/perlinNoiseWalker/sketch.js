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
    this.x = 0;
    this.y = 0;
    this.tx = 0;
    this.ty = 20;

    this.display = function() {
        stroke(0);
        fill(127);
        ellipse(this.x, this.y, 20, 20);
    }

    this.step = function() {
        let xStep = map(noise(this.tx), 0, 1, 0, width);
        let yStep = map(noise(this.ty), 0, 1, 0, height);

        this.x = xStep;
        this.y = yStep;

        this.tx += .01;
        this.ty += .01;
    }
}
