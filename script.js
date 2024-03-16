const cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];

cells.forEach(cell => {
  cell.addEventListener('click', () => {
    const index = parseInt(cell.id.split('-')[1]);
    if (board[index] === '') {
      board[index] = currentPlayer;
      cell.textContent = currentPlayer;
      if (checkWinner(currentPlayer)) {
        alert(`${currentPlayer} wins!`);
        resetGame();
        return;
      }
      if (board.every(cell => cell !== '')) {
        alert('It\'s a draw!');
        resetGame();
        return;
      }
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  });
});

function checkWinner(player) {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  return winningCombinations.some(combination => {
    return combination.every(index => board[index] === player);
  });
}

function resetGame() {
  board = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  cells.forEach(cell => {
    cell.textContent = '';
  });
}
