
//this is the viewer

const atm = "DOLLARSBANK ATM";

module.exports.funcs = {

	mi: function msgIntro() {
		console.log(atm + " Welcomes You!!\n\nEnter a valid choice (1 > Login 2 > Open New Account")
	},

	mn: function msgName(){
		console.log('Please enter your Name: ')
	},

	mid: function msgInitDepo() {
		console.log("Enter initial Deposit in the format: 00.00 ")
	},

	mp: function msgPin() {
		console.log("secure pin: 4 digit number: ")
	},

	mpv: function msgPinVer() {
		console.log("verify pin: ")
	},

	tm: function transMenu() {
		console.log("Transaction Menu:")
		console.log('Enter 1: Account Balance Check')
		console.log('Enter 2: Print Transactions')
		console.log('Enter 3: Update PIN')
		console.log('Enter 4: Withdraw Amount')
		console.log('Enter 5: Deposit Amount')
		console.log('\nChoice should be in 1-5')
	},

	bc: function balaceCheck() {
		console.log('Your current balance is: ')
	},

	pt: function printTrans() {
		console.log('Your 5 recent transactions are: ')
	},

	up: function updatePin() {
		console.log('Please enter your new PIN')
	},

	df: function depoFunds() {
		console.log('Enter amount to deposit: ')
		console.log('\n\nAccepted amounts are $20 bills & Personal checks of any amount')
		console.log('deposit funds: format: 00.00: ')
	},

	wf: function withFunds() {
		console.log('Enter amount to withdraw: ')
		console.log('Withdraw funds: format: 00.00: ')
	},

	ac: function accountCreation() {
		console.log('----- Create Account -----')
	},

	acs: function accSucc(){
		console.log('-----Account Creation Successful! -----')
	},

	ls: function loginSucc(){
		console.log('Login Successful!')
	}
}


/* function greetings() {
	console.log(atm + " Welcomes You!!");
	var optChosen = rl.question("Enter a valid choice (1 > Transaction 2> Open New Account)");
	return optChosen;
}

function transMenu() {
	console.log("Transaction Menu:")
	console.log('Enter 1: Account Balance Check')
	console.log('Enter 2: Print Transactions')
	console.log('Enter 3: Update PIN')
	console.log('Enter 4: Withdraw Amount')
	console.log('Enter 5: Deposit Amount')

} */
//module.exports = greetings;
/* module.exports = {
	g: greetings(),
	t: transMenu(),
}; */

/* module.exports = {
	g: function greetings() {
		console.log(atm + " Welcomes You!!");
		var optChosen = rl.question("Enter a valid choice (1 > Transaction 2> Open New Account)");
		return optChosen;
	},

	t: function transMenu() {
		console.log("Transaction Menu:")
		console.log('Enter 1: Account Balance Check')
		console.log('Enter 2: Print Transactions')
		console.log('Enter 3: Update PIN')
		console.log('Enter 4: Withdraw Amount')
		console.log('Enter 5: Deposit Amount')

	}
}; */



