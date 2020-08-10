
//this is the viewer and general read statements users would see

//when calling in other file, use this format "nickname()"
//example of msgIntro: mi()

const atm = "DOLLARSBANK ATM";

//export multiple modules to be used elsewhere - these are used in dollars_bank_atm.js
module.exports.funcs = {

	mi: function msgIntro() {
		console.log(atm + " Welcomes You!!\n\nEnter a valid choice (1 > Login 2 > Open New Account")
	},

	mn: function msgName() {
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
		console.log('Enter 6: Exit')
		console.log('\nChoice should be in 1-6')
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
		console.log('\nAccepted amounts are $20 bills & Personal checks of any amount')
		console.log('deposit funds: format: 00.00: ')
	},

	wf: function withFunds() {
		console.log('Enter amount to withdraw: ')
		console.log('Withdraw funds: format: 00.00: ')
	},

	ac: function accountCreation() {
		console.log('----- Create Account -----')
	},

	acs: function accSucc() {
		console.log('-----Account Creation Successful! -----')
	},

	ls: function loginSucc() {
		console.log('Login Successful!')
	},
	ex: function exitProgram() {
		console.log("Exiting... Thank You and Come Again!")
	}
}
