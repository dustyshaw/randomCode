
window.addEventListener("load", function () {
    let MarsTagButton = document.getElementById("MarsTagButton");
    let AstronautsTagButton = document.getElementById("AstronautsTagButton");
    
    let AstronautPosts = document.querySelectorAll('section[alt="Astronauts"]');
    let MarsPosts = document.querySelectorAll('section[alt="MarsPost"]');


    MarsTagButton.addEventListener("click", function () {
        for (let MarsPost of MarsPosts) {
            MarsPost.style.backgroundColor = "pink";
            MarsPost.style.borderColor = "black";
        }
    });
    AstronautsTagButton.addEventListener("click", function () {
        for (let AstronautPost of AstronautPosts) {
            AstronautPost.style.backgroundColor = "pink";
        }
    });

});
// window.addEventListener("load", function () {

// });