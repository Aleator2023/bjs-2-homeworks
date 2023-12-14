"use strict"

function solveEquation(a, b, c) {
	const discriminant = b * b - 4 * a * c;
	let arr = [];

	if (discriminant < 0) {
		return arr;
	} else if (discriminant === 0) {
		arr = [-b / (2 * a)];
		return arr;
	} else {
		const sqrtD = Math.sqrt(discriminant);
		arr.push((-b + sqrtD) / (2 * a), (-b - sqrtD) / (2 * a));
		return arr;
	}
}



function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	if (typeof percent !== 'number' || typeof contribution !== 'number' || typeof amount !== 'number' || typeof countMonths !== 'number') {
		return false;
	}

	percent = percent / 100 / 12;

	const loanBody = amount - contribution;

	const monthlyPayment = loanBody * (percent + percent / ((Math.pow(1 + percent, countMonths) - 1)));

	const totalPayment = monthlyPayment * countMonths;

	const roundedTotalPayment = Math.round(totalPayment * 100) / 100;

	return roundedTotalPayment;
}


const percent = 10; // Процентная ставка (годовая)
const contribution = 0; // Первоначальный взнос
const amount = 50000; // Сумма кредита
const countMonths = 12; // Срок кредита в месяцах

const totalMortgage = calculateTotalMortgage(percent, contribution, amount, countMonths);
console.log("Общая сумма выплат:", totalMortgage);


