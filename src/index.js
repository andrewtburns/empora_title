import parseInput from "./utils/csvParser.js";
import responseBuilder from "./services/responseBuilder.js";
import requestBuilder from "./services/requestBuilder.js";
import { resolve } from "node:path"
import { argv, cwd } from "node:process"
import { fetchSmartyAddresses } from "./api/addressApi.js";
import { formatResults } from "./utils/formatResults.js";

const relativePath = argv[2] // input file
const absolutePath = relativePath != undefined ? resolve(cwd(), relativePath) : ""


let parsedData = await parseInput(absolutePath);
let request = await requestBuilder(parsedData);
let smartAddresses = await fetchSmartyAddresses(request);


let finalResponse = await responseBuilder(smartAddresses);

formatResults(finalResponse);

