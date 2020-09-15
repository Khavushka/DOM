"use strict";

function outputArray(theArray) {
    let placesToVisit = ["Hawaii",  "Florida", "Washington", "LA", "New York"];
    placesToVisit.push("Jackson");//push one item last
    placesToVisit.splice(0, 2);//remove two first items
document.write(`<h3>USA byer, jeg gerne vil besøge: ${placesToVisit}</h3>`);

}
