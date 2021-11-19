var startbtn = document.querySelector("#startbtn")
var timer = document.querySelector("#time")
var time = 60

var startquiz = function(){
  starttime();  

}
 var starttime = function(){
   setInterval(() => {
    //    time-- 
       time = time-1
       timer.textContent = time;
   }, 1000);
 }

 var questions = function(){
     
 }



startbtn.onclick=startquiz