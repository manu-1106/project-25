
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world,part1,part2,part3,paper;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
part1=new dustbin(190,380,20,40)
part2=new dustbin(210,380,40,20)
part3=new dustbin(250,380,20,40)
paper=new Paper()
	Engine.run(engine);
  
}


function draw() {
 
  background(255);
  rectMode(CENTER);
part1.display();
part2.display ();
part3.display();
 paper.display();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})
	}
}


