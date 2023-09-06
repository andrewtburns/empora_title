import { jest, expect } from '@jest/globals';
import addressApiResponseMocks from "./addressApiResponseMocks";
import { formatResults } from "../../src/utils/formatResults";

describe("when formatting the address for display", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it("should console log the correct string", async () => {
        console.log = jest.fn();
        ;
        formatResults(addressApiResponseMocks);

        expect(console.log.mock.calls[0]).toEqual(["143 e Maine Street, Columbus, 43215", "->", "143 E Main St, Columbus, 43215-5370"]);
        expect(console.log.mock.calls[1]).toEqual(["143 e Maine Street, Columbus, 43215", "->", "143 E Main St, Columbus, 43215"]);
        expect(console.log.mock.calls[2]).toEqual(["1 Empora St, Title, 11111", "->", "Invalid Address"]);
    });
});