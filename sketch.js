
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper
var ground
var bin1, bin2, bin3


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper (100,100,20)
	ground = new Ground (400,height,800,20)
	bin1 = new Dustbin (320,600,20,100)
	bin2 = new Dustbin (400,650,180,20)
    bin3 = new Dustbin (480,600,20,100)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper.display()
  ground.display()
  bin1.display()
  bin2.display()
  bin3.display()
 
  keyPressed()
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})
	}
}


