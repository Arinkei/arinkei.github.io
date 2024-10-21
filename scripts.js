const quotes = [
    "The best way to predict the future is to invent it. - Alan Kay",
    "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
    "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
    "Your time is limited, so don’t waste it living someone else’s life. - Steve Jobs",
    "Be yourself; everyone else is already taken. - Oscar Wilde",
    "Success is not how high you have climbed, but how you make a positive difference to the world. - Roy T. Bennett",
    "Do what you can, with what you have, where you are. - Theodore Roosevelt",
    "Believe you can and you're halfway there. - Theodore Roosevelt"
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    document.getElementById('quote').innerText = randomQuote;
}
