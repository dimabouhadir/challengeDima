function makeCrazy(callback) {
  // Fill the missing code here
}

function greeting(name) {
  return `Hello ${name}`;
}

function thankYou(firstName, lastName) {
  return `Thank you ${firstName} ${lastName}`;
}

let crazyGreeting = makeCrazy(greeting);
let crazyThankYou = makeCrazy(thankYou);

console.log(crazyGreeting('omar')); // Hello omar !!! omar Hello Hello omar !!! omar Hello
console.log(crazyThankYou('rami', 'rizk')); // Thank you rami rizk !!! rizk rami you Thank Thank you rami rizk !!! rizk rami you Thank
