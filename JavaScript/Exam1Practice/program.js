let table = document.getElementById('output');
let button = document.querySelectorAll(button);

button.addEventListener("click", function(){
    console.log("creating a new row?");
    let newTableRow = document.createElement(tr);
    newTableRow.innerHTML=`<td>this is a new table cell</td>`;
    table.appendChild(newTableRow);
});