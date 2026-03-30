// get card id from db or have separate? -> building separate for now
// remove card title from db, redundant with front of card
export class Card {
    static cardId = 0;
    // front card img
    frontSrc = ' ';
    frontAlt = ' ';
    // back card img
    backSrc = ' ';
    backAlt = ' ';
    // card text
    cardFrontText = ' ';
    cardBackText = ' ';
    
    constructor(cardFrontText, frontSrc, frontAlt, cardBackText, backSrc, backAlt) {
        // autoinc id on card creation
        Card.cardId += 1;
        Card.frontSrc = frontSrc;
        Card.frontAlt = frontAlt;
        Card.backSrc = backSrc;
        Card.backAlt = backAlt;
        Card.cardFrontText = cardFrontText;
        Card.cardBackText = cardBackText;
    }
    
    // getters
    static get getCardId() {
        return Card.cardId;
    }
    
    // front card getters
    get getFrontText() {
        return this.cardFrontText;
    }
    
    get getFrontSrc() {
        return this.frontSrc;
    }
    
    get getFrontAlt() {
        return this.frontAlt;
    }
    // back card getters
    get getBackText() {
        return this.cardBackText;
    }
    
    get getBackSrc() {
        return this.backSrc;
    }
    
    get getBackAlt() {
        return this.backAlt;
    }
    // don't need setters for card values, call constructor
}