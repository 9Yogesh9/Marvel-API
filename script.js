// Keys to be attached to get the response from Marvel server to every request
const keys = "ts=1670913383902&apikey=edc9531ea872c74a2855ed93a5903229&hash=bbb581dcf34e4752243b361daa960fb1";
const limit = "limit=100&";

// Different URL and there variables to be used
let getCharacters = "http://gateway.marvel.com/v1/public/characters?";
let getFilteredCharacters = "https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=spider&";

// const URL = "http://gateway.marvel.com/v1/public/comics?ts=1670913383902&apikey=edc9531ea872c74a2855ed93a5903229&hash=bbb581dcf34e4752243b361daa960fb1";
// const URL = "http://gateway.marvel.com/v1/public/characters?ts=1670913383902&apikey=edc9531ea872c74a2855ed93a5903229&hash=bbb581dcf34e4752243b361daa960fb1";

// get the Fetches the list of characters
// https://gateway.marvel.com:443/v1/public/characters?apikey=edc9531ea872c74a2855ed93a5903229

let getbtnR = document.getElementById("toclick");
getbtnR.setAttribute('onclick', `fetchMaster('${getFilteredCharacters}${keys}')`)
// let getbtn = document.getElementById("getbtn_link");
// getbtn.setAttribute('href', URL);
// getbtn.setAttribute('href', getFilteredCharacters + keys);

let listHolder = document.getElementById("listHolder");

// Appends to the list
function listAppend(inside_list) {
    listHolder.appendChild(inside_list);
}

// Gives you json data fetched from marvel server
// function marvelRequestor(URL){

//     let xhr = new XMLHttpRequest();
//     xhr.onload = () => {
//         let parsed_JSON = JSON.parse(xhr.response);
//         console.log(parsed_JSON);
//         xhr.abort();
//         // return parsed_JSON;
//     }
//     xhr.open('get', URL);
//     xhr.send();

// }

function fetchMaster(URL = getCharacters + keys) {
    console.log("fetchMaster intiated !",URL);
    fetch(URL)
        .then((response) => response.json())
        .then((data) => print_characters(data));
}

// to run onload 
fetchMaster();

function print_characters(fetch_characters) {

    listHolder.innerHTML = "";
    let results = fetch_characters.data.results;
    for (r of results) {
        let li_item = document.createElement('li');

        li_item.innerHTML = `
            <h2>${r.name}</h2>
        `;

        listAppend(li_item);
    }

}