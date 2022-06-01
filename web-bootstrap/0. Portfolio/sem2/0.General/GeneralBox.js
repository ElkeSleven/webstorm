
// hier heb ik dit leren kennen
//https://www.youtube.com/watch?v=T8EYosX4NOo

const sections = document.querySelectorAll('.box');
const options = {
  //  root : null,        // null is de staandaard waarde (de vieuwport)
    threshold: 0,         // 1 of 0
    rootMargin : "-35% 100% -23% 100%"      //
};

const observer  = new IntersectionObserver(function (enties, observ){
    enties.forEach(entry => {
        //console.log(entry);
        //console.log(entry.target);
           if(!entry.isIntersecting){
               entry.target.classList.remove("red")
           }
        else {
            entry.target.classList.add("red")
        }
    });
}, options);
sections.forEach(s => {
    observer.observe(s)
})



