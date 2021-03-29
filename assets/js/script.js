

var time = questions.length * 15;
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
    answerGrid.innerHTML = "";

    var questionTitle = document.getElementById("question")
    questionTitle.innerText = currentQuestion.title
    currentQuestion.answers.forEach(function(answer,i){

        //1 Make the piece of html in js
        var anwserButton = document.createElement("button");
        //2 Dress that html up how u want!! give it text . class name ect...
        anwserButton.setAttribute("class","btn choice-btn")
        anwserButton.innerText = answer
        
        //3 Stick that shabang on the page!! .appendCHild or jquery .append()
        answerGrid.appendChild(anwserButton)
    })
    
    var buttons = document.querySelectorAll(".choice-btn")
    console.log('buttons ?', buttons)
   
    buttons.forEach(function(btn)  {
        btn.addEventListener("click", handleClick);
    })

 } 
 nextQuestion()



 function handleClick (event) {
    console.log('we got clicked', event.target.innerText)
    

   if (event.target.innerText === questions[questionIndex].correct) {
    console.log('good')


   } else {
       console.log('bad')

    }

    questionIndex++

    if (questions.length <= questionIndex) {
        console.log("gameOVER")
    } else {
        nextQuestion()
    }
    

};