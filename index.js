let csvToJson = require('convert-csv-to-json');
const path = require('path');

const [...file] = process.argv.splice(2)

const convertToJSON = (...args) => {
    if (file.length === 0) {
        console.log('Please provide a csv file to convert to JSON');
    } else {
        let fileInputName = path.resolve(file[0]);
        let fileOutputName;

        if (file.length === 1) {
            fileOutputName = path.resolve(path.basename(fileInputName).split('.')[0] + '.json');
            csvToJson.fieldDelimiter(',').getJsonFromCsv(fileInputName);
            csvToJson.generateJsonFileFromCsv(fileInputName, fileOutputName);
            console.log(`JSON file saved as: ${path.basename(fileOutputName)}`);
        } else if (file.length === 2) {
            fileOutputName = path.resolve(file[1] + '.json');
            csvToJson.fieldDelimiter(',').getJsonFromCsv(fileInputName);
            csvToJson.generateJsonFileFromCsv(fileInputName, fileOutputName);
            console.log(`JSON file saved as: ${path.basename(fileOutputName)}`);
        }
    }
}

convertToJSON(...file)