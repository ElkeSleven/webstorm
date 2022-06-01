let ingelogdeGebruiker = {};

const setData = (ev) => {
    ev.preventDefault();  //to stop the form submitting

//getting localStorage
    let localStorageUser = JSON.parse(localStorage.getItem('ingelogdeGebruiker')) // haald gegevens op   (moet op ieder pagina waaar de storage wil gebruiken
      if(localStorageUser)
    {
       ingelogdeGebruiker = localStorageUser;
    }


    // ingelogdeGebruiker = JSON.parse(gegevensIngelogdeGebruiker);  // maakt van de string een object


    // gegevens instellen
    ingelogdeGebruiker.achternaam =  document.getElementById('achternaam').value;
    ingelogdeGebruiker.voornaam = document.getElementById('voornaam').value;
    //ingelogdeGebruiker.geboortedatum = document.getElementById('geboortedatum').value;
    ingelogdeGebruiker.geslacht = document.getElementById('geslacht').value;
    // ingelogdeGebruiker.mailaderes = document.getElementById('mailaderes').value;
     ingelogdeGebruiker.aderes = document.getElementById('aderes').value;
    // ingelogdeGebruiker.wachtwoord = document.getElementById('wachtwoord').value;

//saving to localStorage
    localStorage.setItem('gegevensIngelogdeGebruiker', JSON.stringify(ingelogdeGebruiker)); // slaat gegevens op

// tonen op de pagina
    console.warn('added', ingelogdeGebruiker);
    let data = document.querySelector('#test');
    data.textContent = '\n' + JSON.stringify(ingelogdeGebruiker);}


// start de functie getData
document.getElementById('btn').addEventListener('click', setData);