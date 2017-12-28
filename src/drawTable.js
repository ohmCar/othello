let id=1;
const generateTable=function(){
  let table=document.getElementById('table');
  for(let counter=0; counter < 8; counter++) {
    generateRows(table);
  };
  return table;
};

const generateRows=function(table){
  let row=document.createElement('tr');
  for (let counter=0; counter < 8; counter++) {
    let cell=document.createElement('td');
    cell.id=id++;
    defaultImages(cell);
    row.appendChild(cell);
  };
  table.appendChild(row);
  return;
};

const defaultImages=function(cell){
  if(cell.id==28||cell.id==37){
    let whiteCoin=document.createElement('img');
    whiteCoin.src='whiteCoin.png';
    cell.appendChild(whiteCoin);
  } else if(cell.id==29||cell.id==36){
    let blackCoin=document.createElement('img');
    blackCoin.src='blackCoin.png';
    cell.appendChild(blackCoin);
  };
  return;
};
