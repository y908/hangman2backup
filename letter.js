function Letter(word) {
  this.dashedWord = word.split('');
  for(var i = 0; i< word.length; i++) {
    this.dashedWord[i] = '_ ';
  }

  this.printLines = function() {
   console.log('in Dashes.lines', this.dashedWord);
  }
}

module.exports = Letter;



//check my file with his..check letter, 