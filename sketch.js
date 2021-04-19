const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var world , engine;
var ground;

var particle = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function setup() {
  createCanvas(500,800);

  engine = Engine.create();
  world = engine.world;

ground = new Ground(240 , 799 , 480 , 10);

for(var i = 0 ; i <= width ; i=i + 80)
{

divisions.push(new Division(i , height-divisionHeight/2 , 10 , divisionHeight))

}


for(var i = 40 ; i <= width ; i=i + 50)
{

plinkos.push(new Plinko(i ,75))

}

for(var i = 15; i <= width ; i=i + 50)
{

plinkos.push(new Plinko(i ,175))

}

for(var i = 40; i <= width ; i=i + 50)
{

plinkos.push(new Plinko(i ,275))

}

for(var i = 15; i <= width ; i=i + 50)
{

plinkos.push(new Plinko(i ,375))

}


  
}

function draw() {

	Engine.update(engine)
  rectMode(CENTER);
  background("black");
  for(var i =0 ; i<particle.length ; i++)
  {
    particle[i].display();
  }
 for(var i =0 ; i<divisions.length ; i++)
 {
   divisions[i].display();
 }
 for(var i =0 ; i<plinkos.length ; i++)
 {
   plinkos[i].display();
 }
 
 if(frameCount%60===0)
{
  particle.push(new Particle(random(width/2-10,width/2+10),10,10))
}
  

 

  ground.display();
}