// object of string and array
// var questions = {
//  question: "what is the question?"
//  answers: ["a", "b", "c", "d"]
//}

// getElementById and change textContent

// create an array of objects
// var questions = [
// { question: "question 1"
//   answers: ["a", "b", "c", "d"]
// },
// { question: "question 2"
//   answers: ["a", "b", "c", "d"]
// },
// { question: "question 3"
//   answers: ["a", "b", "c", "d"]
// },
// { question: "question 4"
//   answers: ["a", "b", "c", "d"]
// }
// ]



// function questions() {
//     var question = document.getElementById("question goes here");

//     question.textContent = access object question
// }
// questions();



// reference var questions array at the top
// for (i = 0; i < questions.length; i++) {
    // if true statements for correct answers
    // if(questions[i] = true or correct answer) {

    // }
    // console.log(questions[i])

    // questions[i].question();
    // questions[i].answer();
// }




// var score = 0; score++ if correct


// when clicked timer--
// if wrong -5sec


// start button clicked
var startButton = document.getElementById("start-btn");
startButton.addEventListener("click", startGame)

// start countdown
var countdownEl = document.getElementById("timer");
// timer.textContent = parseInt(75);
countdownEl.textContent = parseInt(75);
// var countdownElString = JSON.stringify(countdownEl);
//console.log(typeof timer);

// var timer = 75

function startGame() {
    console.log("start clicked");

    // starts timeRemaining function
    setInterval(timeRemaining, 1000);
}

function timeRemaining() {
    // timer--;
    // console.log(timer);
    
    countdownEl.textContent--;
    console.log(countdownEl);

    // return;
}

