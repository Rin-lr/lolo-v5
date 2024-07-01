function xml(doc) {
    // Select all elements within the <body> tag
    const allElements = doc.querySelectorAll('body *');


    // E.g. HTML structure:
    // <div id="1">
    //     <div id="2" class="duet-card">data</div>
    // </div>

    //Result
    // <div id="3" class="a_box">
    //     <div id="2" class="container">data</div>
    // </div>

    // Filter out elements that have class names containing the word 'card'
    const foundElements = Array.from(allElements).filter(element => {
        const classNames = element.classList.value.split(' ');
        return classNames.some(className => className.includes('card'));
    });

    // Create a new <div> element
    const card = document.createElement('div');
    card.classList.add('card');

    const cardBox = document.createElement('div');
    cardBox.classList.add('article_feed');
    let clonedCount = 0; // Initialize the counter

   // Move data from the found elements to the card container
    foundElements.forEach(f_el => {
        const clonedElement = f_el.cloneNode(true); 
        cardBox.appendChild(clonedElement); 
        f_el.remove(); 
        clonedElement.classList.remove(...f_el.classList);
        clonedElement.classList.add('container');
    });

    card.appendChild(cardBox);
    feed.appendChild(card);
}
