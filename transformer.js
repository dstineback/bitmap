'use strict'

var fs = require('fs');
var file = fs.readFileSync(__dirname + '/img/non-palette-bitmap.bmp');
var headers = {};

console.log();

fs.readfile(file, (err, data) => {
  if(err) {
    throw err;
  }

})
