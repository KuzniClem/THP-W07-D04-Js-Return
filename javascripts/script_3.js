let howManyFloors = Number(prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?", 0));

function marioPyramid(totalFloorsNbr, currentFloorNbr) {
	let currentFloor = []
	for (let i = currentFloorNbr; i > 0; i--) {
		currentFloor.unshift('#');
	}
	for (let i = totalFloorsNbr - currentFloorNbr; i > 0; i--) {
		currentFloor.unshift(' ');
	}
	console.log(currentFloor.join(''))
	switch (currentFloorNbr) {
		case totalFloorsNbr:
			break;

		default:
			marioPyramid(totalFloorsNbr, currentFloorNbr + 1);
	}
}

marioPyramid(howManyFloors, 1);
