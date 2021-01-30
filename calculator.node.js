//compound Interest formula: P (1 + r/n)^(nt)
//I will email you, I dont understand how to apply such a formula, I'll use a different method for now.

//"UI"
let balance = prompt("Please enter your account balance:");
let rate = prompt("Please enter your interest rate as a decimal:");

//Processing
let res = balance * rate ;
//parseInt tripped me up 'cause I forgot it existed lol
res = parseInt(res)
balance = parseInt(balance)
//getting to year five
let resTwo = res + balance;
let resThree = resTwo * rate
let huuh = resThree + resTwo
let huuhTwo = huuh * rate
let huuhThree = huuhTwo + huuh
let huuhFour = huuhThree * rate
let huuhFive = huuhFour + huuhThree
let huuhSix = huuhFive * rate
let huuhSeven = huuhSix + huuhFive
//wow this is horrible code lmao
//getting to year six
let huuhEight = huuhSeven * rate
huuhNine = huuhEight + huuhSeven
huuhTen = huuhNine * rate
huuhEleven = huuhTen + huuhNine
huuhTwelve = huuhEleven * rate
huuhThirteen = huuhTwelve + huuhEleven
huuhFourteen = huuhThirteen * rate 
huuhFifteen = huuhFourteen + huuhThirteen
huuhSixteen = huuhFifteen * rate
huuhSeventeen = huuhSixteen + huuhFifteen
//.toFixed was hard, forgot how to use it briefly
let yearOne = resTwo;
let five = huuhSeven;
yearFive = five.toFixed(2)
let yearTen = huuhSeventeen.toFixed(2);

//output
console.log ("Your account balance after one year is $" + yearOne +".");
console.log ("Your account balance after five years is $" + yearFive + "!");
console.log ("Your account balance after ten years is $" + yearTen + "!")

//This assignment was way harder than I thought, I didn't anticipate the code taking so long. Also, my use of variables is garbage, and I shouldn't have intitialized on every line in that "getting to year five" section, but at this point I'm afraid to touch it. Anyway, please email me and let me know your thoughts on how I did.