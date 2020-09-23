//using Allison Parrish's Drawing Letters examples: http://comptypo.decontextualize.com/schedule/

// 9x9 grid
function drawBasePattern(baseX, baseY, baseW, baseH) {
  push();
  translate(baseX, baseY);
  strokeWeight(1);
  stroke(255);
  noFill();
  rect(-baseW / 2, -baseH / 2, baseW, baseH);

  let pts = [];
  for (let i = 0; i < int(random(5, 15)); i++) {
    pts.push([int(random(-2, 2)) * baseW / 2, int(random(-2, 2)) * baseH / 2]);
  }
  beginShape();
  for (let i = 0; i < pts.length; i++) {
    // try changing this to curveVertex
    vertex(pts[i][0], pts[i][1]);
  }
  endShape();

  // noLoop();
  pop();
}

function toCartesian(r, theta) {
  return [r * cos(theta), r * sin(theta)];
}

function drawBadTile(badX, badY, badW, badH) {

  push();
  translate(badX, badY - badH / 4);
  strokeWeight(1);
  stroke(255);
  noFill();

  let angles = [];
  for (let i = 0; i < int(random(5, 15)); i++) {
    angles.push(PI / 12 * int(random(12)));
  }
  beginShape();
  for (let i = 0; i < angles.length; i++) {
    let xy = toCartesian(badH / 2, angles[i]);
    curveVertex(xy[0], xy[1]);
  }
  endShape();
  //noLoop();
  pop();
}

function setup() {
  createCanvas(600, 600);
  background(0);
  drawBasePattern(width / 4, height / 2, 200, 150);
  drawBasePattern(width * 3 / 4, height / 2, 200, 150);
  drawBadTile(width * 3 / 4, height / 2, 200, 150);
}

function draw() {
  //background(0);
}

function mousePressed() {
  background(0);
  drawBasePattern(width / 4, height / 2, 200, 150);
  drawBasePattern(width * 3 / 4, height / 2, 200, 150);
  drawBadTile(width * 3 / 4, height / 2, 200, 150);
}