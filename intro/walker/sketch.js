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
        var r = floor(random(4));

        if ( r == 0) {
            this.x++;
        } else if (r ==1) {
            this.x--;
        } else if (r == 2) {
            this.y++;
        } else if (r == 3) {
            this.y--;
        }
    }
}
