// Create an array with the alphabet A-Z
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// These are the Variables in which we store are wins, loses, guesses, and letterPicks
var wins = 0;
var losses = 0;
var guesses = 9;
var letterPick = [];
var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
var userGuess = null
console.log("wins: " + wins + " lossses: " + losses + "guesses: "+ guesses + "letterPick"+ letterPick +"computer Choice" + computerChoice);

document.onkeyup = function(event){


            var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

            if (letterPick.indexOf(userGuess) < 0 && alphabet.indexOf(userGuess) >= 0) {
                guesses[guesses.length]= userGuess;
                guesses--
            }
        
            if (computerChoice ==   userGuess){
                wins++;
                console.log("Winner Winner Chicken Dinner");
                guesses = 9;
                letterPick = []
                computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)]
                console.log("wins: " + wins + " lossses: " + losses + "guesses: "+ guesses + "letterPick"+ letterPick +"computer Choice" + computerChoice);
            }

            if(guesses ==0){
                losses++;
                console.log("no soup for you aka you lost")
                guesses = 9;
                letterPick = [];
                computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)]
                console.log("wins: " + wins + " lossses: " + losses + "guesses: "+ guesses + "letterPick"+ letterPick +"computer Choice" + computerChoice);
            }


        var html = "<h1>The Psychic Game</h1>" + "<h2>Guess what letter I'm thinking of</h2>" +  "<p><h4>Wins:" + wins + "</h4></p> "+  "<p><h4>Losses:" + losses + "</h4></p>" + "<p><h4>Guesses:" + guesses + "</h4></p>" + "<p><h4>letterPick: " + letterPick +  "<p><h4>";

        document.querySelector("#game").innerHTML = html
        }
    