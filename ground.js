class Ground{
    
constructor(x,y,width,height){
var options={
isStatic:true
}
this.body=Bodies.rectangle(x,y,width,height)
World.add(world,this.body);
this.x=x;
this.y=y;
this.width=width;
this.height=height;
}
display(){
}
}