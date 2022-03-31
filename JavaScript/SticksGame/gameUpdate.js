document.addEventListener("DOMContentLoaded", (e) => {
    console.log(e);
});

let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let currentPlayer = document.getElementById("currentPlayer");
let sticksLeftDisplay = document.getElementById("SticksLeftDisplay");
//let playLog = document.getElementById("playLogList");
sticksLeftDisplay.innerHTML = 21;
currentPlayer.innerHTML = 1;
console.log(sticksLeftDisplay);

button1.addEventListener("click", function () {
    //let newPlayLogItem = document.createElement('li');
    console.log(sticksLeftDisplay);

    sticksLeftDisplay.innerHTML -= 1;
    currentPlayer.innerHTML = 3 - currentPlayer.innerHTML;
    newPlayLogItem.innerHTML = `<li>Player ${currentPlayer.innerHTML} chose 1 stick</li>`;
    playLog.appendChild(newPlayLogItem);

});
button2.addEventListener("click", function () {
    sticksLeftDisplay.innerHTML -= 2;
    currentPlayer.innerHTML = 3 - currentPlayer.innerHTML;
    newPlayLogItem.innerHTML = `Player ${currentPlayer.innerHTML} chose 2 sticks`;
    playLog.appendChild(newPlayLogItem);
});
button3.addEventListener("click", function () {
    sticksLeftDisplay.innerHTML -= 3;
    currentPlayer.innerHTML = 3 - currentPlayer.innerHTML;
    newPlayLogItem.innerHTML = `<li>Player ${currentPlayer.innerHTML} chose 2 sticks</li>`;
    playLog.appendChild(newPlayLogItem);
});

