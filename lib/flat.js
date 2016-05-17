'use strict';

module.exports = function flat(arr) {
  var flatArray = [];
  arr.forEach(function(pxArr){
    flatArray.push(pxArr[0], pxArr[1], pxArr[2], pxArr[3]);
  });
  return flatArray;
};
