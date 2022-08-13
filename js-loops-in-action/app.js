// calculator app
const sumBtnElem = document.getElementById('sum-btn');

sumBtnElem.addEventListener('click', () => {
    const sumUntilElem = document.getElementById('entered-number');
    const sumUntilVal = sumUntilElem.value;

    let totSum = 0;

    for (let i = 0; i <= sumUntilVal; ++i) {
        totSum += i;
    }

    const divAns = document.getElementById('ans-sum');
    divAns.classList.add('sum-ans');
    divAns.innerHTML = totSum;
});


// highlight buttons app 
const highlightLinksButton = document.querySelector('#highlight-section button');

highlightLinksButton.addEventListener('click', () => {
    const highlightLinks = document.querySelectorAll('#highlight-section a');
    console.log(highlightLinks);
    for (const link of highlightLinks) {
        link.style.backgroundColor = 'rgb(251, 189, 33)';
        link.style.color = 'white';
    }
});

// your info app
const dammyData = {
    name: 'mohamed',
    age: 22,
    from: 'cairo'
};

const showDammyDataButton = document.querySelector('#dammy-data button');

showDammyDataButton.addEventListener('click', () => {
    const displayedData = document.querySelector('#dammy-data ul');
    displayedData.innerHTML = '';

    for (const key in dammyData) {
        console.log(`${key} ${dammyData[key]}`);
        displayedData.innerHTML += `<li>${key.toUpperCase()}: ${dammyData[key]}</li>`;
    }
    displayedData.style.display = 'block';
});


// roll dice app
const rollDiceButton = document.querySelector('#statistics button');

rollDiceButton.addEventListener('click', () => {
    const targetInputElement = document.querySelector('#statistics input');
    const listOfRolls = document.querySelector('#statistics ul');

    listOfRolls.innerHTML = '';

    const targetNumber = targetInputElement.value;
    let numberOfRolls = 0;
    let isMatched = false;

    while (!isMatched) {
        const rolledNumber = Math.floor(Math.random() * 6) + 1;
        numberOfRolls++;
        const newRoll = document.createElement('li');
        const outputText = 'Roll ' + numberOfRolls + ': ' + rolledNumber;

        newRoll.innerHTML = outputText;
        listOfRolls.append(newRoll);

        isMatched = targetNumber == rolledNumber;
    }
    const totRolls = document.getElementById('total-rolls');
    const targetElement = document.getElementById('target-num');

    totRolls.innerHTML = numberOfRolls;
    targetElement.innerHTML = targetNumber;
});