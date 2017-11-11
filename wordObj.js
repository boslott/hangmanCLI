
'use strict';

const request = require('request');

const letter = require('./letterObj');

function Word(word) {

  this.wordStr = word;
  this.wordArr = [];

}

Word.prototype.letterfy = function() {
  this.wordArr = this.wordStr.split('').map(this.letterMe);
  // console.log(this.wordArr);
  // console.log(this.wordArr[0].char + ' ' + this.wordArr[2].char);
};

Word.prototype.letterMe = function(char) {
  let newLet = new letter(char);
  // console.log('New Letter Created! ... ' + newLet.char);
  return newLet;
};

Word.prototype.displaySelf = function() {
  // console.log('WA[1] = ' + this.wordArr[0].char)
  console.log('');
  let dispStr = this.wordArr.map(this.displayLetter).join('');
  console.log(dispStr);
  // this.wordArr.forEach(this.displayLetter);
  console.log('');
};

Word.prototype.displayLetter = function(theLet) {
  let result =  theLet.isHidden ? theLet.placeholder : theLet.char;
  return result;
};









const avengersArr = [];

const captain = new Word('captain america');
avengersArr.push(captain);

const hulk = new Word('hulk');
avengersArr.push(hulk);

const ironman = new Word('ironman');
avengersArr.push(ironman);

const widow = new Word('black widow');
avengersArr.push(widow);

const thor = new Word('thor');
avengersArr.push(thor);

const hawk = new Word('hawkeye');
avengersArr.push(hawk);

const fury = new Word('nick fury');
avengersArr.push(fury);

Word.prototype.avengers = avengersArr;

module.exports = Word;
