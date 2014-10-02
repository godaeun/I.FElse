function setup()
 {
  createCanvas(800, 600);
}

  function draw()
{
  background(63,170,150);
  noStroke();   
  fill(222,86,74)

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
} else if (mouseX < 600){
  ellipse(550, 200, 100, 100);
} else if (mouseX < 700){
  ellipse(650, 200, 100, 100);    
} else {
  ellipse(750, 200, 100, 100);
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
} else if (mouseX < 600){
  rect(400, 150, 100, 100);
} else if (mouseX < 700){
  rect(500, 150, 100, 100);    
} else {
  rect(700, 150, 100, 100);
}

}