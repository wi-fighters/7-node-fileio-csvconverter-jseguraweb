let csvToJson = require('convert-csv-to-json');
const path = require('path');

let fileInputName = path.resolve(__dirname, 'demo.csv');
let fileOutputName = path.resolve(path.basename(fileInputName).split('.')[0] + '.json');

csvToJson.fieldDelimiter(',').getJsonFromCsv(fileInputName);
csvToJson.generateJsonFileFromCsv(fileInputName, fileOutputName);