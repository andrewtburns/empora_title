const fs = require("fs");
const { parse } = require("csv-parse");
const { finished } = require('stream/promises');

const parser = parse();
const records = [];
const filePath = __dirname + '/sample_data/sampleInput.csv';

const parseInput = async () => {
  parser.on('readable', () => {
    let record;
    while ((record = parser.read()) !== null) {
      records.push(record);
    }
  });

  parser.on('error', (err) => {
    console.error(err.message);
  });

  parser.on('end', () => {
    return records;
  });

  fs.createReadStream(filePath).pipe(parser);
  await finished(parser);
  return records;
}

module.exports = { parseInput }