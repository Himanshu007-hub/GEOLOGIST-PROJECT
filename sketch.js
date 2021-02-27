
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;

var engine,world;
var hammer;
var plane;
var stone;
var rubber;
var sand1,sand2,sand3,samd4,sand5,sand6;
var iron1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);
    engine = Engine.create();
  	world = engine.world;

	//Create the Bodies Here.
	hammer = new Hammer(200,200,50,100);
  plane = new Plane(400,780,800,20);
	stone= new Stone(600,775,100,100);
  rubber= new Rubber(200,775);
  sand1= new Sand(550,775);
  sand2= new Sand(560,775);
  sand3= new Sand(540,775);
  sand4= new Sand(530,775);
  sand5= new Sand(570,775);
  sand6= new Sand(520,775);
  iron1= new Iron(350,775,120,20)
 
	Engine.run(engine);
  
}

function draw() {
  //rectMode(CENTER);
  background(0);
  //Engine.update(engine);


  
  plane.display();
  stone.display();
  rubber.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  iron1.display();
  hammer.display();
  
 
}



