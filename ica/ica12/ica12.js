const button = document.querySelector("#js-new-quote");
button.addEventListener('click', getQuote);

const answerButton = document.querySelector("#js-tweet");
answerButton.addEventListener('click', revealAnswer);

const endpoint = "https://trivia.cyberwisp.com/getrandomchristmasquestion";
let currentAnswer = '';  
async function getQuote() {
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw Error(response.statusText);
        }
        const json = await response.json();
        displayQuote(json.question);
        currentAnswer = json.answer;
        clearAnswer();  
    }
    catch (err) { 
        console.log(err);
        alert('Failed to fetch new trivia');
    }
}

function displayQuote(quote) {
    const quoteText = document.querySelector("#js-quote-text");
    quoteText.textContent = quote;
}

function clearAnswer() {
    const answerText = document.querySelector("#js-answer-text");
    answerText.textContent = '';
}

function revealAnswer() {
    const answerText = document.q