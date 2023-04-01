function reverse(word){
  //splits the word into individual characters and conversts it into an array
  const splitWord = word.split("")
  //reverses the array
  const reversedWordArray = splitWord.reverse()
  //joins the new word into a string again
  const reverseWord = reversedWordArray.join("")
  return reverseWord
}


function isPalindrome(word) {
  // Write your algorithm here
  /* 1. takes in a word 
     2. reverses the letters
     3. checks whether the word is still readble
     4. returns true if so and false if not
  */

    //reverse word
    const reverseWord = reverse(word);

    //if word= reverseWord return true else return false

    if (word === reverseWord){
      return true
    }else{
      return false
    }


  

}

/* 
  Add your pseudocode here
      initialise word
      initialise reverseWord
      input : word
      reverse word
      store the reverse in reverseWord
      if (word= reverseWord)
          return true
      else
          return false

      end

*/

/*
  Add written explanation of your solution here
  The programe takes in a word in form of a string and stores it in a variable while storing the reverse of it in another variable then it later checks if the two words match

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
