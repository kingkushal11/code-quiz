function checkAnswer(n) {

    if (!canAnswer) {
        return false;
    }

    canAnswer = false;

    
    if (current.correct == n + 1) {
        answers[n].classList.add('green');
        setTimeout(() => { answers[n].classList.remove('green') }, 1000);
    }
    
    else {
        time -= 10;
        answers[n].classList.add('red');
        setTimeout(() => { answers[n].classList.remove('red') }, 1000);
    }


    
    if (num < questionlist.length - 1) {
        num++
        setTimeout(displayQuestion, 1000);
    }
   
    else {
        setTimeout(() => {
            finished();
        }, 1000)
    }
}
function displayQuestion() {
    initial.style.display = "none";
    canAnswer = true;
    current = questionlist[num];
    question.textContent = current.question;
    answers.forEach(function (answer, i) {
    answer.textContent = current.answers[i];
    });
}

function finished() {
    wrapper.style.display = 'none';
    questions.style.display = 'none';
    final.innerHTML = time;
    done.style.display = 'block';
    clearInterval(starttime);
}
var startbtn = document.querySelector("#startbtn");
var wrapper = document.querySelector("#wrapper");
var timer = document.querySelector("#time");
var submitbtn = document.querySelector("#submit");
var initials = document.querySelector("#initials");
var answers = document.querySelectorAll(".answers");
var question = document.querySelector("#question");
var done = document.querySelector("#done");
var final = document.querySelector("#final");
var scores = document.querySelector("#scores");
var initial = document.querySelector(".initial")
var canAnswer = true;
var current, starttime;

var time = 60;
var num = 0;

var timer;

var highscores = [];
if (typeof localStorage.highscores !== 'undefined') {
    highscores = JSON.parse(localStorage.highscores);
}


var questionlist = [
    {
        question: "Commonly used data types DO NOT include:",
        answers: ["1.strings", "2.booleans", "3.alerts", "4.numbers"],
        correct: 3
    },
    {
        question: "The condition in an if / else statement is enclosed within____.",
        answers: ["1.quotes", "2.curly brackets", "3.parentheses", "4.square brackets"],
        correct: 3
    },
    {
        question: "Arrays in JavaScript can be used to store____.",
        answers: ["1.numbers and strings", "2.other arrays", "3.booleans", "4.all of the above"],
        correct: 4
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        answers: ["1.commas", "2.curly brackets", "3.quotes", "4.parentheses"],
        correct: 3
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: ["1.JavaScript", "2.terminal/bash", "3.for loops", "4.console log"],
        correct: 4
    },
];


startbtn.addEventListener('click', function () {
    wrapper.style.display = 'flex';
    displayQuestion();
    this.parentElement.style.display = 'none';

   
    starttime =
        setInterval(() => {
           
            time = Math.max(0, time - 1);
            timer.textContent = time;
            if (time == 0) {
                time = 0;
                finished();
            }
        }, 1000);
});



answers.forEach(function (answer, i) {
    answer.addEventListener('click', function () { checkAnswer(i) });
});

initials.addEventListener("keyup", function(e) {
        if (e.key === "Enter") {
    if (initials.value.trim().length) {
        highscores.push({ "name": initials.value, "value": time });
        localStorage.highscores = JSON.stringify(highscores);
        location.href = 'highscores.html';
    }
    else {
        alert("initials can't be empty");
    }
        }
});

submitbtn.addEventListener('click', function () {
    if (initials.value.trim().length) {
        highscores.push({ "name": initials.value, "value": time });
        localStorage.highscores = JSON.stringify(highscores);
        location.href = 'highscores.html';
    }
    else {
        alert("initials can't be empty");
    }
});