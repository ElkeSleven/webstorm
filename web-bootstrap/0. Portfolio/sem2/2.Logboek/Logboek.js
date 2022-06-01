

let weekS;

let sectionSemOne = document.getElementById('content-semester1')
let innerHtmlSectioOne = '';
let logboekSemOneWeekNrJaar = 38
let logboekSemOneWeekNrSem = 1;
const logboekSemOneIndex = ["`Toelichting WPL: Planning 1<sup>ste</sup> semester <br> Kickstart / Kyss - met toelichting",
    "Werkveldverkenning: Opdracht analyse arbeidsmarkt - programmeur",
    "Werkveldverkenning: Ervaring van werksector (gastsprekers)",
    "POP: Reflecteren & feedback (Learning Path)",
    "Projectweek: Leren analyseren van projecten",
    "Projectweek: Functionele documenten leren lezen - oefening zelfredzaamheid verhogen",
    "Herfstvakantie",
    "11 en 12 november",
    "Individueel - programmeer project",
    "Individueel - programmeer project",
    "Individueel - programmeer project",
    "Individueel - programmeer project",
    "Individueel - programmeer project - portfolio",
    "Kerstvakantie",
    "Kerstvakantie",
    "Individueel - programmeer project - portfolio",
    "Testafname - the future project Thalento - Corda bezoek"]


let sectionSemTwo = document.getElementById('content-semester2')
let downlink = document.getElementById('btn-group')

let innerHtmlLogboekSemTwo = ``
const logboekSemTwoIndex = [{
    "titel" :`Sprint 1`,
    "startdatum" : `24 feb 2022`,
    "einddatum" : `11 maart 2022`,
    "index"  : ` - Team kennismaking <br> - De toels geinstaleerd die nodig waren, <br> - De homepage eerste ontwerp.`,
},{
    "titel" :`Sprint 2`,
    "startdatum" : `17 maart 2022`,
    "einddatum" : `1 april 2022`,
    "index"  : ` - Tijdens deze spint heb ik de accountpagina ontwerpen,
                <br> omdat de backend nog niet in orde was, 
                <br> heb ik de desgin's van sprint 3 gemaakt`
},{
    "titel" :`Sprint 3`,
    "startdatum" : `21 april 2022`,
    "einddatum" : `8 mei 2022`,
    "index"  : `Ik ben begonnen de backend op te lossen er waren veel errows en mijn teamgenoten wisten niet wat er fout liep, 
       nadat deze waren opgelost kunden we de fetch doen. 
       <br> - Ik de accountpagina, productpagina en winkelpagina met data voorzien die op dynamische wijze genereert
       <br> - gezorgd dat de klant zijn account gegevens kan aanpassen.
       <br> - verder heb ik boeken aan de database toegevoegd.
`

},{
    "titel" :`Sprint 4`,
    "startdatum" : `12 mei 2022`,
    "einddatum" : `31 mei 2022`,
    "index"  : `- ik heb de kalender gemaakt zodat de gebruiker zelf een huurperiode kan kiezen
      <br> - design en de funcionalitijd verschillende paginas verbeterd
      <br> - Voor de funcionalitijd van de zoekbalk gezorgt 
      <br> - een extra pagina Doneer gemaakt, waar de gebruiker zogezecht een boek kan doneren aan Paged
      <br> - extra funcionalietijd gezorgt op de contactpagina de klant kan nu rechtstreeks een mail steuren naar het email aderes van Paged
      <br> - verder heb ik boeken aan de database toegevoegd en bug opgelost.
    `,
}]



renderLogboekSemOne();
renderLogboekSemTwo();
function renderLogboekSemOne(){
    let v1 = 'Kerstvakantie';
    let v2 = 'Herfstvakantie';
    for(let i = 0; i < logboekSemOneIndex.length -1; i++){
        let logboekSemOneItem = logboekSemOneIndex[i]
            let weekJ = logboekSemOneWeekNrJaar += 1;
            if(weekJ === 52){logboekSemOneWeekNrJaar = 1}
            if (logboekSemOneItem === v1 || logboekSemOneItem === v2){
                weekS = '';
            }
            else {
               weekS = `week sem 1: ${logboekSemOneWeekNrSem++}`;
            }
            innerHtmlSectioOne += `<div class="box">
             <div class="box--inner">
              <div class="box__">
                  <div class="box__header">Week: ${weekJ}</div>
                  <div class="box__reverences">${weekS}</div>
              </div>
         
             <div class="box__index">${logboekSemOneItem}</div>
             </div>
            
</div>`
}
    sectionSemOne.innerHTML = innerHtmlSectioOne

}

function renderLogboekSemTwo(){
    downlink.innerHTML +=
        `
  <button>
  

             <a href="2021-2022%20PRO_WPL2%20-%20Teamxx%20-%20Logboek%20(1).pdf" download="Logboek-WPL2-team04">Logboek WPL2 team04</a>
</button>
<button>
             <a href="Presentation%20Wpl2%20(1).pdf" download="Precentatie-WPL2-team04">Precentatie WPL2 team04</a>

    
</button>

    
        `
    logboekSemTwoIndex.forEach(e =>{
        innerHtmlLogboekSemTwo +=
            `
         <div class="box">
             <div class="box--inner">
              <div class="box__">
                  <div class="box__header">${e.titel}</div>
                  <div class="box__reverences">${e.startdatum} t/m ${e.einddatum}</div>
              </div>
         
             <div class="box__index">${e.index}</div>
             </div>         
</div>    
            
            `
    })
    sectionSemTwo.innerHTML = innerHtmlLogboekSemTwo


}
