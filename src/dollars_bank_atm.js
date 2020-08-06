/**
 * http://usejsdoc.org/
 */

const av = require('./application_views');
const cust = require('./customer_account');
const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

//creates default user and appends to the array
var user = new cust.Customer.constructor();
user.name = "jeeves";
user.bal = 0;
user.pin = 1234;

var it = 0;

var isLogged = false;
var inCreation = false;

var accList = [];
accList.push(user);
var currentAcc;

const mainOpts = {
	INTRO: 0,
	LOGIN: 1,
	CREATE: 2
}

const loginOpts = {
	CHECK_BAL: 1,
	PRINT_TRANS: 2,
	UPDATE_PIN: 3,
	WITHDRAW: 4,
	DEPOSIT: 5,
	SIGNOFF: 6
}

var introMsg = '';
var loginMsg = '';

//for things to run, it must be placed outside of the class

//this still dont work properly out is [function: msgIntro]
introMsg = av.funcs.mi;
console.log(introMsg);

console.log(accList);
console.log('no1')

if (it === 0) {

	//av.funcs.mi;

	//the first param should pull and print question to ask user, while storing response in mainOpts
	//may need to parse or convert mainOpts input
	rl.question(av.funcs.mi, mainOpts);

	if (mainOpts === 1) {

		//login

		let userName = '';
		let userPin = '';

		rl.question(av.funcs.mn, userName);
		rl.question(av.funcs.mp, userPin);

		accList.forEach(Element => {
			if (userName === Element.getName && userPin === Element.getPin) {
				av.funcs.ls;
				isLogged = true;
				//redirect to usermenu av.func.tm
			}
			else if (userName != cust.Customer.getName && userPin != cust.Customer.getPin) {
				console.log('Username or pin does not exist')
			}

		});

	}
	else if (mainOpts === 2) {

		let userName = '';
		let userBal = 0;
		let userPin = '';
		let userVerPin = '';

		//account creation header
		av.funcs.ac;

		//prompts user for info and store in variables
		rl.question(av.funcs.mn, userName);
		rl.question(av.funcs.mid, userBal);
		rl.question(av.funcs.mp, userPin);
		rl.question(av.funcs.mpv, userVerPin);

		if (userPin === userVerPin) {

			//loop through customers to find if userName = a cust name

			accList.forEach(Element => {
				if (userName != Element.getName) {
					av.funcs.acs;
					//redirect to user menu
				}
				else{
					console.log('Username exists, please use different name...')
					//redirect back to account creation
				}
			});

		}

	}

	console.log(accList);
	console.log('no2')
}

//this contains methods/info on operations of ATM (like deposit and withdraw)
//most of the meat of the project

function deposit(amount) {
	balance += amount;
	return balance;
}

function withdraw(amount) {
	balance -= amount;
	return balance;
}

