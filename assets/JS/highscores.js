function showHighscores() {
    hsList.innerHTML = '';

    var highscores = [];
    if (typeof localStorage.highscores !== "undefined") {
        highscores = JSON.parse(localStorage.highscores);
    }
    highscores.sort(function (a, b) {
        return b.score - a.score;
    });

    for (var hScore of highscores) {
        var li = document.createElement('li');
        li.textContent = hScore.name + ' - ' + hScore.value;
        hsList.appendChild(li);
    }
}

var hsList = document.querySelector("#hsList");
var backbtn = document.querySelector("#backbtn");
var clearbtn = document.querySelector("#clearbtn");


window.addEventListener('DOMContentLoaded', () => {
    showHighscores();
});

clearbtn.addEventListener('click', function () {
    localStorage.removeItem("highscores");
    location.reload();
});

backbtn.addEventListener('click', function () {
    location.href = 'index.html'
});