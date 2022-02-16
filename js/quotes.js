const quotes =[
    {
        quotes:"Life is a journey",
        translation:"인생은 여정이다.",
        author: "Ralph Waldo Emerson"
    },
    {
        quotes:"The die is cast",
        translation:"주사위는 던져졌다.",
        author: "Julius Caesar"
    },
    {
        quotes:"The past can hurt, but you can either run from it, or learn from it",
        translation:"과거는 아플 수 있으나, 거기서 배울지, 배쨀지는 너의 선택이다.",
        author: "Rafiki"
    },
    {
        quotes:"Carpe Diem, Seize the day. Make your lives extraordinary",
        translation:"카르페 디엠, 오늘을 잡아라. 삶을 특별하게 만들어라.",
        author: "Robin Williams"
    },
    {
        quotes:"There's no place like home",
        translation:"어딜 가든 집 같은 곳은 없어.",
        author: "The Wizard of Oz"
    },
    {
        quotes:"Good words, good thoughts and good deeds",
        translation:"좋은 말, 좋은 생각, 그리고 좋은 행동",
        author: "Bomi Bulsara"
    },
    {
        quotes:"Every day, every minute, every second, you have a chance to change your life.",
        translation:"매일, 매분, 매초 인생을 바꿀 수 있는 기회가 있어.",
        author: "Dumbo"
    },
    {
        quotes:"When God closes the door, he opens the window somewhere.",
        translation:"신이 문을 닫을 때, 다른 곳 창문을 열어놓는다.",
        author: "Maria"
    },
    {
        quotes:"Only I can determine my own mood. And today, perhaps, I will choose happiness",
        translation:"내 기분은 내가 정해. 오늘 나는 ‘행복’으로 할래.",
        author: "Elice"
    },
    {
        quotes:"Cowards never start. the weak never finish and the winners never quit.",
        translation:"겁쟁이는 시작도 하지 않지, 약한 녀석은 끝까지 해내지 못하고, 하지만 승자는 절대 포기하지 않아.",
        author: "Ironman"
    }
];

const quote = document.querySelector("#quote span:nth-child(1 )");
const translation = document.querySelector("#quote span:nth-child(2)");
const author = document.querySelector("#quote span:nth-child(3)");

let todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

if( todaysQuote === quotes[10] ){
    todaysQuote = quotes[0];
};

quote.innerText = todaysQuote.quotes;
translation.innerText = todaysQuote.translation;
author.innerText = todaysQuote.author;