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

var i = 0
var score = 0
var newInterval

var buttonA = document.getElementById("a-btn");
var buttonB = document.getElementById("b-btn");
var buttonC = document.getElementById("c-btn");
var buttonD = document.getElementById("d-btn");


var quizQuestions = [
    question1 = {
        question: "Question 2: Who is you TA?",
        answers: ["Sebastian", "Gabe", "David", "John"]
    },
    question2 = {
        question: "Question 3: Which of the following is NOT a primitive data type?",
        answers: ["box", "string", "integer", "boolean"]
    },
    question3 = {
        question: "Question 4: Which of the following is NOT a coding language?",
        answers: ["GitHub", "Javascript", "C++", "Python"]
    },
    question4 = {
        question: "Question 5: Do you like to code?",
        answers: ["Yes", "No", "Maybe", "Never"]
    },
];

// console.log(quizQuestions);
// console.log(quizQuestions.question1);

// var questionId = document.getElementById("question-box");
// questionId.textContent = quizQuestions.question



// for (i = 0; i < quizQuestions.length; i++) {
// document.getElementById("question-box").textContent = quizQuestions[i].question;


// console.log(quizQuestions[i]);

// setInterval(function() {
//     document.getElementById("a-btn").textContent = quizQuestions[i].answers[0];
//     document.getElementById("b-btn").textContent = quizQuestions[i].answers[1];
//     document.getElementById("c-btn").textContent = quizQuestions[i].answers[2];
//     document.getElementById("d-btn").textContent = quizQuestions[i].answers[3];
// }, 5000);
// }



// document.getElementById("question-box").textContent = quizQuestions[i].question;

// newInterval = setInterval(function() {
//     document.getElementById("a-btn").textContent = quizQuestions[i].answers[0];
//     document.getElementById("b-btn").textContent = quizQuestions[i].answers[1];
//     document.getElementById("c-btn").textContent = quizQuestions[i].answers[2];
//     document.getElementById("d-btn").textContent = quizQuestions[i].answers[3];
// }, 5000);

// clearInterval(newInterval);

// console.log(newInterval);




function answerClicked() {
    document.getElementById("question-box").textContent = quizQuestions[i].question;
    buttonA.textContent = quizQuestions[i].answers[0];
    buttonB.textContent = quizQuestions[i].answers[1];
    buttonC.textContent = quizQuestions[i].answers[2];
    buttonD.textContent = quizQuestions[i].answers[3];

    i++;
    // console.log(i);
    console.log("button clicked");
}

if (buttonA.addEventListener("click",answerClicked)){
    score++;
} else if (buttonB.addEventListener("click",answerClicked)) {
    timer-= 10;
    buttonD.addEventListener("click",answerClicked)
} else if (buttonC.addEventListener("click",answerClicked)) {
    timer-= 10;
} else if (buttonD.addEventListener("click",answerClicked)) {
    timer-= 10;
}




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

    if (timer <= 0) {
        clearInterval(interval);
    }
    
    // countdownEl.textContent--;
    // console.log(countdownEl);

    // if (countdownEl <= 70) {
    //     clearInterval();
    // }
    // return;
}

