function setup() {
  createCanvas(400, 400);
  background(26, 24, 56);

  setTimeout(drawStar, 2000)
  setInterval(drawStar, 500);
}

function draw() {
}

function drawStar() {
  drawStarShape(random(0, width), random(0, height), 5, 20, 10, 0);
}

function drawStarShape(x, y, n, outerRadius, innerRadius, rotation) {
  stroke(255);
  fill(205);
  let theta = TAU / n;
  beginShape();

  for (let i = 0; i < n; i++) {
    vertex(x + cos(i * theta + rotation) * outerRadius, y + sin(i * theta + rotation) * outerRadius);
    vertex(x + cos((i + 0.5) * theta + rotation) * innerRadius, y + sin((i + 0.5) * theta + rotation) * innerRadius);
  }

  endShape(CLOSE);
}

