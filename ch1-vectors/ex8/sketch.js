var m = [];
var numMovers = 10;

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

    // m.update();
    // m.checkEdges();
    // m.display();
}

function mover() {
    this.location = createVector(random(width), random(height));
    this.velocity = createVector(0,0);
    this.acceleration = createVector(0,0);
    this.topspeed = 10;
    this.uniqueAccel = random(0, .3);


    this.update = function() {
        let mouse = createVector(mouseX, mouseY);
        let dir = p5.Vector.sub(mouse, this.location);
        let dist = p5.Vector.dist(mouse, this.location);
        dir.normalize();
        dir.mult(dist * this.uniqueAccel);
        this.acceleration = dir;
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.topspeed);
        this.location.add(this.velocity);

        console.log(dist, dir);
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
