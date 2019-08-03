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

    // prepare links, storage node-pair
    var links = new Array(n)
    for (var i=0; i<n; i++) {
        // -1 means no linked nodes
        links[i] = -1
    }
    // init 0 node as linked by it self
    links[0] = 0

    // calculate links that minimum total distance
    var tmp_dist = 0
    var jj = 0
    var kk = 0
    for (var i=0; i<n; i++) {
        // link one node for each time
        // init min_dist as very big number
        min_dist = 999999999999

        // walk throught all nodes to find next min_dist node to link
        for (var j=0; j<n; j++) {
            for (var k=0; k<n; k++) {
                // j node should have been linked
                // k node should have not been linked
                if (links[j] == -1) {
                    // continue, if j node is not linked
                    continue
                }
                if (links[k] != -1) {
                    // continue, if k node is linked
                    continue
                }
                // update, if current dist less than tmp_dist
                tmp_dist = dist(nodes[j][0], nodes[j][1], nodes[k][0], nodes[k][1])
                if (tmp_dist < min_dist) {
                    min_dist = tmp_dist
                    jj = j
                    kk = k
                }
            }
        }

        // now we have found min_dist node, link it
        links[kk] = jj
    }

    // print links for debug
    print(links)

    // draw lines as links shows
    stroke(100)
    var p1 = 0
    var p2 = 0
    for (var i=0; i<n; i++) {
        p1 = i
        p2 = links[i]
        line(nodes[p1][0], nodes[p1][1], nodes[p2][0], nodes[p2][1])
    }

}