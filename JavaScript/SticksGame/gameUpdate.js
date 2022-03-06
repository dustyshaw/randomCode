document.addEventListener("DOMContentLoaded", (e) => {
    console.log(e);
});

// function nextTurn() {
//     let currentPlayer = document.querySelector("#currentPlayer");
//     let nextPlayer = Number(currentPlayer.innerText);
//     let nextPlayer = 3 - currentPlayer;
//     document.querySelector("#currentPlayer").innerText = nextPlayer;
// }

// document.getElementById("button1").onclick = function () { Minus1Stick(SticksLeft); }

// function Minus1Stick(SticksLeft) {
//     alert(`minus one stick function ran!`);
//     SticksLeft = (SticksLeft - 1);
//     let sticksLeftDisplay = document.getElementById("SticksLeftDisplay");
//     sticksLeftDisplay.innerText = SticksLeft;
// }

let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let currentPlayer = document.getElementById("currentPlayer");
let sticksLeftDisplay = document.getElementById("SticksLeftDisplay");
sticksLeftDisplay.innerHTML = 21;
currentPlayer.innerHTML = 1;
let playLog = document.getElementById("playLogList");

console.log(sticksLeftDisplay);


button1.addEventListener("click", function () {
    let newPlayLogItem = document.createElement('li');
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

