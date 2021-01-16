
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world

var ball,ground,dustbin;

function preload(){

dustbin= loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(1600, 700);
	engine = Engine.create();
	world = engine.world;

ball=new Ball(100,600,10)

ground= new Ground(400,680,800,20)

dustbinleft=new Dustbin(550,620,20,100)
dustbinbottom=new Dustbin(610,660,100,20)
dustbinright=new Dustbin(670,620,20,100)


	//Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
Engine.update(engine)

ball.display()
ground.display()
dustbinleft.display()
dustbinbottom.display()
dustbinright.display()
image(dustbin,530,575,160,130)

  drawSprites();
 
}

function keyPressed(){

if(keyCode === UP_ARROW){
	Matter.Body.applyForce(ball.body,ball.body.position,{x:15,y:-15})
}

}







