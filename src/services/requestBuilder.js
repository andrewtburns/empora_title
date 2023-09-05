import SmartySDK from "smartystreets-javascript-sdk";
const SmartyCore = SmartySDK.core;
const Lookup = SmartySDK.usStreet.Lookup;

let batch = new SmartyCore.Batch();

export const requestBuilder = (request) => {
    request.forEach(element => {
        let lookup = new Lookup();
        lookup.street = element[0];
        lookup.city = element[1];
        lookup.zipCode = element[2];
        batch.add(lookup);
    });
    return batch;
}

export default requestBuilder;