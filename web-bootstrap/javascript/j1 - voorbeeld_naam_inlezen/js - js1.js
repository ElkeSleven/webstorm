
let volNaam = [];
// example {id:1592304983049, title: 'Deadpool', year: 2015}
const addVoledigeNaam = (ev)=>{
    ev.preventDefault();  //to stop the form submitting
    let voledigeNaam = {
        id: Date.now(),
        voornaam: document.getElementById('voornaam').value,
        achternaam: document.getElementById('achternaam').value
    }
    volNaam.push(voledigeNaam);
    document.forms[0].reset(); // to clear the form for the next entries
    //document.querySelector('form').reset();

    //for display purposes only
    console.warn('added' , {volNaam} );
    let pre = document.querySelector('#msg pre');
    pre.textContent = '\n' + JSON.stringify(volNaam, '\t', 2);


    //saving to localStorage
    localStorage.setItem('MyMovieList', JSON.stringify(volNaam) );
}
    document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', addVoledigeNaam);
});