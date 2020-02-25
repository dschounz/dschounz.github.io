let angleWag;
let mic;
let micLevel;
let ball1;
let ball2;


function setup() {
  
  console.log(mouseX);
  
  createCanvas(400, 400); 
  angleMode(DEGREES);
  
   mic = new p5.AudioIn()
  mic.start();
noStroke();
  
    
  ball1= new Ball(height*.95, 50);
  
  
  
}

function draw() {
  console.log("miclevel: "  + mic.getLevel());
  
  background(222);
  
  micLevel = mic.getLevel();
  angleWag = map(mic.getLevel()*1800, 0, 400, 340, 350);
  //angleWag=mouseX;

drawBackground(micLevel);
drawTail(angleWag);
drawBody(width *.28, height *.55);
drawHead(width * .3, height * .1);
drawSunglasses(mouseX, mouseY);
drawMouth(micLevel*300);

drawLeftArm(mouseY);
drawRightArm(mouseY);
drawFeet();

  
  ball1.display();
  ball1.move();
  
}

function drawBackground(){
if (micLevel > .1) {
  background(random(255), random(255), random(255));
  console.log('positive');
} else {
  console.log('negative');
}
  
}

function drawBody(xPos, yPos){
push();
  
  
  fill(156, 123, 83);
  noStroke();
  rect(width *.28, height *.55, width *.45, width *.3, height*0.095);
  
  //text
  
  let a = mouseX;
  let b = mouseY;
if (a < 400 && b <400) {
  console.log('positive');
  fill(mouseX, mouseY, mouseX*50);
} else {
  fill(0)
  console.log('negative');
}
  
  
  //fill(250, 220, 100);
  textStyle(BOLD);
  textSize(16);
  textAlign(CENTER);
  textFont('Arial');
  text('MR.SQUIRREL', xPos + 85, height * 0.7);

  

    pop();
}

function drawHead(xPos, yPos){
push();
    fill(204, 153, 83);
  
  //Ears and Head seperated from each other
  //rect(width * .3, height * .3, width * .4, width *.3, 0, 0, height *0.1, width *0.1);
  /*
  beginShape(TRIANGLES);
vertex(width * .4, height *.1);
vertex(width * .3, height * .3);
vertex(width * .5, height * .3);
  endShape();
  beginShape(TRIANGLES);
vertex(width * .6, height *.1);
vertex(width * .5, height * .3);
vertex(width * .7, height * .3);
  endShape();  
  pop();
  */
  
   translate(xPos, yPos);
  beginShape();
  
  vertex(width * .0, height * .2);
  vertex(width * .1, height *.05);
  vertex(width * .2, height * .2);
  vertex(width * .2, height * .2);
  vertex(width * .3, height *.05);
  vertex(width * .4, height * .2);
  vertex(width * .4, height * .5);
  vertex(width * .0, height * .5);

 endShape();
  pop();
}

function drawSunglasses(xPos, yPos){
  
  let x = mouseX;
  let moveLeftGlasses = map(x,0, 400, 0, .06);
  let moveRightGlasses = map(x,0, 400, .23, .29);

  push();
  stroke(0);
  strokeWeight(width * 0.01);
  translate(width *.25, height *.4)
  line(width *.05, height *.0, width *.45, height *.0);
  noStroke();
  fill(0);
  
  //rect(width *moveLeftGlasses, height *.0, width *.152, height *.095);
  //rect(width *moveRightGlasses, height *.0, width *.152, height *.095); 
  rect(width *moveLeftGlasses, height *.0, width *.152, height *.025);
  rect(width *moveRightGlasses, height *.0, width *.152, height *.025); 
  rect(width *moveLeftGlasses+6, height *.025, width *.120, height *.025);
  rect(width *moveRightGlasses+6, height *.025, width *.120, height *.025); 
   
    
  
  
    pop();
}

function drawMouth(open){
  push();
  stroke(0);
  strokeWeight(1);
  fill(110, 21, 21);
  strokeWeight(width * 0.01);
  ellipse(width *.5, height *.57, width*.11, open);
    pop();
}

function drawTail(rotation){
   push();
  fill(102, 72, 8);
  translate(width * .726, height * .75);
  rotate(rotation);
  beginShape();
  vertex(width * .0, height * .0);
  vertex(width * .154, height * -.05);
  vertex(width * .164, height * -.09);
  vertex(width * .224, height * -.2);
  vertex(width * .174, height * -.23);
  vertex(width * .145, height * -.1);
  vertex(width * .0, height * .0);
  endShape();
      pop();
}

function drawLeftArm(rotation){
 //angleWag = map(mic.getLevel(), 0, .1, 320, 350);
  
   let y = mouseY;
  let moveLeftArm = map(y,0, 400, 0, 100);
  
  push();
  translate(width*0.3, height*0.65);
  rotate(moveLeftArm);
  fill(96, 57, 19);
  rect(width * .0, height *.0, width *.05, width *.15, height *.02); 
    pop();
}

function drawRightArm(rotation){
//angleWag = map(mic.getLevel(), 0, .1, 320, 350);
  
  let y = mouseY;
  let moveRightArm = map(y,0, 400, 0, 100);
  
  push();
    translate(width *.65, height*.65);
    fill(96, 57, 19);
    rotate(moveRightArm);
    rect(width * .0, height *.0, width *.05, width *.157, height *.02);
  pop();
}

function drawFeet(){
 push();
  fill(60, 36, 21);
  rect(width * .37, height *.82, width *.1, width *.05, height *.02);
  rect(width * .525, height *.82, width *.1, width *.05, height *.02);
    pop();
}
