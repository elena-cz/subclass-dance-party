var Shark = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('shark');
};

Shark.prototype = Object.create(Dancer.prototype);
Shark.prototype.constructor = Shark;

Shark.prototype.oldStep = Dancer.prototype.step;

Shark.prototype.step = function() {
  this.oldStep();
  this.$node.animate({left: '+=20px'});
};

