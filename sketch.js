var bird;
var pipes = [];
var pipeFreq = 100;
var score = 0;
var scorer;
function setup() {
  createCanvas(400,600);
  bird = new Bird();
  pipes.push(new Pipe());
  // scorer = document.getElementById("score");

}

function draw() {
  background(0);
  bird.show();
  bird.update();

  if (frameCount % pipeFreq == 0) {
    pipes.push(new Pipe());
  }
  var i = pipes.length-1
  for (i; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();
    if (bird.hits(pipes[i])) {
      console.log("hit");
      pipes[i].turnRed();
    }
    if (pipes[i].offscreen()) {
      pipes.splice(i,1);
    }
  }
  // scorer.html(score);
  //
}

function keyPressed(){
  if (key == " ") {
    bird.fly();
  }
  if (key == "x") {
    bird.rush();
  }
}
