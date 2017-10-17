$(document).ready(function() {
  window.dancers = [];
  
  window.height = $('body').height();
  window.width = $('body').width();
  window.linedUp = false;

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.max(Math.random() * 1000, 200)
    );
    $('body').append(dancer.$node);
    dancers.push(dancer);
  });
  
  $('.lineUpButton').on('click', function(event) {
    var spacing = (width - 40) / dancers.length;
    if (linedUp === false) {
      console.log('in function to lineup', dancers.length);
      for (var i = 0; i < dancers.length; i++) {
        dancers[i].left = 20 + (spacing * i);
        dancers[i].top = height / 2;
        dancers[i].setPosition();
      }
      linedUp = true;
    } else {
      console.log('in function to un-lineup', dancers.length);
      for (var i = 0; i < dancers.length; i++) {
        dancers[i].left = width * Math.random();
        dancers[i].top = height * Math.random();
        dancers[i].setPosition();
      }
      linedUp = false;
    }
  });
  
  var checkDancers = function () {
    checkProximity();
    setTimeout(checkDancers, 1000);
  };
  
  checkDancers();
  
  function checkProximity() {
    for (var i = 0; i < dancers.length; i++) {
      for (var j = 0; j < dancers.length; j++) {
        if (dancers[i] !== dancers[j]) {
          if (isClose(dancers[i].left, dancers[i].top, dancers[j].left, dancers[j].top)) {
            console.log(dancers[i].$node);
            dancers[i].$node.animate({top: '+=20px'});
            dancers[j].$node.animate({top: '+=20px'});
          }
        }
      }
    }
  }
  
  function isClose(x1, y1, x2, y2) {
    var hypotenuse = Math.sqrt(Math.pow(y2 - y1, 2) + Math.pow(x2 - x1, 2));
    if (hypotenuse < 100) {
      return true;
    }
    return false;
  }
});



