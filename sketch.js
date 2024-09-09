function setup(){
    createCanvas(400, 269);

}

function draw() {
    background(100);
    
    fill(1000)
    beginShape();
    vertex(70, 140)
    vertex(65,120)
    vertex(70, 100)
    vertex(80, 80)
    vertex(90, 100)
    vertex(100, 100)
    vertex(110,80)
    vertex(120, 100)
    vertex(125, 120)
    vertex(120, 140)
    
    endShape()

    fill(1)
    ellipse(78, 115, 10, 5);
    ellipse(112, 115, 10, 5);
    
    
    if(mouseIsPressed)(
        console.log(mouseX, mouseY)
    )

}