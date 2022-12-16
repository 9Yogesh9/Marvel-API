const notfav_icon = "./assests/images/heart-unselected.svg";

let listHolder = document.getElementById("listHolder");

// Appends to the list
function listAppend(inside_list) {
    listHolder.appendChild(inside_list);
}

// Renders the local data NO API CALL IS BEEN MADE to reduce overhead
function print_characters() {

    let data_holder = localStorage;

    if (data_holder.length != 0) {
        listHolder.innerHTML = "";
        for (d in data_holder) {
            if (d == 'length') {
                break;
            }

            let r = JSON.parse(localStorage.getItem(d));
            let ele_link = `./details.html?ch_id=${r.id}`;
            let li_item = document.createElement('div');

            let character_thumb = `<div class="character_thumb_container"><img src="${r.thumb}" class="character_thumb" alt="" srcset=""></div>`
            let character_name = `<div class="label_container"><p class="character_name">${r.name}</p>`;
            let fav_button = `<div class="fav_thumb fav_container_selected" id="fav_thumb_${r.id}">
            <img src="${notfav_icon}" alt="" srcset="" onclick="removeFav(${r.id})">
        </div></div>`

            let character_div = `<div class="individual_character" id="card_${r.id}"> 
        ${character_thumb}
        <a href="${ele_link}" target="_blank" >${character_name}</a>
        ${fav_button}
        </div>`;

            li_item.innerHTML = character_div;
            listAppend(li_item);
        }
    } else {
        listHolder.innerHTML = "<h1> Bit Surprised ! No Favourite Superheros </h1>";
    }
}

print_characters();

// Will be removing characters from the fav array if fav button unchecked
function removeFav(charac_id) {
    let grab_fav_character = document.getElementById(`card_${charac_id}`);
    localStorage.removeItem(charac_id);
    grab_fav_character.remove();
    if(localStorage.length == 0){
        listHolder.innerHTML = "<h1> Bit Surprised ! No Favourite Superheros </h1>";
    }
}