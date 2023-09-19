var root = document.getElementById("root");
var startP = document.getElementById("startP");
var startbtn = document.getElementById("startbtn");
var questions = document.getElementById("question");
var answers = document.getElementById("answers");
var time = document.getElementById("time");
var highScores = document.getElementById("highScores")
var scoreBoard = document.createElement("ul");
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");
var popup = document.createElement("h2");
var player = document.createElement("input");
var submit = document.createElement("button");
var reset = document.createElement("button");
var home = document.createElement("button");
var playerScores = [];

reset.textContent = "Reset scores";
home.textContent = "Return to start"
li1.value = 1;
li2.value = 2;
li3.value = 3;
li4.value = 4;
var Qcount = 0;
var ansValue = 0;
var score = 0;
var gameOverVal = 0

var timeLeft = 120;
function countdown() {  
    var timeInterval = setInterval(function () {
        timeLeft--
        time.textContent = "time left:  " + timeLeft;
        if(timeLeft<=0 || gameOverVal == 1){
          time.textContent = " "
          clearInterval(timeInterval)
          gameOver();
      }
      }, 1000);
  }

function question(x){
    if(x==0){
        questions.textContent = "question1";
        li1.textContent = "answer1";
        li2.textContent = "answer2";
        li3.textContent = "answer3*";
        li4.textContent = "answer4";
        ansValue = 3;
        console.log("q1");
    }
    else if(x==1){
        questions.textContent = "question2";
        li1.textContent = "answer1*";
        li2.textContent = "answer2";
        li3.textContent = "answer3";
        li4.textContent = "answer4";
        ansValue = 1;
        console.log("q2");
    }
    else if(x==2){
        questions.textContent = "question3";
        li1.textContent = "answer1";
        li2.textContent = "answer2";
        li3.textContent = "answer3";
        li4.textContent = "answer4*";
        ansValue = 4;
        console.log("q3");
    }
    else if(x==3){
        questions.textContent = "question4";
        li1.textContent = "answer1";
        li2.textContent = "answer2*";
        li3.textContent = "answer3";
        li4.textContent = "answer4";
        ansValue = 2;
        console.log("q4");
    }
    else if(x==4){
        questions.textContent = "question5";
        li1.textContent = "answer1";
        li2.textContent = "answer2";
        li3.textContent = "answer3";
        li4.textContent = "answer4*";
        ansValue = 4;
        console.log("q5");
    }
    else if(x==5){
        questions.textContent = "question6";
        li1.textContent = "answer1*";
        li2.textContent = "answer2";
        li3.textContent = "answer3";
        li4.textContent = "answer4";
        ansValue = 1;
        console.log("q6");
    }
    else if(x==6){
        questions.textContent = "question7";
        li1.textContent = "answer1";
        li2.textContent = "answer2*";
        li3.textContent = "answer3";
        li4.textContent = "answer4";
        ansValue = 2;
        console.log("q7");
    }
    else if(x==7){
        questions.textContent = "question8";
        li1.textContent = "answer1";
        li2.textContent = "answer2";
        li3.textContent = "answer3";
        li4.textContent = "answer4*";
        ansValue = 4;
        console.log("q8");
    }
    else if(x==8){
        questions.textContent = "question9";
        li1.textContent = "answer1*";
        li2.textContent = "answer2";
        li3.textContent = "answer3";
        li4.textContent = "answer4";
        ansValue = 1;
        console.log("q9");
    }
    else if(x==9){
        questions.textContent = "question10";
        li1.textContent = "answer1";
        li2.textContent = "answer2";
        li3.textContent = "answer3*";
        li4.textContent = "answer4";
        ansValue = 3;
        console.log("q10");
    }
}

var check = "";
function verify(){
    var x = Math.floor(Math.random() * 10);
    if(Qcount == 10){
        console.log("all questions presented")
        Qcount++
        return;
    };
    for(var i = 0; i < check.length; i++){
        if(x == Number(check[i])){
            x = Math.floor(Math.random() * 9);
            console.log("x"+x+"i"+i);
            i = -1;
        }
    };
    question(x);
    check += x.toString();
    Qcount++;
}

function checkAnswer(correct){
   root.appendChild(popup);
    if(ansValue == correct){
        popup.textContent = "Correct!";
        score += 10;
    }else{
        popup.textContent = "Wrong!";
        timeLeft -= 10;
    }
    function popupTimer(){  
        var popupTime = 1
        var timeInterval = setInterval(function () {
            popupTime--
            if(popupTime<=0){
                clearInterval(timeInterval)
                popup.remove()
          }
          }, 1000);
    
    }
    popupTimer();
    console.log("score" + score);
};




function scorePage(event){
    event.preventDefault();
    scoreBoard.innerHTML = "";
    var storedScore = [];
    playerScores = [];
    var storedScore = JSON.parse(localStorage.getItem("playerScore"));
    if(storedScore != "" && storedScore != null){
    playerScores = storedScore;
    };
    if(player.value != "" && player.value != null && player.value != "enter initials"){
        playerValue = player.value.trim()+" : "+score;
        playerScores.push(playerValue);
    };
    if(playerScores != "" && playerScores != null){
        localStorage.setItem("playerScore", JSON.stringify(playerScores));
    };
    question.textContent = "High Scores"
    player.value = "";
    player.remove();
    startP.remove();
    answers.remove();
    submit.remove();
    root.appendChild(scoreBoard);
    root.appendChild(reset);
    root.appendChild(home);
    renderScore();
}

function renderScore() {  
    for (var i = 0; i < playerScores.length; i++) {
      var ps = playerScores[i];
      var li = document.createElement("li");
      li.textContent = ps;
      li.setAttribute("data-index", i);
      scoreBoard.appendChild(li);
    }
  }

function gameOver(){
    li1.remove();
    li2.remove();
    li3.remove();
    li4.remove();
    startP.textContent = "your final score is: "+score;
    root.append(startP);
    player.value = "enter initials";
    root.append(player);
    submit.textContent = "submit";
    root.append(submit);
};

function startquiz(event){
    event.preventDefault();
    startbtn.remove();
    startP.remove();
    scoreBoard.remove();
    reset.remove();
    home.remove();
    countdown();
    root.appendChild(answers);
    answers.appendChild(li1);
    answers.appendChild(li2);
    answers.appendChild(li3);
    answers.appendChild(li4);
    verify();
};

function nextquestion(event){
    event.preventDefault();
    correct = event.target.value;
    checkAnswer(correct);
    console.log(Qcount);
    verify();
    if(Qcount==11){gameOverVal=1;}
}

function localReset(event){
    event.preventDefault();
    localStorage.clear();
    scoreBoard.innerHTML = "";
}

function homePage(){
    location.reload();
}

startbtn.addEventListener("click", startquiz);
answers.addEventListener("click", nextquestion);
submit.addEventListener("click", scorePage);
player.addEventListener("submit", scorePage);
highScores.addEventListener("click", scorePage);
reset.addEventListener("click", localReset);
home.addEventListener("click", homePage);