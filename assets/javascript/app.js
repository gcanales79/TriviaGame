var disneyQuestion = [{
    question: "Which country has won the most FIFA World Cups?",
    choices: ["Brazil", "Italy", "Spain", "Argentina" ],
    images:  ["assets/images/Brazil.gif"],
    validAnswer: "Brazil"
    }, {
    question:"Which is the only country to have reached three finals without winning any?",
    choices: ["England", "France", "Netherlands", "Czechoslovakia"],
    images: ["assets/images/Holland.gif"],
    validAnswer: "Netherlands"
    
    }, {
    question:"Which was the first team to win the World Cup twice?",
    choices: ["Spain", "Germany", "Brazil", "Italy"],
    images:["assets/images/Italy.gif"],
    validAnswer: "Italy"
    },{
    question:"Which country holds the record for the worst defense of the World Cup (excluding teams that didn't participate in the subsequent tournament)?",
    choices: ["Italy in 2006", "Argentina in 1990", "France in 2002", "West Germany in 1994"],
    images:["assets/images/France.gif"],
    validAnswer: "France in 2002"
    },{
    question:"Which player has scored the most number of goals at the FIFA World Cup?",
    choices: ["Pele", "Miroslav Klose", "Ronaldo", "Zinedine Zidane"],
    images:["assets/images/Klose.gif"],
    validAnswer: "Miroslav Klose"
    },{ 
    question:"Who is the youngest player to play in a World Cup final?",
    choices: ["Norman Whiteside", "Pele", "Diego Maradona", "Zinedine Zidane"],
    images:["assets/images/Pele.gif"],
    validAnswer: "Pele"
    },{
        question:"Who holds the record of scoring at least one goal in the most number of World Cup matches?",
        choices: ["Lionel Messi", "Cristiano Ronaldo", "Ronaldo", "Just Fontaine"],
        images:["assets/images/Ronaldo.gif"],
        validAnswer: "Ronaldo"
    },{
        question:"In which World Cup did players first wear jerseys with their surname on the back?",
        choices: ["1998", "1990", "1986", "1994"],
        images:["assets/images/USA1994.gif"],
        validAnswer: "1994"
    },{
        question:"Which country has lost at least three games in three separate World Cup tournaments?",
        choices: ["Netherlands", "Mexico", "Czechoslovakia", "Trinidad and Tobago"],
        images:["assets/images/Mexico.gif"],
        validAnswer: "Mexico" 
    },{
        question:"How many countries have won the football World Cup on home soil?",
        choices: ["None", "5", "6", "8"],
        images:["assets/images/France2.gif"],
        validAnswer: "6"   
    }
    ]

var questionNumber=0;
var correctAnswers=0;
var wrongAnswers=0;
var unanswered=0;
var timeToanswer=10;
var intervalId;

//$("#image").append('<img src="disneyQuestion[0].images[0]">');


//Load the question of each section
function trivia(){
    if(questionNumber<disneyQuestion.length){
        $("#condition").empty();
        $("#startOver").empty();
        document.getElementById("memory").src = "";
        timetoanswer=15;
        run();
        $("#question").html(disneyQuestion[questionNumber].question);
        $("#answer1").html(disneyQuestion[questionNumber].choices[0]);
        $("#answer2").html(disneyQuestion[questionNumber].choices[1]);
        $("#answer3").html(disneyQuestion[questionNumber].choices[2]);
        $("#answer4").html(disneyQuestion[questionNumber].choices[3]);
    }
    else{
        endOfgame();
    }  
}

//Gives the final result of the Game
function endOfgame(){
    $("#condition").empty();
    $("#timer").empty();
    document.getElementById("memory").src = "";
    $("#condition").html("All done here is your final score" + "<br>"
    + "Correct Answers: " + correctAnswers + "<br>"
    + "Incorrect Answers: " + wrongAnswers + "<br>"
    + "Unanswered: " + unanswered + "<br>");
    $("#startOver").text("Start Over");

}


// Initial condition when click Start Game
$("#start-button").on("click",function(){
    $(".start-zone").empty();
    run();
    trivia();
})

//Compare if the answer the user select is right or wrong
function comparison(answer){
        if(answer==disneyQuestion[questionNumber].validAnswer){
            $(".answer-zone").empty();
            $("#question").empty();
            $("#condition").html("Correct!!!")
            document.getElementById("memory").src = disneyQuestion[questionNumber].images[0];
            answer=null;
            questionNumber++;
            correctAnswers++;
            setTimeout(trivia,5000);
            }
        else {
            $(".answer-zone").empty();
            $("#question").empty();
            $("#condition").html("Incorrect" + "<br>" + "The correct answer was " +disneyQuestion[questionNumber].validAnswer);
            document.getElementById("memory").src = disneyQuestion[questionNumber].images[0];
            questionNumber++;
            wrongAnswers++;
            setTimeout(trivia,5000);
        }
    }

//Function once the time is uo

function timeIsup(){
    $(".answer-zone").empty();
    $("#question").empty();
    $("#condition").html("Your time is up" + "<br>" + "The correct answer was " +disneyQuestion[questionNumber].validAnswer);
    document.getElementById("memory").src = disneyQuestion[questionNumber].images[0];
    answer=null;
    questionNumber++;
    unanswered++;
    setTimeout(trivia,5000)
}

//Timer for answering the questions

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
    console.log(intervalId);
  }

  function decrement() {

    timeToanswer--;

    $("#timer").html("Time Remaining: " + timeToanswer + " sec");

    if (timeToanswer === 0) {

      stop();

      timeIsup();
    }
  }

  function stop() {

    clearInterval(intervalId);
    timeToanswer=10;
  }



// Logic for selecting the answer of each trivia
$("#answer1").on("click",function(){
    var answer=$(this).text();
    if(answer!=null){
        stop();
        comparison(answer);
    }
    
})

$("#answer2").on("click",function(){
    var answer=$(this).text();
    if(answer!=null){
        stop();
    comparison(answer);
    }
})

$("#answer3").on("click",function(){
    var answer=$(this).text();
    if(answer!=null){
        stop();
    comparison(answer);
    }
})

$("#answer4").on("click",function(){
    var answer=$(this).text();
    if(answer!=null){
        stop();
    comparison(answer);
    }
})

$("#startOver").on("click",function(){
    questionNumber=0;
    correctAnswers=0;
    wrongAnswers=0;
    unanswered=0;
    trivia();
})





