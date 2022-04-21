// function SortData() {
//     var subjects =
//         document.querySelectorAll("[post]");
//     var subjectsArray = Array.from(subjects);
//     let sorted = subjectsArray.sort(comparator);
//     sorted.forEach(e =>
//         document.querySelector("#list").
//             appendChild(e));
// }
window.addEventListener("load", function () {
    let MarsTagButton = document.getElementById("MarsTagButton");
    let MarsPosts = document.querySelectorAll('div[alt="MarsPost"]');
    MarsTagButton.addEventListener("click", function () {
        for (let MarsPost of MarsPosts) {
            MarsPost.style.backgroundColor = "pink";
        }
    });
});