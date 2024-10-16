const randomQuote = [
    "The best way to predict the future is to create it.",
    "You miss 100% of the shots you don’t take.",
    "Success usually comes to those who are too busy to be looking for it.",
    "Don’t be afraid to give up the good to go for the great.",
    "I find that the harder I work, the more luck I seem to have.",
    "Don’t watch the clock; do what it does. Keep going.",
    "The future depends on what you do today.",
    "Hard work beats talent when talent doesn’t work hard.",
    "It’s not whether you get knocked down, it’s whether you get up.",
    "Success is walking from failure to failure with no loss of enthusiasm."
];
const quoteElement= document.querySelector('#quote');
const authorElement= document.querySelector('#author');
const button= document.querySelector('#button');
function autoQuote()
{
    const quoteIndex=Math.floor(Math.random()*   randomQuote.length);

    console.log(quoteIndex);
    quoteElement.textContent=randomQuote[quoteIndex]  //refreshe a auto change hobe
}
autoQuote();
// quoteElement.textContent=randomQuotes[5]   indiviul যদি একটা করে দেখতে চায়, এখানে চেঞ্জ করতে হবে।
button.addEventListener('click',autoQuote);