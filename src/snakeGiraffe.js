var SnakeGiraffe = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('snake-giraffe');
};

SnakeGiraffe.prototype = Object.create(Dancer.prototype);
SnakeGiraffe.prototype.constructor = SnakeGiraffe;
SnakeGiraffe.prototype.oldStep = Dancer.prototype.step;

SnakeGiraffe.prototype.step = function() {
  this.oldStep();
  this.$node.toggleClass('snake-giraffe-expanded');
  
};

/* Expandy.prototype.lineUp = function() {
  if (this.left > width / 2) {
    // migrate left
  } else if (this.left < width / 2) {
    // migrate right
  }
};

Expandy.prototype.migrateRight = function() {
  this.left++;
  setPosition();
};

Expandy.prototype.migrateLeft = function() {
  this.left--;
  setPosition();
};
*/