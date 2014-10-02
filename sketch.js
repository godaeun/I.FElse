function setup()
{
	createCanvas(680, 600);
	noFill();
	stroke(255, 0, 0);

}

function draw()
{
	background(0);
	ellipse(280, 260, mouseX, mouseY);	
}