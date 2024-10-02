let score = JSON.parse(localStorage.getItem
  ('score')) ||{
    wins: 0,
    losses: 0,
    ties: 0,
    };

     updateScoreElement();
 /* 
  if (score === null) {
     score = {
      wins: 0,
      losses: 0,
      ties: 0,
     };
  } */

   
  let isAutoPlaying = false;
  let intervalId;


    //const autoPlay = () => {

    //};
   function autoPlay() {
    if (!isAutoPlaying) {
      intervalId = setInterval(() => {
        const playerMove = pickComputerMove();
         playGame(playerMove);
      }, 1000);
      isAutoPlaying = true;
    } else {
      clearInterval(intervalId);
      isAutoPlaying = false;
    }
    
   }

   document.querySelector('.js-cat-button')
   .addEventListener('click', () => {
    playGame('cat');
   });

   document.querySelector('.js-dog-button')
   .addEventListener('click', () => {
    playGame('dog');
   });

   document.querySelector('.js-sheep-button')
   .addEventListener('click', () => {
    playGame('sheep');
   });

   document.body.addEventListener('keydown', (event) => {
    if (event.key === 'c') {
      playGame('cat');
    } else if (event.key === 'd') {
      playGame('dog');
    } else if (event.key === 's') {
      playGame('sheep');
    }
   });

  function playGame(playerMove) {
    const computerMove = pickComputerMove();
    let result = '';

     if (playerMove === 'sheep') {
      if (computerMove === 'cat') {
          result = 'you lose';
        } else if (computerMove === 'dog') {
          result = 'you win';
        } else if (computerMove === 'sheep') {
          result = 'tie';
        }


     } else if (playerMove === 'dog') {
      
    if (computerMove === 'cat') {
      result = 'you win';
    } else if (computerMove === 'dog') {
      result = 'tie';
    } else if (computerMove === 'sheep') {
      result = 'you lose';
    }


     } else if (playerMove === 'cat') {
      if (computerMove === 'cat') {
        result = 'tie';
      } else if (computerMove === 'dog') {
        result = 'you lose';
      } else if (computerMove === 'sheep') {
        result = 'you win';
      }
     }

     if (result === 'you win') {
      score.wins += 1;
     } else if (result === 'you lose') {
      score.losses += 1;
     } else if (result === 'tie') {
      score.ties += 1;
     }

     localStorage.setItem('score', JSON.stringify(score));

     updateScoreElement();
     document.querySelector('.js-result').
     innerHTML = result;

     document.querySelector('.js-move').
     innerHTML = ` You
  <img src="images/${playerMove}-emoji.png" class="move-icon">
  <img src="images/${computerMove}-emoji.png" class="move-icon">
  Computer`;
      
  
  }

  function updateScoreElement() {
    document.querySelector('.js-score')
    .innerHTML = ` Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
  }

function pickComputerMove() {

const randomNumber = Math.random();
  let computerMove = '';

  if (randomNumber >= 0 && randomNumber <= 1/3) {
     computerMove = 'cat';
  } else if (randomNumber >= 1/3 && randomNumber <= 2/3) {
     computerMove = 'dog';
  } else if (randomNumber >= 2/3 && randomNumber <= 1) {
     computerMove = 'sheep';
}

return computerMove;

}