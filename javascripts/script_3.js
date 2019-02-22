let howManyFloors = Number(prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?", 0));

function marioPyramid(totalFloorsNbr, currentFloorNbr) {
	let currentFloor = [] // array corresponding to a floor
	for (let i = currentFloorNbr; i > 0; i--) {
		currentFloor.unshift('#'); // first insert the '#' f the beginning of the array
	}
	for (let i = totalFloorsNbr - currentFloorNbr; i > 0; i--) {
		currentFloor.unshift(' '); // and then the ' '
	}
	// after that we'll check if we are on the last floor to know when we stop the recursion
	console.log(currentFloor.join(''))
	switch (currentFloorNbr) {
		case totalFloorsNbr: // in that case we just printed the last floor so we break
			break;

		default:
			marioPyramid(totalFloorsNbr, currentFloorNbr + 1); // but here we just call the function for the next floor
	}
}

marioPyramid(howManyFloors, 1);
