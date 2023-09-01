import { parseInput } from "../src/csvParser";

describe("when a csv is parsed successfully", () => {
    it("should return the expected object structure", async () => {
        const expectedOutput = [
            ['Street', ' State', ' Zip Code'],
            ['143 e Maine Street', ' Columbus', ' 43215'],
            ['1 Empora St', ' Title', ' 11111']];

        const result = await parseInput();

        expect(result).toEqual(expectedOutput);
    });
});