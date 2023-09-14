//Coding Challenge 1
//Data 1:-
console.log("Coding Challenge 1- Data 1");
let heightMark = 1.69;
let weightMark = 78;
let BMIMark = weightMark / (heightMark ** 2);

let heightJohn = 1.95;
let weightJohn = 92;
let BMIJohn = weightJohn / (heightJohn ** 2);

markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);
//Data 2:-
console.log("Data 2");
heightMark = 1.88;
weightMark = 95;
BMIMark = weightMark / (heightMark ** 2);

heightJohn = 1.76;
weightJohn = 85;
BMIJohn = weightJohn / (heightJohn ** 2);

markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);
//Coding Challenge 2
console.log("Coding Challenge 2");
if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark.toFixed(1)}) is higher than John's BMI (${BMIJohn.toFixed(1)})`);
}else if (BMIJohn > BMIMark)  {
    console.log(`John's BMI (${BMIJohn.toFixed(1)}) is higher than Mark's BMI (${BMIMark.toFixed(1)})`)}
    //Coding Challenge 3
    //Data 1: Dolphins score 96, 108 and 89. Koalas score 250, 305 and 400
console.log("Coding Challenge 3 - Data 1")

function calculateScore(score1, score2, score3) {
    let averageScore = (score1 + score2 + score3) / 3
    return averageScore
}
let dolphinAverage = Math.round(calculateScore(96, 108, 89))
let koalaAverage = Math.round(calculateScore(109, 900, 106))
console.log(dolphinAverage, koalaAverage)
if (dolphinAverage > koalaAverage && dolphinAverage >= 100) {
    console.log(`Dolphin's won! They have ${dolphinAverage} and koala's only have ${koalaAverage}`);
} else if (dolphinAverage < koalaAverage && koalaAverage >= 100) {
    console.log(`Koala's won! They have ${koalaAverage} and Dolphin's only have ${dolphinAverage}`);
} else if (dolphinAverage === koalaAverage && dolphinAverage >= 100 && koalaAverage >= 100) {
    console.log(`They draw!`);
} else {
    console.log(`No one win!`);
}
//Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
console.log("Data Bonus 1")
dolphinAverage = Math.round(calculateScore(97, 112, 101))
koalaAverage = Math.round(calculateScore(109, 95, 123))
console.log(dolphinAverage, koalaAverage)
if (dolphinAverage > koalaAverage && dolphinAverage >= 100) {
    console.log(`Dolphin's won! They have ${dolphinAverage} and koala's only have ${koalaAverage}`);
} else if (dolphinAverage < koalaAverage && koalaAverage >= 100) {
    console.log(`Koala's won! They have ${koalaAverage} and Dolphin's only have ${dolphinAverage}`);
} else if (dolphinAverage === koalaAverage && dolphinAverage >= 100 && koalaAverage >= 100) {
    console.log(`They draw!`);
} else {
    console.log(`No one win!`);
}
// Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
console.log("Data Bonus 2")
dolphinAverage = Math.round(calculateScore(97, 112, 101))
koalaAverage = Math.round(calculateScore(109, 95, 106))
console.log(dolphinAverage, koalaAverage)
if (dolphinAverage > koalaAverage && dolphinAverage >= 100) {
    console.log(`Dolphin's won! They have ${dolphinAverage} and koala's only have ${koalaAverage}`);
} else if (dolphinAverage < koalaAverage && koalaAverage >= 100) {
    console.log(`Koala's won! They have ${koalaAverage} and Dolphin's only have ${dolphinAverage}`);
} else if (dolphinAverage === koalaAverage && dolphinAverage >= 100 && koalaAverage >= 100) {
    console.log(`They draw!`);
} else {
    console.log(`No one win!`);
}
//Coding Challenge 4
//Data 1:Test for bill values 275, 40 and 430
console.log("Coding Challenge 4- Data 1");
const bill = 275
const tip1 = bill * 0.15
const tip2 = bill * 0.2
bill >= 50 && bill <= 300 ?
    console.log(`The bill was ${bill}, the tip was ${tip1}, and the total value ${bill+tip1}`) :
    console.log(`The bill was ${bill}, the tip was ${tip2}, and the total value ${bill+tip2}`);

//Coding Challenge 5
//Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
console.log("Coding Challenge 5- Data 1");
dolphinAverage = Math.round(calculateScore(44, 23, 71))
koalaAverage = Math.round(calculateScore(23, 34, 49))
console.log(dolphinAverage, koalaAverage)

function checkWinner(dolphinAverage, koalaAverage) {
    if (dolphinAverage > koalaAverage * 2) {
        return console.log(`Dolphin's won! They have ${dolphinAverage} and koala's only have ${koalaAverage}`);
    } else if (koalaAverage > dolphinAverage * 2) {
        return console.log(`Koala's won! They have ${koalaAverage} and Dophin's only have ${dolphinAverage}`)
    } else {
        return console.log(`No team win!`)
    }
}
checkWinner(dolphinAverage, koalaAverage)
    //Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
console.log("Data 2");
dolphinAverage = Math.round(calculateScore(85, 54, 41))
koalaAverage = Math.round(calculateScore(23, 34, 27))
console.log(dolphinAverage, koalaAverage)

function checkWinner(dolphinAverage, koalaAverage) {
    if (dolphinAverage > koalaAverage * 2) {
        return console.log(`Dolphin's won! They have ${dolphinAverage} and koala's only have ${koalaAverage}`);
    } else if (koalaAverage > dolphinAverage * 2) {
        return console.log(`Koala's won! They have ${koalaAverage} and Dophin's only have ${dolphinAverage}`)
    } else {
        return console.log(`No team win!`)
    }
}
checkWinner(dolphinAverage, koalaAverage)

//Coding Challenge 6
console.log("Coding Challenge 6");
let bills = [125, 55, 44]
let tips = []
let totals = []
let calcTip = function(bills) {
    return bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2
}
for (let index = 0; index < bills.length; index++) {
    let tip = calcTip(bills[index]);
    tips.push(tip);
    totals.push(tip + bills[index]);
}
console.log(bills, tips, totals)

//Coding Challenge 7
console.log("Coding Challenge 7");
const mark = {
    firstName : "Mark",
    lastName : "Miller",
    height : 1.69,
    mass : 78,
    calcBMI : function () {
        this.bmi = this.mass / (this.height**2)
    }
}
const john = {
    firstName : "John",
    lastName : "Smith",
    height : 1.95,
    mass : 92,
    calcBMI : function () {
        this.bmi = this.mass / (this.height**2)
    }
}
mark.calcBMI();
john.calcBMI();
if (mark.bmi > john.bmi) {
    console.log(`${mark.firstName}'s BMI (${mark.bmi.toFixed(1)}) is higher than ${john.firstName}'s BMI (${john.bmi.toFixed(1)})`);
}else if (john.bmi > mark.bmi)  {
    console.log(`${mark.firstName}'s BMI (${john.bmi.toFixed(1)}) is higher than ${mark.firstName}'s BMI (${john.bmi.toFixed(1)})`)}

//Coding Challenge 8
console.log("Coding Challenge 8");
bills = [22,295,176,440,37,105,10,1100,86,52]
tips = []
totals = []
for (let index = 0; index < bills.length; index++) {
    let tip = calcTip(bills[index]);
    tips.push(tip);
    totals.push(tip + bills[index]);
}
console.log(bills, tips, totals)
const calcAverage = function (arr) {
    let sum = 0;
    for (let index = 0; index < arr.length; index++) {
      sum += arr[index];
    }
    return sum / arr.length;
}
console.log(`TotalAverage: ${calcAverage(totals)}`)

//Coding Challenge 8
console.log("Coding Challenge 9");
let a = [17,21,23]
let b = [12,5,-5,0,4]
const printForecast = function (arr) {
    let c = "";
    for (let index = 0; index < arr.length; index++) {
        c+= `${arr[index]}oC in ${[index+1]}days ... `
    }
    return c;
}
console.log(printForecast(a));
console.log(printForecast(b));