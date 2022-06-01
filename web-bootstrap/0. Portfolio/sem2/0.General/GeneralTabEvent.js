window.onload = function() {
   openSectionTwo()
};
document.getElementById('tab-sem1').addEventListener('click' ,openSectionOne)
document.getElementById('tab-sem2').addEventListener('click' ,openSectionTwo)


function openSectionOne(){
    if(document.getElementById("content-semester2").classList.contains("active")){
    document.getElementById('content-semester2').classList.remove('active')
        document.getElementById('tab-sem2').classList.remove('active')}

   document.getElementById('content-semester1').classList.add('active');
    document.getElementById('tab-sem1').classList.add('active');

}
function openSectionTwo(){

    if(document.getElementById("content-semester1").classList.contains("active")){
      document.getElementById('content-semester1').classList.remove('active')
        document.getElementById('tab-sem1').classList.remove('active')}


    document.getElementById('content-semester2').classList.add('active');
    document.getElementById('tab-sem2').classList.add('active');

}