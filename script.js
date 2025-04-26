function loading() {
    if (document.querySelector("#yellow1") && document.querySelector("#yellow2") && document.querySelector("#loader h1")) {
        var t1 = gsap.timeline();
        t1.to("#yellow1", {
            top: "-100%",
            delay: 0.5,
            duration: 0.7,
            ease: "expo.out"
        });
        t1.to("#yellow2", {
            top: "-100%",
            delay: 0.6,
            duration: 0.7,
            ease: "expo.out"
        }, "anim");
        t1.to("#loader h1", {
            delay: 0.6,
            duration: 0.5,
            color: "black"
        }, "anim");
        t1.to("#loader", {
            opacity: 0,
            display: "none"
        });
    } else {
        console.error("One or more loader elements are missing!");
    }
}

window.onload = function() {
    loading();

    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });

    if (!scroll) {
        console.error("Locomotive Scroll failed to initialize!");
    }
};

var elems = document.querySelectorAll('.elem');
var page2 = document.querySelector('#page2'); // Assuming page2 exists in the HTML

elems.forEach(function(elem) {
    elem.addEventListener("mouseenter", function() {
        var bgimg = elem.getAttribute("data-img");
        if (page2) {
            page2.style.backgroundImage = `url(${bgimg})`;
        } else {
            console.error("Element with ID 'page2' not found!");
        }
    });
});
