'use strict'
module.exports = function stringify(array) {
  array.forEach(function(pixVal){
    pixVal = pixVal.toString();
  });
  return array.toString();
};
