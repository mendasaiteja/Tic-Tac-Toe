let turnX = true;
let Boxes = document.querySelectorAll(".box");
let w = document.querySelector("#answer");
let r = document.querySelector("#reset");
let count = 0; 
let ans = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
let disable = () => {
  for (let box of Boxes) {
    box.disabled = true;
  }
};
let enable = () => {
  for (let box of Boxes) {
    box.disabled = false;
    box.innerText = "";
  }
  count = 0;
  turnX = true;
  w.innerText = "";
};
let winner = () => {
  for (let a of ans) {
    let one = Boxes[a[0]].innerText;
    let two = Boxes[a[1]].innerText;
    let three = Boxes[a[2]].innerText;
    if (one !== "" && two !== "" && three !== "") {
      if (one === two && two === three) {
        w.innerText = `Congratulations Winner ${one}`;
        disable();
        return true;
      }
    }
  }
  return false;
};
Boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnX) {
      box.innerText = "X";
      turnX = false;
    } else {
      box.innerText = "O";
      turnX = true;
    }
    box.disabled = true;
    count++;
    if (!winner() && count === 9) {
      w.innerText = `Draw! Try again.`;
    }
  });
});
r.addEventListener("click", enable);