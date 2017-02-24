// Senior Project 0.1
// By: David Monarez

// Do not edit the following two lines.
size(400, 400);
angleMode = "degrees";

// Begin program.

// Senior Project v3.1
// By: David Monarrez

var leftX = 158;
var rightX = 283;
var sunRadius = 100;
var leftModifier = -0.25;
var rightModifier = 0.25;
var press = false;

var centerX = 200;
var centerY = 200;
var faceSize = 0;
var foo = "";

var animate = function() {
    
    background(184, 236, 255);
    noStroke();
    
    //left cloud 
    if (leftX === 70) {
        leftModifier = 0.25;
    }
    
    if (leftX === 158) {
        leftModifier = -0.25;
    }
    
     //right cloud 
    if (rightX === 370) {
        rightModifier = -0.25;
    }
    
    if (rightX === 283) {
        rightModifier = 0.25;
    }
    
    leftX += leftModifier;
    rightX += rightModifier;
    
    fill(255, 170, 0);
    ellipse(200, 50, sunRadius, sunRadius);
    
    // clouds 
    fill(255, 255, 255);
    
    // left cloud
    ellipse(leftX, 100, 126, 97);
    ellipse(leftX+62, 100, 70, 60);
    ellipse(leftX-62, 100, 70, 60);
    
    // right cloud
    ellipse(rightX, 50, 126, 97);
    ellipse(rightX+62, 50, 70, 60);
    ellipse(rightX-62, 50, 70, 60);
    
    //head
    fill(5, 5, 5);
    rect(centerX - faceSize * 125 / 150, centerY - faceSize * 84 / 150, faceSize / 0.5975 , faceSize / 0.75);
    
    //mouth
    fill(252, 5, 5);
    rect(centerX - faceSize * 125 / 150 , centerY + faceSize * 110 / 150, faceSize * 251 / 150 , faceSize * 90 / 150);
    rect(centerX - faceSize * 125 / 150, centerY + faceSize * 15 / 150, faceSize * 251 / 150, faceSize * 28 / 150);
    
    //teeth 
    fill(255, 255, 255);
    
    // tooth 1
    rect(centerX - faceSize * 110 / 150 , centerY + faceSize * 43 / 150 ,faceSize / 5 , faceSize / 5);
    triangle(centerX - faceSize * 95 / 150, centerY + faceSize * 93 / 150 , centerX -  faceSize * 80 / 150, centerY + faceSize * 73 / 150 , centerX - faceSize * 110 / 150, centerY + faceSize * 73 / 150);
    
    // tooth 2
    rect(centerX - faceSize * 53 / 150 , centerY + faceSize * 43 / 150 ,faceSize / 5  ,faceSize / 5);
    triangle(centerX - faceSize * 37 / 150, centerY + faceSize * 93 / 150, centerX - faceSize * 23 / 150, centerY + faceSize * 73 / 150, centerX - faceSize * 53 / 150, centerY + faceSize * 73 / 150);
    
    // tooth 3
    rect(centerX - faceSize * -18 / 150 , centerY + faceSize * 43 / 150 ,faceSize / 5  ,faceSize / 5);
    triangle(centerX - faceSize * -34 / 150, centerY + faceSize * 93 / 150, centerX - faceSize * -49 / 150, centerY + faceSize * 73 / 150, centerX - faceSize * -18 / 150, centerY + faceSize * 73 / 150);
    
    // tooth 4
    rect(centerX - faceSize * -75 / 150 , centerY + faceSize * 43 / 150 ,faceSize / 5  ,faceSize / 5);
    triangle(centerX - faceSize * -91 / 150, centerY + faceSize * 93 / 150, centerX - faceSize * -105 / 150, centerY + faceSize * 73 / 150, centerX - faceSize * -74 / 150, centerY + faceSize * 73 / 150);
    
    // eyes
    fill(255, 255, 255);
    
    // eye socket 1
    rect(centerX - faceSize * 90 / 150, centerY - faceSize * 35 / 150, faceSize / 2.8, faceSize / 3);
    
    // eye socket 2
    rect(centerX - faceSize * -30 / 150, centerY - faceSize * 35 / 150, faceSize / 2.8, faceSize / 3);
    
    // Dynamically draw Mean Machine eyes.
    var drawEyes = function(originX, originY) {
        
        var leftEyeCenterX = centerX - faceSize * 63 / 150;
        var leftEyeCenterY = centerY - faceSize * 10 / 150;
        
        var rightEyeCenterX = centerX - faceSize * -57 / 150;
        var rightEyeCenterY = centerY - faceSize * 10 / 150;
        
        var leftEyeAngle = atan2(mouseY - leftEyeCenterY, mouseX - leftEyeCenterX);
        var rightEyeAngle = atan2(mouseY - rightEyeCenterY, mouseX - rightEyeCenterX);
        
        // Left eye.
        pushMatrix();
        translate(leftEyeCenterX, leftEyeCenterY);
        rotate(leftEyeAngle);
        
        // Iris.
        fill(255, 0, 0);
        ellipse(5, 0, faceSize * 25 / 150, faceSize * 25 / 150);
        
        // Pupil.
        fill(255, 255, 255);
        ellipse(5, 0, faceSize * 10 / 150, faceSize * 10 / 150);
        
        popMatrix();
        
        // Right eye.
        pushMatrix();
        translate(rightEyeCenterX, rightEyeCenterY);
        rotate(rightEyeAngle);
        
        // Iris.
        fill(255, 0, 0);
        ellipse(5, 0, faceSize * 25 / 150, faceSize * 25 / 150);
        
        // Pupil.
        fill(255, 255, 255);
        ellipse(5, 0, faceSize * 10 / 150, faceSize * 10 / 150);
        
        popMatrix();
        
    };
    
    drawEyes(centerX, centerY);
    
    //nose
    fill(255, 0, 0);
    ellipse( centerX - faceSize * 2 / 150, centerY - faceSize * 3 / 150, faceSize * 25 / 150, faceSize * 25 / 150);
    
    fill(0, 0, 0);
    ellipse( centerX - faceSize * 2 / 150, centerY - faceSize * 3 / 150, faceSize * 10 / 150, faceSize * 10 / 150); 
    
    //eyeBrows 
    stroke(255, 0, 0);
    strokeWeight(faceSize / 8.823529411764706);
    
    //eyeBrow1
    line( centerX - faceSize * 89 / 150, centerY - faceSize * 67 / 150, centerX - faceSize * 13 / 150, centerY - faceSize * 45 / 150);
    
    //eyeBrow2 
    line( centerX - faceSize * -94 / 150, centerY - faceSize * 67 / 150, centerX - faceSize * -10 / 150, centerY - faceSize * 45 / 150);
    
    //headBrace 
    noStroke(); 
    fill(255, 0, 0);
    
    //leftBrace 
    rect( centerX - faceSize * 135 / 150, centerY - faceSize * 94 / 150, faceSize * 10 / 150, faceSize * 138 / 150);
    
    //rightBrace 
    rect( centerX - faceSize * -126 / 150, centerY - faceSize * 94 / 150, faceSize * 10 / 150, faceSize * 138 / 150);
    
    //topBrace
    rect( centerX - faceSize * 125 / 150, centerY - faceSize * 94 / 150, faceSize * 261 / 150,faceSize * 10 / 150);
    
    //paperRoll
    fill(255, 255, 255);
    rect( centerX - faceSize * 122 / 150, centerY + faceSize * 175 / 150, faceSize * 245 / 150, faceSize * 25 / 150 );
    
    // Thought Bubble function.
    var say = function(input) {
        
        // These can be adjusted relative to mascot and canvas size.
        var bubbleX = 145;
        var bubbleY = 160;
        var bubbleSize = 198;
        
        // Speech bubble.
        stroke(0, 0, 0);
        fill(255, 255, 255);
        strokeWeight(1);
        
        // Bubble trail.
        ellipse(bubbleX + bubbleSize * 110 / 150, bubbleY - bubbleSize * 38 / 150, bubbleSize * 35 / 150, bubbleSize * 35 / 150);
        ellipse(bubbleX + bubbleSize * 95 / 150, bubbleY - bubbleSize * 7 / 150, bubbleSize * 20 / 150, bubbleSize * 20 / 150);
        
        // Main bubble.
        strokeWeight(2);
        ellipse(bubbleX + bubbleSize * 40 / 150, bubbleY - bubbleSize * 110 / 150, bubbleSize * 166 / 150, bubbleSize * 127 / 150);
        ellipse(bubbleX - bubbleSize * 42 / 150, bubbleY - bubbleSize * 100 / 150, bubbleSize * 95 / 150, bubbleSize * 77 / 150);
        ellipse(bubbleX + bubbleSize * 126 / 150, bubbleY - bubbleSize * 100 / 150, bubbleSize * 95 / 150, bubbleSize * 77 / 150);
        
        noStroke();
        ellipse(bubbleX + bubbleSize * 40 / 150, bubbleY - bubbleSize * 110 / 150, bubbleSize * 166 / 150, bubbleSize * 127 / 150);
        ellipse(bubbleX - bubbleSize * 42 / 150, bubbleY - bubbleSize * 100 / 150, bubbleSize * 95 / 150, bubbleSize * 77 / 150);
        ellipse(bubbleX + bubbleSize * 126 / 150, bubbleY - bubbleSize * 100 / 150, bubbleSize * 95 / 150, bubbleSize * 77 / 150);
        
        // Output thoughts.
        fill(0, 0, 0);
        textSize(16);
        text(input, 50, 10, 300, 60);
        
    };
    
    if (mouseX > 230 && mouseY > 165 && mouseX < 285 && mouseY < 215) {
        foo = "Camas High School has over 2,000 students and about 90 teachers!";
    } else if (mouseX > 110 && mouseY > 165 && mouseX < 165 && mouseY < 215) {
        foo = "87% of CHS students go on to college after High School!";
    } else if (mouseX > 165 && mouseY > 165 && mouseX < 230 && mouseY < 215) {
        foo = "CHS won the 2015 Oregon Relays for the first time in five years!";
    } else if (mouseX > 90 && mouseY > 240 && mouseX < 120 && mouseY < 290) {
        foo = "Camas requires 22 credits for each student to graduate!";
    } else if (mouseX > 146 && mouseY > 240 && mouseX < 177 && mouseY < 290) {
        foo = "CHS offers 19 AP classes!";
    } else if (mouseX > 218 && mouseY > 240 && mouseX < 248 && mouseY < 290) {
        foo = "CHS is lead by principal Steve Marshall!";
    } else if (mouseX > 275 && mouseY > 240 && mouseX < 304 && mouseY < 290) {
        foo = "Camas High School was ranked as the 892nd best school in the nation by U.S. News!";
    } else {
        foo = "Click on my eyes, teeth and nose to learn more about Camas High School!";
    }
    
    // If user hasn't yet clicked, display "Click me!" message.
    if (press === false) {
        fill(255, 0, 0);
        textSize(25);
        text("Click me!", 150, 333); 
    } else {
        if (faceSize < 150) {
            faceSize += 5;
        }
    }
    
    // Display thought bubble when mouse is pressed.
    if (mousePressed) {
        press = true;
        say(foo);
    }
    
};

// Do no edit the following line.
void draw() { animate(); }
