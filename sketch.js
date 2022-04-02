var girlStanding, girlRunning;
var ground, invisibleGround, groundImage;

var cloud, cloudsGroup, cloudImage;

var ob1,ob2,ob3,ob4,ob5,ob6

var newImage;

function preload(){
  girlRunning = loadAnimation("girlRunning.png");
  
  
  ground = loadImage("ground.png");
  
  cloudImage = loadImage("cloud.png");

  ob1=loadImage("pole.png");
  ob2=loadImage("pole.png");
  ob3=loadImage("pole.png");
  ob4=loadImage("pole.png");
  ob5=loadImage("pole.png");
  ob6=loadImage("pole.png");
 
}

function setup() {
  createCanvas(600,200)

  girl = createSprite(50,160,20,50);
  girl.addAnimation("running", girlRunning);
  girl.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  
}

function draw() {
  background(180);
  
  
  
  if(keyDown("space") && girl.y>=100) {
    girl.velocityY = -10;
  }
  
  girl.velocityY = girl.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  girl.collide(invisibleGround);
  

  spawnClouds();
  spawnObstacle()
  drawSprites();
}

function spawnObstacle(){
  if(frameCount%80===0){
    pole=createSprite(600,170,10,10);
    pole.velocityX=-3

    var ob=Math.round(random(1,6));

    switch(ob){
      case 1: pole.addImage(ob1);
      break
      case 2: pole.addImage(ob2);
      break
      case 3: pole.addImage(ob3);
      break
      case 4: pole.addImage(ob4);
      break
      case 5: pole.addImage(ob5);
      break
      case 6: pole.addImage(ob6);
      break
    pole.scale=0.5;
    pole.lifetime=200;
  }
}

function spawnClouds() {
  if (frameCount % 60 === 0) {
    cloud = createSprite(600,100,40,10);
    cloud.addImage(cloudImage)
    cloud.y = Math.round(random(10,60))
    cloud.scale = 0.4;
    cloud.velocityX = -3;
    
    cloud.lifetime=150;
    }
}}
