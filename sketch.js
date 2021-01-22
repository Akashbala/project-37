var dog,happyDog,database
var foodS,foodStock
var readState
var lastFed
var gameState
var bedroom,garden,washroom,livingroom
function preload(){
Dog = loadImage("images/dogImg.png")
ba= loadImage("images/Milk.png")
happyDog = loadImage("images/dogImg1.png")
bedroom = loadImage("images/BedRoom.png")
washroom = loadImage("images/WashRoom.png")
garden = loadImage("images/Garden.png")
livingroom = loadImage("images/LivingRoom.png")
}

function setup() { 
  createCanvas(1200, 700);

food=new Food()

  dog= createSprite(900,300,0,0)
  dog.addImage(Dog)
  dog.scale=0.2
  b1=createSprite(200,200,1,0)
  b1.addImage(ba)
  b1.scale=0.09
  b1.visible=true
  b2=createSprite(250,200,1,0)
  b2.addImage(ba)
  b2.scale=0.09
  b2.visible=true
  b3=createSprite(300,200,1,0)
  b3.addImage(ba)
  b3.scale=0.09
  b3.visible=true
  b4=createSprite(350,200,1,0)
  b4.addImage(ba)
  b4.scale=0.09
  b4.visible=true
  b5=createSprite(400,200,1,0)
  b5.addImage(ba)
  b5.scale=0.09
  b5.visible=true
  b6=createSprite(450,200,1,0)
  b6.addImage(ba)
  b6.scale=0.09
  b6.visible=true
  b7=createSprite(500,200,1,0)
  b7.addImage(ba)
  b7.scale=0.09
  b7.visible=true
  b8=createSprite(550,200,1,0)
  b8.addImage(ba)
  b8.scale=0.09
  b8.visible=true
  b9=createSprite(600,200,1,0)
  b9.addImage(ba)
  b9.scale=0.09
  b9.visible=true
  b10=createSprite(650,200,1,0)
  b10.addImage(ba)
  b10.scale=0.09
  b10.visible=true
  b11=createSprite(200,300,1,0)
  b11.addImage(ba)
  b11.scale=0.09
  b11.visible=true
  b12=createSprite(250,300,1,0)
  b12.addImage(ba)
  b12.scale=0.09
  b12.visible=true
  b13=createSprite(300,300,1,0)
  b13.addImage(ba)
  b13.scale=0.09
  b13.visible=true
  b14=createSprite(350,300,1,0)
  b14.addImage(ba)
  b14.scale=0.09
  b14.visible=true
  b15=createSprite(400,300,1,0)
  b15.addImage(ba)
  b15.scale=0.09
  b15.visible=true
  b16=createSprite(450,300,1,0)
  b16.addImage(ba)
  b16.scale=0.09
  b16.visible=true
  b17=createSprite(500,300,1,0)
  b17.addImage(ba)
  b17.scale=0.09
  b17.visible=true
  b18=createSprite(550,300,1,0)
  b18.addImage(ba)
  b18.scale=0.09
  b18.visible=true
  b19=createSprite(600,300,1,0)
  b19.addImage(ba)
  b19.scale=0.09
  b19.visible=true
  b20=createSprite(650,300,1,0)
  b20.addImage(ba)
  b20.scale=0.09
  b20.visible=true

  
  feed=createButton("Feed the dog")
  feed.position(700,95)
  feed.mousePressed(feedDog)
   
  addFood=createButton("Add Food")
  addFood.position(800,95)
  addFood.mousePressed(addFoods)
  
  database = firebase.database()
  foodStock= database.ref('food')
  foodStock.on("value",readFood,)

   database.ref('lastFeeD').on("value",function(data){
    lastFed=data.val()
  })


 readState=database.ref('gameState')
 readState.on("value",function(data){
 gamerState=data.val()
 })
}

function draw() {  
  background(46,139,87)
  fill("red")
 fill(255,255,254)
 textSize(15)
 
 currentTime=hour();
 if(currentTime==(lastFed+1)){
   update("playing");
   food.garden();
 }else if(currentTime==(lastFed+2)){
   update("sleeping");
   food.bedroom();
 }else if(currentTime>(lastFed+2) && currentTime<=(lastFed+4)){
   update("Bathing");
   food.washroom();
 }

  textSize(20)
  text("FOOD:"+foodS ,50,100)
  
  if(foodS<=0){
    b1.visible=false
  }else{
    b1.visible=true
  }
  if(foodS<=1){
    b2.visible=false
  }else{
    b2.visible=true
  }
  if(foodS<=2){
    b3.visible=false
  }else{
    b3.visible=true
  }
  if(foodS<=3){
    b4.visible=false
  }else{
    b4.visible=true
  }
  if(foodS<=4){
    b5.visible=false
  }else{
    b5.visible=true
  }
  if(foodS<=5){
    b6.visible=false
  }else{
    b6.visible=true
  }
  if(foodS<=6){
    b7.visible=false
  }else{
    b7.visible=true
  }
  if(foodS<=7){
    b8.visible=false
  }else{
    b8.visible=true
  }
  if(foodS<=8){
    b9.visible=false
  }else{
    b9.visible=true
  }
  if(foodS<=9){
    b10.visible=false
  }else{
    b10.visible=true
  }
  if(foodS<=10){
    b11.visible=false
  }else{
    b11.visible=true
  }
  if(foodS<=11){
    b12.visible=false
  }else{
    b12.visible=true
  }
  if(foodS<=12){
    b13.visible=false
  }else{
    b13.visible=true
  }
  if(foodS<=13){
    b14.visible=false
  }else{
    b14.visible=true
  }
  if(foodS<=14){
    b15.visible=false
  }else{
    b15.visible=true
  }
  if(foodS<=15){
    b16.visible=false
  }else{
    b16.visible=true
  }
  if(foodS<=16){
    b17.visible=false
  }else{
    b17.visible=true
  }
  if(foodS<=17){
    b18.visible=false
  }else{
    b18.visible=true
  }
  if(foodS<=18){
    b19.visible=false
  }else{
    b19.visible=true
  }
  if(foodS<=19){
    b20.visible=false
  }else{
    b20.visible=true
  }

  
  if(gameState=="Hungry"){
    feed.hide();
    addFood.hide();
    dog.remove();  
  }else{
    feed.show();
    addFood.show();
    dog.addImage(happyDog);
  }

  drawSprites();

}
function readFood(data){
  foodS=data.val()
}
function writeFood(x){
  if(x<=0){
    x=0
  }
  else{
    x=x-1
  }
  database.ref('/').set({
    Food:x
  })
}


function addFoods(){
foodS++
}
function update(state){
  database.ref('/').update({
    gameState:state
  })
}
function feedDog(){
  dog.addImage(happyDog)

 /* foodObj.updateFoodStock(foodObj.getFoodStock()-1)
  database.ref('/').updata({
   foodStock:foodObj.getFoodStock(),
    feedTime:hour()
  })*/
  if(foodS<=0){
    foodS=0
  }
  else{
    foodS=foodS-1
  }
}
