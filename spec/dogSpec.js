describe('dog', function() {

  var dog, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    dog = new Dog(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(dog.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(dog.$node, 'toggle');
    dog.step();
    expect(dog.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(dog, 'step');
      // debugger;
      expect(dog.step.callCount).to.be.equal(0);
      // debugger;
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(dog.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(dog.step.callCount).to.be.equal(2);
    });
  });
});
