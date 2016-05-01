var expect    = require("chai").expect;
var optionExtender = require("../src/optionExtender");

describe("Properties Conversion", function() {
    
  describe("String Conversion", function() {
    it("string from current will be replaces from extended", function() {
      
        var current = { 
            name : 'current name'  
        };
        var extended = {  
            name : 'extended name' 
        };

        expect(optionExtender(current, extended).name)
        .to.equal(extended.name);
        
    });
  });


});