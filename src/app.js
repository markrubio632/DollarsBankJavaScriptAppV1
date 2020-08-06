
//this will import everything in msg and display with the console log
const av = require('./application_views');
const cust = require('./customer_account');
const readline = require('readline');
//const { METHODS } = require('http');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
//var greet = METHODS['g', 't'];



//console.log(greet);
var yeet = av.tm;
console.log(yeet);

//this creates a new instance of the constructor and places it in the user object
var user = new cust.Customer.constructor();

//creates a user var and initializes id
//figure out how to get a readline statement in here to assign to user
user.id = 1;
user.name = 1;
user.address = 1;
user.phone = 1;
user.password = 1;
user.balance = 1;
user.acc = 1;
//this prints out the current elements in the Customer obj
console.log(user);

cust.Customer.id = 0;
cust.Customer.name = 'fred';
cust.Customer.address = '2020 jeeves ave';
cust.Customer.phone = '19282578288';
cust.Customer.password = 'jeeves';
cust.Customer.balance = 1000;
cust.Customer.acc = 'jeeves';
console.log(cust.Customer);

