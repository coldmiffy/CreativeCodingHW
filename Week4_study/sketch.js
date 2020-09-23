var d;

function setup() {
  createCanvas(600, 600);
  background(210, 250, 255);
  for (x=1; x<80; x++) {
    fill(245, 250, 50, 100);
    d = 20 + random(80);
    ellipse(random(600), random(600), d, d);
    fill(0, 180, 200, 100);
    d = 20 + random(80);
    ellipse(random(600), random(600), d, d);
  }
}
