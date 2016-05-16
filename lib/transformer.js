'use strict'

var fs = require('fs');
var randomize = require(__dirname + '/randomize');
var stringify = require(__dirname + '/stringify');
var send = require(__dirname + '/send');


module.exports = function transform(file) {
  fs.readFile(file, function (err, data) {
    if(err) {
        throw er;
    }
    var buff;
    var palette = [];
    buff = data;
    var bitMap = {};
    bitMap.statAddress = buff.readUInt32LE(10);
    bitMap.readColorPalate = (function (){
        var counter = 0;
        for (var i = 54; i < bitMap.statAddress.length; i+=4) {
          palette[counter] = [buff.readUInt8(i), buff.readUInt8(i+1), buff.readUInt8(i+2), 0];
          counter ++;
        }
    })();
    randomize(palette);
    var string = stringify(palette);
    buff.write(string, 54, 254);
    send(__dirname + '/../img/randomizedBmp.bmp', buff);
  });
};
