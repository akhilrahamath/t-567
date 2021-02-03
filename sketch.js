const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;

var particle;
 
var particles = [];
var plinkos = [];
var division = [];

var divisionHeight=300;
var score =0;
var count=0;
var line;

var Play;
var gameState=Play;

function setup() {
  createCanvas(800, 800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height,width,20);

  line = new Ground(400,460,810,5);

   for (var k = 0; k <=width; k = k + 80) {
     division.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
    
}
 
function draw() {
  background("black");

  Engine.update(engine);

  textSize(20)
  text("Score : "+score,20,30);

  textSize(25)
  text("500",20,550);

  textSize(25)
  text("500",100,550);

  textSize(25)
  text("500",180,550);

  textSize(25)
  text("500",260,550);

  textSize(25)
  text("100",340,550);

  textSize(25)
  text("100",420,550);

  textSize(25)
  text("100",500,550);

  textSize(25)
  text("200",580,550);

  textSize(25)
  text("200",660,550);

  textSize(25)
  text("200",740,550);

   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-200, width/2+200), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < division.length; k++) {
     
     division[k].display();
   }

   ground.display();
   line.display();

   if(particle!==null){
    particle.display();

    if(particle.body.position.y>760){
      
      if(particle.body.position.x<300){
        score=score+500;
        particle=null;
      }
    }
  }
}

function mousePressed(){
  if(gameState!=="end"){
      particle=new Particle(mouseX,10,10,10);
  }
}