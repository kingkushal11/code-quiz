var startbtn = document.querySelector("#startbtn");
var timer = document.querySelector("#time");
var submitbtn = document.querySelector("#submit");
var initials = document.querySelector("#initials") ;
var initial = document.querySelector(".initial")

var time = 60;
var num = 0;
var score = 0;
var timer;
var questionlist = [
    {
        question: "Commonly used data types DO NOT include:",
        answer1: "1.strings", answer2:"2.booleans", answer3:"3.alerts", answer4:"4.numbers",
        correct:"alerts"
    },
    {
        question: "The condition in an if / else statement is enclosed within____.",
        answer1: "1.quotes", answer2:"2.curly brackets", answer3:"3.parentheses", answer4:"4.square brackets",
        correct:"parentheses"
    },
    {
        question: "Arrays in JavaScript can be used to store____.",
        answer1: "1.numbers and strings", answer2:"2.other arrays", answer3:"3.booleans", answer4:"4.all of the above",
        correct:"all of the above"
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        answer1: "1.commas", answer2:"2.curly brackets", answer3:"3.quotes", answer4:"4.parentheses",
        correct:"quotes"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answer1: "1.JavaScript", answer2:"2.terminal/bash", answer3:"3.for loops", answer4:"4.console log",
        correct:"console log"
    },
    
]

var startquiz = function(){
  initial.style.display = "none";
  starttime();  
  questions();

}


 var starttime = function(){
   setInterval(() => {
    //    time-- 
       time = time-1
       timer.textContent = time;
   }, 1000);
 }

 var questions = function(){
     var question = document.querySelector("#question");
     var answer1 = document.querySelector("#answer1");
     var answer2 = document.querySelector("#answer2");
     var answer3 = document.querySelector("#answer3");
     var answer4 = document.querySelector("#answer4");
     var current = questionlist[num];
     question.textContent = current.question;
     answer1.textContent = current.answer1;
     answer2.textContent = current.answer2;
     answer3.textContent = current.answer3;
     answer4.textContent = current.answer4;
     answer1.onclick = checkanswer;
     answer2.onclick = checkanswer;
     answer3.onclick = checkanswer;
     answer4.onclick = checkanswer;
 }

var checkanswer = function(event){
    var choice = event.target.textContent;
    console.log(choice)
    var current = questionlist[num];
    var correct = current.correct;
    if (current === correct){
        console.log("correct")     
    }
    else {
        time -= 10
    }
    num ++
    questions();
}
// startbtn.addEventListener("click"){

// }

startbtn.onclick=startquiz;