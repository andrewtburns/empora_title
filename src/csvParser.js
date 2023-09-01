// const fs = require("fs");
import * as fs from 'node:fs/promises';
import { parse } from "csv-parse";
import { finished } from 'stream/promises';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const content = await fs.readFile(path.resolve(__dirname, "sample_data/sampleInput.csv"));
const parser = parse(content);

let records = [];

export const parseInput = async () => {
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

  await finished(parser);
  return records;
}
export default parseInput;