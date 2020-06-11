//const Engine = Matter.Engine
//const World = Matter.World
//const Bodies = Matter.Bodies
var enemiesgroup,player,distance = 0,goodNpcGroup;
var gamestate = 1
var score = 0
function preload(){
  boyImg = loadImage("rishabs game/boy5.png")
  boy2Img  = loadImage("rishabs game/boy2.png")
  girlImg = loadImage("rishabs game/girld image.png")
  //redCircleImg = loadImage("rishabs game/red circle.png")
  //trackImg = loadImage("rishabs game/track.png")
  sanitizerImg = loadImage("rishabs game/sanitizer.png")
}
function setup(){
  createCanvas(displayWidth-50,displayHeight-50)
 player = createSprite(500,400,100,200)
 player.addImage(boyImg)
 player.scale = 0.09
 enemiesgroup = new Group()
 goodNpcGroup = new Group()
 scoreBoard = createElement("h3")
 scoreBoard.position(displayWidth/5,50)
}
function keyPressed(){
  if(gamestate === 1){

  
  if(keyCode === 37){
    player.x = player.x -50
    //player.velocityY = 0
  }
  if(keyCode === 39){
    player.x = player.x + 50
    //player.velocityY = 0
  }
  if(keyCode === 38){
    distance = distance+50
    //player.y = player.y -50
  }
  //if(keyCode === 40){
    
    //player.y = player.y +50}
  }
}
function goodNpc(){
  var sanitizer = createSprite(random(200,displayWidth-50),player.y*3)
  sanitizer.addImage(sanitizerImg)
  sanitizer.scale = 0.25
  sanitizer.velocityY = 6
  goodNpcGroup.add(sanitizer)
}
function npc(){
  var r = Math.round(random(1,2))
  
  var boy2  = createSprite(random(150,displayWidth-50),player.y*2)
  if(r === 1)
  boy2.addImage(boy2Img)
  if(r=== 2)
  boy2.addImage(girlImg)
  boy2.scale = 0.09
  boy2.velocityY = 7
  
  enemiesgroup.add(boy2)
  console.log(enemiesgroup)
 
}

function draw(){
  background("white")
//console.log("x"+mouseX+":"+"y"+mouseY)
//console.log("player"+player.x+"-"+player.y)
  //image(trackImg,0,-displayHeight*2,displayWidth,displayHeight*4)
  camera.position.x = displayWidth/2
  camera.position.y = player.y
  for(var i =0;i<goodNpcGroup.length;i++){
    if(player.isTouching(goodNpcGroup)){
      goodNpcGroup[i].destroy()
      score++
    }
  }
  if(gamestate === 1){
player.y = displayHeight-distance
  for(var i = 0;i<enemiesgroup.length;i++){
    fill("red")
  ellipse(enemiesgroup[i].x,enemiesgroup[i].y,110,110)}
  if(player.isTouching(enemiesgroup)){
    //player.destroy()
    gamestate = 0
    //enemiesgroup.setVelocityYEach(0)
  }
  if(World.frameCount%40===0){
  npc()
  goodNpc()}
}
if(gamestate === 0){
  enemiesgroup.setVelocityYEach(0)
  player.tint = "red"
}
scoreBoard.html("score"+score)
fill("white")
ellipse(player.x,player.y,100,100)
for(var i = 0;i<goodNpcGroup.length;i++){
  fill("blue")
ellipse(goodNpcGroup[i].x,goodNpcGroup[i].y,105,105)}
  drawSprites()
}