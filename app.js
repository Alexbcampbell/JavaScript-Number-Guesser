// Game Function:
// -Player must guess a number between a min and max
// -Player gets a certain amount of guesses
// -Notify player of guesses remaining
// -Notify the player of the correct answer if they lose
// -Let player choose to play again

//Game values
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

//UI elements
const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');

//Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

//listen for guess
guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);

   //validate input
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a number between ${min} and ${max}`, 'red')
    }

    //check if won
    if(guess === winningNum){
        //Game over - won!
        //disable input
        guessInput.disabled = true;
        //change border color
        guessInput.style.borderColor = 'green';
        //set message
        setMessage(`${winningNum} is correct! You Won!`, 'green');
    } else{
        //Wrong number
        guessesLeft -= 1;
        //OR 
        //guessesLeft = guessesLeft - 1;

        if(guessesLeft === 0){
            //Game over - lost

            //disable input
            guessInput.disabled = true;
            //change border color
            guessInput.style.borderColor = 'red';
            //set message
            setMessage(`Game Over, you lost. The correct number was ${winningNum}`, 'red');
        } else {
            //Game continues - answer wrong
            //change border color
            guessInput.style.borderColor = 'red';

            //clear input
            guessInput.value = '';

            //Tell user they have wrong number
            setMessage(`${guess} is not correct. ${guessesLeft} guesses left`)
            
        }
    }
})

//set message
function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg
}