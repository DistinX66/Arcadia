const email = document.getElementById("email");
const password = document.getElementById("password");
const button = document.getElementById("btn-signin");

button.addEventListener("click", checkCredentials);

function checkCredentials() {
    // Appel de l'API pour vérifier les crédentials en BDD //
    if (email.value == "test@mail.com" && password.value == "azertY123") {
        alert("vous êtes connecté");

        // Il faudra récupérer le vrai token
        const token = "jsdbqjsbdjhQVJQBSCjsiUQEBzoQLSlkqqlkd";
        setToken (token); 
      

        // Placer ce token en cookie
        setCookie(RoleCookieName, "admin", 7);


        window.location.replace("/");
    } else {
        email.classList.add("is-invalid");
        password.classList.add("is-invalid");
    }
}

