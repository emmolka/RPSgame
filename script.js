let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result p');
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');


function getComputerChoice(){
    const choices = ['rock','paper','scissors'];
    const randomNumber= Math.floor(Math.random() *3);
    return choices[randomNumber];
}
getComputerChoice();


function convertToWord(word){
    if(word ==='paper') return 'Paper';
    if(word ==='rock') return 'Rock';
    if(word ==='scissors') return 'Scissors';
}

function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = 'user'.fontsize(3).sub();
    const smallCompWord = 'comp'.fontsize(3).sub();

    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You win! `;
    document.getElementById(userChoice).parentElement.classList.add('green-glow');
    setTimeout(function(){
        document.getElementById(userChoice).parentElement.classList.remove('green-glow')
    },300);
}



function lose(userChoice, computerChoice){
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    userScore_span.innerHTML = userScore;
    const smallUserWord = 'user'.fontsize(3).sub();
    const smallCompWord = 'comp'.fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord}. You lose! `;
    document.getElementById(userChoice).parentElement.classList.add('red-glow');
    setTimeout(function(){
        document.getElementById(userChoice).parentElement.classList.remove('red-glow')
    },300)
}

function draw(userChoice, computerChoice){
    const smallUserWord = 'user'.fontsize(3).sub();
    const smallCompWord = 'comp'.fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord}. It's a draw! `;
    document.getElementById(userChoice).parentElement.classList.add('gray-glow');
    setTimeout(function(){
        document.getElementById(userChoice).parentElement.classList.remove('gray-glow')
    },300)
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case 'paperrock':
        case 'rockscissors':
        case 'scissorspaper':
        win(userChoice,computerChoice);
        break;
        case 'rockpaper':
        case 'paperscissors':
        case 'scissorsrock':
        lose(userChoice,computerChoice);
        break;
        case 'paperpaper':
        case 'scissorsscissors':
        case 'rockrock':
        draw(userChoice,computerChoice);
        break;
    }

}


function main(){
    rock_div.addEventListener('click', function(){
        game('rock')
    });


    paper_div.addEventListener('click', function(){
        game('paper')
    });


    scissors_div.addEventListener('click', function(){
        game('scissors')
    })
}
main();