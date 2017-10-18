var Dog = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('dog');
  
};

Dog.prototype = Object.create(Dancer.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.oldStep = Dancer.prototype.step;


Dog.prototype.step = function() {
  
  this.oldStep();
  this.$node.toggle();
  
};


/*
var makeDog = function(top, left, timeBetweenSteps) {
  var dog = makeDancer(top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  var oldStep = dog.step;

  dog.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    oldStep();
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    dog.$node.toggle();
  };

  return dog;
};*/