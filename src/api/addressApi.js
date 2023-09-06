import { authId, authToken } from "./apiKeys.js"
import SmartySDK from "smartystreets-javascript-sdk";

const SmartyCore = SmartySDK.core;
const credentials = new SmartyCore.StaticCredentials(authId, authToken);
const clientBuilder = new SmartyCore.ClientBuilder(credentials);
const client = clientBuilder.buildUsStreetApiClient();

let results = [];

export const fetchSmartyAddresses = async (batch) => {
    results = await handleResponse(batch);
    return results
}

const handleSuccess = (response) => {
    return response.lookups;
}

const handleResponse = async (lookup) => {
    try {
        const result = await client.send(lookup);
        return handleSuccess(result);
    } catch (err) {
        handleError(err);
    }
}

const handleError = (response) => {
    console.log(response);
}

export default fetchSmartyAddresses;