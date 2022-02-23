function nextTurn() {
    let playerNode = document.querySelector("#currentPlayer")
    let nextPlayer = Number(player.innerText);
    let nextPlayer = 3 - currentPlayer;
    document.querySelector("#currentPlayer").innerText = nextPlayer;
}