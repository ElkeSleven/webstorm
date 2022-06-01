// tijdelijke moet vervangen worden met de database
// data toevoegen aa local storage
localStorage.setItem("ingelogdeGebruiker", JSON.stringify({
    voornaam : "none",
    achternaam : "none",
    geboortedatum : "dd mm yyyy",
    geslacht : "niet ingevuld",
    mailaderes : "testermail@gmail.com",
    aderes : "testersstraat 20 0000 hasselt",
    telefoonnummer : "niet ingevuld",
    wachtwoord : "123test"
}))

function getData(){

//getting localStorage
let ingelogdeGebruiker = JSON.parse(localStorage.getItem('ingelogdeGebruiker')) // haald gegevens op   (moet op ieder pagina waaar de storage wil gebruiken

// tonen op de pagina
let data = document.querySelector('#test');
data.textContent = '\n' + JSON.stringify(ingelogdeGebruiker);

}

// start de functie getData als pagina word geopend
window.onload = function() {
    getData()   }

// start de functie getData met knop
// document.getElementById('btn').addEventListener('click', getData);

