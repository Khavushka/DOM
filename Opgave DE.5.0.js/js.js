"use strict";

var placesToVisit = ["Hawaii",  "Florida", "Washington", "LA", "New York"];
    placesToVisit.push("Jackson");//push one item last
    placesToVisit.splice(0, 2);//remove two first items
    placesToVisit.sort();//sort element
    document.write(`<h3>USA byer, jeg gerne vil besøge: ${placesToVisit}</h3>`);
    document.getElementById("demo").innerHTML = placesToVisit;

function outputArray() {
    placesToVisit.reverse();
    document.getElementById("demo").innerHTML = placesToVisit;
};


