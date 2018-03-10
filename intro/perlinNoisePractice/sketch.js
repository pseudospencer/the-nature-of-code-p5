var t = 0;
var x = 0;

function setup() {
    createCanvas(640, 360);
    background(255);
}

function draw() {
    // Creates a simple line graph of ymap (noise) over time.
    let ymap = map(noise(t), 0, 1, height, 0);
    ellipse(x,ymap, 1, 1);

    x ++;
    t += .02;

    if (x > width) {
        background(255);
        x = 0;
    }

}
