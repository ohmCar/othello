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
    row.appendChild(cell);
  };
  table.appendChild(row);
  return;
};

window.onload=generateTable;
