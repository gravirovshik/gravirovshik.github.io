let randomLoc = Math.floor(Math.random() * 5);
let location1 = randomLoc;
let location2 = location1 + 1;
let location3 = location2 + 1;
let guess;
let hits = 0;
let guesses = 0;
let isSunk = false;
let array = [];

while (isSunk == false) {
	guess = prompt("Привет! Это мини игра морской бой :) Представь, что в 7 ячейках по горизонтали ••••••• (от нуля до шести) расположен 3-ёх палубный корабль врага. Твоя задача потопить его за меньшее кол-во попыток. Стреляй! (введи число 0-6):");
	if (guess < 0 || guess > 6) {
		alert("Введи значение от 0 до 6");
	} else {
		guesses = guesses + 1;
		if (array.indexOf(guess) == -1) {
			if (guess == location1 || guess == location2 || guess == location3) {
				array.push(guess);
				alert("Попал");
				hits = hits + 1;
				if (hits == 3) {
				isSunk = true;
				alert("Корабль потоплен");
				}
			} else {
				alert("Мимо");
			}
		} else {
			alert("Уже сюда стрелял");
		}
	}
}

var stats = "Ты справился за " + guesses + " попыток. Твоя точность равна " + (3 / guesses);
alert(stats);