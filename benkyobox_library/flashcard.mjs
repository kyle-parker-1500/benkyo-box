import { Card } from './Card.mjs';

// title can't be null
// uses boostrap classes
function flashcardFront(frontText, frontImgSrc, frontAlt) {
    let outer = document.createElement('div');
    let inner = document.createElement('div');
    let img = document.createElement('img');
    let text = document.createElement('h4');
    
    outer.className = 'card';
    outer.style = 'width: 18rem;';

    img.className = 'card-img-top';
    img.src = `${frontImgSrc}`;
    img.alt = `${frontAlt}`;
    
    text.className = 'card-title';
    text.text = `${frontText}`; 
    
    inner.className = 'card-body';
    
    // build front card
    inner.append(text);
    outer.append(img);
    outer.append(inner);
}

function flashcardBack(backText, backImgSrc, backAlt) {
    let outer = document.createElement('div');
    let inner = document.createElement('div');
    let img = document.createElement('img');
    let text = document.createElement('h4');
    
    outer.className = 'card';
    outer.style = 'width: 18rem;';

    img.className = 'card-img-top';
    img.src = `${backImgSrc}`;
    img.alt = `${backAlt}`;
    
    text.className = 'card-title';
    text.text = `${backText}`; 
    
    inner.className = 'card-body';
    
    // build front card
    inner.append(text);
    outer.append(img);
    outer.append(inner);
}

export function flashcard(frontText, frontSrc, frontAlt, backText, backSrc, backAlt) {
    const card = new Card(frontText, frontSrc, frontAlt, backText, backSrc, backAlt);
    let frontCard = flashcardFront(
        card.getFrontText, card.getFrontSrc, card.getFrontAlt,
    );

    let backCard = flashcardBack(
        card.getBackText, card.getFrontSrc, card.getBackAlt
    );
    
    let fullCard = document.createElement('div');
    fullCard.className = 'card';
    fullCard.id = `card-${card.getCardId}`

    fullCard.append(frontCard);
    fullCard.append(backCard);
}