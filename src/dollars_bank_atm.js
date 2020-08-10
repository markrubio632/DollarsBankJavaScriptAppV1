
//these require statements act as the imports

const av = require('./application_views');
const cust = require('./customer_account');
const prompt = require('prompt-sync')();
const parseInt = require('parse-int');

//a currency formatter - pulled from
//https://flaviocopes.com/how-to-format-number-as-currency-javascript/
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2
})

//examples of user objects built on app generation
var user = new cust.Customer.constructor();
user.name = "jeeves";
user.bal = 100;
user.pin = 1234;

var user1 = new cust.Customer.constructor();
user1.name = "Burian-kun";
user1.bal = 420;
user1.pin = 1337;

//create array of users and push the user objects into the array
var accList = [];
accList.push(user);
accList.push(user1);

//checked in login function
var isLogged = false;

//creates a list of current users (only 1 current user at a time)
var currentAcc = new cust.Customer.constructor();
var currentAcc;

//to be used for the history stuff
var dateList = [];
var date = new Date();

//this shows the main menu because it is set to zero
const mainOpts = 0;

//loop that always occurs - used to start up project
while (true) {

	//prompt is used to ask the question, then it stores in a variable
	const mainOpts = prompt(av.funcs.mi());

	//login
	if (mainOpts == 1) {

		let userName = prompt(av.funcs.mn());
		let userPin = Number.parseInt(prompt(av.funcs.mp()), 10);

		//checks input username and pin through all users saved
		accList.forEach(Element => {

			if (userName == Element.name && userPin == Element.pin) {
				isLogged = true;
				currentAcc = Element;
			}

		});

		//if user entered a username/pin combo that didnt exist
		if (!isLogged) {
			console.log('username or pin were incorrect. try again.');
		}
		//does a timestamp during login, but doesn't save to transaction history - purely for customer use
		else if (isLogged) {

			let loginDate = new Date();
			console.log('Logged in: ' + loginDate);
			//welcomes user
			console.log("Welcome " + currentAcc.name + "!")
		};

		//account creation
	} else if (mainOpts == 2) {

		//prompts user for input and stores it in variables
		let userName = prompt(av.funcs.mn());
		let userBal = prompt(av.funcs.mid());
		let userPin = prompt(av.funcs.mp());
		let userVerPin = prompt(av.funcs.mpv());

		//verifies pin
		if (userPin === userVerPin) {

			//this is used to iterate through the objects
			accList.forEach(Element => {
				if (userName != Element.name) {
					//if they match
				}
			});
			//once pin is verified, create the new user object using entered user info and push to array
			var newUser = new cust.Customer.constructor();
			newUser.name = userName;
			newUser.bal = Number.parseFloat(userBal);
			newUser.pin = Number.parseInt((userPin), 10);
			accList.push(newUser);

			av.funcs.acs();

		}
		else if (userPin != userVerPin) {
			console.log('your pin did not match, please try again.')
		}

	}
	//loop to do while a user is logged in
	while (isLogged) {
		//main handler of what function the user wants to access
		const main = Number.parseInt(prompt(av.funcs.tm()), 10);

		//account balance check
		if (main == 1) {

			av.funcs.bc()
			console.log(formatter.format(currentAcc.bal));

		}
		//print history
		else if (main == 2) {

			//stuff saved in addHistry method
			console.log(dateList);

		}
		//update pin
		else if (main == 3) {

			//oPin is the old pin
			//nPin is the new pin

			const oPin = Number.parseInt(prompt(av.funcs.mp()), 10);

			if (oPin == currentAcc.pin) {
				//prompts for new pin
				const nPin = Number.parseInt(prompt(av.funcs.up()), 10);
				//assigns new pin, and saves it to the current user and the acclist
				currentAcc.pin = nPin;
				accList.pin = currentAcc.pin;
				console.log('Your new PIN is ' + currentAcc.pin)
			}
			else if (oPin != currentAcc.pin) {
				console.log('the pin entered did not match with your pin. try again')
			}
		}
		//withdraw
		else if (main == 4) {

			const amount = Number.parseFloat(prompt(av.funcs.wf()));
			currentAcc.bal = Number.parseFloat(cust.Customer.wi(currentAcc.bal, amount));
			console.log('Your new balance is: ' + formatter.format(currentAcc.bal));
			dateList.push(addHistory('withdraw', amount));

			//iterates through list of accounts and saves the new balance into the main acc
			accList.forEach(Element => {
				if (Element.name == currentAcc.name) {
					Element = currentAcc;
				}
			});
		}
		//deposit
		else if (main == 5) {

			const amount = Number.parseFloat(prompt(av.funcs.df()));
			currentAcc.bal = Number.parseFloat(cust.Customer.de(currentAcc.bal, amount));
			console.log('Your new balance is: ' + formatter.format(currentAcc.bal));
			dateList.push(addHistory('deposit', amount));

			//iterates through list of accounts and saves the new balance into the main acc
			accList.forEach(Element => {
				if (Element.name == currentAcc.name) {
					Element = currentAcc;
				}
			});
		}
		//exits the application
		else if (main == 6) {
			av.funcs.ex();
			process.exit(1);
		}
	}
}

//adds transaction history to a list to print out to the user
function addHistory(text, numbers) {

	//text = deposit/withdraw
	//numbers = amount used in those methods

	var timeStamp = 'You had a recent ' + text + ' of ' + formatter.format(numbers) + ' at ' + date.toLocaleDateString();

	return timeStamp;
}

