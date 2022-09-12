class Deck {
    constructor(suit, value) {
        this.cards = [];
    
        let suits = ['Spades','Hearts','Diamond','Clubs'];
        let values = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
            
        for (let suit in suits) {
            for (let value in values) {
                    this.cards.push(`${suits[suit]} , ${values[value]}`);
            }
        } 
    }
    //is not producing an array?? slice method cannot find it as a string or array.
    shuffle() {
        let shuffle = [];
        let i = newDeckOrder;
        for (i >= 0; i <= shuffle.length; i--) {
            Math.random(newDeckOrder).push(shuffle);
        }
        return this.shuffle;
    }
}

class Player {
    constructor (name, startingDeck, warDeck, points) {
        this.name = name;
        this.startingDeck = startingDeck;
        this.warDeck = warDeck;
        this.points = points;
    }
    playWar() {
        let warDeck = [];
        this.startingDeck.push(warDeck);
        if (warDeck.length != 52) {
            this.warDeck.pop();
            return;
        } else (warDeck.length == 52); 
            return 'Winner'
    }
    warGame() {
        let Player1 = this.playWar();
        let Player2 = this.playWar();
        if (Player1 > Player2) {
            this.push(Player1.warDeck);
        } else (this.push(Player2.warDeck));
    }
}


    const Player1 = new Player
    const Player2 = new Player

//     Player1.startingDeck = this.shuffledDeck.slice(0, 26);
//     Player2.startingDeck = this.shuffledDeck.slice(26, 52);
// }
// function shuffle() {
//     let argArray = [];
//     let i = argArray.length;
//     while (--i > 0) {
//         let shuffleIndex = Math.floor(Math.random() * (i + 1));
//         [argArray[shuffleIndex], argArray[i] = [argArray[i], argArray[shuffleIndex]]];
//     }
// }

//---------------------------------


const newDeckOrder = new Deck();
//prints permutation array in order
console.log(newDeckOrder);

//prints shuffled array
console.log(newDeckOrder.shuffle());
//does not print a shuffled deck; rather, repeats newDeckOrder

//produces a split, shuffled deck to each player
const shuffledDeck = newDeckOrder.shuffle();{
    function deal() {    
        Player1.startingDeck = this.shuffledDeck.slice(0, 26);
        Player2.startingDeck = this.shuffledDeck.slice(26, 52);

        return Player1, Player2;
    }
}
//Got stuck here. Couldn't figure out how to get the 'slice' to work, to even pass the two war decks to the rest of the code.


const startingDeck = deal(shuffledDeck);

//prints two decks, pushing one to each Player.
console.log(startingDeck);
