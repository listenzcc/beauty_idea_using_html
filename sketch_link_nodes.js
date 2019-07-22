function setup() {
    // background setup
    var canvas = createCanvas(400, 300)
    canvas.parent('sketch-holder')
    background(200)

    // variables setup
    var num = 30 // total number of nodes
    var min_dist = 40 // min distance between each two nodes
    var nodes = new Array(num) // generated nodes
    var n = 0 // true number of nodes

    for (var i = 0; i < num * 10; i++) {
        // try num x 100 times
        // generate random coordinate
        x = random(width - 50) + 25
        y = random(height - 50) + 25

        // assume the node can be added
        var add = true
        for (var j=0; j<n; j++) {
            // for each existing nodes
            if (dist(nodes[j][0], nodes[j][1], x, y) < min_dist) {
                // if new node is too close to some one
                // do not add it
                add = false
                break
            }
        }

        // if new node still can be added
        if (add) {
            // add
            nodes[n] = [x, y]
            // update n
            n += 1
        }

        // if number is reached
        if (n == num) break
    }

    // at least tell users how many nodes generated
    print(n)

    // draw nodes
    fill(100)
    noStroke()
    nodes.forEach(function(e){
        ellipse(e[0], e[1], 10)
    })

}