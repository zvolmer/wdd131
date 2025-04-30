let selectElem = document.querySelector("select");
let logo = document.querySelector("img");

selectElem.addEventListener("change", changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == "dark"){
        document.body.className = "dark";
        
        // change body to dark
        // change logo to the new logo
    } else {
        // remove dark class from body
        // change logo back to original logo
    }
}