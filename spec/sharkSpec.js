describe('shark', function() {

  var shark, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    shark = new Shark(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(shark.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node animate right', function() {
    sinon.spy(shark.$node, 'animate');
    shark.step();
    expect(shark.$node.animate.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(shark, 'step');
      // debugger;
      expect(shark.step.callCount).to.be.equal(0);
      // debugger;
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(shark.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(shark.step.callCount).to.be.equal(2);
    });
  });
});
