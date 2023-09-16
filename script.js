"use strict";

// make initial score zero and make dice disappear;
const player_1_ScoreEL = document.querySelector("#score--0");
const player_2_ScoreEL = document.querySelector("#score--1");
// player_2_ScoreEL.textContent = 0;
// player_1_ScoreEL.textContent = 0;

// making dice hidden initially;
const diceEL = document.querySelector(".dice");
//diceEL.classList.add("hidden");

// selecting currentScore element
const currentScoreEL1 = document.querySelector("#current--0");
const currentScoreEL2 = document.querySelector("#current--1");

// selecting all the buttons;
const btn_New = document.querySelector(".btn--new");
const btn_Roll = document.querySelector(".btn--roll");
const btn_Hold = document.querySelector(".btn--hold");

// selecting player classes
const player0EL = document.querySelector(".player--0");
const player1EL = document.querySelector(".player--1");

// creating a score array to hold total score to both player, and by their index we get to know who is active player rn;
const score = [0, 0];
let activePlayer = 0;
// since activePlayer 0 means 1st plater is playing and 1 means 2nd is playing .. acc to array indices;
//creating variable to store playing state of game;
let playing = true;
// global variable to store currentScore
let currentScore = 0;


// init()=> should be called in 2 situatins;
// 1; when the page is loded;
// 2: when we restart the game;

const init=function(){

    score[0] = 0;
    score[1] = 0;
    currentScore = 0;
    activePlayer=0;
    playing = true;

    player_2_ScoreEL.textContent = 0;
    player_1_ScoreEL.textContent = 0;
    currentScoreEL1.textContent = 0;
    currentScoreEL2.textContent = 0;
    
  
    // remove classes from win player;
    // document
    //   .querySelector(`.player--${activePlayer}`)
    //   .classList.remove("player--winner");
    // document
    //   .querySelector(`.player--${activePlayer}`)
    //   .classList.remove("player--active");
    // // add active class to player 0;
    // document.querySelector(".player--0").classList.add("player--active");
    // // make roll and hold button active again; for this make playing =true;
    // playing = true;
    // // make activePlayer back to 0;
    // activePlayer = 0;

    // whithout knowing the active player;
    // remove "player--winner" class from 2nd if he is;
    // remove "player--active" form 2nd if he is;
    // add "player--active" class to 1st player;
    document.querySelector('.player--1').classList.remove('player--winner');
    document.querySelector('.player--0').classList.remove('player--winner');
    document.querySelector('.player--1').classList.remove('player--active');
    document.querySelector('.player--0').classList.add('player--active');

    diceEL.classList.add("hidden");

};

// switch function;
const switchFunction=function(){

    // but before the switch make currentScore back to zero;
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
    // activePlayer===1?activePlayer=0:activePlayer=1;
    // or
    activePlayer = activePlayer === 0 ? 1 : 0;
    //console.log(activePlayer);

    // visual change; put white background to active player;
    // dynamically change the class 'player--active' to current player;

    // adding and removing classes by toggle method;
    //document.querySelector(`.player--${activePlayer}`).classList.toggle('player--active');
    player0EL.classList.toggle("player--active");
    player1EL.classList.toggle("player--active");

};
// initilize all the values;
init();

// ROLL DICE: 1: dice se hidden class ko remove kr
// 2: ek random no generate krna hai 1-6 and us no ke according dice lana hai;
// 3: 1 point sence nhi banata ab
// 4:

btn_Roll.addEventListener("click", function () {
  if (playing) {
    const randNO = Math.trunc(Math.random() * 6) + 1;
    // ab randNo ka use kar ke dice img ka name bana(src name);
    const diceImgName = `dice-${randNO}.png`;
    //console.log(diceEL.src);
    diceEL.src = diceImgName;
    diceEL.classList.remove("hidden");

    // if randNO==1 makecurrentScore=0;and switch the user;
    if (randNO === 1) {
      // switching the players;
      switchFunction();
      
    } else {
      // now change increase the current score acc to randNO;
      currentScore += randNO;
      //console.log(currentScore1);
      // change later coz this will for 2nd player too;
      // currentScoreEL1.textContent=currentScore;
      // so i will select player dynamically ... change only for active player;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    }
  }
});

// Hold buttons
// 1: add currentScore to totalScore of currentPlayer;
// 2: make currentScore==0;
// 3: switch player

btn_Hold.addEventListener("click", function () {
  if (playing) {
    // dynamically store the totalscore of activePlayer;
    score[activePlayer] += currentScore;
    //console.log(score[`${activePlayer}`]);
    // change the totalscore of active player;

    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];

    // if totalScore>=100 .. active player wins;
    // finish the game;
    if (score[activePlayer] >= 100) {
      playing = false;
      // add .player--winner class to activePlayer;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      // now remove .winner class form the activePlayer;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");

      // we need to hide the dice image too;
      diceEL.classList.add("hidden");
    } else {
      // switch the players=>make current score ==0;
      switchFunction();
    //   currentScore = 0;
    //   document.getElementById(`current--${activePlayer}`).textContent =
    //     currentScore;
    //   activePlayer === 1 ? (activePlayer = 0) : (activePlayer = 1);
    //   player0EL.classList.toggle("player--active");
    //   player1EL.classList.toggle("player--active");
    }
  }
});

// resetting the game;
btn_New.addEventListener("click", function () {
  // location.reload();
  // OR

  // initilize all variables back to its origional value;
  // set all scores =0;
  // make player1 as active player;

//   player_2_ScoreEL.textContent = 0;
//   player_1_ScoreEL.textContent = 0;
//   currentScoreEL1.textContent = 0;
//   currentScoreEL2.textContent = 0;
//   score[0] = 0;
//   score[1] = 0;
//   currentScore = 0;
//   //activePlayer=0;

//   // remove classes from win player;
//   document
//     .querySelector(`.player--${activePlayer}`)
//     .classList.remove("player--winner");
//   document
//     .querySelector(`.player--${activePlayer}`)
//     .classList.remove("player--active");
//   // add active class to player 0;
//   document.querySelector(".player--0").classList.add("player--active");
//   // make roll and hold button active again; for this make playing =true;
//   playing = true;
//   // make activePlayer back to 0;
//   activePlayer = 0;
     init();
});


// js for rulebook;

const rulebtn=document.querySelector('.btn--rule');
const model=document.querySelector('.modal');
const close_model=document.querySelector('.close-modal');
const overlay=document.querySelector('.overlay');

const closeRuleBook=function(){
  model.classList.add('hidden');
  overlay.classList.add('hidden');

};

// adding eventlistener to rulebtn;
rulebtn.addEventListener('click',function(){
  // hidden class of model and overlay should removed;
  model.classList.remove('hidden');
  overlay.classList.remove('hidden');
})

// now adding eventlisten to close-modal button
close_model.addEventListener('click',function(){
  closeRuleBook();
})

// adding eventlistener to overlay ;
overlay.addEventListener('click',function(){
  closeRuleBook();

})
