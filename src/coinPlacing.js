let count=0;
let playedCells=["28","29","36","37"];

const putWhiteOrBlackCoin=function(cellId){
  count++;
  if(count%2==0){
    insertCoin('blackCoin.png',cellId);
    return;
  };
  insertCoin('whiteCoin.png',cellId);
  return;
};

const insertCoin = function(src,cellId){
  let coin = document.createElement('img');
  coin.src = src;
  let place = document.getElementById(cellId);
  place.appendChild(coin);
};

const actionAfterClick=function(event){
  let cellId = event.target.id;
  if (!playedCells.includes(cellId)) {
    playedCells.push(cellId);
    putWhiteOrBlackCoin(cellId);
  };
};

const startGame = function(){
  generateTable();
  let board = document.getElementById('table');
  board.onclick = actionAfterClick;
};

window.onload=startGame;
