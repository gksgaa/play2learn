//select menus form validation -- below

function addError(field) {
    if (field.previousElementSibling &&
      field.previousElementSibling.className === 'error') {
      // error message already showing
      return;
    }
    const error = document.createElement('div');
    error.innerHTML = field.dataset.errorMsg;
    error.className = 'error';
    field.parentNode.insertBefore(error, field);
  }
  
  function removeError(field) {
    if (field.previousElementSibling &&
      field.previousElementSibling.className === 'error') {
      field.previousElementSibling.remove();
    }
  }
  
  function checkSelect(field) {
    if ( field.selectedIndex === 0 ) {
      field.setCustomValidity('Invalid');
      addError(field);
    } else {
      field.setCustomValidity('');
      removeError(field);
    }
  }
  
  // random numbers generator
  //function definition
  function generateNum(min, max) {
    const number1 = Math.random();
    const generateNum = Math.floor(number1 * (max - min + 1) + min);
    return generateNum;
  }
  
  
  
  
  
  window.addEventListener('load', function(e) {
    const form  = document.getElementById('my-form');
    const menuPad = form.menuPad;
    menuPad.dataset.errorMsg = 'Please choose a game.';
    const playButton = document.getElementById('play-button');
    const backButton = document.getElementById('back-button');
    const headerOff=document.getElementById('header-on');
  
    const tpContainer = document.getElementById('tp-container');
    const gameContainer = document.getElementById('game-container');
    const answer = document.getElementById('answer');
    answer.dataset.errorMsg = "Only real numbers allowed"; //error msg
    const divFormat = document.getElementById('div-format');
    const footer = document.getElementById('footer');
    
    const question = document.getElementById('question');
    const demo = document.getElementsByClassName('demo');
    const btn=document.getElementsByClassName('btn');
    const clear=document.getElementsByClassName('clear');
   
    menuPad.addEventListener('change', function(e) {
      checkSelect(menuPad);
    });
    form.addEventListener('submit', function(e) {
      e.preventDefault();
    });
    playButton.addEventListener('click', function(e) {
      checkSelect(menuPad);
      if (menuPad.checkValidity()) {
        playGame();
      } else {
        addError(menuPad)
        alert(menuPad.dataset.errorMsg)
      };
    });
    
  
  //display empty game page with no working
  
  function playGame() {
    score = 0;
    tpContainer.style.display = "none";
    gameContainer.style.display = "block";
    playButton.style.display = "none";
    backButton.style.display = "block";
    headerOff.style.display = "none";
    footer.style.display = "none";
  
    //document.getElementById("score").textContent = score; // Update the displayed score
    
    answer.focus();
    answer.value = "";
    updateTimer();
    removeError(answer);
    mathFact();
  };
  
  //to get fixed answer for division operation
  function fixedSolution() {
    const solutionSet = /\//;
    if (solutionSet.test(question.innerHTML)) {
      divFormat.style.display = "block";
      question.innerHTML = question.innerHTML + '';
      solution = solution.toFixed(1); // rounded to one decimal point answer
      console.log('fixed solution: ' + solution); //console solution display
    } else {
    };
  };
  
  
  //game operation display inside game page
  let solution;
  
  function mathFact() {
    const operator = menuPad.options[menuPad.selectedIndex].value;
    const option = menuPad.options[menuPad.selectedIndex].innerHTML;
    //const num1 = generateNum(1,20);
    const num1 = generateNum(1,20);
    const num2 = generateNum(1,20);
    //const num2 = generateNum(1,20);
    question.innerHTML = num1 + ' ' + operator + ' ' + num2;
    solution = window.eval(num1 + operator + num2);
    //console.log('solution: ' + solution);  //console solution display
    for (let game of demo) {
      game.innerHTML = option;
    };
      fixedSolution();
    return solution;
  };
  
  
  
  //timer 30sec --works well
  
 // let timer = 30;
  let timer = 3000;
  const gameTimer = document.querySelector("#game-timer > p");
  let errorTimeout;
  let errorTimer;
  
  function startInterval() {
    interval = setInterval(function(e) {
      timer--;
      gameTimer.innerHTML = timer;
      return interval;
    }, 1000);
  }
  
  function updateTimer() {
    //timer = 30;
    gameTimer.innerHTML = 3000;
    //gameTimer.innerHTML = 30;
    startInterval();
    timeout = setTimeout(function(e) {
      timer = 0;
      clearInterval(interval);
      //finalScore();
      endGame();
      return timer;
    }, 30000000000000000);
  //}, 30000);
  };
  
  let score = 0;
  const gameScore = document.querySelector("#score-container > p");
  
    //timer stops and result display
  function endGame() {
    clearInterval(timer);
    document.querySelector("#game-change").style.display = "none";
    document.querySelector("#result").style.display = "";
    //checking inserting sentence
    // Create a p element:
    const para = document.createElement("p");
    // Create a text node:
    const node = document.createTextNode("Your Final Score is :" + " "+ score);
    
    // Append text node to the p element:
    para.appendChild(node);
    // Append the p element to the body:
    document.getElementById("myP").appendChild(para);
    headerOff.style.display = "none";
  
    }
  
  
  //increase score value by 1 for correct answer
  //used in checkSolution() function
  
  function scoreCount(val) {
    if (val === true) {
      score += 1;
      gameScore.innerHTML = parseInt(score);
      mathFact();
      return score;
    };
  };
  
  //error msg disappear in 1 sec
    
  function startError() {
    errorTimer = 1;
    errorTimeout = setTimeout(() => {
      removeError(ans);
      errorTimer = 0;
    }, 1000);
  }
  //adding error
  const ans = document.getElementById('ans');
  ans.dataset.errorMsg = "Incorrect! Try again."; //error msg
  
  function checkSolution(val) {
    if (val !== String(solution)) {
      addError(ans);
      if (errorTimer === 0) {
        startError();
      } else {
        clearTimeout(errorTimeout);
        startError();
      };
    } else {
      removeError(ans);
      val = true;
      scoreCount(val);
      //startCorrect();
      answer.value = "";
    }
  };
  
  //answer checking and output
   //key pad working 
    answer.addEventListener('keyup', function(e) {
      const typeNumber = /^[\d-.]/;
      if (!typeNumber.test(answer.value)) {
        addError(answer);
        document.getElementById("answer").value = "";
      } else {
        removeError(answer);
      };
      if (e.key === 'Enter') {
        checkSolution(answer.value);
        document.getElementById("answer").value = "";
      };
    });
  //button game page working
    for (let b of btn) {
      b.addEventListener('click', function(e) {
        if (e.target === clear) {
          answer.value = "";
        } else {
          answer.value = String(answer.value + b.innerHTML);
        };
        answer.focus();
      });
    };
  
  });
  
  //clear button works and clear the typed answer and let focus stay
  function clearUserInput() {
    document.querySelector(".row1 input").value = "";
    answer.focus();
    }
  
    //play-again button and back-button reload to game selection page
    function restartGame() {
      location.reload();
      }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    
  
  
  
  
   
  
  
   
  
  
  
  
  
  
  
     
      
   
  