'use strict'

var fs = require('fs');
var randomize = require(__dirname + '/randomize');
var send = require(__dirname + '/send');
var flat = require(__dirname + '/flat');

module.exports = function transform(file) {
  fs.readFile(file, function (err, data) {
    if(err) {
        throw er;
    }
    var buff;
    var palette = [];
    buff = data;
    var bitMap = {};
    bitMap.size = buff.readUInt32LE(2);
    bitMap.width = buff.readUInt32LE(18);
    bitMap.height = buff.readUInt32LE(22);
    bitMap.colorPalette = buff.readUInt32LE(54);
    bitMap.startAddress = buff.readUInt32LE(10);
    bitMap.readColorPalate = (function (){
        var counter = 0;
        for (var i = 54; i < bitMap.startAddress; i+=4) {
          palette[counter] = [buff.readUInt8(i), buff.readUInt8(i + 1), buff.readUInt8(i + 2), 0];
          counter++;
        }
    })();
    randomize(palette);
    var finalPaletteArray = flat(palette);
    var finalPalettePartialBuffer = new Buffer(finalPaletteArray);
    var metaHeaderPartialBuffer = buff.slice(0,54);
    var imgPartialBuffer = buff.slice(1078);
    var finalCompleteBuffer = new Buffer.concat([metaHeaderPartialBuffer, finalPalettePartialBuffer, imgPartialBuffer]);
    send(__dirname + '/../img/new-palette-bitmap.bmp', finalCompleteBuffer);
  });
};
