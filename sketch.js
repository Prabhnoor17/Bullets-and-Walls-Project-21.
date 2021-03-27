var bullet1, bullet2, bullet3, bullet4;
var wall1, wall2, wall3, wall4;
var thickness;
var weight;
var speed, speed2, speed3, speed4;
var height;
var damage, damge2, damage3, damage4;

function setup() {

  createCanvas(1600,600);

thickness = random(22,83);

speed = random(31,45);
speed2 = random(35,57);
speed3 = random(27,35);
speed4 = random(19, 26)

weight = random(30,52)

height = 250/2;

damage = 0.5*weight*speed*speed/thickness;
damage2 = 0.5*weight*speed2*speed2/thickness;
damage3 = 0.5*weight*speed3*speed3/thickness;
damage4 = 0.5*weight*speed4*speed4/thickness;

bullet1 = createSprite(100,100,50,5,weight);
bullet1.shapeColor = "white"

bullet2 = createSprite(100,200,50,5,weight);
bullet2.shapeColor = "white";

bullet3 = createSprite(100,300,50,5,weight);
bullet3.shapeColor = "white";

bullet4 = createSprite(100,400,50,5,weight);
bullet4.shapeColor = "white";

wall1 = createSprite(1200, 90,);
wall1.shapeColor = "white";
wall1.width = thickness;
wall1.height = height-50; 

wall2 = createSprite(1200,190);
wall2.shapeColor = "white";
wall2.width = thickness*3;
wall2.height = height-75;

wall3 = createSprite(1200,290);
wall3.shapeColor = "white";
wall3.width = thickness+10;
wall3.height = height-63;

wall4 = createSprite(1200,390);
wall4.shapeColor = "white";
wall4.width = thickness+20;
wall4.height = height-64;

bullet1.velocityX = speed;
bullet2.velocityX = speed2;
bullet3.velocityX = speed3;
bullet4.velocityX = speed4;



}

function draw() {
  background("black"); 
  
 


   hascollided();

 
 

  drawSprites();
}

function hascollided()
{
 
  if(bullet1.isTouching(wall1)){
    bullet1.velocityX = 0;
    
    if(damage >= 80){
wall1.shapeColor = ("red");

text("Wall isn't that Strong, try making a stronger one.",390,90);
    }

    else{
      wall1.shapeColor = ("green");
    }
    text("Wall is strong enough to handle the damage of the bullet, Strong Wall!", 390,90)
  }

  if(bullet2.isTouching(wall2)){
    bullet2.velocityX = 0;
    
    if(damage2 >= 80){
wall2.shapeColor = ("red");

text("Wall isn't that Strong, try making a stronger one.",390,190);
    }

    else{
      wall2.shapeColor = ("green");
    m
      text("Wall is strong enough to handle the damage of the bullet, Strong Wall!", 390,190)
    }
    
  }

  if(bullet3.isTouching(wall3)){
    bullet3.velocityX = 0;
    
    if(damage >= 80){
wall3.shapeColor = ("red");

text("Wall isn't that Strong, try making a stronger one.",390,290);
    }

    else{
      wall3.shapeColor = ("green");

      text("Wall is strong enough to handle the damage of the bullet, Strong Wall!", 390,290)
    }
    
  }


  if(bullet4.isTouching(wall4)){
    bullet4.velocityX = 0;
    
    if(damage <= 80){
wall4.shapeColor = ("red");
    
    textSize = 20;
    stroke("red");
     
    text("Wall isn't that Strong, try making a stronger one.", 390,390);

    }

    else{
      wall4.shapeColor = ("green");

      textSize = 20;
      stroke("green")
      text("Wall is strong enough to handle the damage of the bullet, Strong Wall!", 390, 390);
    }
    
  }

}