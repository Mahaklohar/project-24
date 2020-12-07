
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bin1 = new Dustbin(950, 360, 200, 10);
	bin2 = new Dustbin(855, 315, 10, 100);
	bin3 = new Dustbin(1045, 315, 10, 100);

	ground = new Ground(600, 370, 1200, 10);

	ball = new Paper(100, 320, 20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  bin3.display();
  bin2.display();
  bin1.display();

  ground.display();

  ball.display();

  
  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body, ball.body.position, {x: 80, y: -80})
	}
}





