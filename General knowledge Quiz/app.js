
const correctAnswers = ['B','A','A','B','B' ];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

//Attach the eventListener to the form
form.addEventListener('submit', e => {
   
    //Prevent the default action
    e.preventDefault();

    //set a local variable score = 0;
    let score = 0;

    //get user Answers from each input field
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];

    //Check Answers
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            score += 20;
        }
    });

    //show results on the page
    scrollTo(0,0);
    result.classList.remove('d-none');

    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;
        if(output === score){
            clearInterval(timer);
        } else {
            output++;
        }
    }, 12);
});

