const quoteElement= document.querySelector
('#quote');
const authorElement= document.querySelector
('#author');
const button= document.querySelector
('#button');

const urlApi='https://api.api-ninjas.com/v1/quotes?category=happiness';
const keyApi='z6IAsFPSLD/5EjoVedcKpA==PEjBtTk1BETz68Es';

const getQuote=()=>
    {
        fetch(urlApi,
            {
            headers:
             { 
                'X-Api-Key': keyApi,
             },
            })
            .then(data=>data.json())
            .then(items=>{
            //    console.log(items[0]);
               quoteElement.textContent=items[0].quote;
               authorElement.textContent=items[0].author
        }).catch(error=>{
console.warn('Error Fatching Quotes', error)
        }) ;
    };
    getQuote();
    button.addEventListener('click',getQuote);  //click to change quotes.