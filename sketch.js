const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine, world;
var ball, ground

function setup() {
  createCanvas(400,400)
  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic: true
  }

  ground = Bodies.rectangle(200, 380, 400, 20, options);
  World.add(world, ground)

  var options = {
    restitution: 1.0
  }

  ball = Bodies.circle(100, 100, 20, options);
  World.add(world, ball);

}

function draw() {
  background(0);
  Engine.update(engine)
  rectMode(CENTER)
  ellipseMode(RADIUS)
  fill("brown")
  rect(ground.position.x, ground.position.y,400,20);
  fill("white")
  ellipse(ball.position.x, ball.position.y,20,20);

}


