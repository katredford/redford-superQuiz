var questions = [
    {
        question: "What 4 moons of jupiter did galileo discover?",
        answer: [
            {text: "4", correct: true },
            {text: "22", correct: false }
        ]
    },

    // {
    //     prompt: "What 4 moons of jupiter did galileo discover? \n (a)farts \n (b)parts \n (c) darts",
    //     answer: "a"
    // },

    // {
    //     prompt: "What 4 moons of jupiter did galileo discover? \n (a)farts \n (b)parts \n (c) darts",
    //     answer: "a"
    // },
]

// var score = 0

// // for( var i=0; i < questions.length; i++){
//     var response = window.prompt(questions[i].prompt);
//     if(response == questions[i].answer){
//         score++;
//         alert("correct!");
//     } else {
//         alert("WRONG!");
//     }
// 
var startButton = document.getElementById("start-btn")
var questionContainerElement = document.getElementById("question-container")
var questionElement = document.getElementById("question")
var answerButtonsElement = document.getElementById("answer-buttons")

var shuffledQuestions, currentQuestionIndex



startButton.addEventListener("click",startGame)

function startGame() {
console.log('started')
startButton.classList.add("hide")
shuffledQuestions = questions.sort(() => Math.random() - .5)
currentQuestionIndex = 0;
questionContainerElement.classList.remove("hide")
nextQuestion()
}

function nextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        var button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtonsElement.appendChild(button)
    })

}

function selectAnswer(e) {

}