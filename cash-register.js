/*
Design a cash register drawer function checkCashRegister() that accepts
purchase price as the first argument (price), payment as the second
argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with
a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer
is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the
value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due
in coins and bills, sorted in highest to lowest order, as the value of
the change key.

*/

function checkCashRegister(price, cash, cid) {
	const cashMap = {
		"PENNY": 0.01,
		"NICKEL": 0.05,
		"DIME": 0.1,
		"QUARTER": 0.25,
		"ONE": 1,
		"FIVE": 5,
		"TEN": 10,
		"TWENTY": 20,
		"ONE HUNDRED": 100, 
	}

	let changeOwed = cash - price
	let totalCash = cid.reduce((acc, curr) => acc + curr[1], 0)
	
	if (changeOwed > totalCash) {
		return {status: "INSUFFICIENT_FUNDS", change: []}
	}

	if (changeOwed == totalCash) {
		return {status: "CLOSED", change: cid}
	}
	
	let updatedRegister = cid.reverse().map((note) => {
		if (changeOwed >= cashMap[note[0]]) {
			let reduce = Math.floor((changeOwed / cashMap[note[0]]).toFixed(2)) * cashMap[note[0]]
			if (reduce >= note[1]) {
				reduce = note[1]
			}
			changeOwed -= reduce
			return [note[0], reduce]
		}
	}).filter(item => item != undefined)
	let totalChange = updatedRegister.reduce((acc, curr) => acc + curr[1], 0)
	if (totalChange < changeOwed) {
		return {status: "INSUFFICIENT_FUNDS", change: []}
	}
	return {status: "OPEN", change: updatedRegister}
}

//console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))

/*


*/