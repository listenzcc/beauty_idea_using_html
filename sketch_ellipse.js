var r_min = 50
var r_max = 150
var radians_planet = 0

function setup() {
    var canvas = createCanvas(400, 300)
    canvas.parent('sketch-holder')

    background(200)
}

function get_dist() {
    return dist(width / 2, height / 2, mouseX, mouseY)
}

function draw() {
    background(200)
    translate(width / 2, height / 2)

    fill(100)
    ellipse(0, 0, 10)

    noFill()
    stroke(100)

    d = get_dist()

    if (d < r_min) {
        print('in')
        ellipse(0, 0, r_min * 2)
        return 0
    }

    radians = atan((mouseY-height/2)/(mouseX-width/2))

    rotate(radians)
    ratio = min(d, r_max)/r_min
    scale(ratio, 1)
    
    ellipse(0, 0, r_min * 2, r_min * 2)

    fill(100)
    noStroke()
    rotate(radians_planet)
    radians_planet += 0.03
    ellipse(r_min, 0, 20/ratio, 20)
    
}