
let index = [
    `Elke Sleven`,
    `Leerling Graduaat Programmeren`,
    `IK heb voor deze richting gekozen omdat het fijn leek,`,
    `en ben verlieft geworden op:`,
    `het logisch reneneren,`,
    `de creative vrijheid,`,
    `en de uitdagen die ik tegen kom`,
    `Daarnaast vind ik het natuurlijk niet vervelen`,
    `om veel achter de computer te zitten`
]
let innerHtmlStartPagina = "";
let startPagina = document.getElementById('StartPagina');





renderStartPagina();
function renderStartPagina(){
    for(let i = 0;i <= index.length - 1; i++){
        innerHtmlStartPagina +=
            `
        <section>      
       </div>
        <div class="outer-text-box" ">
            <div class="text-box">
                <!-- <div class="bev">  </div>-->
                <span>${index[i]}</span>
                <!--<div class="aft"> </div>-->
                
            </div>
        </div>
    </section>
            `
    }
   startPagina.innerHTML = innerHtmlStartPagina;

}

