let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random()* 10);
  }

 
  
const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
    // creating two variables to store the result after comparing the guesses with the target number.
     humanGuessCompare = 0;
     computerGuessCompare = 0
    // These blocks of code are for comparing the numbers.
    if (humanGuess >= target){
      humanGuessCompare = humanGuess - target;
    } else { humanGuessCompare = target - humanGuess; }
    if (computerGuess >= target){
      computerGuessCompare = computerGuess - target;
    } else { computerGuessCompare = target - computerGuess; }
  
  if ( humanGuessCompare <= computerGuessCompare){
    return true;
  }else {return false;}
  
  }
  
  const updateScore = score => {
    if (score === 'human'){humanScore += 1;}
    else if (score === 'computer'){computerScore += 1;}
  }
  
  const advanceRound = () => {
    currentRoundNumber += 1;
  }