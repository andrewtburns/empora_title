const result = [
  {
    deliveryLine1: "aDeliveryLine1",
    lastLine: "aLastLine"
  }
]
const lookup1 = {
  street: "aStreet",
  city: "aCity",
  zipCode: "aZip",
  result: result
}

const lookup2 = {
  street: "aStreet2",
  city: "aCity2",
  zipCode: "aZip2",
  result: []
}
export const lookupsWithOneInvalid = [
  lookup1,
  lookup2
];

export default lookupsWithOneInvalid;