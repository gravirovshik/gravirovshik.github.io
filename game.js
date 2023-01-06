let randomLoc = Math.ceil(Math.random() * 5);
let location1 = randomLoc;
let location2 = location1 + 1;
let location3 = location2 + 1;
let guess;
let hits = 0;
let guesses = 0;
let isSunk = false;
let array = [];

while (isSunk == false) {
	guess = prompt("Это мини игра морской бой. В 7 ячейках по горизонтали ******* расположен 3-х палубный корабль. Твоя задача - потопить его за меньшее количествово попыток. Стреляй! (введи число 1 - 7) :");
	
	let t = typeof(guess);
	alert("Ты ввел:" + guess + "Тип" + t);
	
	if (guess < 1 || guess > 7) {
		alert("Введи значение от 1 до 7");
	} else {
		guesses = guesses + 1;
		if (array.indexOf(guess) == -1) {
			if (guess == location1 || guess == location2 || guess == location3) {
				array.push(guess);
				alert("Есть попадание!");
				hits = hits + 1;
				if (hits == 3) {
				isSunk = true;
				alert("Корабль потоплен");
				}
			} else {
				alert("Мимо");
			}
		} else {
			alert("Ага, фиг тебе))");
		}
	}
}

var stats = "Ты справился за " + guesses + " попыток. Твоя точность равна " + (3 / guesses);
alert(stats);