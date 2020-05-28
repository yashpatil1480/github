var fixedrectangle
var movingrectangle

function setup() {

  createCanvas(1200,400);
  fixedrectangle=createSprite(600,200,50,80)
  movingrectangle=createSprite(400,200,80,30)
fixedrectangle.shapeColor="green"
movingrectangle.shapeColor="green"

}

function draw() {
  background(0,0,0); 
  
  movingrectangle.x=World.mouseX
  movingrectangle.y=World.mouseY
  console.log(movingrectangle.x-fixedrectangle.x)
  console.log(fixedrectangle.width / 2+ movingrectangle.width/2)

  if(movingrectangle.x-fixedrectangle.x<=fixedrectangle.width/2+ movingrectangle.width/2
    && fixedrectangle.x-movingrectangle.x<=fixedrectangle.width/2+movingrectangle.width/2
    &&fixedrectangle.y-movingrectangle.y<=fixedrectangle.height/2+movingrectangle.height/2
    &&movingrectangle.y-fixedrectangle.y<=movingrectangle.height/2+fixedrectangle.height/2){
   fixedrectangle.shapeColor="red"
   movingrectangle.shapeColor="red"
  }
  else{
    fixedrectangle.shapeColor="green"
    movingrectangle.shapeColor="green"
  }
  drawSprites();
}