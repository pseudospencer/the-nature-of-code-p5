var m = [];
var numMovers = 13;

function setup() {
    createCanvas(640, 360);
    background(255);

    for (let n = 0; n <= numMovers; n++) {
        m[n] = new mover();
    }

}

function draw() {
    background(255, 5); // Trails

    for (let n = 0; n < m.length; n++) {
        m[n].update();
        m[n].checkEdges();
        m[n].display();
    }
}

function mover() {
    /*
        OK, going to make this thing behave like a rabbit.
        Rabbits walk sometimes (slowly) and jump sometimes (abrupt) and also run (part of the time)
    */
    this.location = createVector(random(width), random(height));
    this.velocity = createVector(0,0);
    this.acceleration = createVector(0,0);
    this.aOffset = createVector(random(100), random(100) + random(1000,10000));
    this.oIncrement = createVector(0.01, 0.01);
    this.topspeed = 10;
    this.uniqueAccel = random(0, .3);
    this.cantJump = random(50);
    this.fillColor = random(255);


    this.update = function() {
        let p = random(1);
        if (p <= .93) {
            this.walk();
        } else if (p > .93 <= .99) {
            this.run();
        } else {
            this.jump();
        }
    }

    this.walk = function() {
        // Walks around randomly
        let dir = p5.Vector.random2D();
        dir.normalize();
        dir.mult(0.3);
        this.acceleration = dir;
        if (this.topspeed > 1) {
            this.topspeed -= 1;
        }
        this.motion101();
    }

    this.jump = function() {
        // I don't want them to jump too often
        if (this.cantJump > 0){
            this.cantJump -= 1;
        } else {
            let dir = p5.Vector.random2D();
            dir.normalize();
            dir.mult(40);
            this.location.add(dir);
            this.acceleration.mult(.001);
            this.topspeed = 1;
            this.motion101();
            this.cantJump = random(50);
        }

    }

    this.run = function() {
        this.acceleration.mult(5);
        this.topspeed = 5;
        this.motion101();
    }

    this.motion101 = function() {
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.topspeed);
        this.location.add(this.velocity);
    }

    this.display = function() {
        stroke(0);
        fill(this.fillColor);
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
