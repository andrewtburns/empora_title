import requestBuilder from "../../src/services/requestBuilder";
import SmartySDK from "smartystreets-javascript-sdk";
const Lookup = SmartySDK.usStreet.Lookup;
const SmartyCore = SmartySDK.core;

describe("when a request is being built", () => {
    it("should return the expected object structure when a valid file path is provided", async () => {
        const parsedInput = [
            ['143 e Maine Street', ' Columbus', ' 43215'],
            ['1 Empora St', ' Title', ' 11111']];
        const address1 = ['143 e Maine Street', ' Columbus', ' 43215'];
        const address2 = ['1 Empora St', ' Title', ' 11111'];
        let batch = new SmartyCore.Batch();

        batch.add(new Lookup({ street: address1[0], city: address1[1], zipCode: address1[2] }),)
        batch.add(new Lookup({ street: address2[0], city: address2[1], zipCode: address2[2] }))

        const expectedOutput = {
            lookups: [
                {
                    street: address1[0],
                    city: address1[1],
                    zipCode: address1[2]
                },
                {
                    street: address2[0],
                    city: address2[1],
                    zipCode: address2[2]
                }
            ]
        }
        const result = requestBuilder(parsedInput);

        expect(result.lookups[0]).toMatchObject(expectedOutput.lookups[0]);
        expect(result.lookups[1]).toMatchObject(expectedOutput.lookups[1]);
    });
});