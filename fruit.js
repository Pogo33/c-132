img="";
status="";

function preload(){
    img=loadImage('fruit.jpeg');
}

function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
}

function modelLoaded(){

console.log("Model loaded!");
status=true;
objectDetector.detect(img,gotResult);
}

function gotResult(error,results){
if (error){
    console.log(error);
}
 console.log(results);
}

function draw(){
    image(img,0,0,640,420);
    fill("black");
    text("Fruit basket",30,120);
    noFill();
    stroke("#FF000");
    rect(10,100,620,300);

}
