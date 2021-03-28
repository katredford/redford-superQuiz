

    // {
    //     prompt: "What 4 moons of jupiter did galileo discover? \n (a)farts \n (b)parts \n (c) darts",
    //     answer: "a"
    // },

    // {
    //     prompt: "What 4 moons of jupiter did galileo discover? \n (a)farts \n (b)parts \n (c) darts",
    //     answer: "a"
    // },


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
var startButton = document.getElementById('start-btn')
var nextButton = document.getElementById('next-btn')
var questionContainerElement = document.getElementById('question-container')
var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('answer-buttons')

var shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  
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
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
//   var selectedButton = e.target
  
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

var questions = {
         'how long does it take for a photon in the center of the sun to reach the surface?': {
             "correct" : 'one million years',
             "list" : ["one million years", "6 years", "one billion years", "one trillion years"]
         },

         'whats your story jack': {
            "correct" : 'one million years',
            "list" : ["one million years", "6 years", "one billion years", "one trillion years"]
        },

        'take a picture': {
            "correct" : 'one million years',
            "list" : ["one million years", "6 years", "one billion years", "one trillion years"]
        },

        'thats a lot of lettuce': {
            "correct" : 'one million years',
            "list" : ["one million years", "6 years", "one billion years", "one trillion years"]
        },

        'that guy in the cheaters': {
            "correct" : 'one million years',
            "list" : ["one million years", "6 years", "one billion years", "one trillion years"]
        },

  },

  