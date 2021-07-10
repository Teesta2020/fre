var jaxson, jaxson_running, jaxson_collide;
var ground, invisibleGround, groundImage;
var invisibleGround;



function preload() {
  jaxson_running = loadAnimation("Runner-1.png", "Runner-2.png", );
  groundImage = loadImage("path.png")
}

function setup() {
createCanvas(1500, 1500);

//create a jaxson sprite
jaxson = createSprite(150,160,20,50);
jaxson.addAnimation("running", jaxson_running);
jaxson.scale = 0.5;
  
//create a ground sprite
ground = createSprite(200,180,400,20);
ground.addImage("groundImage");
ground.x = ground.width /2;
ground.velocityX = -4;


invisibleGround=createSprite(200,190,400,10)
invisibleGround.visible=false
  
}

function draw() {
background(220);

console.log(jaxson.y)
//jump when the space button is pressed
if (keyDown("space")&& jaxson.y >=100) {
  jaxson.velocityY = -10;
}

jaxson.velocityY = jaxson.velocityY + 0.8

if (ground.x < 0) {
  ground.x = ground.width / 2;
}

jaxson.collide(invisibleGround);
drawSprites();
}