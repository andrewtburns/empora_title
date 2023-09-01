import { parseInput } from "../src/csvParser";

describe("when a csv is parsed successfully", () => {
    it("should return the expected object structure", async () => {
        const filePath = "../test/file_upload_examples/sampleInput.csv";
        const expectedOutput = [
            ['Street', ' State', ' Zip Code'],
            ['143 e Maine Street', ' Columbus', ' 43215'],
            ['1 Empora St', ' Title', ' 11111']];

        const result = await parseInput(filePath);

        expect(result).toEqual(expectedOutput);
    });
});