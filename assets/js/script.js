

// var time = questions.length * 15;
var questionIndex = 0
var gotRight = 1
var counter = 30
var questions = [

         {title: 'how long does it take for a photon in the center of the sun to reach the surface?', 
             correct : 'one million years',
             answers : ["one million years", "6 years", "one billion years", "one trillion years"]
            },

        {title: 'which isnt a primary color?', 
            correct : 'green',
            answers : ["red", "green", "blue", "yellow"]
            },

        {title: 'which criptid is the best?', 
            correct : 'nessie',
            answers :["mothman", "bigfoot", "hodag", "nessie"]
            },

        {title: 'what to monarch caterpillars eat?', 
            correct : 'milkweed',
            answers : ["sandwich", "parsley", "milkweed", "daffodils"]
            },

        {title: 'who stole fire from the gods?',
            correct : 'prometheus',
            answers : ["medusa", "prometheus", "hercules", "perseus"]
            }

];

function startQuiz(){
    var startButton = document.getElementById("startpart")
    startButton.addEventListener("click", startQuiz);
    document.getElementById("startpart").onclick = function() {
    document.getElementById("startpart").style.display = "none";
        return false;
        } 
    // document.getElementById("startpart").onclick = function(){
    //     var countdown = function(){
    //         console.log(counter);
    //         counter--;
    //         if(counter === 0);
    //         clearInterval(startCountdown);

    //         var startCountdown = setInterval(countdown,1000);
    //         console.log(counter)

    //     };
        // var startCountdown = setInterval(countdown,1000);
        
    };
        
    
    
   

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
    console.log('good',gotRight) 

    var scoreBox = document.getElementById("scorepart");
    scoreBox.innerHTML ="";
    var scorePlace = document.createElement("scoreSpot")
    scorePlace.setAttribute("class","score")
    scorePlace.innerText = gotRight++

    scoreBox.appendChild(scorePlace)

   } else {
       console.log('bad')

    }

    questionIndex++

    if (questions.length <= questionIndex) {
        console.log("gameOVER")
    } else {
        nextQuestion()
    }
    

}; startQuiz()