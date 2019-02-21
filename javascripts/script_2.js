let numberToFactorialize = Number(prompt('De quel nombre veut tu calculer la factorielle ?', 0));

function factorial(nbr) {
	return (nbr === 0 ? 1 : (factorial(nbr - 1) * nbr) )
}

console.log(`Le résultat est : ${factorial(numberToFactorialize)}`);
