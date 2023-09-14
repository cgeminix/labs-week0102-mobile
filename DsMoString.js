//Data Structures, Modern Operators and Strings
console.log("Data Structures, Modern Operators and Strings");
//Coding Challenge #1,2
console.log("Coding Challenge 1,2");
let players1 = []
let players2 = []
const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players1 : [
        gk = 'Neuer',
        fieldPlayers =[
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ]
    ],
    players2 : [
        gk= 'Burki',
        fieldPlayers =[
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Reus',
        ]
    ],
    score: '4:0',
    scored : ['Lewandowski', 'Gnarby', 'Lewandowski','Hummels'],
    odds : {
        team1 : 1.33,
        draw : 3.25,
        team2: 6.5
    }
}
const allPlayers = [players1,players2]
players1Final = [players1,'Thiago','Coutinho','Perisic']
/*function printGoals(arr) {
    let c = "";
    let sum =0
    for (let index = 0; index < arr.length; index++) {
        sum;
        c+= `${arr[index]} : `
    }
    return c;
}*/
//printGoals(game)
console.log(`Odd of victory ${game.team1}: ${game.odds.team1}
Odd of draw : ${game.odds.draw},
Odd of victory ${game.team2}: ${game.odds.team2}`)

game.odds.team1 < game.odds.team2 && console.log(`${game.team1} is more likely to win`)
game.odds.team2 < game.odds.team1 && console.log(`${game.team2} is more likely to win`)

//Coding Challenge #3
console.log("Coding Challenge 3");
let gameEvents = [
    [17, "GOAL"],
    [36, "Substitution"],
    [47, "GOAL"],
    [61, "Substitution"],
    [64, "Yellow card"],
    [69, "Red card"],
    [70, "Substitution"],
    [72, "Substitution"],
    [76, "GOAL"],
    [80, "GOAL"],
    [92, "Yellow card"]
  ];
const printEvents = function (arr) {
    let c = "";
    for (let index = 0; index < arr.length; index++) {
        //c+= `${gameEvents.keys(arr[index])},${gameEvents.values(arr[index])}`
        c+= `(${arr[index]})`
    }
    return c;
}
console.log(printEvents(gameEvents))
//Functions
//Coding Challenge 1
console.log("Functions - Coding Challenge 1")
const poll = {
    question : "What is your favorite programming language",
    options: ["0: Js", "1:Python", "2:Rust","3:C++"],
    answers: new Array(4).fill(0),
    registerNewAnswer(){
        const answers = Number(prompt(
            `${this.question}\n${this.options.join('\n')}\n(write option number)`
        ))
        console.log(answers);

        typeof answers === 'number' && answers<this.answers.length && this.answers[answers]++;
        this.displayResults();
        this.displayResults('string');
    },

    displayResults(type = 'array'){
        if(type === 'array'){
            console.log(this.answers);
        }else if(type === 'string'){
            console.log(`Poll results arr ${this.answers.join(', ')}`);
        }
    }
}
poll.displayResults.call({answers:[5,2,3]},'string')
poll.displayResults.call({answers:[1,5,3,9,6,1]},'string')
poll.displayResults.call({answers:[1,5,3,9,6,1]})
