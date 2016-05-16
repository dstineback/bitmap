'use strict';

var fs = require('fs');
var expect = require('chai').expect;
var randomize = require('../lib/randomize');
var stringify = require('../lib/stringify');
var transformer = require('../lib/transformer');

describe('stringify.js', function() {
  var testArray = [[1],[2],[3],[4],[5]];
	var stringifiedArray = stringify(testArray);

	it('Should take an array turn them into strings', function(){
		expect(typeof stringifiedArray).to.eql('string');
		expect(typeof stringifiedArray[3]).to.eql('string');
	});
});

describe('transform img', function() {
  it('should have 2 diffent imgs', function(){
    var firstImg = fs.readFileSync(__dirname + '/../img/palette-bitmap.bmp');
    var secondImg = fs.readFileSync(__dirname + '/../img/new-palette-bitmap.bmp');
    expect(firstImg).to.not.eql(secondImg);
  });
});

describe('randomize test', () => {
  it('should reorder the array', () => {
    var testArr = [[1, 2, 3],[4, 5, 6],[7, 8, 9]];
    expect(randomize(testArr)).to.eql([[2,3,1],[5,6,4],[8,9,7]]);
  });
});
