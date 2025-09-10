function setup() {
  createCanvas(950, 642);
  background(125);

  noStroke();
  angleMode(DEGREES);


}

function draw() {
  console.log(mouseX, mouseY);
  

  push()
  //rotate();
  fill(0);
  rect(350, 0, width, height);
  pop()

  translate(-410, 0)
  fill(204,196,186,255);
  rect(0, 0, width, height);

  push()
  translate(505, -140)
  fill(255);
  stroke(255);
  strokeWeight(10);
  bezier(640, 670, 620, 640, 415, 670, 440, 410);
  pop()


  






  push()
  translate(160, -90)
  fill(0, 0, 65);
  quad(985, 85, 750, 15, 764, 247, 922, 140);
  pop();

  push()
  translate(160, -80)
  fill(0, 0, 65);
  quad(985, 105, 750, 115, 764, 247, 922, 140);
  pop();

  push()
  translate(160, -80)
  fill(0, 0, 95);
  quad(985, 105, 750, 115, 764, 247, 922, 140);
  pop();


  //ugjghgjgjg
  push()
  translate(-355, 120)
  fill(0);
  rect(0, 0, width, -18);
  pop();

  

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
