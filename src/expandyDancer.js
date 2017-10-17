var ExpandyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  
};

ExpandyDancer.prototype = Object.create(Dancer.prototype);
ExpandyDancer.prototype.constructor = ExpandyDancer;
ExpandyDancer.prototype.oldStep = Dancer.prototype.step;

ExpandyDancer.prototype.step = function() {
  this.oldStep();
  this.$node.toggleClass('expandy-dancer');
  // increase size x%
  
};