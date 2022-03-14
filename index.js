const game = document.querySelector(".game");
let reset = document.querySelector(".btn-reset");
let message = document.querySelector(".text");
const block = document.querySelectorAll(".game div");
const imgCollection = [
  "assets/img/1.png",
  "assets/img/2.png",
  "assets/img/3.png",
  "assets/img/4.png",
  "assets/img/5.png",
  "assets/img/6.png",
  "assets/img/7.png",
  "assets/img/8.png",
  "assets/img/9.png",
];
let move = 0;
let result = "";
const arr = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

window.onload = load;

function load(){
  x=imgCollection.sort(()=>Math.random()-0.5);
  for (let k = 0; k < block.length; k += 1){
    block[k].style.backgroundImage = `url(${x[k]})`;
  }
};

function playAudio() {
  let audio = new Audio();
  audio.src = 'assets/click.mp3';
  audio.currentTime = 0;
  audio.play();
  }

game.addEventListener("click", (e) => {
  move % 2 === 0 ? (e.target.innerHTML = "X") : (e.target.innerHTML = "O");
  playAudio();
  move++;
  check();
});


game.addEventListener("click", (e) => {
  e.target.style.backgroundImage = 'none';
})

const check = () => {
  for (let i = 0; i < arr.length; i++) {
    if (
      block[arr[i][0]].innerHTML === "X" &&
      block[arr[i][1]].innerHTML === "X" &&
      block[arr[i][2]].innerHTML === "X"
    ) {
      block[arr[i][0]].style.backgroundColor = 'rgb(182, 216, 101)';
      block[arr[i][1]].style.backgroundColor = 'rgb(182, 216, 101)';
      block[arr[i][2]].style.backgroundColor = 'rgb(182, 216, 101)';

      result = "Победа! Игрок 1 выиграл!";
      endResult(result);
    } else if (
      block[arr[i][0]].innerHTML === "O" &&
      block[arr[i][1]].innerHTML === "O" &&
      block[arr[i][2]].innerHTML === "O"
    ) {
      block[arr[i][0]].style.backgroundColor = 'rgb(182, 216, 101)';
      block[arr[i][1]].style.backgroundColor = 'rgb(182, 216, 101)';
      block[arr[i][2]].style.backgroundColor = 'rgb(182, 216, 101)';

      result = "Победа! Игрок 2 выиграл!";
      endResult(result);
    } 
    else if (result !== "Победа! Игрок 2 выиграл!" && result !== "Победа! Игрок 1 выиграл!" && move === 9) {
      result = "Ничья";
      endResult(result);
    }
  }
};

const endResult = (winner) => {
  message.innerHTML = `${result}`;
  let window = document.querySelector(".window");
  window.style.display = "block";
};

reset.addEventListener("click", () => {
  location.reload();
});

