let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = () =>{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}



// Read more */

const btn = document.querySelector('.read-more-btn');

const text = document
    .querySelector('.card__read-more');

const cardHolder = document
    .querySelector('.card-holder');

cardHolder
    .addEventListener('click', e => {

        const current = e.target;

        const isReadMoreBtn = current.className.includes('read-more-btn');

        if (!isReadMoreBtn)
            return;

        const currentText = e.target.parentNode.querySelector('.card__read-more');

        currentText.classList.toggle('card__read-more--open');

        current.textContent = current.textContent.includes('lees minder...') ? 'Read Less...' : 'Read More...';

    });
/* Login */
let attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if ( username === "vahid@gmail.com" && password === "123"){
        alert ("Login successfully");
        window.location = "success.html"; // Redirecting to other page.
        return false;
    }
    else{
        attempt --;// Decrementing by one.
        alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
        if( attempt === 0){
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }
}

let ingelogdeGebruiker = localStorage.getItem('ingelogdeGebruiker');   // haald gegevens op   (moet op ieder pagina waaar de storage wil gebruiken
ingelogdeGebruiker = JSON.parse(ingelogdeGebruiker);  // maakt van de string een object
ingelogdeGebruiker.voornaam = document.getElementById('achternaam').value;
// tijdelijke functie zodat ik al verder kan werken aan de profiel Pagina
function loginUser(){
    localStorage.setItem("ingelogdeGebruiker", JSON.stringify({
        voornaam : "elke",
        achternaam : "sleven",
        geboortedatum : "22 april 1994",
        geslacht : "vrouw",
        mailaderes : "testermail@gmail.com",
        aderes : "testersstraat 20 0000 hasselt",
        wachtwoord : "123test"
    }))
}
