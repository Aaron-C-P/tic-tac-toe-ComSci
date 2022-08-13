let controls = document.querySelectorAll('#board div')
controls = Array.from('controls')

let currentPlayer = "X"

let winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

function checkForWinner() {
    winningCombinations.forEach(function(combination) {
        let check = combination.every(idx => controls[idx].innerText.trim() == currentPlayer)
        if (check) {
            highlightCells(combination)
        }
    })
}

function highlightCells(combination) {
    combination.forEach(function(idx) {
        controls[idx].div.add("highlight")
    })
}

controls.forEach(function(contorls) {
    controls.addEventListener('click', function() {
        if (div.innerText.trim() != "") return
        div.innerText = currentPlayer
        checkForWinner()
        currentPlayer = currentPlayer == "X" ? "O" : "X"
    })
})