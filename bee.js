// Array of food-related coding words
const words = [
    { word: "Byte Sandwich", hint: "A unit of digital information" },
    { word: "Hash Burger", hint: "A data structure for storing data" },
    { word: "Java Toast", hint: "A popular programming language" },
    { word: "Array Pie", hint: "An ordered collection of items" },
    { word: "Bug Pizza", hint: "Unwanted behavior in a program" },
  ];
  
  let currentWordIndex = 0;
  let currentWord = words[currentWordIndex];
  
  // Display the word to be spelled
  function displayWord() {
    document.getElementById("word-to-spell").textContent = currentWord.word;
  }
  
  // Check if the user's input is correct
  function checkSpelling() {
    const userInput = document.getElementById("user-input").value.trim();
    const resultElement = document.getElementById("result");
  
    if (userInput.toLowerCase() === currentWord.word.toLowerCase()) {
      resultElement.textContent = "Correct! Well done.";
      resultElement.style.color = "green";
    } else {
      resultElement.textContent = "Oops! Try again.";
      resultElement.style.color = "red";
    }
  }
  
  // Move to the next word
  function nextWord() {
    currentWordIndex++;
    
    // Reset input and result text
    document.getElementById("user-input").value = "";
    document.getElementById("result").textContent = "";
  
    // If all words have been used, restart the game
    if (currentWordIndex >= words.length) {
      currentWordIndex = 0;
      alert("You've completed all the words! Let's start over.");
    }
  
    currentWord = words[currentWordIndex];
    displayWord();
  }
  
  // Initial setup
  window.onload = function() {
    displayWord();
  };
  