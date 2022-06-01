
// hier heb ik dit gevonden
//https://css-tricks.com/snippets/javascript/random-hex-color/


const headTag = document.getElementsByTagName('head')[0];
const styleTag = document.createElement("style");

setCollor()
function setCollor(){
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    //console.log(randomColor.length)
    if(randomColor.length > 5){
        let randomCol = "#" + randomColor;
       // console.log(randomCol)
        /*a5587c*/
        styleTag.innerHTML = `
:root {
    --color-accent: ${randomCol}
   
}
`;
        headTag.appendChild(styleTag);
    }
    else{
        // als er een waarde is minder dan 6 karakters
        setCollor()
    }
}




