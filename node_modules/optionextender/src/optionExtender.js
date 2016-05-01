"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

// Summary:
//   Option Extender, the best way to manage default ans extended properties in javascript.
// Arguments:
//   - current(required): current properties, normaly they should be your pre configured properties.
//   - extended(required): the extension, keys from this object will be replaced in your pre configured properties.
var optionExtender = function optionExtender(current, extended) {

    var deepClone = Object.create(null);

    Object.keys(extended).forEach(function (name, index, value) {

        if (_typeof(current[name]) == _typeof(extended[name])) 
            deepClone[name] = extended[name];
        else 
            deepClone[name] = current[name];
    
    });

    return deepClone;
};

// Export as a CommonJS module
module.exports = optionExtender;