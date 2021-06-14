var iss, spacecraft, isDocked;
var issImage
var spacecraftImage1, spacecraft2,spacecraft3, spacecraft4
var bg;

function preload() {
  issImage = loadImage("./images/iss.png");
  spacecraftImage1 = loadImage("./images/spacecraft1.png");
  spacecraft2 = loadImage("./images/spacecraft2.png");
  spacecraft3 = loadImage("./images/spacecraft3.png");
  spacecraft4 = loadImage("./images/spacecraft4.png");
  bg = loadImage("./images/spacebg.jpg");
}

function setup() {
 canvas = createCanvas(800,600);
  //background(bg);
  isDocked = false;
  iss = createSprite(500,100,0,0);
  iss.addImage("iss",issImage);
  iss.scale = 0.5;
  spacecraft = createSprite(550,470,0,0);
  spacecraft.addImage("normal",spacecraftImage1);
  spacecraft.scale = 0.1;
}

function draw() {
  background(bg);
  if(!isDocked) {
    spacecraft.x += random(1,-1);
    if(keyDown("UP_ARROW")){
      spacecraft.addImage(spacecraft2);
      spacecraft.y = spacecraft.y -3;
    }
      
    if(keyDown("LEFT_ARROW")){
        spacecraft.addImage(spacecraft4);
      spacecraft.x = spacecraft.x - 3;
    }
      
    if(keyDown("RIGHT_ARROW")){
        spacecraft.addImage(spacecraft3);
      spacecraft.x = spacecraft.x + 3;
    }
      
    if(keyDown("DOWN_ARROW")){
      
      spacecraft.y = spacecraft.y+3
    }
  }
  if(spacecraft.y <= (iss.y+900) && spacecraft.x <= (iss.x-21)){
    isDocked = true;
    textSize(25);
    fill("green")
    text("Succesfull Docking !", 300, 300);
  }
  drawSprites();
}