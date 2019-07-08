var Node = {
    createNew: function(){
	var node = {};
	node.angle = 0;
	node.da = 0.1;
	node.r = 100;
	node.m = 15;
	node.rgb = [random(200), random(200), random(200)];
	node.drawme = function(){
	    push();
	    rotate(node.angle);
	    translate(node.r, 0);
	    fill(node.rgb);
	    noStroke(0);
	    ellipse(0, 0, node.m);
	    pop();
	    node.update();
	};
	node.update = function(){
	    node.angle += node.da;
	};
	return node;
    }
};

var Anchor = {
    createNew: function(){
	var anchor = {};
	anchor.X = 0;
	anchor.Y = 0;
	anchor.drawme = function(){
	    anchor.X += (mouseX - anchor.X) / 20;
	    anchor.Y += (mouseY - anchor.Y) / 20;
	    translate(anchor.X, anchor.Y);
	    noFill();
	    stroke(100);
	    ellipse(0, 0, 10);
	};
	return anchor;
    }
}

var num = 5;

function setup() {
    var canvas = createCanvas(600, 500);
    canvas.parent('sketch-holder');

    nodes = new Array(num);
    for (var i=0; i<num; i++) {
	nodes[i] = Node.createNew();
	nodes[i].angle = 2*PI * (i/num);
    }

    anchor = Anchor.createNew();
}

function reDraw() {
    background(220);

    push();
    translate(mouseX, mouseY);
    //text(int(mouseX)+', '+int(mouseY), 0, 0-10);
    fill(0);
    noStroke();
    ellipse(0, 0, 10);
    pop();

    anchor.drawme();

    scale(1, min(1, max(0.3, (50-abs(mouseX-anchor.X))/50)**0.5));

    scale(min(1, max(0.3, (50-abs(mouseY-anchor.Y))/50)**0.5), 1);
    
}

function draw() {
    reDraw();

    nodes.forEach(function(e){
	e.drawme();
    })
    
}

