const IMAGE = document.querySelector("img");
let countryNames;
const countryCodes = [];

function getFlag() {
    IMAGE.setAttribute("src", "https://flagcdn.com/224x168/ua.png");
}

async function getCountries(){
    blob = await fetch("https://flagcdn.com/en/codes.json");
    countryNames = await blob.json();
    countryCodes.push(Object.keys(countryNames));
    console.log()
}

function getRandomCountry(){
    let random = Math.random()*306;
}

getFlag();
getCountries();