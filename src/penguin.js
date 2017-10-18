var Penguin = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('penguin');
};

Penguin.prototype = Object.create(Dancer.prototype);
Penguin.prototype.constructor = Penguin;

Penguin.prototype.oldStep = Dancer.prototype.step;

Penguin.prototype.step = function() {
  this.oldStep();
  this.$node.toggleClass('penguin-wiggle');
  this.$node.animate({left: '+=20px'});
};