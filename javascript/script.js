const tokenCookieName = "accesstoken";

const RoleCookieName = "role";
// Assurez-vous que l'élément existe avant d'ajouter l'écouteur d'événement
const signoutBtn = document.getElementById("signoutBtn");

if (signoutBtn) {
    signoutBtn.addEventListener("click", signout);
}

function signout() {
    eraseCookie(email);
    window.location.reload();
}



function setToken(token) {
    setCookie(tokenCookieName, token, 7);
}



function getToken() {
    return getCookie(tokenCookieName);
}

function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function eraseCookie(value) {
    document.cookie = value + '=; Max-Age=-99999999;';
}

function isConnected(){
    if(getCookie() == null || getCookie == undefined){
        return false;
    }
    else{
        return true;
    }
}





function newFunction() {
    if (isConnected()) {
        alert("Je suis connecté");
    }
    else {
        alert("je ne suis pas connecté");
    }
}
