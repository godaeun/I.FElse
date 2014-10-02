function setup()
{
	createCanvas(680, 600);
	background(0);	

}

function draw()
{
	background(0);
	// draw function
	if (mouseX < 300) {
   ellipse(200, 200, 100, 100);
}
	noFill();
	stroke(255, 0, 0);
	ellipse(280, 260, mouseX, mouseY);	
}