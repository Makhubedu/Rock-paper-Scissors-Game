let userScore  = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector(".score-board");
const results_p  = document.querySelector(".results>p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
	const computerChoice = ['p','r','s'];
	const randomNummber = Math.floor(Math.random()*3);
	computerChoice[randomNummber]
	return computerChoice[randomNummber];
}

function wins(userChoice,computerChoice){
	userScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	const smallUserWord = "user".fontsize(3).sup();
	const smallCompWord = "comp".fontsize(3).sup();
	results_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} Beats ${convertToWord(computerChoice)}${smallCompWord} YOU WIN`;
	document.getElementById(userChoice).classList.add("green-clow");
	setTimeout(()=>document.getElementById(userChoice).classList.remove('green-clow'),400);
}


function lose(userChoice,computerChoice){
	computerScore++;
	computerScore_span.innerHTML = computerScore;
	const smallUserWord = "user".fontsize(3).sup();
	const smallCompWord = "comp".fontsize(3).sup();
	userScore.innerHTML = userScore;
	results_p.innerHTML = `${convertToWord(computerChoice)}${smallCompWord}  Beats  ${convertToWord(userChoice)}${smallUserWord}  YOU LOOSE`;
	document.getElementById(userChoice).classList.add("red-clow");
	setTimeout(() => document.getElementById(userChoice).classList.remove('red-clow') , 400);
}

function draw(userChoice, computerChoice){
	computerScore_span.innerHTML = computerScore;
	const smallUserWord = "user".fontsize(3).sup();
	const smallCompWord = "comp".fontsize(3).sup();
	userScore_span.innerHTML = userScore;
	results_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord}  Same as ${convertToWord(computerChoice)}${smallCompWord} IT'S A DRAW `;
	document.getElementById(userChoice).classList.add("gray-clow");
	setTimeout(()=> document.getElementById(userChoice).classList.remove('gray-clow') , 400);
}

function convertToWord(letter) {
	if (letter == "r") return "Rock";
	if (letter == "s") return "Scissors";
	return "Paper";
}

function game(userChoice) {
	const computerChoice = getComputerChoice();
	
	switch(userChoice + computerChoice){
		case "rs":
		case "pr":
		case "sp":
			wins(userChoice, computerChoice);
			break;
		case "rp":
		case "ps":
		case "sr":
			lose(userChoice, computerChoice);
			break;
		case "rr":
		case "pp":
		case "ss":
			draw(userChoice, computerChoice);
			break;

	}
}

function main(){
	rock_div.addEventListener('click',()=>game('r'));
	paper_div.addEventListener('click',()=>game('p'));
	scissors_div.addEventListener('click',()=>game('s'));
}

	main();


