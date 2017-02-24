// Do not edit the following two lines.
size(400, 400);
angleMode = "degrees";

var bodyX = 200;
var bodyY = 200;
var eyesX = bodyX - 50;
var eyesX2 = bodyX + 50;
var eyesY = bodyY - 20;
var eyesSize = 50;

var animate = function() {
    eyesSize += 1;
    var pSize = eyesSize/5;
    background(207, 254, 255);
    //ears
    fill(5, 5, 5);
    ellipse(130,110,70,70);
    ellipse(260,110,70,70);
    //head
    fill(250, 247, 247);
    ellipse(bodyX, bodyY, 200, 200);
   //eyes 
   fill(5, 5, 5);
    ellipse(eyesX, eyesY, eyesSize, eyesSize);
    ellipse(eyesX2, eyesY, eyesSize, eyesSize);
    //mouth
    fill(250, 242, 242);
    ellipse(200, 260, 25, 25);
    //pupil
    ellipse(bodyX - 50, bodyY - 20, pSize, pSize );
     ellipse(bodyX + 50, bodyY - 20, pSize, pSize);
    
};

// Do no edit the following line.
void draw() { animate(); }