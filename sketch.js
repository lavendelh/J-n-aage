let venstre = false;
let hoyre = false;
let opp = false;
let ned = false;
let e = false;
let q = false;
let space = false;

function setup() {
  createCanvas(600, 600);
}

function keyPressed() {
  if (key == "a") {
    venstre = true;
  }
  if (key == "d") {
    hoyre = true;
  }

  if (key == "w") {
    opp = true;
  }
  if (key == "s") {
    ned = true;
  }
  if (key == "e") {
    e = true;
  }
  if (key == "q") {
    q = true;
  }
  if (key == " ") {
    space = true;
  }
}

function keyReleased() {
  if (key == "a") {
    venstre = false;
  }
  if (key == "d") {
    hoyre = false;
  }
  if (key == "w") {
    opp = false;
  }
  if (key == "s") {
    ned = false;
  }
  if (key == "e") {
    e = false;
  }
  if (key == "q") {
    q = false;
  }
  if (key == " ") {
    space = false;
  }
}

function tegnOye(x, y, erÅpent, minus) {
  if (erÅpent) {
    // Øyne
    fill(255);
    ellipse(x, y, 50, 50);

    let dx = mouseX - x;
    let dy = mouseY - y;
    let avstand = dist(x, y, mouseX, mouseY);
    let vinkel = atan2(dx, dy);
    let x2 = sin(vinkel) * Math.min(10, avstand);
    let y2 = cos(vinkel) * Math.min(10, avstand);
    let pupillx = x + x2;
    let pupilly = y + y2;

    if (venstre) pupillx += x2 * minus;
    if (hoyre) pupillx -= x2 * minus;
    if (opp) pupilly += y2 * minus;
    if (ned) pupilly -= y2 * minus;

    fill(128, 0, 255);
    ellipse(pupillx, pupilly, 10, 10);
  } else {
    strokeWeight(3);
    line(x - 25, y, x + 25, y);
    strokeWeight(1);
  }
}

function draw() {
  let midtenx = width / 2;
  let midteny = height / 2;

  background(255, 255, 255);

  // ansikt
  fill(255, 255, 0);
  rect(midtenx - 150, midteny - 200, 300, 400, 20, 20, 20, 20);

  // Pannerynke

  if (opp) {
    ellipse(midtenx, midteny - 180, 250, 0);
    ellipse(midtenx, midteny - 170, 250, 0);
  }

  // øyne

  tegnOye(midtenx - 100, midteny - 100, !q, -1);
  tegnOye(midtenx + 100, midteny - 100, !e, 1);

  // øyenbryn
  if (opp) {
    ellipse(midtenx - 100, midteny - 160, 70, 0);
    ellipse(midtenx + 100, midteny - 160, 70, 0);
  } else {
    ellipse(midtenx - 100, midteny - 130, 70, 0);
    ellipse(midtenx + 100, midteny - 130, 70, 0);
  }

  // munn
  ellipse(midtenx, midteny + 100, 250, 0);

  // tunge
  if (ned) {
    fill(255, 100, 100);
    rect(midtenx, midteny + 100, 50, 50, 0, 0, 20, 20);
    ellipse(midtenx + 25, midteny + 115, 0, 30);
  }

  // nese
  fill(128, 0, 0);
  triangle(
    midtenx,
    midteny - 50,
    midtenx - 50,
    midteny + 50,
    midtenx + 50,
    midteny + 50
  );

  if (venstre) {
    fill(0, 128, 0);
    rect(midtenx - 40, midteny + 50, 20, 40, 0, 0, 10, 10);
    ellipse(midtenx - 33, midteny + 80, 2, 2);
    ellipse(midtenx - 27, midteny + 80, 2, 2);
  }

  if (hoyre) {
    fill(0, 128, 0);
    rect(midtenx + 20, midteny + 50, 20, 40, 0, 0, 10, 10);
    ellipse(midtenx + 33, midteny + 80, 2, 2);
    ellipse(midtenx + 27, midteny + 80, 2, 2);
  }

  // ører
  fill(255, 255, 0);
  rect(midtenx - 210, midteny - 50, 60, 100, 20, 20, 20, 20);
  rect(midtenx + 150, midteny - 50, 60, 100, 20, 20, 20, 20);

  if (space) {
    fill(255, 128, 128);
    rect(midtenx - 210 - 40, midteny - 10, 40, 20, 10, 0, 0, 10);
    rect(midtenx + 210, midteny - 10, 40, 20, 0, 10, 10, 0);
  }
}
