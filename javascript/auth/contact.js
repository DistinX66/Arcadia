// Implémenter le javascript de contact

const prenom = document.getElementById("Prénom");
const nom = document.getElementById("Nom");
const email = document.getElementById("email");
const textarea1 = document.getElementById("Textarea1");
const btnValidation=document.getElementById("btn-validation");

prenom.addEventListener("keyup", validateForm);
nom.addEventListener("keyup", validateForm);
email.addEventListener("keyup", validateForm);

function validateForm(){
    const prenomOk = validateRequired(prenom);
    const nomOk =validateRequired(nom);
    const emailOk =validateRequired(email);

    if(nomOk && prenomOk && emailok){
        btnValidation.disabled= false;
    }

    else {
        btnValidation.disabled= true;

    }

}

function validateMail(input){
    // Définir une expression régulière pour l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mailUser = input.value;

    if(mailUser.match(emailRegex)){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
        
    } else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}

function validateRequired(input){
    if(input.value != ''){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    } else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}

function validateRequired(input){
    if(input.value != ''){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
    } else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
    }
}
