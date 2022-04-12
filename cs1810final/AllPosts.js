function SortData() {
    var subjects =
        document.querySelectorAll("[post]");
    var subjectsArray = Array.from(subjects);
    let sorted = subjectsArray.sort(comparator);
    sorted.forEach(e =>
        document.querySelector("#list").
            appendChild(e));
}