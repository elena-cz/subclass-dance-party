var MovingDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('moving-dancer');
  this.isMovingRight = true;
  
};

MovingDancer.prototype = Object.create(Dancer.prototype);
MovingDancer.prototype.constructor = MovingDancer;

MovingDancer.prototype.oldStep = Dancer.prototype.step;

MovingDancer.prototype.step = function() {
  this.oldStep();
  
  if (this.left <= width && this.isMovingRight) {
    this.moveRight();  
  } else {
    this.moveLeft();
  }
  
  if (this.left > width) {
    this.isMovingRight = false;
  } 
  if (this.left < 0) {
    this.isMovingRight = true;
  }
};

MovingDancer.prototype.moveRight = function() {
  this.left = this.left + 20;
  this.setPosition();
};

MovingDancer.prototype.moveLeft = function() {
  this.left = this.left - 20;
  this.setPosition();
};


// .53r for x translation, .85r for y translation