// Senior Project 0.1
// By: David Monarez

// Do not edit the following two lines.
size(400, 400);
angleMode = "degrees";

// Begin program.
var animate = function() {
    background(165, 219, 162);
    fill(255, 254, 222);
    rect(20, 100, 364, 200);

    fill(0, 0, 0);
    textSize(20);

    if (mousePressed) {
        text("JavaScript!", 150, 200);
    } else {
        text("What programming language is this?", 39, 200);
    }
};

// Do no edit the following line.
void draw() { animate(); }
