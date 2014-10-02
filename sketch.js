function setup()
 {
  createCanvas(800, 650);
}

  function draw()
{
  background(63,170,150);
  noStroke();   
  fill(222,86,74)

  // draw function
if (mouseX < 100) {
  ellipse(50, 300, 100, 100);
} else if (mouseX < 200){
  ellipse(150, 300, 100, 100);
} else if (mouseX < 300){
  ellipse(260, 300, 100, 100);
} else if (mouseX < 400){
  ellipse(370, 300, 100, 100);
} else if (mouseX < 500){
  ellipse(480, 300, 100, 100);
} else if (mouseX < 600){
  ellipse(570, 300, 100, 100);
} else if (mouseX < 700){
  ellipse(650, 300, 100, 100);    
} else {
  ellipse(750, 300, 100, 100);
}

if (mouseX < 100) {
  fill(125,105,244)
  rect(0, 250, 100, 100);
} else if (mouseX < 200){
  fill(0,134,255)	
  rect(10, 250, 100, 100);
} else if (mouseX < 300){
  fill(0,134,255)	
  rect(100, 250, 100, 100);
} else if (mouseX < 400){
  fill(0,134,255)	
  rect(200, 250, 100, 100);
} else if (mouseX < 500){
  fill(0,134,255)	
  rect(300, 250, 100, 100);
} else if (mouseX < 600){
  fill(0,134,255)	
  rect(400, 250, 100, 100);
} else if (mouseX < 700){
  fill(0,134,255)	
  rect(500, 250, 100, 100);    
} else {
  fill(125,105,244)
  rect(700, 250, 100, 100);
}

}