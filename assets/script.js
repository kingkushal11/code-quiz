var startbtn = document.querySelector("#startbtn");
var timer = document.querySelector("#time");
var time = 60;
var num = 0;
var questionlist = [
    {
        question: "how to log to the console?",
        answer1: "print", answer2:"console.log", answer3:"mouse", answer4:"abd",
        correct:"console.log"
    },
    {
        question: "what is iphone?",
        answer1: "p", answer2:"a", answer3:"u", answer4:"mobile",
        correct:"mobile"
    }
]

var startquiz = function(){
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
 }



startbtn.onclick=startquiz