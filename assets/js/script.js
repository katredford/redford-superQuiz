var questions = [
    {
        prompt: "What 4 moons of jupiter did galileo discover? \n (a)farts \n (b)parts \n (c) darts",
        answer: "a"
    },

    {
        prompt: "What 4 moons of jupiter did galileo discover? \n (a)farts \n (b)parts \n (c) darts",
        answer: "a"
    },

    {
        prompt: "What 4 moons of jupiter did galileo discover? \n (a)farts \n (b)parts \n (c) darts",
        answer: "a"
    },
]

var score = 0

// for( var i=0; i < questions.length; i++){
    var response = window.prompt(questions[i].prompt);
    if(response == questions[i].answer){
        score++;
        alert("correct!");
    } else {
        alert("WRONG!");
    }
}
alert("you got " + score + "/" + questions.length)