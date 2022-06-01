







document.getElementById('tab1').addEventListener('click', openTab1);
document.getElementById('tab2').addEventListener('click', openTab2);
document.getElementById('tab3').addEventListener('click', openTab3);
document.getElementById('tab4').addEventListener('click', openTab4);
document.getElementById('tab5').addEventListener('click', openTab5);
document.getElementById('tab6').addEventListener('click', openTab6);
window.onload = function() {
    openTab1();
}

function openTab1(){

    if(document.getElementById("section2").classList.contains("active")){
        document.getElementById("section2").classList.remove("active")
        document.getElementById("tab2").classList.remove("active")
    }
    if(document.getElementById("section3").classList.contains("active")){
        document.getElementById("section3").classList.remove("active")
        document.getElementById("tab3").classList.remove("active")
    }
    if(document.getElementById("section4").classList.contains("active")){
        document.getElementById("section4").classList.remove("active")
        document.getElementById("tab4").classList.remove("active")
    }
    if(document.getElementById("section5").classList.contains("active")){
        document.getElementById("section5").classList.remove("active")
        document.getElementById("tab5").classList.remove("active")
    }
    if(document.getElementById("section6").classList.contains("active")){
        document.getElementById("section6").classList.remove("active")
        document.getElementById("tab6").classList.remove("active")
    }

    document.getElementById("section1").classList.add("active")
    document.getElementById("tab1").classList.add("active")
}
function openTab2(){

    if(document.getElementById("section1").classList.contains("active")){
        document.getElementById("section1").classList.remove("active")
        document.getElementById("tab1").classList.remove("active")
    }
    if(document.getElementById("section3").classList.contains("active")){
        document.getElementById("section3").classList.remove("active")
        document.getElementById("tab3").classList.remove("active")
    }
    if(document.getElementById("section4").classList.contains("active")){
        document.getElementById("section4").classList.remove("active")
        document.getElementById("tab4").classList.remove("active")
    }
    if(document.getElementById("section5").classList.contains("active")){
        document.getElementById("section5").classList.remove("active")
        document.getElementById("tab5").classList.remove("active")
    }
    if(document.getElementById("section6").classList.contains("active")){
        document.getElementById("section6").classList.remove("active")
        document.getElementById("tab6").classList.remove("active")
    }

    document.getElementById("section2").classList.add("active")
    document.getElementById("tab2").classList.add("active")
}
function openTab3(){

    if(document.getElementById("section2").classList.contains("active")){
        document.getElementById("section2").classList.remove("active")
        document.getElementById("tab2").classList.remove("active")
    }
    if(document.getElementById("section1").classList.contains("active")){
        document.getElementById("section1").classList.remove("active")
        document.getElementById("tab1").classList.remove("active")
    }
    if(document.getElementById("section4").classList.contains("active")){
        document.getElementById("section4").classList.remove("active")
        document.getElementById("tab4").classList.remove("active")
    }
    if(document.getElementById("section5").classList.contains("active")){
        document.getElementById("section5").classList.remove("active")
        document.getElementById("tab5").classList.remove("active")
    }
    if(document.getElementById("section6").classList.contains("active")){
        document.getElementById("section6").classList.remove("active")
        document.getElementById("tab6").classList.remove("active")
    }

    document.getElementById("section3").classList.add("active")
    document.getElementById("tab3").classList.add("active")
}
function openTab4(){
    if(document.getElementById("section1").classList.contains("active")){
        document.getElementById("section1").classList.remove("active")
        document.getElementById("tab1").classList.remove("active")
    }
    if(document.getElementById("section2").classList.contains("active")){
        document.getElementById("section2").classList.remove("active")
        document.getElementById("tab2").classList.remove("active")
    }
    if(document.getElementById("section3").classList.contains("active")){
        document.getElementById("section3").classList.remove("active")
        document.getElementById("tab3").classList.remove("active")
    }

    if(document.getElementById("section5").classList.contains("active")){
        document.getElementById("section5").classList.remove("active")
        document.getElementById("tab5").classList.remove("active")
    }
    if(document.getElementById("section6").classList.contains("active")){
        document.getElementById("section6").classList.remove("active")
        document.getElementById("tab6").classList.remove("active")
    }

    document.getElementById("section4").classList.add("active")
    document.getElementById("tab4").classList.add("active")
}
function openTab5(){
    if(document.getElementById("section1").classList.contains("active")){
        document.getElementById("section1").classList.remove("active")
        document.getElementById("tab1").classList.remove("active")
    }
    if(document.getElementById("section2").classList.contains("active")){
        document.getElementById("section2").classList.remove("active")
        document.getElementById("tab2").classList.remove("active")
    }
    if(document.getElementById("section3").classList.contains("active")){
        document.getElementById("section3").classList.remove("active")
        document.getElementById("tab3").classList.remove("active")
    }
    if(document.getElementById("section4").classList.contains("active")){
        document.getElementById("section4").classList.remove("active")
        document.getElementById("tab4").classList.remove("active")
    }

    if(document.getElementById("section6").classList.contains("active")){
        document.getElementById("section6").classList.remove("active")
        document.getElementById("tab6").classList.remove("active")
    }

    document.getElementById("section5").classList.add("active")
    document.getElementById("tab5").classList.add("active")
}
function openTab6(){
    if(document.getElementById("section1").classList.contains("active")){
        document.getElementById("section1").classList.remove("active")
        document.getElementById("tab1").classList.remove("active")
    }
    if(document.getElementById("section2").classList.contains("active")){
        document.getElementById("section2").classList.remove("active")
        document.getElementById("tab2").classList.remove("active")
    }
    if(document.getElementById("section3").classList.contains("active")){
        document.getElementById("section3").classList.remove("active")
        document.getElementById("tab3").classList.remove("active")
    }
    if(document.getElementById("section4").classList.contains("active")){
        document.getElementById("section4").classList.remove("active")
        document.getElementById("tab4").classList.remove("active")
    }
    if(document.getElementById("section5").classList.contains("active")){
        document.getElementById("section5").classList.remove("active")
        document.getElementById("tab5").classList.remove("active")
    }


    document.getElementById("section6").classList.add("active")
    document.getElementById("tab6").classList.add("active")
}