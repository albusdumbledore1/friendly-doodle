const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var stone,ground,level1,level2,block1,block2,block3,Block4,Block5,block6;
var slingshot;

function preload() {
 
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;

  stone =new Stone(100, 200,50,50);
  ground = new Ground(width/2,400,800,20);
  level1 = new Ground(400,300,200,30);
  level2 = new Ground(600,200,200,30);

  block1 = new Block(400,290);
  block2 = new Block(375,290);
  block2.debug = true;
  block3 = new Block(425,290);
  block4 = new Block(385.5,255);
  block5 = new Block(435.5,255);
  block6 = new Block(400,215);
  slingshot = new Chain(stone.body,{x:200, y:50});

}

function draw() {
  background(255);  
  Engine.update(engine);
  //stone("#FFD800")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
  stone.display();
  level1.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  slingshot.display();

                                                                      
  ground.display();
}
//   https://us02web.zoom.us/j/84136657417 (Password: yuPH7chUSw)





function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}