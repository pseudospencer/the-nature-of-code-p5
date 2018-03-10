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
    this.x = width/2;
    this.y = height/2;

    this.display = function() {
        stroke(0);
        ellipse(this.x, this.y, 1, 1);
    }

    this.step = function() {
        //Dynamic probability - 50% chance to move in the direction of the mouse, 50% random
        var chance = random(1);
        var xStep = randomGaussian();
        var yStep = randomGaussian();

        if (chance < .5) {
            this.x += xStep * 2;
            this.y += yStep * 2;
        } else {
            this.x += xStep;
            this.y += yStep;
        }

    }
}
