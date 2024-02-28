const IMAGE = document.querySelector("img");
const NEXT = document.querySelector(".nxt");
const OPTIONS = Array.from(document.querySelectorAll(".option"));
const MSG = document.querySelector(".msg");
const RIGHT = document.querySelector(".right");
const WRONG = document.querySelector(".wrong");

let correct;
let right = 0;
let wrong = 0;


let countryNames;
let countryCodes;

NEXT.addEventListener("click", () => {
    MSG.textContent = "";
    getRandomNumbers();
    enableButtons();
})

window.onload = async () => {
    await getCountries();
    getRandomNumbers();
};

OPTIONS.forEach(e => {
    e.addEventListener("click", e => {
        disableButtons();
        if (e.target.textContent === correct) {
            MSG.textContent = "Correct";
            right++;
            updateScore();
        }
        else{
            MSG.innerHTML = `Wrong <br> It's ${correct}`;
            wrong++;
            updateScore();
        }
    })
})

function putFlag(index) {
    IMAGE.setAttribute("src", `https://flagcdn.com/128x96/${countryCodes[index]}.png`);
}

async function getCountries() {
    blob = await fetch("https://flagcdn.com/en/codes.json");
    data = await blob.json();
    countryCodes = Object.keys(data);
    countryNames = Object.values(data);
}

function getRandomNumbers() {
    const random = [];
    while (random.length < 4) {
        let num = Math.random() * countryCodes.length;
        if (!random.includes(num)) random.push(Math.floor(num));
    }
    // await getCountries();
    correct = countryNames[random[0]];
    putFlag(random[0]);
    setOptions(random);
}

function setOptions(arr) {
    OPTIONS.forEach(e => {
        let num = Math.floor(Math.random() * arr.length)
        e.textContent = countryNames[arr[num]];
        arr.splice(num, 1);
    })
}

function disableButtons() {
    OPTIONS.forEach(e => {
        e.disabled = true;
    })
}

function enableButtons() {
    OPTIONS.forEach(e => {
        e.disabled = false;
    })
}

function updateScore(){
    RIGHT.textContent = `Right:${right}`;
    WRONG.textContent = `wrong:${wrong}`
}


