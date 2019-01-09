
// loop through args input (str) [.length] number of times. each time a new character appears, create an object key+val pair that states what the character is then assign a value that key of how many times it has appeared so far, and each successive time it encounters that key, update that value

//get node input
args = process.argv.slice(2);
function countLetters(str) {
  //remove spaces
  var getLetters = str.join("");
  //init object to populate
  var objOutput = {};

  //init for loop to generate key+val pairs
  for (var i = 0; i < getLetters.length; i++) {
    //temporary variable to store current letter
    var currentLetter = getLetters[i];
    //seperate conditions, "if not a key make one, if already a key then increase value"
    if (objOutput[currentLetter]) {
      //for updating values paired to pre-existing keys
      objOutput[currentLetter] ++;
    } else {
      //generate new key
      objOutput[currentLetter] = 1;
    }
  }

  return objOutput;
}
//print object (and contained key+val pairs)
console.log(countLetters(args));

//worked on with floydianslips