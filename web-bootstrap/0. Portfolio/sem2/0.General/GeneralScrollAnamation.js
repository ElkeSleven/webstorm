

// hier heb ik dit gevonden
// https://www.youtube.com/watch?v=-FJSedZAers

    const scrollTrackerInner = document.querySelector(".scroll--inner");

    window.addEventListener('scroll', function () {
        let h = document.documentElement;
        let st = h.scrollTop || document.body.scrollTop; // plaats waar we zijn
        let sh = h.scrollHeight || document.body.scrollHeight  // hoogte van het document

        let percent = st / (sh - h.clientHeight) * 99;  // 99 omdat 100 een bug geeft als in de pagian naar beneden blijt scrollen
       // console.log(percent)
        scrollTrackerInner.style.width = percent + '%'
    })
