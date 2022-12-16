// Keys to be attached to get the response from Marvel server to every request and different constant values
const keys = "ts=1670913383902&apikey=edc9531ea872c74a2855ed93a5903229&hash=bbb581dcf34e4752243b361daa960fb1";
const limit10 = "limit=10&";
const offset = `offset=${Math.round(Math.random() * 100)}&`; //Randomizing the homepage results
const notfav_icon = "./assests/images/heart-unselected.svg";

// Different URL (APIs) to be used
let getCharacters = "https://gateway.marvel.com/v1/public/characters?";
let getFilteredCharacters = "https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=";

let listHolder = document.getElementById("listHolder");

// Appends to the list
function listAppend(inside_list) {
    listHolder.appendChild(inside_list);
}

// Fetch the data from Marvel API server
function fetchMaster(URL = (getCharacters + limit10 + offset + keys)) {
    // console.log("fetchMaster intiated !", URL);
    fetch(URL)
        .then((response) => response.json())
        .then((data) => print_characters(data));
}

// to run onload 
fetchMaster();

// Function to print the fetched data
function print_characters(fetch_characters) {

    let results = fetch_characters.data.results;

    if (results.length != 0) {
        listHolder.innerHTML = "";
        for (r of results) {
            let ele_link = `./details.html?ch_id=${r.id}`;
            let li_item = document.createElement('div');

            let character_thumb = `<div class="character_thumb_container"><img src="${r.thumbnail.path}.${r.thumbnail.extension}" class="character_thumb" alt="" srcset=""></div>`
            let character_name = `<div class="label_container"><p class="character_name">${r.name}</p>`;
            let fav_button = `<div class="fav_thumb" id="fav_thumb_${r.id}">
            <img src="${notfav_icon}" alt="" srcset="" onclick="addToFav(${r.id},'${r.name}','${r.thumbnail.path}.${r.thumbnail.extension}')">
        </div></div>`

            let character_div = `<div class="individual_character"> 
        ${character_thumb}
        <a href="${ele_link}" target="_blank" >${character_name}</a>
        ${fav_button}
        </div>`;

            li_item.innerHTML = character_div;
            listAppend(li_item);
        }
    } else {
        listHolder.innerHTML = "<h1> No Results Found ! Please try other keywords.";
    }

    // Mark the favorites
    for( a in localStorage){
        let ele = document.getElementById(`fav_thumb_${a}`);
        if(ele){
            ele.classList.add('fav_container_selected');
        }
    }
}

let search_text = document.getElementById('search_text');
let previous_search_value = "";

// Fetch the results using search term
function show_results() {

    // Run only if search box value changes this will reduce the overhead caused by multiple calls to fetch same information on page 
    if (previous_search_value != search_text.value) {

        let search_value = search_text.value;
        if (search_value) {
            fetchMaster(`${getFilteredCharacters}${search_value}&${keys}`);
            previous_search_value = search_value;
        }
        else
            alert("Please Enter a valid value !");

    }
}

// Will be adding characters to the fav array
function addToFav(charac_id, charac_name, charac_thumb) {

    let grab_fav_container = document.getElementById(`fav_thumb_${charac_id}`);
    grab_fav_container.classList.toggle('fav_container_selected');

    if(!localStorage.getItem(charac_id)){
        let obj = {
            "id":charac_id,
            "name":charac_name,
            "thumb":charac_thumb
        }
        localStorage.setItem(charac_id, JSON.stringify(obj));
    }else{
        localStorage.removeItem(charac_id);
    }
}
