function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  for (let i = 0; i < 400; i++) {
    fill(random(300), random(300), random(300), random(255));
    ellipse(random(windowWidth), random(windowHeight), random(100)); 
  }
}