const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraints=Matter.Constraints;

var ground,fly,hero;
function preload() {
//preload the images here

}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;
ground=new Ground(400,700,width,height)
hero=new Hero(500,200,20)
fly=new Fly(hero.body,pointB)
}

function draw() {
  background(0);
}
function mouseDragged(){
Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
}


