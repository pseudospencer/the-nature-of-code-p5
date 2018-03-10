var xOff;
var yOff;
var inc = .01;

function setup() {
    createCanvas(windowWidth, windowHeight);
    pixelDensity(1);
}

function draw() {
    loadPixels();
    yOff = 0;
    for (let y = 0; y < height; y++){
        xOff = 0;
        for (let x = 0; x < width; x++){
            // let r =  map(noise(rOff), 0, 1, 0, 255)
            var index = (x + y * width) * 4;
            pixels[index + 0] = map(noise(xOff, yOff), 0, 1, 0, 255);
            pixels[index + 1] = map(noise(xOff, yOff), 0, 1, 0, 255);
            pixels[index + 2] = map(noise(xOff, yOff), 0, 1, 0, 255);
            pixels[index + 3] = 255;

            xOff += inc;

        }
        yOff += inc;
    }
    updatePixels();
}
