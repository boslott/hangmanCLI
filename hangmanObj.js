
//
//  Hangman CLI
//  November 11, 2017
//  Bo Slott


// Issues:
//  Having trouble with comparing the incoming letter to the already-guessed word
// Still to come: the scoreboard, user instructions








//
//  Hangman Object
//

function Hangman() {

    this.request = require('request');
    this.keypress = require('keypress');
    this.word = require('./wordObj');
    this.letter = require('./letterObj');

    this.gameWord = {};
    this.userGuess = new this.letter();
    this.pastGuesses = [];
    this.guessWord = [];
    this.dispWord = [];

}

Hangman.prototype.getWord = function() {
  //api call out to obtain new word

  console.log('Getting New Word!');

  let url = 'http://setgetgo.com/randomword/get.php';

  this.request.get(url, (error, response, body) => {
    if (error) throw error;

    this.gameWord = new this.word(body);

    this.gameOn(this.gameWord);
  });
};

Hangman.prototype.gameOn = function(gameWord) {
  console.log('gameWord = ' + gameWord.wordStr);
  gameWord.letterfy();
  gameWord.displaySelf();
  this.dispWord = gameWord.wordArr.map(function() {return '__'});
  this.acceptKeys();

};

Hangman.prototype.acceptKeys = function() {
  this.keypress(process.stdin);

  process.stdin.on('keypress', (ch, key) => {

    key !== undefined ? key.name.length < 2 ?
                        this.userGuess.char = key.name :
                        console.log('Not a letter, please try again') :
                        console.log('Not a letter, please try again');

    this.compareUsedBefore() >= 0 ? console.log (
        'You have guessed that letter already. Please guess another letter.'
      ) :  this.updatePastGuesses(this.userGuess.char);
      console.log(this.pastGuesses);

      this.compareGameWord(this.userGuess.char);

    // Allows Ctrl-C to exit the app
    if (key && key.ctrl && key.name == 'c') {
      process.stdin.pause();
    }
  });

  process.stdin.setRawMode(true);
  process.stdin.resume();

};

Hangman.prototype.compareUsedBefore = function() {
  let tmp = this.pastGuesses.indexOf(this.userGuess.char);
  return tmp;
};

Hangman.prototype.updatePastGuesses = function() {
  console.log('Updating past guesses array!');
  this.pastGuesses.push(this.userGuess.char);
  console.log(this.pastGuesses);
};

Hangman.prototype.compareGameWord = function() {
  console.log(this.gameWord.wordStr + ' = wordStr');
  this.guessWord = this.gameWord.wordArr
                    .map(this.compareGameWordLetters, this);
  this.dispWord = this.guessWord.map(this.filledOrNot)
  console.log(this.dispWord);
};

Hangman.prototype.compareGameWordLetters = function(item) {
  // console.log(this.userGuess.char);


  let tmp = (this.userGuess.char == item.char) ?  this.userGuess.char : (item.char !== '__' ? '__' : item.char);
  return tmp;
};

Hangman.prototype.filledOrNot = function(item) {
  let tmp = item !== '__' ? item : console.log('nothing');
  return tmp;
};






module.exports = Hangman;
