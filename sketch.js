var R = 100;
var theta_init = 20;

function setup() {
    var canvas = createCanvas(400, 300);
    canvas.parent('sketch-holder');

    frameRate(20);

}

function reDraw() {
    background(220);
    stroke(0);
    strokeWeight(2);
    noFill();
    translate(width/2, height/2);
    ellipse(0, 0, R*2, R*2);
}

function draw() {
    reDraw();
    fill(0);
    noStroke();
    ellipse(0, 0, 10);

    theta_init += 3;
    rotate(radians(theta_init));
    for(var i=0; i<10; i++) {
	rotate(radians(360/10));
	push();
	translate(-R, 0);
	fill(random(255));
	noStroke();
	ellipse(0, 0, 50, 30);
	pop();
    }
}

