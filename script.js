
class hero {
    constructor(name, age, type) {
        this.name = name
        this.age = age
        this.type = type
    }
}

const prompt = require("prompt-sync")()

var uName = prompt ("Hey, you! Whats your name hero? > ")

userName = String(uName)

var uAge = prompt ("And how old? > ")

while (isNaN(uAge) || uAge === "") {

    uAge = prompt("Hmm, something went wrong, let's try again. And how old? ")
}

console.log(" ")
console.log("How your hero class?")
var genus = prompt("Chose: 1 for 'Warrior', 2 for 'Mage', 3 for 'Ninja', 4 for 'Monk': > ")
console.log(" ")

while (isNaN(genus) || genus === "" || genus >= 5) {

    genus = prompt("Hmm, something went wrong, let's try again? ")
}

if (genus == 1) {
    genus = "Warrior"

} else if (genus == 2) {
    genus = "Mage"
} else if (genus == 3) {
    genus = "Ninja"
} else if (genus == 4) {
    genus = "Monk"
}

let character = new hero(userName, uAge, genus)
attack()


function attack() {
    var hit

    if (character.type == "Warrior") {
        hit = "FrozenSword"
        for (let i = 1; i < character.age; i *= 3) {
            console.log(` -${character.name} the ${character.type} used special ability: ${hit}! +${i}0 critical hit`)
        }
    }
    else if (character.type == "Mage") {
        hit = "Gravity Pulse"
        for (let i = 1; i < character.age; i *= 4) {
            console.log(` -${character.name} the ${character.type} used special ability: ${hit}! +${i}0 critical hit`)
        }
    }
    else if (character.type == "Ninja") {
        hit = "Fumma Shuriken"
        for (let i = 1; i < character.age; i *= 4) {
            console.log(` -${character.name} the ${character.type} used special ability: ${hit}! +${i}0 critical hit`)
        }
    }
    else if (character.type == "Monk") {
        hit = "Sun Wukong"
        for (let i = 1; i < character.age; i *= 4) {
            console.log(` -${character.name} the ${character.type} used special ability: ${hit}! +${i}0 critical hit`)
        }
    }
    console.log(" ")
    console.log(` >>>>>> Enemy has been Defeated! Congratulation <<<<<<`)
    console.log(" ")
}