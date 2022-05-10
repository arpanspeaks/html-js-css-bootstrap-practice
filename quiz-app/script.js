quiz = [
    {
        question: 'HTML stands for:',
        answers: ['Hypertext Markup Language', 'Hyperlink Markup Language'],
        correct: '0'
    },
    {
        question: 'CSS stands for:',
        answers: ['Cascading Style Sheets', 'Color and Style Sheets'],
        correct: '0'
    }
];

const questions = document.getElementById('questions');
quiz.forEach((element, index) => {
    const html =
        `<div class='row p-2 bg-light'>
            <div class='col card'>
                <div class='card-body'>
                    <h5 class='card-title'>Question ${index + 1}</h5>
                    <p class='card-text'>${element.question}</p>
                    <div class='form-check'>
                        <input class='form-check-input' type='radio' name='q_${index + 1}' id='q-${index + 1}-op-1' value='0'>
                        <label class='form-check-label' for='q-${index + 1}-op-1'>${element.answers[0]}</label>
                    </div>
                    <div class='form-check'>
                        <input class='form-check-input' type='radio' name='q_${index + 1}' id='q-${index + 1}-op-2' value='1'>
                        <label class='form-check-label' for='q-${index + 1}-op-2'>${element.answers[1]}</label>
                    </div>
                </div>
            </div>
        </div>`;
    questions.innerHTML += html;
});

const form = document.getElementById('form');
const submit = document.getElementById('submit');
const result = document.getElementById('result');
const scoreEle = document.getElementById('score');
form.addEventListener('submit', e => {
    e.preventDefault();
    let score = 0;
    quiz.forEach((element, index) => {
        if(element.correct === form[`q_${index + 1}`].value) {
            score += 50;
        }
    });
    form.classList.add('dn');
    form.classList.remove('form-d');
    result.classList.add('result-d');
    result.classList.remove('dn');
    scoreEle.innerText = `${score}%`;
});

const close = document.getElementById('close');
close.addEventListener('click', () => {
    form.classList.remove('dn');
    form.classList.add('form-d');
    result.classList.remove('result-d');
    result.classList.add('dn');
    form.reset();
});