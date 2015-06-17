/**
 * Factory Design Pattern
 */
'use strict';


/* Declaration of Factory with Encapsulation */
function Factory(name) {
  var runStr = ' is running';     // private value

  return {
    run: function() {             // public method
      console.log(name + runStr);
    }
  };
}


/* Factory Inheritance with Mutating */
function Manufacture(name) {
  var factoryObj = Factory(name); // inheritance

  var grindStr = ' is grinding';  // private value
  var grinding = function() {     // private method
    console.log(name + grindStr);
  };

  factoryObj.grind = function() { // public method
    this.run();
    grinding();
  };

  return factoryObj;
}

var factory = Manufacture('Mill');
factory.grind();
