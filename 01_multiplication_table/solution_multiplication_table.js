/* eslint-disable no-unused-vars */
function multiplicationTable(columns, rows){
let multTable = [];
let temp = []
for (let j = 0; j < columns; j++) {
    multTable.push(temp);
    for (let i = 0; i < rows; i++) {
        multTable[j][i] = (j + 1) * (i + 1)
    }
}
return multTable
}
