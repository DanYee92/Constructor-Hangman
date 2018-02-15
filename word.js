//Word constructor depends on the Letter constructor

var Letter=require("./Letter");

//represents the current word the user is attempting to guess
var Word=function(value){
  this.letters=[];
  this.value=value;
  this.guessed="";
  for(var i=0;i<this.value.length;i++){
    this.letters.push(new Letter(this.value[i]));
  }
}
//checks if each letter guessed is in the array
Word.prototype.isComplete = function(){
	for(var i = 0; i < this.letters.length; i++){
		if(this.letters[i].visible === false) {
      return false;
    }
	}
  return true;
}

//turns the keys to lowercase and prevents duplicate entries
Word.prototype.findLetter = function(key){
	var entry = key.toLowerCase();
	if (this.guessed.indexOf(entry) > -1) {
		return console.log("Please choose a different entry" );
	} else {
    this.guessed += entry;
    for(var i=0; i<this.letters.length;i++){
      if(this.letters[i].value.toLowerCase() === entry){
      this.letters[i].visible = true;
      }
    }
  }
};
//toString function adds the correct letters of the array to the output
Word.prototype.toString = function(){
  var output = "";
  for(var i = 0; i < this.letters.length; i++){
    output += this.letters[i].guessDisplay();
  }
  return output;
}
module.exports = Word;
