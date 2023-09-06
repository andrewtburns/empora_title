export const responseBuilder = (response) => {
    return response.map((lookup) => {
        return {
            inputStreet: lookup.street,
            inputCity: lookup.city,
            inputZip: lookup.zipCode,
            deliveryLine: lookup.result.length > 0 ? lookup.result[0].deliveryLine1 : undefined,
            lastLine: lookup.result.length > 0 ? lookup.result[0].lastLine : undefined,
            outputCity: lookup.result.length > 0 ? lookup.result[0].components.cityName : undefined,
            outputZip: lookup.result.length > 0 ? lookup.result[0].components.zipCode : undefined,
            outputPlus4Code: lookup.result.length > 0 ? lookup.result[0].components.plus4Code : undefined,
        }
    });
}
export default responseBuilder;