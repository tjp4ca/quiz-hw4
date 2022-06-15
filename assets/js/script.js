// var quizQuestions = ["question1?", "question2?", "question3?", "question4?"]
// var testQuestion = "question1?"
// var quizEl = document.getElementById("question-box");
// quizEl.textContent = ["question1?", "question2?", "question3?", "question4?"]
// var newText = ["a", "b", "c", "d", "e"]
// var newText2 = document.getElementById("question-box");
// newText2.textContent = ["a", "b", "c", "d", "e"]

// for (i = 0; i < newText2.textContent.length; i++) {
//     document.getElementById("question-box").textContent = "new question?";
//     console.log(i);
//     console.log(newText2[i]);
// }

// object of string and array
// var questions = {
//  question: "what is the question?"
//  answers: ["a", "b", "c", "d"]
//}

// getElementById and change textContent

// create an array of objects
// var quizQuestions = [
// { question: "question 1?",
//   answers: ["a1", "b1", "c1", "d1"]
// },
// { question: "question 2?",
//   answers: ["a2", "b2", "c2", "d2"]
// },
// { question: "question 3?",
//   answers: ["a3", "b3", "c3", "d3"]
// },
// { question: "question 4?",
//   answers: ["a3", "b3", "c3", "d3"]
// }
// ]

// console.log(questions);

// function questions() {

//     question.textContent = access object question
// }
// questions();

var quizQuestions = [
    question1 = {
        question: "question1?",
        answers: ["a1", "b1", "c1", "d1"]
    },
    question2 = {
        question: "question2?",
        answers: ["a2", "b2", "c2", "d2"]
    },
    question3 = {
        question: "question3?",
        answers: ["a3", "b3", "c3", "d3"]
    },
    question4 = {
        question: "question4?",
        answers: ["a4", "b4", "c4", "d4"]
    },
];

// console.log(quizQuestions);
// console.log(quizQuestions.question1);

// var questionId = document.getElementById("question-box");
// questionId.textContent = quizQuestions.question


for (i = 0; i < quizQuestions.length; i++) {
// //     // if true statements for correct answers
// //     // if(questions[i] = true or correct answer) {

// //     // }

document.getElementById("question-box").textContent = quizQuestions[i].question;

document.getElementById("a-btn").textContent = quizQuestions[i].answers[0];
document.getElementById("b-btn").textContent = quizQuestions[i].answers[1];
document.getElementById("c-btn").textContent = quizQuestions[i].answers[2];
document.getElementById("d-btn").textContent = quizQuestions[i].answers[3];

console.log(quizQuestions[i]);
setTimeout(5000);

// //     // console.log(questions[i]);
// //     // console.log(questions[i].question);
// //     // console.log(questions[i].answers);

// //     // questions[i].question();
// //     // questions[i].answer();
// console.log(quizQuestions);
}

var i = 0
var score = 0
document.getElementById("question-box").textContent = quizQuestions[i].question;



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

var timer = 75
var interval;

function startGame() {
    console.log("start clicked");

    // starts timeRemaining function
    interval = setInterval(timeRemaining, 1000);
}

function timeRemaining() {
    countdownEl.textContent = timer;
    timer--;
    console.log(timer);

    if (timer <= 70) {
        clearInterval(interval);
    }
    
    

    // countdownEl.textContent--;
    // console.log(countdownEl);

    // if (countdownEl <= 70) {
    //     clearInterval();
    // }
    // return;
}

