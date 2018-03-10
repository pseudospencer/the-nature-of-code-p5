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
        var xStep = floor(random(3)) - 1;
        var yStep = floor(random(3)) - 1;

        if (chance < .5) {
            if (mouseX > this.x) {
                this.x++;
            } else {
                this.x--;
            }
            if (mouseY > this.y) {
                this.y++;
            } else {
                this.y--;
            }
        } else {
            this.x += xStep;
            this.y += yStep;
        }

    }
}
