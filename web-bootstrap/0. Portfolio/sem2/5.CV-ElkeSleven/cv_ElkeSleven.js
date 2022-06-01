/*
{
    "date":``,
    "locatie":``,
    "beschrijving":``,
    "bedrijf":``,
    "beroep":``
},
*/

const werkervaaring = [{
    "date":`09-2021 tot nu`,
    "locatie":`Hasselt`,
    "beschrijving":`Graduaat Programmeren`,
    "bedrijf":``,
    "beroep":`Student`
},{
    "date":`12-2016 tot 05-2020`,
    "locatie":`Genk`,
    "beschrijving":`controleren, inpakken van Goederen klaarmaken voor de klant`,
    "bedrijf":`Pluspack`,
    "beroep": `Productiemedewerker magzijnmedewerker`,
},{
    "date":`105-2016 tot 11-2016`,
    "locatie":`Kessenich`,
    "beschrijving":`Goederen uit de rek halen en  klaarmaken voor de klant`,
    "bedrijf":`Kessenich Intercash  `,
    "beroep":`orderpicker`
},{
    "date":`03-2016 tot 04-2016`,
    "locatie":`Maaseik`,
    "beschrijving":`Champignons plukken en condoleren op kwaliteit`,
    "bedrijf":`Maaseik Champ`,
    "beroep":`Champigonplukster`
},{
    "date":`09-2015 tot 10-2015`,
    "locatie":`Bree`,
    "beschrijving":`Groenten controleren en in protten steken`,
    "bedrijf":`Nolico`,
    "beroep":`Productiemedewerker`
},{
    "date":`07-2015 tot 08-2015`,
    "locatie":`Bree`,
    "beschrijving":`Champignons plukken en condoleren op kwaliteit`,
    "bedrijf":`Bree Champ`,
    "beroep":`Champigonplukster`
},{
    "date":`10-2013 tot 02-2015`,
    "locatie":`Maasmechelen`,
    "beschrijving":`Kippen slachten , kippen vlees controleren en inpakken , … `,
    "bedrijf":`Pluckon`,
    "beroep":`Productiemedewerker`
},{
    "date":`09-2013 tot 10-2013`,
    "locatie":`Maasmechelen`,
    "beschrijving":`Rekken vullen , Kassa`,
    "bedrijf":`Delhaize`,
    "beroep":`Winkelmedewerker`
},{
    "date":`tot 09-2013`,
    "locatie":``,
    "beschrijving":`Werken als student bij cafés , in een winkels en de frituur`,
    "bedrijf":``,
    "beroep":`Student`
},]
let innerHtmlWerkervaaring = "";
let sectionWerkervaaring = document.getElementById('content-semester2')
let downlink = document.getElementById('btn-group')
renderWerkervaring();
function renderWerkervaring(){
    downlink.innerHTML +=
        `
             <button><a href="cv_ElkeSleven_2022.docx" download="CV-Elke-Sleven">CV in Word</a></button>

        `;
    werkervaaring.forEach(obj => {
        innerHtmlWerkervaaring +=
            `<div class="box">
             <div class="box--inner">
              <div class="box__">
                  <div class="box__header">${obj.beroep}</div>
                  <div class="box__reverences">${obj.date}</div>
              </div>
             
             <div class="box__index">${obj.beschrijving}</div>
             
             </div>      
</div>`
    })
    sectionWerkervaaring.innerHTML = innerHtmlWerkervaaring
}