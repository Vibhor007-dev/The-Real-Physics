const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber;
var plane;
var copper;
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(600,300);
    rubber=new Rubber(700,400);
    copper=new Copper(400,400);


}

function draw(){
    background("lightBlue");
    Engine.update(engine);
    

    plane.display();
    hammer.display();
    rubber.display();
    copper.display();
 
}