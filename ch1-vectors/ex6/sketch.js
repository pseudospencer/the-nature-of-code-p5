var c;

function setup() {
    createCanvas(640, 360);
    background(255);

    c = new Car();
}

function draw() {
    background(255, 5); // Trails 
    c.update();
    c.checkEdges();
    c.display();
}

function Car() {
    this.location = createVector(width/2, height/2);
    this.velocity = createVector(0,0);
    this.acceleration = p5.Vector.random2D();
    this.accelerationOffset = createVector(0, 10000);
    this.offsetIncrement = createVector(4, 4);
    this.topspeed = 10;


    this.update = function() {
        this.acceleration.set(
                noise(this.accelerationOffset.x) * random(-0.3, 0.3),
                noise(this.accelerationOffset.y) * random(-0.3, 0.3));
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.topspeed);
        this.location.add(this.velocity);

        this.accelerationOffset.add(this.offsetIncrement);
    }

    this.display = function() {
        stroke(0);
        fill(175);
        ellipse(this.location.x, this.location.y, 20, 20);
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
