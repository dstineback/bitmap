'use strict';
var fs = require('fs');

var file = fs.readFileSync(__dirname + '/img/palette-bitmap.bmp');

var headers = {};
console.log(file.slice(0, 4));
console.log(file[0], file[1]);

headers.type = file.toString('ascii', 0, 2);
headers.size = file.readUInt32LE(2);
headers.pixelStart = file.readUInt32LE(10);
