function Bird(){
  this.y = height/2;
  this.x = 64;
  this.birdSize = 32;
  this.grav = 0.2;
  this.vel = 0;
  this.flyStrength = -3.5;

  this.show = function(){
    fill(255);
    ellipse(this.x,this.y,this.birdSize,this.birdSize);
  }

  this.update = function(){
    this.vel += this.grav;
    this.y +=this.vel;
    if (this.y > height) {
        this.y = height;
        this.vel = 0;
    }
    if (this.y < 0) {
        this.y = 0;
        this.vel = 0;
    }
  }

  this.fly = function(){
    this.vel+=this.flyStrength;
  }

  this.hits = function(pipe){
    if (this.x+this.birdSize>=pipe.pipePos&&this.x+this.birdSize<=pipe.pipePos+pipe.width) {
      if (this.y<=pipe.topPipe||this.y+this.birdSize>=pipe.topPipe+pipe.gap) {
        score -= 50;
        return true;
      }
    }
    score += 100;
    return false;
  }

  this.rush = function(){
    
  }
}
