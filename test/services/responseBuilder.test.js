import responseBuilderBuilder from "../../src/services/responseBuilder";
import lookupsWithOneInvalid from "../../test/api_response_examples/sampleData";

describe("when a response is being built", () => {
    it("should return the expected object structure", async () => {
        const input = lookupsWithOneInvalid;

        const expectedOutput =
            [
                {
                    inputStreet: "aStreet",
                    inputCity: "aCity",
                    inputZip: "aZip",
                    deliveryLine: "aDeliveryLine1",
                    lastLine: "aLastLine",
                    outputCity: "Columbus",
                    outputZip: "43215",
                    outputPlus4Code: "5370"
                },
                {
                    inputStreet: "aStreet2",
                    inputCity: "aCity2",
                    inputZip: "aZip2",
                    deliveryLine: undefined,
                    lastLine: undefined,
                    outputCity: undefined,
                    outputZip: undefined,
                    outputPlus4Code: undefined
                }
            ]
            ;
        const result = responseBuilderBuilder(input);

        expect(result).toEqual(expectedOutput);
    });
});