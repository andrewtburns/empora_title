export const responseBuilder = (response) => {
    return response.map((lookup) => {
        return {
            inputStreet: lookup.street,
            inputCity: lookup.city,
            inputZip: lookup.zip,
            deliveryLine: lookup.result.deliveryLine1 ? lookup.result.deliveryLine1 : undefined,
            lastLine: lookup.result?.lastLine ? lookup.result?.lastLine : undefined
        }
    });
}

export default responseBuilder;