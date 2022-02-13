var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var cloud, cloudsGroup, cloudImage;
var score


var newImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");
 Obstacle_1_Image = loadImage("Obstacle1.png")
 Obstacle_2_Image = loadImage("Obstacle2.png")
 Obstacle_3_Image = loadImage("Obstacle3.png")
 Obstacle_4_Image = loadImage("Obstacle4.png")
 Obstacle_5_Image = loadImage("Obstacle5.png")
 Obstacle_6_Image = loadImage("Obstacle6.png")

}

function setup() {
  createCanvas(600, 200);

  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  // trex.addAnimation("collided",trex_collided)
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  score=0

  console.log("Hello"+ 5)
  
}

function draw() {
  background(180);
  text("Score:"+score,500,50 )
  score=score+Math.round(frameCount/60)  
 
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  //spawn the clouds
  spawnClouds();
  spawn_obstacles();
  drawSprites();
}




function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    cloud = createSprite(600,100,40,10);
    cloud.addImage(cloudImage)
    cloud.y = Math.round(random(10,60))
    cloud.scale = 0.4;
    cloud.velocityX = -3;
    
    
    //assigning lifetime to the variable
    cloud.lifetime = 134
    
    //adjust the depth
    cloud.depth = trex.depth
    trex.depth = trex.depth + 1;


 }

 
  }
function spawn_obstacles(){

if(frameCount %60===0){
var Obstacle=createSprite(600,165,10,40)
Obstacle.velocityX= -6
var ram=Math.round(random(1,6))
switch(ram){

case 1: Obstacle.addImage(Obstacle_1_Image)
        break;         
 case 2: Obstacle.addImage(Obstacle_2_Image)
        break;           
 case 3: Obstacle.addImage(Obstacle_3_Image)
        break;
 case 4: Obstacle.addImage(Obstacle_4_Image)
        break;
 case 5: Obstacle.addImage(Obstacle_5_Image)
        break;
 case 6: Obstacle.addImage(Obstacle_6_Image)
        break;       
        
 default: break;      
}

Obstacle.scale=0.5
Obstacle.lifetime=300


}

}
