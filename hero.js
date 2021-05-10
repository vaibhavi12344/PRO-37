class Hero{
constructor(x,y,radius){

    this.body=Bodies.circle(x,y,radius)
    World.add(world,this.body);
    
    }
    display(){
    }
    }