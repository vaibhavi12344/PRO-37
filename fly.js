class Fly{
constructor(bodyA,pointB,offsetX,offsetY){
    
    this.offsetX=offsetX;
    this.offsetY=offsetY;
 
     var options={
      bodyA:bodyA,
      pointB:pointB,
      pointB:{x:this.offsetX,y:this.offsetY}
     }
     this.Fly=Constraint.create(options);
     
     World.add(world,this.Fly)
     }
     display(){
     var posA=this.Fly.bodyA.position
     var posB=this.Fly.bodyB.position
     
     line(posA.x,posA.y,posB.x,posB.y);
     strokeWeight(4);
     }
     display(){}
     }