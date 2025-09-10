function setup() {
  createCanvas(950, 642);
  background(125);

  noStroke();
  angleMode(DEGREES);

}

function draw() {
  console.log(mouseX, mouseY);
  //ellipse(mouseX, mouseY, 10);

  

  push()
  //rotate();
  fill(0);
  rect(350, 0, width, height);
  pop()

  translate(-410, 0)
  fill(204,196,186,255);
  rect(0, 0, width, height);

  translate(199,0)
  fill(255);
  stroke(0);
  strokeWeight(10);
  bezier(400, 900, 0, 0, 0, 0, 0, -0);
  

  push()
  rotate(-1);
  translate(0, 330)
  fill(0, 0 ,65);
  rect(0, 0, width, -15);
  pop();

  push()
  translate(-845, 120)
  fill(0);
  rect(0, 0, width, -18);
  pop();

  //quad(572, 178, 610, 187, 914, 247, 842, 397);

  beginShape()

  

  endShape()

  //dots
  // fill(255,0, 0)
  // for(x=0; x<1000; x=x+12){
  //   for(y=0; y<1000; y=y+12){
  //   ellipse(x, y, 5)
  //   }
  // }


}
