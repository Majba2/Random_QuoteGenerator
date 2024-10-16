const randomQuotes = [
    { quote: "The best way to predict the future is to create it.", 
        author: "Peter Drucker" },
    { quote: "You miss 100% of the shots you don’t take.", 
        author: "Wayne Gretzky" },
    { quote: "Success usually comes to those who are too busy to be looking for it.", 
        author: "Henry David Thoreau" },
    { quote: "Don’t be afraid to give up the good to go for the great.",
         author: "John D. Rockefeller" },
    { quote: "I find that the harder I work, the more luck I seem to have.", 
        author: "Thomas Jefferson" },
    { quote: "Don’t watch the clock; do what it does. Keep going.",
         author: "Sam Levenson" },
    { quote: "The future depends on what you do today.", 
        author: "Mahatma Gandhi" },
    { quote: "Hard work beats talent when talent doesn’t work hard.", 
        author: "Tim Notke" },
    { quote: "It’s not whether you get knocked down, it’s whether you get up.",
         author: "Vince Lombardi" },
    { quote: "Success is walking from failure to failure with no loss of enthusiasm.",
         author: "Winston Churchill" }
];
const quoteElement= document.querySelector('#quote');
const authorElement= document.querySelector('#author');
const button= document.querySelector('#button');
function autoQuote()
{
    const quoteIndex=Math.floor(Math.random()* randomQuotes.length);
    // console.log(quoteIndex);
    quoteElement.textContent=randomQuotes
    [quoteIndex].quote  //refreshe a auto quote change hobe
    authorElement.textContent=randomQuotes
    [quoteIndex].author   //author change hobe
}
autoQuote();
button.addEventListener('click',autoQuote);