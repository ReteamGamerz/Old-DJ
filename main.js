leftWristX = 0;
rightWristX = 0;

leftWristY = 0;
rightWristY = 0;

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 600, 500);

    if(rightWristY >0 && rightWristY <=250 ) {
        document.getElementById("song_name").innerHTML = "Spectre | Alan Walker";
        document.getElementById("song_type").innerHTML = "New";
        song.play("Spectre.mp3");
        song.stop("tu.mp3");
        song.stop("khiladi.mp3");
        song.stop("Fearless.mp3");
    
    } else if(rightWristY >250 && rightWristY <=500 ) {
        document.getElementById("song_name").innerHTML = "Fearless | Lost Sky";
        document.getElementById("song_type").innerHTML = "New";
        song.play("Fearless.mp3");
        song.stop("tu.mp3");
        song.stop("khiladi.mp3");
        song.stop("Spectre.mp3");
    
    }else if(leftWristY >0 && leftWristY <=250 ) {
        document.getElementById("song_name").innerHTML = "Me Khiladi Tu Anari | Udit Narayan";
        document.getElementById("song_type").innerHTML = "Old";
        song.play("khiladi.mp3");
        song.stop("tu.mp3");
        song.stop("Spectre.mp3");
        song.stop("Fearless.mp3");
    
    } else if(rightWristY >250 && rightWristY <=500 ) {
        document.getElementById("song_name").innerHTML = "Ek Me Aur Ek Tu | Kishore Kumar";
        document.getElementById("song_type").innerHTML = "Old";
        song.play("tu");
        song.stop("Spectre.mp3");
        song.stop("khiladi.mp3");
        song.stop("Fearless.mp3");
    
    }

}





song = "";

function preload() {
   song = loadSound("Fearless.mp3");
   song = loadSound("Spectre.mp3");
   song = loadSound("Tu.mp3");
   song = loadSound("Khiladi.mp3");

}

function play() {
 song.play(); song.setVolume(1); song.rate(1); 

}

function modelLoaded() {
    console.log("modelLoaded");
}

function gotPoses(results) {

   if(results.length > 0) {
       console.log(results);

       leftWristX = results[0].pose.leftWrist.x; 
       rightWristX = results[0].pose.rightWrist.x; 

       leftWristY = results[0].pose.leftWrist.y; 
       rightWristY = results[0].pose.rightWrist.y;     
       
       console.log("Left Wrist X And Y"+ leftWristX + leftWristY  );
       console.log("Right Wrist X And Y"+ rightWristX + rightWristY );
   }

}

