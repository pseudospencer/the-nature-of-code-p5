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
        let stepsize = this.montecarlo()

        let xStep = random(-stepsize, stepsize);
        let yStep = random(-stepsize, stepsize);

        this.x += xStep;
        this.y += yStep;


    }

    this.montecarlo = function() {
        while (true) {
            let r1 = random(5)
            let probability = r1 ** 2;
            let r2 = random(5)

            if (r2 > probability) {
                return r2;
            }
        }
    }
}
