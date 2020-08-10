
class Customer {
	constructor(name, bal, pin) {
		this.name = name;
		this.bal = bal;
		this.pin = pin;
	}

	get getName() {
		return name;
	}
	set setName(name) {
		this.name = name;
	}

	get getBal() {
		return bal;
	}

	set setBal(bal) {
		this.bal = bal;
	}

	get getPin() {
		return pin;
	}

	set setPin(pin) {
		this.pin = pin;
	}
}

//when calling in other file, use this format "nickname()"
//example of deposit: de()

//export multiple modules to be used elsewhere - these are used in dollars_bank_atm.js
module.exports.Customer = {
	de: function deposit(balance, amount) {
		balance = balance + amount;
		return balance;
	},

	wi: function withdraw(balance, amount) {
		balance = balance - amount;
		return balance;
	}

}


