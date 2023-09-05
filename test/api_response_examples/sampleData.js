const result = [
  {
    deliveryLine1: "aDeliveryLine1",
    lastLine: "aLastLine"
  }
]
const lookup1 = {
  street: "aStreet",
  city: "aCity",
  zip: "aZip",
  result: result[0]
}

const lookup2 = {
  street: "aStreet2",
  city: "aCity2",
  zip: "aZip2",
  result: []
}
export const lookupsWithOneInvalid = [
  lookup1,
  lookup2
];

export default lookupsWithOneInvalid;