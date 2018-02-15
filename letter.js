
// * **Letter.js**: Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:



var Letter = function(value) {
  //   * A string value to store the underlying character for the letter
this.value=value;
//A boolean value that stores whether that letter has been guessed yet
this.visible=false;

// A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
this.guessDisplay = function() {
  if(this.visible===false){
    return "_";
  }
  else if(this.visible===true){
    return this.value;
  }
};

}





// exporting our Letter constructor. We will require it in index.js
module.exports = Letter;
