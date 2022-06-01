
const booken =[
    {
        categorie: 'A',
        title: 'titel boek',
        huurprijs: '7.50 / Maand',
        auteur: 'auteur',
        uitgevrij: 'uitgeverij',
        aantalBladzijden: 320,
        taal: 'nederlands',
        reeks: 'reeks',
        reeksnummer: 'reeksnr',
        prodctcode: '5115E13213',
        verschijningsdatum: '12/05/2014',
        uitvoering: 'hardcover',
        afmetingen: '10mm x 50mm x 2cm',
        gewicht : '306g'
    }
]

let selectedCategories = 'All';

createCategoriesSelect();
createBoekCards();
function createCategoriesSelect() {

    // select = categories ;
    const licenses = ['All', 'A', 'B'];

    let categories = document.createElement('selectCategories');
    categories.name = 'categorie';

    // Creëer de options binnen de select en voeg ze toe
    categories.forEach(categorie => {
        let option = document.createElement('option');
        option.value = license;
        option.innerText = license;
        select.appendChild(option);
    });

    // bind event listener voor het change event
    select.addEventListener('change', (event) => {
        selectionChangedCounter++;
        document.getElementsByClassName('card-container')[0].remove();
        createVehicleCards();
    });
    document.body.appendChild(select);

}





 const vehicles  = [
    {
        model: 'Mercedes AMG',
        license: 'B',
        odometer: 0,
        price: 240000,
        imgPath: 'mercedes-amg.jpg'
    },
    {
        model: 'Kawasaki Ninja 400',
        license: 'A',
        odometer: 11500,
        price: 5500,
        imgPath: 'kawasaki-ninja.jpg'
    },
    {
        model: 'Ford Mondeo',
        license: 'B',
        odometer: 14000,
        price: 30000,
        imgPath: 'ford-mondeo.jpeg'
    },

    {
        model: 'Ducati Panigale Superbike',
        license: 'A',
        odometer: 2499,
        price: 21999,
        imgPath: 'ducati-panigale.jpg'
    },
    {
        model: 'Ford Fiesta ST',
        license: 'B',
        odometer: 45124,
        price: 19999,
        imgPath: 'ford-fiesta-st.jpg'
    },
    {
        model: 'Ducati Panigale Superbike 2',
        license: 'A',
        odometer: 1000,
        price: 21999,
        imgPath: 'ducati-panigale.jpg'
    },

]; //
let selectedLicense = 'All'; ///

let selectionChangedCounter = 0; ///not

createHeaderElements();   //functie naam voor header te maken      /// not
createLicenseSelect();   //functie naam voor optie block te maken  ///
createVehicleCards();    // functie voor card te maken ///

// voor header te maken
function createHeaderElements() {
    let h1 = document.createElement('h1');
    h1.innerText = 'Car finder';
    document.body.appendChild(h1);

    // voor label voor optie block  te maken
    let selectLabel = document.createElement('label');
    selectLabel.for = 'licenseSelect';
    selectLabel.innerText = 'Driving license ';
    document.body.appendChild(selectLabel);

}  ///not
// functie voor optie block  te maken
function createLicenseSelect() {
    const licenses = ['All', 'A', 'B'];

    let select = document.createElement('select');
    select.name = 'license';

    // Creëer de options binnen de select en voeg ze toe
    licenses.forEach(license => {
        let option = document.createElement('option');
        option.value = license;
        option.innerText = license;
        select.appendChild(option);
    });

    // bind event listener voor het change event
    select.addEventListener('change', (event) => {
        selectionChangedCounter++;
        document.getElementsByClassName('card-container')[0].remove();
        createVehicleCards();
    });
    document.body.appendChild(select);

}

// functie voor card te maken
function createVehicleCards() {
    let vehiclesToRender = [];

    // not
    // Filter en orden de array van objecten die we willen gaan renderen.
    if (selectionChangedCounter < 3) {
        let filteredVehicles = filterVehiclesArray();
        vehiclesToRender = orderFilteredArray(filteredVehicles);
    } else {
             vehiclesToRender = orderByModulo();
    }

    // Eens we een gefilterde en geordende array hebben kunnen we hierover
    // lopen om per obj een card te renderen.
    let cardContainer = document.createElement('div');
    cardContainer.classList.add('card-container');
    document.body.appendChild(cardContainer);


    vehiclesToRender.forEach(vehicle => {
        let card = document.createElement('div');
        card.classList.add('card');
        let cardImg = document.createElement('img');
        cardImg.classList.add('card__img');
        cardImg.src = `./assets/${vehicle.imgPath}`;
        let detailsContainer = document.createElement('div');
        detailsContainer.classList.add('card__details');
        detailsContainer.innerHTML = `<h2>${vehicle.model}</h2>
                                      <div>
                                      <label>Price: <span> ${vehicle.price}</span> EUR</label>
                                      <label>Odometer: ${vehicle.odometer} km</label>
                                      </div>`;
        if (vehicle.price > 20000) {
            let span = detailsContainer.getElementsByTagName('span')[0];
            span.style.color = 'darkorange';
        }

        card.appendChild(cardImg);
        card.appendChild(detailsContainer);
        document.getElementsByClassName('card-container')[0].appendChild(card);
    });
}



// not
// Deze functie filterd enkel de voertuigen van het geselecteerde type uit de array.
function filterVehiclesArray() {
    selectedLicense = document.getElementsByName('license')[0].value;
    if (selectedLicense === 'All') {
        return vehicles;
    } else {
        return vehicles.filter(vehicle => {
            return vehicle.license === selectedLicense;
        })
    }

}

// not
// Deze functie gaat de geselecteerde voertuigen ordenen zoals beschreven in de opgave. op prijs
function orderFilteredArray(filteredArray) {
    let orderedArray = filteredArray; // in geval van 'alle' wordt gewoon de initiële array returned.

    if (selectedLicense === 'A') { // order wijze van motto's
        orderedArray = filteredArray.sort((a, b) => {
            if (a.price === b.price) {
                return a.odometer < b.odometer ? -1 : 1
            } else {
                return a.price < b.price ? -1 : 1
            }
        });
    } else if (selectedLicense === 'B') { // order wijze van auto's
        orderedArray = filteredArray.sort((a, b) => {
            let firstCarName = a.model.toLowerCase();
            let secondCarName = b.model.toLowerCase();
            return (firstCarName < secondCarName) ? -1 : (firstCarName > secondCarName) ? 1 : 0;
        }).reverse();
    }

    return orderedArray;
}



//not
// Indien 3x geklikt wordt moet op deze manier geordend worden.
function orderByModulo() {
    return vehicles.sort((a, b) => {
        let charactersInA = a.model.length;
        let charactersInB = b.model.length;

        let calculateModuloA = (charactersInA + a.odometer) % selectionChangedCounter;
        let calculateModuloB = (charactersInB + b.odometer) % selectionChangedCounter;
        return (calculateModuloA < calculateModuloB) ? -1 : (calculateModuloA > calculateModuloB) ? 1 : 0;
    });
}


//// not
// // Deze functie filterd enkel de voertuigen van het geselecteerde type uit de array.
// function filterVehiclesArray() {
//     selectedLicense = document.getElementsByName('license')[0].value;
//     if (selectedLicense === 'All') {
//         return vehicles;
//     } else {
//         return vehicles.filter(vehicle => {
//             return vehicle.license === selectedLicense;
//         })
//     }
//
// }
//
// // not
// // Deze functie gaat de geselecteerde voertuigen ordenen zoals beschreven in de opgave. op prijs
// function orderFilteredArray(filteredArray) {
//     let orderedArray = filteredArray; // in geval van 'alle' wordt gewoon de initiële array returned.
//
//     if (selectedLicense === 'A') { // order wijze van motto's
//         orderedArray = filteredArray.sort((a, b) => {
//             if (a.price === b.price) {
//                 return a.odometer < b.odometer ? -1 : 1
//             } else {
//                 return a.price < b.price ? -1 : 1
//             }
//         });
//     } else if (selectedLicense === 'B') { // order wijze van auto's
//         orderedArray = filteredArray.sort((a, b) => {
//             let firstCarName = a.model.toLowerCase();
//             let secondCarName = b.model.toLowerCase();
//             return (firstCarName < secondCarName) ? -1 : (firstCarName > secondCarName) ? 1 : 0;
//         }).reverse();
//     }
//
//     return orderedArray;
// }
//
//
//
// //not
// // Indien 3x geklikt wordt moet op deze manier geordend worden.
// function orderByModulo() {
//     return vehicles.sort((a, b) => {
//         let charactersInA = a.model.length;
//         let charactersInB = b.model.length;
//
//         let calculateModuloA = (charactersInA + a.odometer) % selectionChangedCounter;
//         let calculateModuloB = (charactersInB + b.odometer) % selectionChangedCounter;
//         return (calculateModuloA < calculateModuloB) ? -1 : (calculateModuloA > calculateModuloB) ? 1 : 0;
//     });
// }



