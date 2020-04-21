var fixedRect;
var movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(200, 000, 80,50);
  movingRect=createSprite(200,400,50,50);
  fixedRect.shapeColor="red"
  movingRect.shapeColor="red"
  fixedRect.velocityY=5;
  movingRect.velocityY=-5;
}

function draw() {
  background(0);  
  //movingRect.x=mouseX;
  //movingRect.y=mouseY;
  bounceof(fixedRect,movingRect);
    /*
    fixedRect.y-movingRect.y<=fixedRect.height/2+movingRect.height/2 &&
    movingRect.y-fixedRect.y<=fixedRect.height/2+movingRect.height/2){
      fixedRect.shapeColor="blue"
      movingRect.shapeColor="blue"
    } else{
      fixedRect.shapeColor="red"
      movingRect.shapeColor="red"
  }*/
  drawSprites();
}
