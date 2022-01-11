const quiz= [
    {
        question:"Q1 : What is full form of HTML? ",
        a:" Hyter Text MarkUp Language",
        b: "Hyper Text Markdo Language",
        c: "Hpter Text MarkUp Language",
        d: "Hyper Text MarkUp Language",
        ans :"ans2"
    },
    {
        question:"Q2 : What is full form of HTML? ",
        a:" Hyter Text MarkUp Language",
        b: "Hyper Text Markdo Language",
        c: "Hpter Text MarkUp Language",
        d: "Hyper Text MarkUp Language",
        ans :"ans1"

    },
    {
        question:"Q3 : What is full form of HTML? ",
        a:" Hyter Text MarkUp Language",
        b: "Hyper Text Markdo Language",
        c: "Hpter Text MarkUp Language",
        d: "Hyper Text MarkUp Language",
        ans :"ans1"
    },
    {
        question:"Q4 : What is full form of HTML? ",
        a: "Hyter Text MarkUp Language",
        b: "Hyper Text Markdo Language",
        c: "Hpter Text MarkUp Language",
        d: "Hyper Text MarkUp Language",
        ans :"ans1"
    },       
];

const question= document.querySelector(".question");
const option1= document.querySelector("#option1");
const option2= document.querySelector("#option2");
const option3= document.querySelector("#option3");
const option4= document.querySelector("#option4");
const submit= document.querySelector("#submit");

const answers= document.querySelector(".btn");
const showScore = document.querySelector("#showScore");

let questionCount=0;
let score=0;

const loadQuestion = () =>{
    const questionlist = quiz[questionCount];
    question.innerText= questionlist.question;
    option1.innerText= questionlist.a;
    option2.innerText= questionlist.b;
    option3.innerText= questionlist.c;
    option4.innerText= questionlist.d; 
} 
loadQuestion();
const checkAnswer = () =>{
    let answer;

    answers.forEach((checkAnswer) => {
        if(currentanswer.checked){
            answer = currentanswer.id;
        }
    });
    return answer;
};

submit.addEventListener('click', () => {
const checkAnswers= checkAnswer();
console.log(checkAnswers);
if(checkAnswers == quiz[questionCount].ans){
    score++;
};
questionCount++;
if(questionCount < quiz.length){
    loadQuestion();
}
else{
    showScore.innerHTML= '<h3> Your scored ${score} /$ {quiz.length} </h3>';
}
});
