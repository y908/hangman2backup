var inquirer = require('inquirer');
var Letter = require('./letter');
var game = require('./game');
var Checker = require('./checker');


console.log('currentWord', game.currentWord);
var letters = new Letter(game.currentWord);

var checker = new Checker({counter: 10, word: game.currentWord, letters: letters});


console.log("letters", letters);
function ask() {
  inquirer.prompt([
     {
      type: "input",
      name: "guess",
      message: "Guess a Letter:",
       
    }
    ]).then(function (game) {
      if (game.guess < 64 || game.guess > 91){
        console.log("Please type a letter.");
        ask();
      }
      else{
       checker.letterCheck(game.guess);
       console.log('checking game');
       checker.gameCheck();
       console.log('done gameCheck()');
       ask();
      }
  }); 
}

ask();


