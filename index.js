// variables

let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [
  {
    quote1:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    person1: `Nelson Mandela`,
  },
  {
    quote1: "The way to get started is to quit talking and begin doing.",
    person1: `Walt Disney`,
  },
  {
    quote1:
      "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
    person1: `Steve Jobs`,
  },
  {
    quote1: "It is during our darkest moments that we must focus to see the light.",
    person1: `Aristotle`,
  },
  {
    quote1: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    person1: `Benjamin Franklin`,
  },
];
let prev=null;

btn.addEventListener('click',function () {

    let random=Math.floor(Math.random()*quotes.length);
    while (random === prev) {
        random=Math.floor(Math.random()*quotes.length);
    }
    prev=random;
    quote.innerText=quotes[random].quote1;
    person.innerText=quotes[random].person1;
})
