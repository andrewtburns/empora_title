import SmartySDK from "smartystreets-javascript-sdk";
const Lookup = SmartySDK.usStreet.Lookup;

export const requestBuilder = (request) => {
    let requestBatch = request.map((record) => {
        return new Lookup({ street: record[0], state: record[1], zipCode: record[2] })
    });

    return requestBatch;
}

export default requestBuilder;