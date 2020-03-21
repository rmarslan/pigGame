var DOM = {
  diceRollBtn: "roll-dice",
  diceImage: "dice",
  holdBtn : 'btn-hold'
},
player = 0,
currentScore = 0,
score = [0,0],
isGameOver = false;

appInit();
// Dice roll controller
document.getElementById(DOM.diceRollBtn).addEventListener('click', function(){
  if(!isGameOver){
      //Generate a randome number
      document.querySelector('.dice').style.display = 'block';
      var val = randNum();
      //Cahnge The Dice Image
      changeDiceSrc(val);
      //add the value to currentScore
     if(val === 1){
    switchUser();
    } else{
      currentScore += val;
       //update the current score UI
      document.querySelector('.player-' + player + '-current-score').textContent = currentScore;
    }
  }
  
});

//Hold Controller
document.querySelector('.' + DOM.holdBtn).addEventListener('click', function(){
  if(!isGameOver){
    //add the current score to the global score
    score[player] += currentScore;
    //Uopdate The UI score
    document.querySelector('.score-' + player).textContent = score[player];
    //Checck either the user wins or not
  }

  if(score[player] >= 20){
    document.querySelector('.player-' + player + '-name').innerHTML = 'Player ' + (player + 1) + ' Wins';
    document.querySelector('.player-' + player + '-board').classList.remove('active');
    isGameOver = true;
  }
  if(!isGameOver){
     //switch the user
    switchUser();
  }
});

//New game Controller
document.querySelector('.btn-new').addEventListener('click', function(){
  appInit();
});

// Functions
function randNum(){
  return Math.floor(Math.random() * 6 + 1);
}

function changeDiceSrc(imageNum){
  document.querySelector('.' + DOM.diceImage).src = "resources/img/dice-" + imageNum + ".png";
}

function switchUser(){
  currentScore = 0;
  document.querySelector('.player-' + player + '-current-score').textContent = 0;
  document.querySelector('.dice').style.display = 'none';
  if(player == 0){
    document.querySelector('.player-0-board').classList.remove('active');
    document.querySelector('.player-1-board').classList.add('active');
  } else{
    document.querySelector('.player-0-board').classList.add('active');
    document.querySelector('.player-1-board').classList.remove('active');
  }
  if(player === 0)
      player = 1;
  else
      player = 0;
}

function appInit(){
  isGameOver = false;
  player = 0;
  currentScore = 0;
  score = [0,0];
  document.querySelector('.score-0').textContent = 0;
  document.querySelector('.score-1').textContent = 0;
  document.querySelector('.player-0-current-score').textContent = 0;
  document.querySelector('.player-1-current-score').textContent = 0;
  document.querySelector('.dice').style.display = 'none';
  document.querySelector('.player-1-current-score').textContent = 0;
  document.querySelector('.player-0-board').classList.remove('active');
  document.querySelector('.player-1-board').classList.remove('active');
  document.querySelector('.player-0-board').classList.add('active');
}