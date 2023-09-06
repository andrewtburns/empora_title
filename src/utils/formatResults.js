export const formatResults = (results) => {
    return results.map((result) => {
        console.log(formatInputAddress(result), "->", formatOutputAddress(result))
    });
}

const formatInputAddress = (address) => {
    return `${address.inputStreet}, ${address.inputCity}, ${address.inputZip}`
}

const formatOutputAddress = (address) => {
    if (address.deliveryLine && address.lastLine) {
        return `${address.deliveryLine}, ${formatOutputLastLine(address)}`
    }
    else return "Invalid Address"

}

const formatOutputLastLine = (address) => {
    return `${address.outputCity}, ${formatZipCode(address)}`
}

const formatZipCode = (address) => {
    if (address.outputPlus4Code) {
        return `${address.outputZip}-${address.outputPlus4Code}`
    } else {
        return `${address.outputZip}`
    }

}
export default formatResults;