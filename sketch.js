var garden , rabbit;
var gardenImg , rabbitImg;
var apple , appleImg;
var leaf , leafImg; 

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden = createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function createApples() {
    apple = createSprite(random(50,350),40,10,10);
    apple.addImage(appleImg)
    apple.y = Math.round(random(10,60))
    apple.scale = 0.25;
    apple.velocityY = +3;
    apple.lifetime = 300;
}
function createLeaf(){
leaf = createSprite(random(50,350),40,10,10);
leaf.addImage(leafImg)
leaf.y = Math.round(random(10,60))
leaf.scale = 0.25;
leaf.velocityY = +3;
leaf.lifetime = 300;
}





function draw() {
  var select_sprites = Math.round(random(1,2));
  background(0);
  if (frameCount % 80 == 0) {
  if (select_sprites == 1) {
    createApples();
  }  
  else{
    createLeaf();
  }
}
  rabbit.x=World.mouseX;

  edges= createEdgeSprites();
  rabbit.collide(edges);



  drawSprites();
}



















