const tokenCookieName = "accesstoken";

const RoleCookieName = "role";
// Assurez-vous que l'élément existe avant d'ajouter l'écouteur d'événement
const signoutBtn = document.getElementById("singoutBtn");

signoutBtn.addEventListener("click", signout);

function getRole(){
    return getCookie(RoleCookieName); 

}

function signout() {
    eraseCookie(tokenCookieName);
    eraseCookie(RoleCookieName); 
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

function eraseCookie(name) {
    document.cookie = name + '=; Max-Age=-99999999; path=/';
    if (!getCookie(name)) {
        console.log(`Le cookie '${name}' a été supprimé.`);
    } else {
        console.log(`Le cookie '${name}' n'a pas été supprimé.`);
    }
}

function isConnected(){
    if(getCookie() == null || getCookie == undefined){
        return false;
    }
    else{
        return true;
    }
}







/*Roles Arcadia : 

- disconnected
- connected (Admin, Employé, Vétérinaire ou client [Disconnected])
- admin
- employé
- vétérinaire

*/

// Function to simulate user connection status
function isUserConnected() {
    // Simulate checking connection status
    // Replace this with actual logic, e.g., checking a session or token
    return localStorage.getItem('userConnected') === 'true';
}

// Function to update button visibility based on user status
function updateButtons() {
    const connexionButton = document.getElementById('Connexion');
    const deconnexionButton = document.getElementById('singoutBtn');

    if (isUserConnected()) {
        connexionButton.classList.add('hidden');
        deconnexionButton.classList.remove('hidden');
    } else {
        connexionButton.classList.remove('hidden');
        deconnexionButton.classList.add('hidden');
    }
}

// Event listeners for buttons to toggle connection status
document.getElementById('Connexion').addEventListener('click', function() {
    localStorage.setItem('userConnected', 'true');
    updateButtons();
});

document.getElementById('singoutBtn').addEventListener('click', function() {
    localStorage.setItem('userConnected', 'false');
    updateButtons();
});

// Initial button update on page load
window.onload = updateButtons;