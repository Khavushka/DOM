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
    let txt = document.createTextNode('Always');   // create text
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

/*
// function ondragStart

function onDragStart(event) {
    event   
        .dataTransfer
        .setData('text/plain', event. target. id);    
    event   
        .currentTarget
        .style
        .color = 'yellow';
    }
*/

/*let sroll = function() {
    let carousel = setInterval(function() {
        let carousel = document.getElementById('carousel');
        if (carousel.firstChild) {
            let obj = carousel.firstChild;
            carousel.removeChild(obj);
            carousel.appendChild(obj);
        }
        }, 100
    );
}



window.addEventListener('load', sroll);*/

function handleDragStart(e) {
    this.style.opacity = '0.4';  // this / e.target is the source node.
  }
  
  var cols = document.querySelectorAll('#columns .column');
  [].forEach.call(cols, function(col) {
    col.addEventListener('dragstart', handleDragStart, false);
  });


  