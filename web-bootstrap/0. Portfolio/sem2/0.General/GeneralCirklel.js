


let indexCirkels = ''
let c = 0
let totaalAantalCirkels = 10
let m = document.getElementById('maincr')
createDivCirkels();
function createDivCirkels(){
    if( c <= totaalAantalCirkels){
        indexCirkels +=
            (  `
             <div class="background-cr" id="cr0${c}"></div>
        <div class="background-cr" id="cr1${c}"></div>   

        
        `)
        c += 1 ;
    }
    if( c === totaalAantalCirkels){
        m.innerHTML = indexCirkels;
        kluerEnPosision()
    }
    else {
        createDivCirkels();
    }

}
function kluerEnPosision(){
    /* style="transform: translate(-${randomCr}px,${randomCr}px)" style="background: linear-gradient${colorOne}, ${colorTwo}*/
    let alleCirkles = document.querySelectorAll( '[id^="cr0"]')
    let alleCirkles0 = document.querySelectorAll( '[id^="cr1"]')

    alleCirkles.forEach(e => {
        let randomCrOne = Math.floor(Math.random()*631)
        let randomCrTwo = Math.floor(Math.random()*501)
        let randomColorOne = Math.floor(Math.random()*16777215).toString(16);
        const randomColorTwo = Math.floor(Math.random()*16777215).toString(16);
        e.style.background = "linear-gradient(" + "#" + randomColorOne + "," + "#" + randomColorTwo +")";
        e.style.transform = "translate(" + -randomCrOne + "px" +"," + 0 + "px)"

    })
    alleCirkles0.forEach(e => {
        let randomCrOne = Math.floor(Math.random()*631)
        let randomCrTwo = Math.floor(Math.random()*501)
        let randomColorOne = Math.floor(Math.random()*16777215).toString(16);
        const randomColorTwo = Math.floor(Math.random()*16777215).toString(16);
        e.style.background = "linear-gradient(" + "#" + randomColorOne + "," + "#" + randomColorTwo +")";
        e.style.transform = "translate(" + randomCrOne + "px" +"," + 0 + "px)"

    })
}