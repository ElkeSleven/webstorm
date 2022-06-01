
const competentiesSemOne = [
    {"header" : "Ontwerper", "index" : `Inschatten of de realisatie van de opdracht haalbaar is op basis van het ontwerp

en de gecommuniceerde projectdoelstellingen.

De gegradueerde maakt op basis van de analyse een onderbouwd voorstel voor <br>a) de standaarden van het ontwerp,
<br>
b) de programmeertaal
<br>
c) de methodiek <br> De gegradueerde stemt het voorstel af met de ontwikkelaar,

softwarearchitect of de functioneel analist. `}
    ,{"header" : "Programmeur", "index" :`De gegradueerde realiseert (onderdelen van) softwareapplicaties en gegevensstructuren op basis van de analyse en het projectplan, de beschikbare tools, de vooropgestelde methodiek en de eigen planning.<br>De gegradueerde is medeverantwoordelijk voor de eigen ICT-infrastructuur en draagt bij tot de gedeelde ICT-infrastructuur nodig voor het ontwikkelen, testen en in productie brengen van projecten.

<br> OLR5 De gegradueerde programmeert softwaretoepassingen volgens de standaarden en afspraken binnen de organisatie zoals beschreven in de bedrijfsprocedures, (kwaliteits)standaarden, de voorschriften en eisen voor informatieveiligheid. <br> OLR6 De gegradueerde gaat in overleg met de ontwikkelaar, projectleider of functioneel analist na of het opgeleverde product onderhoud en/of aanpassingen nodig heeft. De gegradueerde voert het onderhoud en de aanpassingen op een projectmatige manier uit, rekening houdend met eerder gemaakte afspraken. `}
    ,{"header" : "Tester", "index" :`De gegradueerde gaat volgens (zelf ontwikkelde) testscenario’s de werking en functionaliteit van de gerealiseerde code na, gebruikmakend van de juiste tools, en verbetert deze op basis van feedback van de ontwikkelaar, de projectleider en/of gebruikers`}
    ,{"header" : "Communicator / Teamspeler", "index" :`OLR8 De gegradueerde werkt constructief en actief samen in een multidisciplinair team en participeert actief tijdens overlegmomenten. De gegradueerde zoekt mee naar oplossingen om vaak voorkomende problemen te vermijden.
<br>
OLR9 De gegradueerde communiceert en rapporteert efficiënt over het geleverde werk, aangepast aan het doelpubliek en gebruikt hiervoor indien nodig het gepaste Engelstalige vakjargon.
<br>
De gegradueerde documenteert de zelf ontwikkelde applicaties op een adequate en overzichtelijke manier volgens de afspraken binnen de organisatie. De gegradueerde verwerkt alle documentatie met betrekking tot de eigen realisaties in de kennisdatabank en zorgt ervoor dat afwijkende of nieuwe oplossingen hierin geïntegreerd worden. De gegradueerde geeft kwalitatieve input voor de gebruikershandleidingen, referentiegidsen en online hulpbronnen.`}
    ,{"header" : "LevensLang lerende IT-professional", "index" :`De gegradueerde onderhoudt zijn deskundigheidsniveau door relevante IT-ontwikkelingen op te volgen.
<br>
De gegradueerde is zelfkritisch, ontwikkelt de nodige zelfkennis en gebruikt deze om zijn persoonlijke en professionele groei te bevorderen.
<br>
De gegradueerde handelt deontologisch en houdt rekening met de veiligheids- en privacyrichtlijnen;`}

]
let innerHtmlSectioOne = '';
let sectionSemOne = document.getElementById('content-semester1')
let sectionSemTwo = document.getElementById('content-semester2')


renderCompenentiesSemOne()
function renderCompenentiesSemOne(){
    competentiesSemOne.forEach(obj => {
        innerHtmlSectioOne +=
            `<div class="box">
             <div class="box--inner">
              <div class="box__">
                  <div class="box__header">${obj.header}</div>
                  <div class="box__reverences"></div>
              </div>
         
             <div class="box__index">${obj.index}</div>
             </div>      
</div>`
    })
    sectionSemTwo.innerHTML = innerHtmlSectioOne
}

