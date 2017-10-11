const xlsx = require('node-xlsx');
const fs = require('fs');
const exception = require('./exception');

const data = [
    ['华泰普货', '华泰鲜货', '众安普货', '众安鲜货', '众安易碎品', '太保普货', '太保鲜货'],
    [exception.ht.ordinary, exception.ht.fresh, exception.za.ordinary, exception.za.fresh, exception.za.fragile, exception.cpic.ordinary, exception.cpic.fresh]
];
let buffer = xlsx.build([{name: "mySheetName", data: data}]); // Returns a buffer

fs.writeFileSync(`./excel_${new Date().getTime()}.xlsx`, buffer);

console.log(buffer);