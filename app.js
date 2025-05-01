var questions = [
    {
        question: "What does FIFA stand for in English?",
        option1: "International Federation of Association Football",
        option2: "Federation International of Football Association",
        option3: "Football International Federation Association",
        correctoption: "International Federation of Association Football"
    },

    {
        question: "Which country has won the most World Cups?",
        option1: "Spain",
        option2: "Germany",
        option3: "Brazil",
        correctoption: "Brazil"
    },

    {
        question: "Who was the world’s highest-paid athlete in 2023?",
        option1: "Lionel Messi",
        option2: "Cristiano Ronaldo",
        option3: "Neymar Jr",
        correctoption: "Cristiano Ronaldo"
    },

    {
        question: "Who has the record of winning most Ballon D'ors?",
        option1: "Lionel Messi",
        option2: "Cristiano Ronaldo",
        option3: "Neymar Jr",
        correctoption: "Lionel Messi"
    },

    {
        question: "What was the first name of Argentinian soccer star Maradona?",
        option1: "Armando",
        option2: "Diego",
        option3: "Javier",
        correctoption: "Diego"
    },

    {
        question: "Who is the only player to have won the UEFA Champions League trophy with three different clubs?",
        option1: "Clarence Seedorf",
        option2: "Cristiano Ronaldo",
        option3: "Pele",
        correctoption: "Clarence Seedorf"
    },

    {
        question: "Which country won the first ever FIFA World Cup in 1930?",
        option1: "Uruguay",
        option2: "Brazil",
        option3: "France",
        correctoption: "Uruguay"
    },

    {
        question: "Which club has won the most UEFA Champions League titles?",
        option1: "FC Barcelona",
        option2: "Manchester United",
        option3: "Real Madrid",
        correctoption: "Real Madrid"
    },

    {
        question: "Who was the first player to win five Serie A titles as foreign player?",
        option1: "Cristiano Ronaldo",
        option2: "Zlatan Ibrahimovic",
        option3: "Neymar Jr",
        correctoption: "Zlatan Ibrahimovic"
    },

    {
        question: "Who holds the record for the most international goals in soccer history?",
        option1: "Cristiano Ronaldo",
        option2: "Pele",
        option3: "Lionel Messi",
        correctoption: "Cristiano Ronaldo"
    },
];

var quizques = document.getElementById('ques')
var quizopt1 = document.getElementById('opt1')
var quizopt2 = document.getElementById('opt2')
var quizopt3 = document.getElementById('opt3')
var index = 0
var getBtn = document.getElementById('btn')
var score = 0
var timerDisplay = document.getElementById('timer');
var timer;
var timeLeft = 60;

function nextQuestion() {
 
    var getInputs = document.getElementsByTagName('input')
    for(var i=0; i < getInputs.length; i++){
        getInputs[i].checked = false
    }
    
    if(index===0){
        startTimer()
    }

    if (index >= questions.length) {
        endQuiz();
    }

    // if (index >= questions.length) {
    //     Swal.fire({
    //         title: "Quiz End!",
    //         text: `Your score is ${score}/${questions.length}. Do you want to restart?`,
    //         icon: "success",
    //         confirmButtonText: "Restart"
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             index = 0;
    //             score = 0;
    //             nextQuestion();
    //         }
    //     });
    // }
    else {
        quizques.innerText = questions[index].question
        quizopt1.innerText = questions[index].option1
        quizopt2.innerText = questions[index].option2
        quizopt3.innerText = questions[index].option3
        index++
    }
    getBtn.disabled = true
}



function checkAnswer() {
    var selectedOption;
    var inputs = document.getElementsByTagName('input');

    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].checked) {
            selectedOption = document.getElementById('opt' + (i + 1)).innerText;
            break;
        }
    }

    if (selectedOption === questions[index - 1].correctoption) {
        score++;
    }

    // if (index >= questions.length) {
    //     Swal.fire({
    //         title: "Quiz End!",
    //         text: `Your score is ${score}/${questions.length}`,
    //         icon: "success"
    //     });
    // } else {
        nextQuestion();
    // }
}



function btnWork(){
    getBtn.disabled = false
}

nextQuestion()

function startTimer() {
    timeLeft = 60;
    timerDisplay.innerText = `Time Left: ${timeLeft}s`;

    timer = setInterval(function () {
        timeLeft--;
        timerDisplay.innerText = `Time Left: ${timeLeft}s`;

        if (timeLeft <= 0) {
            clearInterval(timer);
            endQuiz();
        }
    }, 1000);
}

function endQuiz() {
    clearInterval(timer); // stop the timer
    Swal.fire({
        title: "Quiz End!",
        text: `Your score is ${score}/${questions.length}. Do you want to restart?`,
        icon: "success",
        confirmButtonText: "Restart"
    }).then((result) => {
        if (result.isConfirmed) {
            index = 0;
            score = 0;
            nextQuestion();
        }
    });
}