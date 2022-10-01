Status = "";
value = "";
objects = [];

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

function gotResults(error,results){
    if(error){
       console.log(error);
    }
    console.log(results);

    objects = results;
    
    synth = window.speechSynthesis;

    synth.speak(utterThis);
}

function draw(){
    image(video,0,0,500,400);
    if(value == object){
    for(i = 0; i < objects.length; i++){
        document.getElementById("status").innerHTML = "status : object detected";
        document.getElementById("number_of_objects").innerHTML = "number of objects : " + objects.length;

        fill("red");
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label + "" + percent + "%",objects[i].x + 15,objects[i].y + 15);
        noFill();
        stroke("red");
        rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
    }
}
}
