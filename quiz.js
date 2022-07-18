const quizForm = document.querySelector('.quiz-form');
const submitAnswerBtn = document.querySelector('#answer-submit-btn');
const output = document.querySelector('#output');

const correctAnswers =['90','right angled'];

function calculateScore(){
    let score=0;
    let index=0;
    const formResults= new FormData(quizForm);
    for(let value of formResults.values()){
        if(value === correctAnswers[index]){
            score++;
        }
        index++;
    }
    output.innerText = "Your score is: "+ score;
}

submitAnswerBtn.addEventListener('click',calculateScore);