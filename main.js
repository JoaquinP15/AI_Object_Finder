Status = "";
value = "";

function preload(){

}

function setup(){
    canvas = createCanvas(500,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function start(){
    object_detector =  ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML = 'status : detecting objects';
    value = document.getElementById("input").value;
}

function modelLoaded(){
    console.log("model loaded");
    Status = true;
}

function draw(){
    image(video,0,0,500,400);
}