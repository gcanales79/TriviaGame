var disneyQuestion = [{
    question: "In Aladdin, what is the name of Jasmine's pet tiger?",
    choices: ["Rajah", "Bo", "Iago", "Jack" ],
    images:  ["../images/Rajah.gif"],
    validAnswer: "Rajah"
    }, {
    question:"In Peter Pan, Captain Hook had a hook on which part of his     body?",
    choices: ["Right Foot", "Left Hand", "Left Foot", "Right Hand"],
    validAnswer: "Left Hand"
    
    }, {
    question:"In the Lion King, where does Mufasa and his family live?",
    choices: ["Rocky Mountain", "Forest", "Desert", "Pride Rock"],
    validAnswer: "Desert"
    
    }]

var questionNumber=0;
var correctAnswers=0;
var wrongAnswers=0;
var unanswered=0;
var timeToanswer=30;
var intervalId;

//Load the question of each section
function trivia(){
    if(questionNumber<disneyQuestion.length){
        $("#condition").empty();
        $("#startOver").empty();
        timetoanswer=30;
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
            $("#condition").text("Correct!!!")
            answer=null;
            questionNumber++;
            correctAnswers++;
            setTimeout(trivia,3000);
            }
        else {
            $(".answer-zone").empty();
            $("#question").empty();
            $("#condition").html("Incorrect" + "<br>" + "The correct answer was " +disneyQuestion[questionNumber].validAnswer);
            questionNumber++;
            wrongAnswers++;
            setTimeout(trivia,3000);
        }
    }

//Function once the time is uo

function timeIsup(){
    $(".answer-zone").empty();
    $("#question").empty();
    $("#condition").html("Your time is up" + "<br>" + "The correct answer was " +disneyQuestion[questionNumber].validAnswer);
    answer=null;
    questionNumber++;
    unanswered++;
    setTimeout(trivia,3000)
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
    timeToanswer=30;
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





