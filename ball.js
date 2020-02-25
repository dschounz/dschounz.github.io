class Ball {

 constructor(_x, _r) {
    this.x = _x
    this.r = _r
  }
  
  display() {
  
  noStroke();
    //drawball
    
    
  let c = color(random(255), random(255), random(255));  
  fill(0, 100);
  ellipse(this.x, height *.90, this.r); 
  }
   move() {
     
     this.x--;
     /*if (this.x < 0){
       this.x = 0;
         this.x++;
     }
     else if(this.x>400){
     }
     this.x=400;
     this.x--;  
  }*/
}
}
 