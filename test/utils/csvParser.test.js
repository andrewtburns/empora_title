import { parseInput } from "../../src/utils/csvParser";

describe("when a csv parsing is attempted", () => {
    it("should return the expected object structure when a valid file path is provided", async () => {
        const filePath = "../../test/file_upload_examples/sampleInput.csv";
        const expectedOutput = [
            ['143 e Maine Street', ' Columbus', ' 43215'],
            ['1 Empora St', ' Title', ' 11111']];

        const result = await parseInput(filePath);

        expect(result).toEqual(expectedOutput);
    });

    it("should return empty array if a filepath is not provided", async () => {
        const expectedOutput = [];

        const result = await parseInput();

        expect(result).toEqual(expectedOutput);
    });
});