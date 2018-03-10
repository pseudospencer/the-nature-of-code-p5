var dots = [];

function setup() {
    createCanvas(640, 640);
    background(255);
}

function draw() {
    noStroke();
    fill(getColor(), getColor(), getColor(), 75);
    ellipse(getX(), getX(), 10, 10);
}

// Dots location - normal distribution around height/2, width/2 along both x and y axes
function getX() {
    let meanX = width/2;
    let sd = 100;
    let r1 = randomGaussian();
    let x = sd * r1 + meanX;

    return x;
}

// Dots color - normal distribution around (127, 127, 127)
function getColor() {
    let mean = 127
    let sd = 50;
    let r = randomGaussian() * sd + mean;
    return r;
}
