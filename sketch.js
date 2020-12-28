var dog, dogImage,dogImage1
var foodS,foodStock
function preload()
{
  dogImage=loadImage("images/dogImg.png")
  dogImage1=loadImage("images/dogImg1.png")
}

function setup() {
   database=firebase.database()
   
  createCanvas(500, 500);
  dog=createSprite(250,300,150,150)
  dog.addImage(dogImage)
  dog.scale=0.15
  foodStock=database.ref('Food')
  foodStock.on("value",readStock);
  
}


function draw() {  
  background("white");
  if(keyWentDown(UP_ARROW)){
     writeStock(foodS)
    dog.addImage(dogImage1)
  }
  drawSprites();
  text("Food Remaining:"+foodS,170,200)
  text("Note:press up arrow key to feed the dog",130,10)

}
function readStock(data){
  foodS=data.val()

}
function writeStock(x){
 if(x<=0){
   x=0
 }
 else{x=x-1}

   database.ref('/').update({
     Food:x
   })
  }