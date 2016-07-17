var found = 0;

/*console.log("------------------");
console.log(game.currentWord);
console.log("------------------");*/

function Checker(options) {
  //the number of guesses remaining
  this.counter = options.counter;
  this.wordArray = options.word.split('');
  console.log('wordArray', this.wordArray);
  this.letters = options.letters;

  //code to decrease the counter
  this.decreaseCounter = function(){
    console.log('in decreaseCounter');
    console.log("counter", this.counter);
    this.counter--;
    console.log("Number of guesses remaining: "+this.counter);
  }

  //
  this.gameCheck = function(){
    console.log('in gameCheck');

    //TODO: first check if word is all matched
    //then if the counter is greater than 0, decrease it
    var gameWon = false;

    
    if (gameWon == true) {
      //your win code
    } else if (this.counter > 0){   
      this.decreaseCounter();
       console.log("Yay this works, the counter is", this.counter);
    } else if (this.counter == 0) {
      //game over code
    }
  }


  this.letterCheck = function(l){

    console.log("your letterCheck is: " + l);
    console.log('wordarray', this.wordArray);
    for(var i = 0; i< this.wordArray.length; i++){
      if (l == this.wordArray[i]) {
        console.log('matched!', this.letters);
        this.letters.dashedWord[i] = l;
        found = 1; 
        console.log('this.letters', this.letters);
        console.log('calling lines!');
        this.letters.printLines();




      }
    }

  } // end of letterCheck

}

module.exports = Checker;