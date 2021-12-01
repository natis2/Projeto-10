var rua,ship;
var ruaImg,shipImg;
var edges

function preload(){
  ruaImg = loadImage("road_.png");
  shipImg1 = loadAnimation("Runner-1.png","runner-2.png",
                            "Runner-1.png","runner-2.png");
}

function setup(){
  createCanvas(400,400);
  background("gray");

  // Movendo o fundo
  rua=createSprite(200,200);
  rua.addImage(ruaImg);
  rua.velocitY = -5;
  rua.scale=10;


  ship = createSprite(200,200,30,30);
  ship.addAnimation("movingShip",shipImg1);
  ship.scale =0.15;
   
}

edges = createEdgeSprites();


function draw() {
  background(0);
  rua.velocityY = -3;

 //código para redefinir o fundo
 if(rua.y < 0){
  rua.y = 300;
}

  

  drawSprites();
}