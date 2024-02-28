const IMAGE = document.querySelector("img");
const NEXT = document.querySelector(".nxt");
const OPTIONS = Array.from(document.querySelectorAll(".option"))
let currect;

let countryNames;
let countryCodes;

NEXT.addEventListener("click", () => {
    getRandomNumbers();
})

window.onload = getRandomNumbers;

OPTIONS.forEach(e => {
    e.addEventListener("click", e => { 
        if(e.target.textContent === currect) alert("correc");
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

async function getRandomNumbers() {
    const random = [];
    while (random.length < 4) {
        let num = Math.random() * 306;
        if (!random.includes(num)) random.push(Math.floor(num));
    }
    await getCountries();
    currect = countryNames[random[0]];
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



