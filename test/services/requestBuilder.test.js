import requestBuilder from "../../src/services/requestBuilder";
import SmartySDK from "smartystreets-javascript-sdk";
const Lookup = SmartySDK.usStreet.Lookup;

describe("when a request is being built", () => {
    it("should return the expected object structure when a valid file path is provided", async () => {
        const parsedInput = [
            ['143 e Maine Street', ' Columbus', ' 43215'],
            ['1 Empora St', ' Title', ' 11111']];
        const address1 = ['143 e Maine Street', ' Columbus', ' 43215'];
        const address2 = ['1 Empora St', ' Title', ' 11111'];

        const expectedOutput2 = [
            new Lookup({ street: address1[0], state: address1[1], zipCode: address1[2] }),
            new Lookup({ street: address2[0], state: address2[1], zipCode: address2[2] })
        ]
        const result = requestBuilder(parsedInput);

        expect(result).toEqual(expectedOutput2);
    });
});