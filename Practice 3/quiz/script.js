class Quiz {
    constructor(questions) {
        this.score = 0;
        this.questions = questions;
        this.questionIndex = 0;
}
getQuestionIndex() {
    return this.questions[this.questionIndex];
}
guess(answer) {
    if (this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }
    this.questionIndex++;
    }
    isEnded() {
   return this.questionIndex === this.questions.length;
    }
}
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}
function populate() {
    if(quiz.isEnded()) {
    showScores();
    }
    else {
    var element = document.getElementById("question");
    element.innerHTML = quiz.getQuestionIndex().text;
    var choices = quiz.getQuestionIndex().choices;
    for(var i = 0; i < choices.length; i++) {
        var element = document.getElementById("choice" + i);
        element.innerHTML = choices[i];
         guess("btn" + i, choices[i]);
    }
        showProgress();
    }
};
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
    quiz.guess(guess);
    populate();
    }
};
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};
function showScores() {
    var ga = "<h1>Result</h1>";
    ga += "<h2 id='score'> Your Marks: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = ga;
};
var questions = [
    new Question(" Q1: Hyper Text Markup Language Stand For ?", ["JavaScript", "XHTML","CSS", "HTML"], "HTML"),
    new Question("Q2: Which language is used for styling web pages ?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
    new Question("Q3: Today is .... ?", ["Tuesday", "Wednesday","Thursday", "Friday"], "Wednesday"),
    new Question("Q4:What is Full Form of JS ?", ["JavaScript", "Java Scrape", "Java Scartch", "All"], "JavaScript"),
    ];
var quiz = new Quiz(questions);
populate();


function addbtnn(){
    var a = prompt("Enter Question: ");
    if(a!=null){
        document.write("<br>  Q5: " )
    document.write(a+ "?"+"<br>");
    document.write("<input type= 'radio' name='radio' id='c1' value='radio'>");
    }
    var b = prompt("Enter First Option: ");
    if(b!=null){
        document.write(b + "<br>");
        document.write("<input type= 'radio' name='radio' id='c2' value='radio'>");
    }
    var c = prompt("Enter Second Option: ");
    if(c!=null){
        document.write(c + "<br>");
        document.write("<input type= 'radio'  id='c3' name='radio'  value='radio'>");
    }
    var d = prompt("Enter Third Option: ");
    if(d!=null){
        document.write(d + "<br>");
        document.write("<input type= 'radio' name='radio' id='c4' value='radio'>");
    }
    var e =prompt("Enter Fourth Option: ");
    if(e!=null){
        document.write(e + "<br>");
    }
    var f =prompt("Set the correct Option:");
    // if(f!=null){
    //     document.write(f + "<br>").hide;
    // }
    // if(f==b && f==c && f==d && f==e)
    // {
    //     var g = alert("Your Answer Is Correct") 
    //     document.write(g);
    // }
    // if(f!=b && f!=c && f!=d && f!=e)
    // {
    //     var h = alert("Your's Answer is Wrong");
    //     document.write(h);
    // }
    document.write("<button id='btn11' onclick='correct()'>Show Result</button>");
}
function correct(){
    let f;
    if(f==b && f==c && f==d && f==e)
    {
        var g = alert("Your Answer is Correct"); 
        document.write(g);
    }
    if(f!=b && f!=c && f!=d && f!=e)
    {
        var h = alert("Your Answer is Wrong");
        document.write(h);
    }
}
