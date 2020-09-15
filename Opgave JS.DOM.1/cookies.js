function setCookie(name, value, options = {}) {

    options = {
      path: '/';
      // her kan man tilføje andreindstillinger efter behov

    };
  
    if (options.expires instanceof Date) {
      options.expires = options.expires.toUTCString();
    } //angiver en udløbsdato
  
    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
    //getCookie bruger den indbyggede function decodeURIComponent til at afkode
  
    for (let optionKey in options) {
      updatedCookie += "; " + optionKey;
      let optionValue = options[optionKey];
      if (optionValue !== true) {
        updatedCookie += "=" + optionValue;
      }
    }
  
    document.cookie = updatedCookie;
  }
  //angivet en udløbsdato
  setCookie(secure: true, 'max-age': 3600);


    //------------------mine tanker-----------

/*

function setCookie(name,value,xdays) {

    var d = new Date();
    
    d.setTime(d.getTime() + (exdays*24*60*60*1000));//udløbsdato
    
    var expires = "expires=" + d.toGMTString();
    
    document.cookie = name+"="+value+"; "+expires;
    
    }
    
    function getCookie(name) {
    
    var name = name + "=";
    
    var ca = document.cookie.split(';');

 */   

// Niels´s kode
/*function createCookie(name, value, days) {
    let expires;
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }
    else {
        expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == " ") {
            c = c.substring(1,c.length);
        }
        if (c.indexOf(nameEQ) == 0) {
            return c.substring(nameEQ.length, c.length);
        }
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}

const $ = function(foo){
    return document.getElemntById(foo);
}
const handleSubmit=function(){
    let cookies = $('cookies').value;
    let bday = $('bday').value;:
    let content = navn + bday;
    createCookie(content, 42);
    console.log(document.cookie, preventDefault);
}
const doSomething = function(){
    document.addEventListner('submit', handleSubmit);
};
window.addEventListner('load', doSomething);
*/