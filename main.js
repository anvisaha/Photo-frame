function preload(){

}

function setup(){
    canvas = createCanvas(550, 380);
    canvas.position(200, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 640, 480);

    fill(110, 151, 255);
    stroke(233, 110, 255);
    rect(0, 1, 1010, 20);

    fill(110, 151, 255);
    stroke(233, 110, 255);
    rect(0, 360, 1010, 20);

    fill(233, 110, 255);
    stroke(233, 110, 255);
    circle(30, 30, 80);

    fill(233, 110, 255);
    stroke(233, 110, 255);
    circle(530, 30, 80);

    fill(233, 110, 255);
    stroke(233, 110, 255);
    circle(30, 350, 80);

    fill(233, 110, 255);
    stroke(233, 110, 255);
    circle(530, 350, 80);
}

function take_snapshot() {
    save('student_name.png');   90, 40, 460, 20
}