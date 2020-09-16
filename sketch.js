var button1;
var button2;
function setup() {
  createCanvas(400, 300);
  button1 = createButton("Happy");
  button1.mousePressed(randomRectangle);
  button2 = createButton("Sad");
  button2.mousePressed(clearEverything);
  background(50);
  noStroke();
}
function draw() {
}
function randomRectangle() {
    fill(random(255));
    rect(random()*width, random()*height,
      random(400), random(400));
}
function clearEverything() {
  background(50);
}