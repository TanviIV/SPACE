// Image Variables
var intssImg 
var spcr1Img, spcr2Img, spcr3Img, spcr4Img
var wallImg

// Object Variables
var intss
var craft1, craft2, craft3, craft4
var wall

var spacecraft, hasDocked
var hasDocked=false;


// --------------------------Functions-----------------------------//


function preload() {

  intssImg= loadImage("images/iss.png");
  wallImg= loadImage("images/spacebg.jpg");
  spcr1Img= loadImage("images/spacecraft1.png");
  spcr2Img= loadImage("images/spacecraft2.png");
  spcr3Img= loadImage("images/spacecraft3.png");
  spcr4Img= loadImage("images/spacecraft4.png");
  
}



function setup() {
  createCanvas(windowWidth,windowHeight);

  wall=createSprite(displayWidth/2-1,displayHeight/2-2,20,20);
  wall.addImage(wallImg);
  wall.scale=2.95;


  iss=createSprite(displayWidth-600,displayHeight-380,50,50);
  iss.addImage(intssImg);

  spacecraft=createSprite(displayWidth-500,displayHeight-200,50,50);
  spacecraft.addImage(spcr1Img);
  spacecraft.scale=0.3

  
  
}

function draw() {
  background(355,355,355); 
  if(spacecraft.y <= (iss.y+95) && spacecraft.x <= (iss.x-10)){
    text ("docked succefully",350,300,40,40);
    fill("red");
    hasDocked=true;
    } 


  if(!hasDocked){

    if(keyDown("LEFT_ARROW")||touches.length>0){
      spacecraft.x=spacecraft.x-5;
      spacecraft.addImage(spcr3Img)
    }
    if(keyDown("RIGHT_ARROW")||touches.length>0){
      spacecraft.x=spacecraft.x+5;
      spacecraft.addImage(spcr4Img);
    }
  

    if(keyDown("DOWN_ARROW")||touches.length>0){
      spacecraft.y=spacecraft.y+5;
      spacecraft.addImage(spcr2Img);
    }
  
    if(keyDown("UP_ARROW")||touches.length>0){
      spacecraft.y=spacecraft.y-5;
      spacecraft.addImage(spcr1Img);

    
    }
    }




  drawSprites();
}