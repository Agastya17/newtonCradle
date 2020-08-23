
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var bobOb1, bobOb2, bobOb3, bobOb4, bobOb5;
var constructor, rope1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	constructor = new Roof(400,200,500,30);
	constructor.shapeColor = "grey";

	bobOb1 = new Bob(280,500,20);
	bobOb1.shapeColor = "purple";

	bobOb2 = new Bob(340,500,20);
	bobOb2.shapeColor = "purple";

	bobOb3 = new Bob(400,500,20);
	bobOb3.shapeColor = "purple";

	bobOb4 = new Bob(460,500,20);
	bobOb4.shapeColor = "purple";

	bobOb5 = new Bob(520,500,20);
	bobOb5.shapeColor = "purple";

	var bobDiameter = 40;

	rope1 = new Rope(bobOb1.body, top.object, -bobDiameter*2,0);
	rope1.shapeColor = "black";

	rope2 = new Rope(bobOb2.body, top.object, -bobDiameter*1,0);
	rope2.shapeColor = "black";

	rope3 = new Rope(bobOb3.body, top.object, bobDiameter*0,0);
	rope3.shapeColor = "black";

	rope4 = new Rope(bobOb4.body, top.object, bobDiameter*1,0);
	rope4.shapeColor = "black";

	rope5 = new Rope(bobOb5.body, top.object, bobDiameter*2,0);
	rope5.shapeColor = "black";


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);

  constructor.display();
  bobOb1.display();
  bobOb2.display();
  bobOb3.display();
  bobOb4.display();
  bobOb5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}



