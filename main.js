//Declare variables for questions and quiz container
const questionOne = document.querySelector('#question-1');
const questionTwo = document.querySelector('#question-2');
const questionThree = document.querySelector('#question-3');
const questionFour = document.querySelector('#question-4');
const questionFive = document.querySelector('#question-5');
const quizContainer = document.querySelector('#quiz-container');

//Declare variables for questions remaining and total score at the start of the quiz
let questionsRemaining = 5;
let totalScore = 0;

//Event Listener on the quiz container for click, runs check answer function
quizContainer.addEventListener('click',checkAnswer);



function checkAnswer(e){
  //get user answer,get the value of the user answer,get the correct answer in the parent container
  let userButton = e.target;
  let userAnswer = e.target.getAttribute('value');
  let correctAnswer = e.target.parentNode.querySelector('.correct-button');

  //if the users answer is correct,add one to the total score
  if (userAnswer == 'correct'){
    totalScore += 1;
  }
 
  //if the user clicks a button, subtract one from questions remaining
  if(userButton.classList.contains('incorrect-button') ||(userButton.classList.contains('correct-button'))){
    questionsRemaining -=1;
    
    //declare variables for correct and incorrect buttons
    let incorrectButtons = e.target.parentNode.getElementsByClassName('incorrect-button');
    let correctButtons = e.target.parentNode.getElementsByClassName('correct-button');
    
    //loop through all incorrect buttons in the container and disable each button
    for(i = 0; i < incorrectButtons.length; i++){
      incorrectButtons[i].disabled = true;
    }
    //loop through all correct buttons in the container and disable each button
    for(i = 0; i < correctButtons.length; i++){
      correctButtons[i].disabled = true;
    }

     //call function for displaying correct/incorrect icons
     displayAnswerIcons(userButton,userAnswer,correctAnswer);

     //call function for calculating score and displaying when questions remaining = 0
     questionTracker(questionsRemaining,totalScore);
    
  }
  e.preventDefault();
}

function displayAnswerIcons(userButton,userAnswer,correctAnswer){
  //create element for the icon and attach the class to the element for incorrect icons
  let incorrectIcon = document.createElement('i');
  incorrectIcon.className = 'fas fa-times';

  //create element,attach class for correct icons
  let correctIcon = document.createElement('i');
  correctIcon.className = 'fas fa-check';
  
  //if the users answer is incorrect, display incorrect icon as well as the icon for the correct answer
  if(userAnswer == 'incorrect'){
    userButton.appendChild(incorrectIcon);
    correctAnswer.appendChild(correctIcon);
  }else{
    correctAnswer.appendChild(correctIcon); 
  }
  correctAnswer.classList.add('.answers');
}

function questionTracker(questionsRemaining,totalScore){
  //declare variable for the questions remaining output and assign the number to the output
  let questionsRemainingOutput = document.querySelector('.questions-remaining-output');
  questionsRemainingOutput.textContent = questionsRemaining;
  
  //declare variable for the total score output
  let totalScoreOutput = document.querySelector('.total-score-output');
  //when the questions remaining equal 0, display the total score
  if(questionsRemaining == 0){
    totalScoreOutput.textContent = `${totalScore} / 5`;
    console.log(totalScoreOutput); 
  }
}



