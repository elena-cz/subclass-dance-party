var ExpandyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  
};

ExpandyDancer.prototype = Object.create(Dancer.prototype);
ExpandyDancer.prototype.constructor = ExpandyDancer;
ExpandyDancer.prototype.oldStep = Dancer.prototype.step;

ExpandyDancer.prototype.step = function() {
  this.oldStep();
  this.$node.toggleClass('expandy-dancer');
  
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