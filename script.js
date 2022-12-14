// Keys to be attached to get the response from Marvel server to every request and different constant values
const keys = "ts=1670913383902&apikey=edc9531ea872c74a2855ed93a5903229&hash=bbb581dcf34e4752243b361daa960fb1";
const limit10 = "limit=10&";
const notfav_icon = "./assests/heart-unselected.svg";
const fav_icon = "./assests/heart-selected.svg";

// Different URL and there variables to be used
let getCharacters = "http://gateway.marvel.com/v1/public/characters?";
let getFilteredCharacters = "https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=";

let listHolder = document.getElementById("listHolder");

// Appends to the list
function listAppend(inside_list) {
    listHolder.appendChild(inside_list);
}

function fetchMaster(URL = (getCharacters + limit10 + keys)) {
    console.log("fetchMaster intiated !", URL);
    fetch(URL)
        .then((response) => response.json())
        .then((data) => print_characters(data));
}

// to run onload 
fetchMaster();
// let holder = "";

function print_characters(fetch_characters) {

    let results = fetch_characters.data.results;
    // holder = fetch_characters;
    if (results.length != 0) {
        listHolder.innerHTML = "";
        for (r of results) {
            let li_item = document.createElement('div');

            let character_thumb = `<div class="character_thumb_container"><img src="${r.thumbnail.path}.${r.thumbnail.extension}" class="character_thumb" alt="" srcset=""></div>`
            let character_name = `<div class="label_container"><p class="character_name">${r.name}</p>`;
            let fav_button = `<div class="fav_thumb"><img src="${notfav_icon}" alt="" srcset="" id="img_${r.id}" onclick="addToFav(${r.id})">
        </div></div>`

            let character_div = `<div class="individual_character"> 
        ${character_thumb}
        ${character_name}
        ${fav_button}
        </div>`;

            li_item.innerHTML = character_div;

            // console.log(`${r.thumbnail.path}.${r.thumbnail.extension}`);

            listAppend(li_item);
        }
    } else {
        listHolder.innerHTML = "<h1> No Results Found ! Please try other keywords.";
    }
}

let search_text = document.getElementById('search_text');

function show_results() {
    let search_value = search_text.value;
    // console.log(`${getFilteredCharacters}${search_value}&${keys}`);
    if (search_value)
        fetchMaster(`${getFilteredCharacters}${search_value}&${keys}`);
    else
        alert("Please Enter a valid value !");
}

// Will be adding characters to the fav array
function addToFav(charac_id) {
    console.log(charac_id);
    let ch_img = document.getElementById(`img_${charac_id}`);
    ch_img.setAttribute("src", `${fav_icon}`);
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