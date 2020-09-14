/*
 *
 */
'use strict';
let isDate = function (date) {
    return true;
}
/* 
function validate(e) {
switch (e) {
    case 0:
        alert (!Modernizr.inputtypes.date);
        break;
    case 1;
        alert (!isDate(date.value);
        break;
    default:
        return false;
 }
}
*/

let validate = function (e) {
    if (!Modernizr.inputtypes.date) {
        let date = $('dat');
        window.alert(date.value);
        if (!isDate(date.value)) {
            date.focus();
             e.preventDefault();
            return false;
        } 
    }
    return true;
}

let dispSlide = function () {
    $('ranger').innerHTML = 
         $('rng').value;
}

let followme = function () {
    $('formal').addEventListener('submit', validate);
    dispSlide();
    $('rng').addEventListener('mousemove', dispSlide);

    if (!Modernizr.input.placeholder) {
        $('dateplch').innerHTML = "format: yyyy-mm-dd";
    }
}
window.addEventListener('load', followme);