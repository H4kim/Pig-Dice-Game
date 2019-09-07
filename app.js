var activePlayer ,  currentScore , score , gamePlaying
gamePlaying= true;
currentScore = 0;
score = [0,0];
activePlayer = 0;

var diceDOM = document.querySelector('.dice');
diceDOM.style.display= "none";

// function Roll the dice



document.querySelector('.btn-roll').addEventListener("click", function (){
  if (gamePlaying) {
    var activePlayerDOM = document.getElementById('current-'+activePlayer);

    // display the dice :
    diceDOM.style.display= "block";
    //set the random number of dice
    var dice = Math.floor(Math.random()*6+1);

    //update the dice img
     diceDOM.src ="imgs/dice-"+dice+".png";
     //update current result
     if (dice !== 1) {

      currentScore += dice;
      activePlayerDOM.textContent= currentScore;
    } else{
        currentScore = 0;
        activePlayerDOM.textContent= currentScore;
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0 ;
        currentScore = 0;
        activePlayerDOM.textContent= currentScore;

        document.querySelector('.player-0-panel').classList.toggle("active");
        document.querySelector('.player-1-panel').classList.toggle("active");
          }
  }
  }
    );


//functon HOLD Button
document.querySelector('.btn-hold').addEventListener("click",function() {
    if (gamePlaying) {
      score[activePlayer] += currentScore ;
      document.querySelector('#score-'+activePlayer).textContent = score[activePlayer];
      currentScore = 0;
      document.getElementById('current-'+activePlayer).textContent = 0;
      if (score[activePlayer] >= 20 ) {
      document.querySelector('#name-'+activePlayer).innerHTML = "WINEEEEER";
      gamePlaying = false;


    }else {
      activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
      document.querySelector('.player-0-panel').classList.toggle("active");
      document.querySelector('.player-1-panel').classList.toggle("active");
    }
    }
});


//new game function
document.querySelector('.btn-new').addEventListener("click",function() {
  gamePlaying = true;

  score[0] = 0;
  score[1] = 0;
  currentScore = 0;
  document.querySelector('#current-0').textContent = 0;
  document.querySelector('#current-1').textContent = 0;
  document.querySelector('#score-0').textContent = 0;
  document.querySelector('#score-1').textContent = 0;
  activePlayer = 0;
  document.querySelector("#name-0").innerHTML = "Player 1";
  document.querySelector("#name-1").innerHTML = "Player 2";



});
