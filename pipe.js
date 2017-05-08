function Pipe(){
  this.topPipe = random(height/1.5);
  this.gap = random(bird.birdSize*3,bird.birdSize*8);
  this.btmPipe = height - (this.topPipe+this.gap);
  this.width = 50;
  this.pipePos = width;
  this.speed = -3;

  this.hit = false;

  this.show = function(){
    fill(225);

    if (this.hit ==true) {
      fill(255,0,0);
    }
    rect(this.pipePos,0,this.width,this.topPipe);
    rect(this.pipePos,this.topPipe+this.gap,this.width,this.btmPipe);
    this.hit = false;
  }
  this.update = function(){
    this.pipePos += this.speed;
  }
  this.offscreen = function(){
    return this.pipePos < -this.width;
  }
  this.turnRed = function(){
    this.hit = true;
  }
}
