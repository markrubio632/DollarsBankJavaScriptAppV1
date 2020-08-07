/**
 * http://usejsdoc.org/
 */

const av = require('./application_views');
const cust = require('./customer_account');
const readline = require('readline');
const prompt = require('prompt-sync')();
const parseInt = require('parse-int');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

//creates default user and appends to the array
//var user = new cust.Customer.constructor();

var user = new cust.Customer.constructor();
user.name = "jeeves";
user.bal = 0;
user.pin = 1234;

/* var name = 'jeeves';
var pin = 1234;
var bal = 20; */

var user1 = new cust.Customer.constructor();
user1.name = "Burian-kun";
user1.bal = 420;
user1.pin = 1337;

var accList = [];
accList.push(user);
accList.push(user1);

//accList.push(new cust.Customer.constructor(name, bal, pin));

var it = 0;

var isLogged = false;
var inCreation = false;
var currentAcc = new cust.Customer.constructor();

//accList.push(user);
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

while (true) {

	console.log(accList);

	//prompt is used to ask the question, then it stores in a variable
	const mainOpts = prompt(av.funcs.mi());

	//login
	if (mainOpts == 1) {

		//login

		let userName = prompt(av.funcs.mn());
		let userPin = Number.parseInt(prompt(av.funcs.mp()), 10);

		accList.forEach(Element => {
			console.log("list of users: " + Element.name);
			console.log("list of users: " + Element.pin);
			console.log("list of users: " + Element.bal);
			//console.log("list of users: " + Element.cust.Customer.getName());
		})

		accList.forEach(Element => {

			if (userName == Element.name && userPin == Element.pin) {
				av.funcs.ls();
				isLogged = true;
				//the Element is the whole record/object in the list
				currentAcc = Element;
				mainOpts = 2;
				//redirect to usermenu av.func.tm
			}
			else {
				//this should prob go in the outside of the loop
				console.log('Username or pin does not exist')
			}

		});
	//account creation header
	} else if (mainOpts == 2) {

		let userName = prompt(av.funcs.mn());
		let userBal = prompt(av.funcs.mid())
		let userPin = prompt(av.funcs.mp());
		let userVerPin = prompt(av.funcs.mpv());

		if (userPin === userVerPin) {

			//loop through customers to find if userName = a cust name

			accList.forEach(Element => {
				if (userName != Element.name) {
					av.funcs.acs;
					//redirect to user menu
				}
				else {
					console.log('Username exists, please use different name...')
					//redirect back to account creation
				}
			});

		}

	}

	//insertcode for the transaction menu here
//tm
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

