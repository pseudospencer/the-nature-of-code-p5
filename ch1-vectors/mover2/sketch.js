var m;

function setup() {
    createCanvas(640, 360);
    background(255);

    m = new Mover();
}

function draw() {
    m.update();
    m.checkEdges();
    m.display();
}

function Mover() {
    this.location = createVector(width/2, height/2);
    this.velocity = createVector(0,0);
    // Constant acceleration
    this.acceleration = createVector(-0.001, 0.01);
    this.topspeed = 10;

    this.update = function() {
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.topspeed);
        this.location.add(this.velocity);
    }

    this.display = function() {
        stroke(0);
        fill(175);
        ellipse(this.location.x, this.location.y, 15, 15);
    }

    this.checkEdges = function() {
        if (this.location.x < 0) {
            this.location.x = width;
        } else if (this.location.x > width) {
            this.location.x = 0;
        }
        if (this.location.y < 0) {
            this.location.y = height;
        } else if (this.location.y > height) {
            this.location.y = 0;
        }
    }
}
