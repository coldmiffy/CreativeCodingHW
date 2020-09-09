function setup() {
    createCanvas(500, 500);
}

function draw() {
    background(0);

    img = createImage(10, 10);
    img.loadPixels();

    for (var i = 0; i < 50; i++) {
        var c = color(300, 0, 0);
        img.set(random(20), random(20), c);

    }

    img.updatePixels();

    noSmooth();
    image(img, 0, 0, width, height);
    noLoop();

}