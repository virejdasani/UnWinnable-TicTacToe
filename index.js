let cells = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let result = document.querySelector(".result");
let btns = document.querySelectorAll(".btn");
let hbtns = document.querySelectorAll(".h-btn");
let conditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const ticTacToe = (element, index, instaWin) => {
  element.value = currentPlayer;
  element.disabled = true;
  cells[index] = currentPlayer;
  currentPlayer = currentPlayer == "X" ? "O" : "X";
  result.innerHTML = `Player ${currentPlayer} Turn`;

  if (instaWin) {
    result.innerHTML = `Player ${currentPlayer == "X" ? "O" : "X"} Wins 🎉`;
    btns.forEach((btn) => {
      btn.disabled = true;
    });
  }

  for (let i = 0; i < conditions.length; i++) {
    let condition = conditions[i];
    let a = cells[condition[0]];
    let b = cells[condition[1]];
    let c = cells[condition[2]];

    if (a == "" || b == "" || c == "") {
      continue;
    }

    if (a == b && b == c) {
      result.innerHTML = `Player ${a} Won 🎉`;
      btns.forEach((btn) => (btn.disabled = true));
    }
  }
};

function reset() {
  // cells = ["", "", "", "", "", "", "", "", ""];
  // btns.forEach((btn) => {
  //   btn.value = "";
  // });
  // currentPlayer = "X";
  // result.innerHTML = `Player X Turn`;
  // btns.forEach((btn) => (btn.disabled = false));

  location.reload();
}

document.querySelector("#reset").addEventListener("click", reset);

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => ticTacToe(btn, i));
});

function doc_keyUp(e) {
  if (
    e.key === "1" ||
    e.key === "2" ||
    e.key === "3" ||
    e.key === "4" ||
    e.key === "5" ||
    e.key === "6" ||
    e.key === "7" ||
    e.key === "8" ||
    e.key === "9" ||
    e.key === "a" ||
    e.key === "b" ||
    e.key === "c" ||
    e.key === "d" ||
    e.key === "e" ||
    e.key === "f" ||
    e.key === "g"
  ) {
    ticTacToe(document.getElementById(`${e.key}`), e.key - 1, true);
  }
}

document.addEventListener("keyup", doc_keyUp, false);
