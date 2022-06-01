




const compe = document.getElementById('content-semester2')
let innerHtmlCompe = ''
const downlink = document.getElementById('btn-group')
let compeIndex =  [{
    "tilte":`Werkverdeling van ons team`,
    "index":`Winkelpagina,Productpagina, Accountpagina,Contactpagina,Doneerpagina,Startpagina,Kalender
             Bestelling opslaan, `,
    "waar":`Frontend`,

},{
    "tilte":`Werkverdeling van ons team`,
    "index": `WPF boek Terug, Classes, entities, controllers, SQL query’s, Email naar klant (doneerpagina), Email naar Paged (Contactpagina) `,
    "waar":`Backend`,
},{
    "tilte":`Werkverdeling van ons team`,
    "index": `Tabellen en kolommen maken (zonder constains) , Boeken toevoegen aan databank`,
    "waar":`Database`,
},{
    "tilte":`Persoonlijke reflectie`,
    "index": `Mijn is CSS en javascript zijn beter geworden <br>Geleerd hoe je met een fetch data kan ontvangen en versturen`,
    "waar":`Technische skills`,
},{
    "tilte":`Persoonlijke reflectie`,
    "index": `Ik heb geleerd dat in een team werken niet altijd gemakkelijk is <br>
                Ik heb geleed dat ik soms rustigere aan moet doen en andere een kans moet geven`,
    "waar":`Soft skills`,
},{
    "tilte":`Persoonlijke reflectie`,
    "index": `Ik heb geleerd dat ik mijn clockify moet aanzetten <br>
                Het belang van scrumbord en daily stand ups `,
    "waar":`Proces`,
}]

renderCompeteties();
function renderCompeteties(){

    downlink.innerHTML  +=
        `
             <button><a href="beschrijvingCompetenties.html">Beschrijving competenties</a></button
        `
    compeIndex.forEach(obj => {
        innerHtmlCompe +=
            `<div class="box">
             <div class="box--inner">
              <div class="box__">
                  <div class="box__header">${obj.tilte}</div>
                  <div class="box__reverences">${obj.waar}</div>
              </div>
         
             <div class="box__index">${obj.index}</div>
             </div>      
</div>`
    })

    compe.innerHTML = innerHtmlCompe;
}