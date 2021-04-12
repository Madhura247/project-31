const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var drops = [];
var maxdrops = 100;
var umbrella;

function preload(){
    
}

function setup(){
    createCanvas(400,700);
    engine = Engine.create();
    world = engine.world;

    if (frameCount % 150 === 0) {
        for (i = 0;  i < maxdrops; i++) {
            drops.push(new Drops (random(0, 400), random(0, 650)));
        }
    }

    umbrella = new Umbrella(200, 500);
}

function draw(){
 
    background(0);
    
    for ( i = 0;  i < maxdrops; i++) {
        drops[i].display();
        drops[i].updateY();
    }

    umbrella.display();
    //drawSprites();
}   

