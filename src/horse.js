var Horse = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps / 3);
  this.$node.addClass('horse horse-right');
  this.isMovingRight = true;
  this.hoppingSpot = 0; // range from 0 - 4
  
};

Horse.prototype = Object.create(Dancer.prototype);
Horse.prototype.constructor = Horse;

Horse.prototype.oldStep = Dancer.prototype.step;

Horse.prototype.step = function() {
  this.oldStep();

  if (this.left <= width && this.isMovingRight) {
    this.$node.addClass('horse-right');
    this.moveRight();  
  } else {
    this.$node.removeClass('horse-right');
    this.moveLeft();
  }
  
  if (this.left > width) {
    this.isMovingRight = false;
  } 
  if (this.left < 0) {
    this.isMovingRight = true;
  }
};

Horse.prototype.moveRight = function() {
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

Horse.prototype.moveLeft = function() {
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