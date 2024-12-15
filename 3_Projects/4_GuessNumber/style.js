let randomNumber=parseInt(Math.random()*100+1);
const submit=document.querySelector('#subt')
const userInput=document.querySelector('#guessField')
const guessSlot=document.querySelector('.guesses')
const remaining=document.querySelector('.lastResult')
const lowOrHigh=document.querySelector('.lowOrHi')
const startOver=document.querySelector('.resultParas');

const p=document.createElement('p');

let preGuess=[];
let numGuess=1;

let playGame=true;

if(playGame){
submit.addEventListener('click',function(e){
  e.preventDefault();
  const guess=parseInt(userInput.value);
  validGuess(guess);
});
}
function validGuess(guess){
  if(isNaN(guess)){
   alert('Please Enter a valid Number');
  }else if(guess<1){
    alert('Enter Number > 1');
  }else if(guess>100){
    alert('Enter Number < 100');
  }else{
    preGuess.push(guess);
    if(numGuess===11){
      displayGuess(guess);
      displayMessage(`Game Over Random No was ${randomNumber}`);
      endGame();
    }else{
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess){
if(guess===randomNumber){
  displayGuess(`You Guessed it Correct`);
}else if(guess<randomNumber){
  displayGuess(`You Guessed too Small`);
}else if(guess>randomNumber){
  displayGuess(`You Guessed too Large`);
}
}

function displayGuess(guess){
userInput.value='';
guessSlot.innerHTML+=`${guess}, `;
numGuess++;
remaining.innerHTML=`${11-numGuess}`;
}

function displayMessage(message){
lowOrHigh.innerHTML=`<h2> {message} 
 </h2>`
}

function endGame(){
userInput.value='';
userInput.setAttribute('disabled','');
p.classList.add('button');
p.innerHTML=`<h2 id="newGame">Start new Game </h2>`;

startOver.appendChild(p);
playGame=false;
newGame();
}

function newGame(){
const newGameButton = document.querySelector('#newGame');
newGameButton.addEventListener('click',function(e){
  randomNumber=parseInt(Math.random()*100+1);
  preGuess=[];
  numGuess=1;
  guessSlot.innerHTML='';
  remaining.innerHTML=`${11-numGuess}`;
  userInput.removeAttribute('disabled');
  startOver.removeChild(p);

  playGame=true;
});
}