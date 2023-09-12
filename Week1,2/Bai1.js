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
if (BMIMark > BMIJohn)
    console.log("Marks BMI" + "(" + (BMIMark) + ")" + "is higher than John's" + "(" + "(" + (BMIJohn) + ")" + ")!")
else
    console.log("John's BMI" + "(" + (BMIJohn) + ")" + "is higher than Mark's" + "(" + (BMIMark) + ")" + "!")
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
const bills = [125, 55, 44]
const tips = []
const totals = []
let calcTip = function(bills) {
    return bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2
}
for (let index = 0; index < bills.length; index++) {
    const tip = calcTip(bills[index]);
    console.log(tip)
    tips.push(tip);
    totals.push(tip + bills[index]);
}
console.log(bills, tips, totals)