var bullet, wall, speed, weight, thickness;

var damage;

function setup (){
  createCanvas(400,400)


speed=random(55,90);
weight=random(400,1500);
thickness=random(22,83);

bullet = createSprite(380,200,10,60);
wall=createSprite(20,200,20,20);
}

function draw (){
bullet.velocityX=speed;
if (hasCollided(bullet,wall)){

  damage=0.5*weight*speed*speed/(thickness*thickness*thickness)

if (damage>10){
  wall.shapeColor=color(255,0,0);
}

if (damage<10){
  wall.shapeColor=color(0,255,0);
}



}

function hasCollided(Lbullet, Lwall){

bulletRightEdge=bukket.x+bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wall.LeftEdge){
return true;
  }
  return false;
}
}