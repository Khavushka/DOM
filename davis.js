'use strict';
/*
 * davis.js
 */
let empty = function (target) {
    let foo = target;
    // Removing all children from an element
    while (foo.firstChild) {
        foo.removeChild(foo.firstChild);
    }
}


let fillLeft = function (target) {
    let art = target;

    let img = document.createElement('img'); // create element
    img.setAttribute('src', 'book.png.png');
    img.setAttribute('alt', 'book icon');
    img.setAttribute('width', '64');

    let h1 = document.createElement('h1'); // create element
    let txt = document.createTextNode('Always'); // create text
    h1.appendChild(txt); // put on tree


    let par = document.createElement('p'); // create element
    txt = document.createTextNode("You could have four columns here but you won't. You'll have three like everyone else."); // create text
    par.appendChild(txt); // put onto tree

    art.appendChild(img);
    art.appendChild(h1);
    art.appendChild(par);
    
}



let t1 = function (ev) {
    let target = ev.target || ev.srcElement;
    let id = target.id;
    // alert(id);
    let elm = $(id);
    if (target.innerHTML !== '') {
        empty(elm);
    } else {
        switch (id) {
            case 'left': fillLeft(elm); break;
        }
    }
}

let initialize = function () {
    let left = $('left');
    fillLeft(left);
    left.addEventListener('click', t1, false);
}

window.addEventListener('load', initialize);

//Midten

let fillCenter = function (target) {
    let art = target;

    let img = document.createElement('img'); // create element
    img.setAttribute('src', 'book.png.png');
    img.setAttribute('alt', 'book icon');
    img.setAttribute('width', '64');

    let h1 = document.createElement('h1'); // create element
    h1.style.color = "yellow"; //Farve til center
    let txt = document.createTextNode('Always'); // create text
    h1.appendChild(txt); // put on tree


    let par = document.createElement('p'); // create element
    txt = document.createTextNode("You could have four columns here but you won't. You'll have three like everyone else."); // create text
    par.appendChild(txt); // put onto tree
    par.style.color = "yellow"; //Farve til center

    art.appendChild(img);
    art.appendChild(h1);
    art.appendChild(par);
    
}



let t2 = function (ev) {
    let target = ev.target || ev.srcElement;
    let id = target.id;
    // alert(id);
    let elm = $(id);
    if (target.innerHTML !== '') {
        empty(elm);
    } else {
        switch (id) {
            case 'center': fillCenter(elm); break;
        }
    }
}

let sinitialize = function () {
    let center = $('center');
    fillCenter(center);
    center.addEventListener('click', t2, false);
}

window.addEventListener('load', sinitialize);


//Højre

let fillRight = function (target) {
    let art = target;

    let img = document.createElement('img'); // create element
    img.setAttribute('src', 'book.png.png');
    img.setAttribute('alt', 'book icon');
    img.setAttribute('width', '64');

    let h1 = document.createElement('h1'); // create element
    let txt = document.createTextNode('Always'); // create text
    h1.appendChild(txt); // put on tree


    let par = document.createElement('p'); // create element
    txt = document.createTextNode("You could have four columns here but you won't. You'll have three like everyone else."); // create text
    par.appendChild(txt); // put onto tree

    art.appendChild(img);
    art.appendChild(h1);
    art.appendChild(par);
    
}



let t3 = function (ev) {
    let target = ev.target || ev.srcElement;
    let id = target.id;
    // alert(id);
    let elm = $(id);
    if (target.innerHTML !== '') {
        empty(elm);
    } else {
        switch (id) {
            case 'right': fillRight(elm); break;
        }
    }
}

let ginitialize = function () {
    let right = $('right');
    fillRight(right);
    right.addEventListener('click', t3, false);
}

window.addEventListener('load', ginitialize);


//Carousel

let sroll = function() {
    let rev = setInterval(function() {
        let carousel = document.getElementById('carousel');
        if (carousel.firstChild) {
            let obj = carousel.firstChild;
            carousel.removeChild(obj);
            carousel.appendChild(obj);
        }
        }, 350
    );
}

window.addEventListener('load', sroll);

