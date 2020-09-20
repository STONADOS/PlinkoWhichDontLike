const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;

var score = 0;
var ground;

var balls = null;
var chances;
var obstacle = [];
var divs = [];

var gameplay = "playing";

function setup(){
    createCanvas(1400,700);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(700, 680, 14000, 40)

    // strikerr = new striker(300, 430, 160, 50);

    // strikerrhead = new striker(300, 430, 20, 50);

    for (var j = 70 ; j <= width; j+=90){
      obstacle.push(new obstacles(j, 125));
    }
    for (var j =23; j <= width; j+=90){
      obstacle.push(new obstacles(j, 215));
    }

    for (var j = 70 ; j <= width; j+=90){
      obstacle.push(new obstacles(j, 315));
    }

    for (var j = 0; j <= 1400;j = j+200){
      divs.push(new Ground(j, 590, 20, 150));
    }
}

function draw(){
    background("black");
    textSize(90);
    stroke("blue")
    // text("10", 50, 600);
    // text("20", 250, 600);
    // text("30", 450, 600);
    // text("50", 650, 600);
    // text("30", 850, 600);
    // text("20", 1050, 600);
    // text("10", 1250, 600);
    // textSize(40);
    text("YoUr ScOrE : " + score, 100, 60);

    Engine.update(engine);
 
    ground.display();

    // strikerrhead.display();
    // strikerr.display();

    for (var j = 0; j < obstacle.length; j++){
      obstacle[j].display();
    }
    
    if(balls != null){
      balls.display();
      // if (balls.body.postion.x )
    }

    for (var j = 0; j < divs.length; j++){
      divs[j].display();
    }
   }



// function keyPressed(){

//   if(keyCode == 37){
//     // Body.applyForce(strikerr.body, strikerr.body.position, {x:-30, y:0});
//     Body.setPosition(strikerr.body, {x:strikerr.body.position.x - 35, y:strikerr.body.position.y});
//     // Body.setPosition(strikerrhead.body, {x:strikerr.body.position.x, y:430});

//     // Body.setAngle(strikerr.body, 30);
//     // Body.rotate(strikerr.body, 190);
    
//   }
//   if(keyCode == 39){
//     // Body.applyForce(strikerr.body, strikerr.body.position, {x:30, y:0});
//     Body.setPosition(strikerr.body, {x:strikerr.body.position.x + 35, y:strikerr.body.position.y});
//     // Body.setPosition(strikerrhead.body, {x:strikerr.body.position.x, y:430});


//   }
// }

function mousePressed()
{
  balls = new player(10);
}