import * as fs from 'node:fs/promises';
import { parse } from "csv-parse";
import { finished } from 'stream/promises';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let records = [];

export const parseInput = async (filePath) => {
  if(!filePath) return [];
  const content = await fs.readFile(path.resolve(__dirname, filePath));
  const parser = parse(content,{from: 2});
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