const quotes = [
    {
        quote:"\"If you can dream it, you can do it\"",
        author:"Walt Disney",
    },
    {
        quote:"\"It always seems impossible until it's done\"",
        author:"Nelson Mandela",
    },
    {
        quote:"\"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time\"",
        author:"Thomas A. Edison",
    },
    {
        quote:"\"If you quit once it becomes a habit. Never quit\"",
        author:"Michael Jordan",
    },
    {
        quote:"\"Simplicity is the ultimate sophistication\"",
        author:"Leonardo da Vinci",
    },
    {
        quote:"\"The secret of happiness is renunciation\"",
        author:"Andrew Carnegie",
    },
    {
        quote:"\"젊음의 매 순간이 기회임을 젊음은 종종 잊는다\"",
        author:"Unknown",
    },
    {
        quote:"\"계획을 세워도 실천하지 않으면 아무것도 시작되지 않는다\"",
        author:"Shohei Ohtani",
    },
    {
        quote:"\"Obstacles are those frightful things you see when you take your eyes off your goal\"",
        author:"Henry Ford",
    },
    {
        quote:"\"Your time is limited, so don't waste it living someone else's life\"",
        author:"Steve Jobs",
    },
    {
        quote:"\"Life is too short to hang out with people who won't be resourceful\"",
        author:"Jeff Bezos",
    },
    {
        quote:"\"When something is important enough, you do it even if the odds are not in your favor\"",
        author:"Elon Musk",
    },
    {
        quote:"\"If you born poor, it's not your mistake. But if you die poor, it's your mistake.\"",
        author:"Bill Gates",
    },
    {
        quote:"\"Do not put off. Act now!\"",
        author:"Bill Gates",
    },
    {
        quote:"\"If you don't give up, you still have a chance. Giving up is the greatest failure.\"",
        author:"Jack Ma",
    },
]

const quote = document.querySelector('#quote');
const author = document.querySelector('#quote__author');

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;