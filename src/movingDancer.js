var MovingDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('moving-dancer');
  this.isMovingRight = true;
  this.hoppingSpot = 0; // range from 0 - 4
  
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
  var r = 60;
  switch (this.hoppingSpot) {
    case 0:
      this.left += (0.35 * r);
      this.top += (0.85 * r);
      this.setPosition();
      this.hoppingSpot = 1;
      break;
    case 1:
      this.left += (0.45 * r);
      this.top += (0.15 * r);
      this.setPosition();
      this.hoppingSpot = 2;
      break;
    case 2:
      this.left += (0.45 * r);
      this.top -= (0.15 * r);
      this.setPosition();
      this.hoppingSpot = 3;
      break;
    case 3:
      this.left += (0.35 * r);
      this.top -= (0.85 * r);
      this.setPosition();
      this.hoppingSpot = 0;
      break;
  }  
  // this.left = this.left + 20;
  // this.setPosition();
};

MovingDancer.prototype.moveLeft = function() {
  var r = 60;
  switch (this.hoppingSpot) {
    case 0:
      this.left -= (0.35 * r);
      this.top += (0.85 * r);
      this.setPosition();
      this.hoppingSpot = 1;
      break;
    case 1:
      this.left -= (0.45 * r);
      this.top += (0.15 * r);
      this.setPosition();
      this.hoppingSpot = 2;
      break;
    case 2:
      this.left -= (0.45 * r);
      this.top -= (0.15 * r);
      this.setPosition();
      this.hoppingSpot = 3;
      break;
    case 3:
      this.left -= (0.35 * r);
      this.top -= (0.85 * r);
      this.setPosition();
      this.hoppingSpot = 0;
      break;
  }  
  // this.left = this.left + 20;
  // this.setPosition();
  this.left = this.left - 20;
  this.setPosition();
};


// .53r for x translation, .85r for y translation