const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;


var uparrow,rightarrow;
function setup() {
  createCanvas(1200,500);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(600,490,1200,20);
  right = new Ground(1100,420,20,150);
  left = new Ground(900,420,20,150);


  var ball_options = {
    restitution: 0.95
  }

  ball = Bodies.circle(100,10,10,ball_options);
  World.add(world,ball);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  left.show();
  right.show();
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,10);
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball,{x:0,y:0},{x:85,y:-85});
  }
}


