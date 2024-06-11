const headerChngableText = document.querySelector(
  ".chessboard-table__header h1 strong"
);
const chessboardContent = document.querySelector("#chessboard-table__content");
const toggleSwitch = document.querySelector("#toggle-input");

for (let i = 0; i < 64; i++) {
  const chessCell = document.createElement("div");
  const row = Math.floor(i / 8);
  const col = i % 8;

  if ((row % 2 === 1 && col % 2 === 1) || (row % 2 === 0 && col % 2 === 0)) {
    chessCell.classList.add("cell-dark");
  }
  chessboardContent.appendChild(chessCell);
}
toggleSwitch.addEventListener("change", () => {
  chessboardContent.classList = toggleSwitch.checked ? "flex" : "grid";
  headerChngableText.innerText = toggleSwitch.checked ? "Flex" : "Grid";
});
