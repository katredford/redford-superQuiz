

var buttons = document.getElementById("btn")
var questionIndex = 0

var questions = [

         {title: 'how long does it take for a photon in the center of the sun to reach the surface?', 
             correct : 'one million years',
             answers : ["one million years", "6 years", "one billion years", "one trillion years"]
            },

        {title: 'whats your story jack', 
            correct : 'one million years',
            answers : ["one million years", "6 years", "one billion years", "one trillion years"]
            },

        {title: 'take a picture', 
            correct : 'one million years',
            answers :["one million years", "6 years", "one billion years", "one trillion years"]
            },

        {title: 'thats a lot of lettuce', 
            correct : 'one million years',
            answers : ["one million years", "6 years", "one billion years", "one trillion years"]
            },

        {title: 'that guy in the cheaters',
            correct : 'one million years',
            answers : ["one million years", "6 years", "one billion years", "one trillion years"]
            }

];



 function nextQuestion() {
    var currentQuestion = questions[questionIndex];  
    var answerGrid = document.getElementById("answer-buttons");
    var questionTitle = document.getElementById("question")
    questionTitle.innerText = currentQuestion.title
    currentQuestion.answers.forEach(function(answer,i){

    
    var anwserButton = document.createElement("button");
        anwserButton.setAttribute("class","btn")
        anwserButton.innerText = answer
        answerGrid.appendChild(anwserButton)
    })
    for (var index = 0; index < questions.length; index++) {
        
    }
 } 
 nextQuestion()