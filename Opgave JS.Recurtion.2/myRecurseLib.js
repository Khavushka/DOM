"use strict";

function pow(r, e) {
        let res = 1;
        while (e > 0) {
            res *= r;
            e -= 1;
        }
        return res;
    }
    let r = Number(prompt('Indsæt firste tal'));
    let e = Number(prompt('Indsæt second tal'));
    document.write(`<p>Resultat: ${r}<sup>${e}</sup> = ${pow(r, e)}</p>`);