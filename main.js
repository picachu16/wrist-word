diference=0;
rightWristX=0;
leftWristX=0;
function setup(){
    canvas=createCanvas(550,550);
    canvas.position(560,110);
    video=createCapture(VIDEO);
    video.size(550,500);
    posenet=ml5.poseNet(video,modelLoded);
    posenet.on('pose',gotPoses);
}
function draw(){
    background("#ffffff");
    fill("aqua");
    textSize(diference);
    text("Evan",50,400);
}
function modelLoded(){
    console.log('poseNet initialised');
}
function gotPoses(results){
if(results.length>0){   
    console.log(results);
    rightWristX=results[0].pose.rightWrist.x;
    leftWristX=results[0].pose.leftWrist.x;
    diference=floor(leftWristX-rightWristX);

}
}