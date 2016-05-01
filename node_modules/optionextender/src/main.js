// Exporting the calendar module.
var optionExtender = require('./optionExtender');

var config = { 
    name : 'config name'  
};
var extended = {  
    name : 'extended name' 
};

console.log(optionExtender(config, extended));