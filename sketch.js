const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;



function setup() {
  createCanvas(1600,700);
  engine = Engine.create();
  world = engine.world;

  rightFrame=new Frame(1350,600,20,120)
  leftFrame=new Frame(1100,600,20,120)
  bottomFrame=new Frame(800,670,1600,20)

  var ball_options={
    isStatic:false,
    restitution:0.3,
    friction:0,
    density:1.2
  }

  

  ball=Bodies.circle(200,100,20,ball_options)
  World.add(world,ball)

  button1=createImg("right.png")
  button1.position(300,30)
  button1.size(50,50)
  button1.mouseClicked(hForce)

  button2=createImg("up.png")
  button2.position(50,30)
  button2.size(50,50)
  button2.mouseClicked(vForce)


  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);

  
  rightFrame.display()
  leftFrame.display()
  bottomFrame.display()

  ellipse(ball.position.x,ball.position.y,20)
 
  Engine.update(engine);
}

  function hForce(){
    Matter.Body.applyForce(ball,ball.position,{x:0.05,y:0})
  }

  function vForce(){
    Matter.Body.applyForce(ball,ball.position,{x:0,y:-0.05})
  }
  function keyPressed(){
    if(keyCode==UP_ARROW){
      Matter.Body.applyForce(ball,ball.position,{
      x:85,y:-85
      })
    }
  }

