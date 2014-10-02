function setup()
 {
  createCanvas(800, 600);
  noFill();
  stroke(255, 0, 0);
}

  function draw()
{
  background(25,125,25);
  // draw function
if (mouseX < 100) {
  ellipse(50, 200, 100, 100);
} else if (mouseX < 200){
  ellipse(150, 200, 100, 100);
} else if (mouseX < 300){
  ellipse(250, 200, 100, 100);
} else if (mouseX < 400){
  ellipse(350, 200, 100, 100);
} else if (mouseX < 500){
  ellipse(450, 200, 100, 100);
} else {
  ellipse(550, 200, 100, 100);
}

if (mouseX < 100) {
  rect(0, 150, 100, 100);
} else if (mouseX < 200){
  rect(10, 150, 100, 100);
} else if (mouseX < 300){
  rect(100, 150, 100, 100);
} else if (mouseX < 400){
  rect(200, 150, 100, 100);
} else if (mouseX < 500){
  rect(300, 150, 100, 100);
} else {
  rect(500, 150, 100, 100);
}

}