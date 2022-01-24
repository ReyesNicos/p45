var PC, missile, missilepng, bldg1, bldg2, bullet;
var missilegroup, bulletgroup;
var heart1,heart2,heart3;


function preload(){
missilepng = loadImage("missile.png")
}

function setup(){

    createCanvas(800,800);
    PC = createSprite(400,750,20,20);
    bldg1 = createSprite(200,600,30,100);
    bldg2 = createSprite(600,600,50,200);

    heart1=createSprite(680,100,20,20);
    heart2=createSprite(710,100,20,20);
    heart3=createSprite(740,100,20,20);


    missilegroup=new Group();
    bulletgroup=new Group();
    
    
}

function draw(){
    background("black");
    if(keyDown("Left")){
        PC.x=PC.x-5;
    }
    if(keyDown("Right")){
        PC.x=PC.x+5
    }
    if(keyDown("Space")){
        bullet = createSprite(PC.x,750,5,5);
        bullet.velocityY=-5
        bulletgroup.add(bullet);
    }
    spawnMissiles();
    drawSprites();
}

function spawnMissiles(){
    if(frameCount % 60===0){
        missile=createSprite(Math.round(random(0,800)),0,40,40);
        missile.velocityY=+2;
        missile.addImage("missile",missilepng);
        missile.scale=0.03;
        missile.lifetime=800;
        missilegroup.add(missile);
    }
}