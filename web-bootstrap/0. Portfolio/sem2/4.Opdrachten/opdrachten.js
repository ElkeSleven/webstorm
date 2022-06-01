let sectionSemOne = document.getElementById('content-semester1')
const opdrachtenSemOneDate = ["14-10","28-10","10-01","10-01"]
const opdrachtenSemOneHeader = ["Arbeidsmarkt","Seminarieverslag","Project web","Project C#"]
const opdrachtenSemOneIndex = ["voor deze opdracht moest ik een analyse maken van enkele vacatures voor een programmeur. ik kwam erachter dat er nog veel afkortingen en programmas zijn wat ik NOG niet ken ","Verslag schrijven van een seminarie, was zeer interesant  ","Portfolio semester 1: mijn html en css is nog niet op het punt wat het moet zijn","Galgje app bouwen: dit is goed gegaan =D ik had er een 18/20 op  "]
let innerHtmlSectioOne = ""
let innerHtmlSectioTwo = ""



const opdrachtenSemTwoIndex = [{
   "titel": "Full working website",
    "index" : `Voor WPL2 hebben we een compelte website moeten maken frontend en backend`,
     "tools" :`tools: HTML, CSS, JS, API, SQL, C#`
}]
let sectionSemTwo = document.getElementById('content-semester2')
let downlink = document.getElementById('btn-group')

renderSectionSemOne()
renderSectionSemTwo()
function renderSectionSemOne(){
    for(let i = 0; i < opdrachtenSemOneIndex.length -1; i++){
        innerHtmlSectioOne +=
            `<div class="box">
             <div class="box--inner">
              <div class="box__">
                  <div class="box__header">${opdrachtenSemOneHeader[i]} | ${opdrachtenSemOneDate[i]}</div>
                  <div class="box__reverences">${opdrachtenSemOneHeader[i]} | ${opdrachtenSemOneDate[i]}</div>
              </div>
         
             <div class="box__index">${opdrachtenSemOneIndex[i]}</div>
             </div>
            
</div>`
    }
    sectionSemOne.innerHTML = innerHtmlSectioOne
}

function renderSectionSemTwo(){
    downlink.innerHTML  +=
        `
             <button><a href="FrontEnd.zip" download="Frontend-WPL2-team04">Frontend WPL2 team04</a></button>
             <button><a href="PXL2022PlanningToolTeam_04%20(1).zip" download="Backend-WPL2-team04">Backend WPL2 team04</a></button>

    
        `



    opdrachtenSemTwoIndex.forEach(e => {
        innerHtmlSectioTwo =`
               <div class="box">
            <div class="box--inner">
                <div class="box__">
                    <div class="box__header">${e.titel}</div>
                    <div class="box__reverences">Sem2 | WPL2</div>
                </div>

                <div class="box__index">${e.index} <br> ${e.tools}</div>
            </div>
        </div>
        
        `




    })
    sectionSemTwo.innerHTML = innerHtmlSectioTwo
}