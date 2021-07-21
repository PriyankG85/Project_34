const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var border1, border2, border3, border4;
var ground;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;
// var par1, par2, par3;

function setup() {
  createCanvas(480, 800);

  engine = Engine.create();
  world = engine.world;


  // All Bodies

  // createSprite(400, 200, 50, 50);

  border1 = new Ground(width, height / 2, 2, height, 'black');
  border2 = new Ground(0, height / 2, 2, height, 'black');
  border3 = new Ground(width / 2, 0, width, 2, 'black');
  border4 = new Ground(width / 2, height, width, 4, 'black');

  ground = new Ground(width / 2, height - 8, width, 12, 'green');
  // plinko = new Plinko(50, 50);

  for (var i = 6; i <= width; i = i + 78) {
    divisions.push(new Division(i, height - (divisionHeight + 8) / 2, 10, divisionHeight - 20));
  }
  for (var i = 40; i <= width; i = i + 50) {
    plinkos.push(new Plinko(i, 80));
  }
  for (var i = 15; i <= width - 10; i = i + 50) {
    plinkos.push(new Plinko(i, 160));
  }
  for (var i = 40; i <= width; i = i + 50) {
    plinkos.push(new Plinko(i, 240));
  }
  for (var i = 15; i <= width - 10; i = i + 50) {
    plinkos.push(new Plinko(i, 320));
  }

}

function draw() {
  background('aliceblue');
  Engine.update(engine);

  ground.display();
  border1.display();
  border2.display();
  border3.display();
  border4.display();

  if (frameCount%60==0) {
    particles.push(new Particles(random(width/2-20, width/2+20), 10, 10));
  }
  
  for (i = 0; i < particles.length; i++) {
    particles[i].display();
  }
  for (i = 0; i < divisions.length; i++) {
    divisions[i].display();
  }
  for (i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }

  drawSprites();
}