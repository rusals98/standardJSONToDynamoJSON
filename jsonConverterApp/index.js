var dynamoConverters = require('dynamo-converters');
const fs = require('fs')

var data = {
    object: {
        nothing: undefined,
        number: 2,
        string: 'lorem ipsum'
    }
};

const dataObject = dynamoConverters.dataToItem(data);
fs.writeFileSync("dynamoJSON.json", JSON.stringify(dataObject))