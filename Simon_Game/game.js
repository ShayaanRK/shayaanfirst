// Track if the game has started
var started = false;
// Track the current level
var level = 0;

// Function to reset the game
function startOver() {
   started = false;
   level = 0;
   gamePattern = [];
   userClickedPattern = [];
   document.querySelector("h1").textContent = "Press A Key to Start";
}

// Listen for keypress to start the game
document.addEventListener("keypress", function() {
  if (!started) {
    nextSequence();
    started = true;
    document.querySelector("h1").textContent = "Level " + level;
  }
});

// Array of button colours
var buttonColours = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];
var gamePattern = [];

// Function to generate the next sequence
function nextSequence() {
  // Increase level
  level++;
  // Update h1 with current level
  document.querySelector("h1").textContent = "Level " + level;

  // Generate random number between 0 and 3
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];

  // Add the chosen colour to the game pattern
  gamePattern.push(randomChosenColour);

  // Animate the button
  animatePress(randomChosenColour);

  // Play sound for the chosen colour
  playSound(randomChosenColour);

   // Log the game pattern to the console
  console.log("Game Pattern:", gamePattern);
}

// Detect if button is clicked
document.querySelectorAll(".btn").forEach(function(btn) {
  btn.addEventListener("click", function() {
    var userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);

   console.log("User Clicked Pattern:", userClickedPattern);
    // Check the user's answer
    checkAnswer(userClickedPattern[userClickedPattern.length - 1]);
  });
});

function checkAnswer(currentLevel) {
  // Check if the last user input matches the game pattern
  if( userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    console.log("Current level is correct:");
  }
   // If the user is correct
   if (userClickedPattern.length === gamePattern.length) {
      // Check if gamePattern matches userClickedPattern
      for(var i = 0; i < gamePattern.length; i++) {
         if (userClickedPattern[i] !== gamePattern[i]) {
            console.log("Wrong answer!");
            // Play wrong sound
            playSound("wrong");
            // Flash the body
            document.body.classList.add("game-over");
            setTimeout(function() {
               document.body.classList.remove("game-over");
            }, 200);
            // Reset the game
            startOver();
            return;
         }
      }
      // If the user has completed the sequence
      console.log("Completed the sequence!");
      // Reset user input for the next round
      userClickedPattern = [];
      // Move to the next sequence
      setTimeout(function() {
        nextSequence();
      }, 1000);
   }
}

// Play a sound
function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

// Animate the button when clicked
function animatePress(currentColour) {
  var activeButton = document.getElementById(currentColour);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
