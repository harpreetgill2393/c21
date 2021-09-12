var canvas;
var music;
var box,edge1,edge2,edge3,edge4

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
box=createSprite(random(20,750),random(45,400),30,30)
box.shapeColor="white"
edge1=createSprite(100,590,190,10)
edge1.shapeColor="Blue"
edge2=createSprite(300,590,190,10)
edge2.shapeColor="yellow"
edge3=createSprite(500,590,190,10)
edge3.shapeColor="maroon"
edge4=createSprite(700,590,190,10)
edge4.shapeColor="green"
    //create box sprite and give velocity
box.velocityX=2
box.velocityY=2
topedge=createSprite(400,5,800,5)
leftedge=createSprite(5,300,10,600)
rightedge=createSprite(795,300,10,600)
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite


box.bounceOff(edge1)
box.bounceOff(edge2)
box.bounceOff(edge3)
box.bounceOff(edge4)
box.bounceOff(topedge)
box.bounceOff(leftedge)
box.bounceOff(rightedge)
createEdgeSprites()
if(box.x===(random(601,800))&& box.y===590){
    box.shapeColor="green"
}
if(box.x===(random(0,200))&& box.y===590){
    box.shapeColor="blue"
}
if(box.x===(random(201,400))&& box.y===590){
    box.shapeColor="yellow"
}
if(box.x===(random(401,600))&& box.y===590){
    box.shapeColor="maroon"
}

drawSprites();
    //add condition to check if box touching surface and make it box
}
