const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var hour=0;

var bg ;

function preload() {
     getBackgroundImg();;
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    if(backgroundImg)
        background(backgroundImg);

    // add condition to check if any background image is there to add


    Engine.update(engine);

    fill("black");
    textSize(30)

    if(hour>=12){
        text("Time :"+ hour%12 + "PM", 50,100);
    }else if(hour==0){
        text("Time : 12 AM",100,100);
    }else{
        text("Time :" + hour%12 + " AM",50,100)
    }

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response =await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responseJSON= await response.json();

    var datetime= responseJSON.datetime;
    var hour=datetime.slice(11,13)

    if(hour>=12){
        text("Time :"+ hour%12 + "PM", 50,100);
    }else if(hour==0){
        text("Time : 12 AM",100,100);
    }else{
        text("Time :" + hour%12 + " AM",50,100)
    }

    if(hour>04 && hour<06){
        bg="sunrise1.png"
    }
    else if(hour>06 && hour<08){
        bg="sunrise2.png"
    }
    else if(hour>=23 && hour==0){
        bg="sunset10.png"
    }
    else if(hour==0 && hour<=3){
        bg="sunset11.png"
    }
    else {
        bg="sunset12.png"
    }

    backgroundImg=loadImage(bg);

}

