export const addressApiResponseMocks = [
    {
        inputStreet: '143 e Maine Street',
        inputCity: 'Columbus',
        inputZip: '43215',
        deliveryLine: '143 E Main St',
        lastLine: 'Columbus OH 43215-5370',
        outputCity: "Columbus",
        outputZip: "43215",
        outputPlus4Code: "5370"
    },
    {
        inputStreet: '143 e Maine Street',
        inputCity: 'Columbus',
        inputZip: '43215',
        deliveryLine: '143 E Main St',
        lastLine: 'Columbus OH 43215-5370',
        outputCity: "Columbus",
        outputZip: "43215",
        outputPlus4Code: undefined
    },
    {
        inputStreet: '1 Empora St',
        inputCity: 'Title',
        inputZip: '11111',
        deliveryLine: undefined,
        lastLine: undefined,
        outputCity: undefined,
        outputZip: undefined,
        outputPlus4Code: undefined
    }
]

export default addressApiResponseMocks