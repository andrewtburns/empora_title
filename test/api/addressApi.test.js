import { jest, expect } from '@jest/globals';
import { mockResponse } from "./addressApiMocks"

jest.unstable_mockModule('../../src/api/addressApi.js', () => {
    return {
        fetchSmartyAddresses: jest.fn((arg = "foo") => Promise.resolve(mockResponse))
    }
})
const { fetchSmartyAddresses } = await import("../../src/api/addressApi.js");

describe("when making a call to smarty", () => {

    afterEach(() => {
        jest.clearAllMocks();
    });

    it("should call the mock implementation for testing", async () => {
        expect(jest.isMockFunction(fetchSmartyAddresses)).toBeTruthy();
    });

    it("should return the expected array of lookups", async () => {
        const result = await fetchSmartyAddresses();
        const expectedResult = [{ "city": " Columbus", "lastLine": undefined, "result": [], "state": undefined, "street": "143 e Maine Street", "zipCode": " 43215" }, { "city": " Title", "lastLine": undefined, "result": [], "street": "1 Empora St", "zipCode": " 11111" }]

        fetchSmartyAddresses.mockReturnValueOnce(true);
        expect(result).toEqual(expectedResult);
    });
});