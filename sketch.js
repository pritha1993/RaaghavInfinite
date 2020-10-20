var ground,groundImage;
var background,backgroundImg;
var ball,ballImage;
var invisibleGround;
var obstaclesGroup, obstacle;
var coin,coinImage;
var obstaclesGroup,obstacle1,obstacle2;
//extra additions
var coinsGroup;
var gameState="play";

function preload(){
groundImage=loadImage("ground.png");
  backgroundImg=loadImage("background.png");
  ballImage=loadImage("ball.png");

  coinImage=loadImage("coin.png");
 obstacle1 = loadImage("obstacle1.png");
  //obstacle2 = loadImage("obstacle2.png");
}

function setup() {
 createCanvas(600, 400);
  ball=createSprite(80,355,50,50);
  ball.addImage("ball",ballImage);
  ball.scale=0.1
  invisibleGround = createSprite(300,390,600,5);
  invisibleGround.visible=false;
  
ground = createSprite(200,160,400,20); 
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX=-5;

  
  obstaclesGroup = new Group();
  coinsGroup = new Group();
  
  score  =0;
}

function draw() {
 background("white");
  text("Score: "+ score, 500,50);
  //reset ground
  if(ground.x<0){
   ground.x= ground.width/2;
  }
  
   if( keyDown("space")&& ball.y >= 357.5 ) {
      ball.velocityY = -18;
     
    }
  
    ball.velocityY = ball.velocityY + 0.8;
   ball.collide(invisibleGround);

  
 coins();
  spawnObstacles();
  
  
    
   //if(frameCount % 500 === 0) {
   
    
   // }
  
  
  drawSprites();
}
function coins(){
   if(frameCount % 280 === 0) {
  coin = createSprite(600,200,10,10);
      coin.y = Math.round(random(150,200));
     // coin.x = Math.round(random(500,550));// this is not needed, can you fix the rest on your own?
   coin.addImage("coin",coinImage);
      coin.velocityX= -5;
  coin.scale=0.1
      coin.lifetime = 600;
     coinsGroup.add(coin);
     
   }
  
  //if(coinGroup.isTouching(ball)){
   // coinGroup.destroyEach();
  //  score = score +1;
  //}
}
function spawnObstacles() {
  if(frameCount % 200 === 0) {
    var obstacle = createSprite(800,370,10,40);
    obstacle.velocityX = -6;
    obstacle.addImage(obstacle1);
    
    //assign scale and lifetime to the obstacle     
    obstacle.scale = 0.5;
    obstacle.lifetime = 300;
    
    
   
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
}

