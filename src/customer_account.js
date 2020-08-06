/**
 * http://usejsdoc.org/
 */

 //customer centric functions and objects

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
		return initBal;
	}

	set setBal(initBal) {
		this.initBal = initBal;
	}

	get getPin() {
		return pin;
	}

	set setPin(pin) {
		this.pin = pin;
	}

}

/*  var customer = new Customer();

 customer.id;
customer.name;
customer.address;
customer.phone;
customer.password;
customer.balance;
customer.acc; */

//module.exports = customer;
module.exports.Customer = constructor();
