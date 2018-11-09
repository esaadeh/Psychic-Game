

        // Alphabet string for computer's choice
        var alphabet = "abcdefghijklmnopqrstuvwxyz";

        // Variables to hold the total wins, losses, guesses left and choices so far
        var wins = 0;
        var losses = 0;
        var guesses = 9;
        var choices = "";


        // Varialbles to hold references to the html were the output will be displayed
        var winsTotal = document.getElementById("wins-total");
        var lossesTotal = document.getElementById("losses-total");
        var guessesLeft = document.getElementById("guesses-left");
        var letterChoices = document.getElementById("letter-choices");



        // Randomly choses a letter from the alphabet string and stores it in computerChoice
        var computerChoice = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        console.log(computerChoice);



        // Starts the game when a key is presses and captures the users choice in userGuess as lower case
        document.onkeyup = function (choice) {
            var userGuess = choice.key.toLowerCase();


            // Logs the users choices
            choices = choices + " " + userGuess;


            // Checks for a win and if true, increments wins and resets guesses, choices and the computerChoice

            if (userGuess === computerChoice) {
                wins++;
                guesses = 9;
                choices = "";
                alert("you win");
                computerChoice = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
                console.log(computerChoice);
                // console.log("wins" + wins);
            }
            // If no win on initial guess, checks if the player has any guesses left and if so decrements the guesses counter

            else if (guesses > 1) {
                guesses--;
            }

            // If user runs out of guesses(9), ends game, increments looses, resets guesses and choices and resets the computer's pick
            else {
                alert("you lose");
                losses++;
                guesses = 9;
                choices = "";
                computerChoice = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
                console.log(computerChoice);
            }

            // Display the game progression
            winsTotal.textContent = "Wins: " + wins;
            lossesTotal.textContent = "Losses: " + losses;
            guessesLeft.textContent = "Guesses Left: " + guesses;
            letterChoices.textContent = "Your Choices So Far: " + choices;


        }