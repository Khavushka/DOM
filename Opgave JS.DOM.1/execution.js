'use strict';
const isValid = function(e) {
    let name = document.formal.name;
    let born = document.formal.born;
    if (born.value === "" || name.value === "") {
        window.alert("Both fields must be filled in");
        name.focus();
        e.preventDefault();
        return false;
    } else {
        createCookie(name.value + born.value, 42, 0.00694444);
        return true;
    }
}

const getstarted = function() {
    console.log(`Cookie niels1945-11-25? ${readCookie('niels1945-11-25')}`);
    console.log(`Cookies: ${document.cookie}`)
    document.formal.addEventListener('submit', isValid);
}
window.addEventListener('load', getstarted);