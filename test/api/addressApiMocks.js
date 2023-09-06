import { jest } from '@jest/globals';

const mockedFetch = jest.fn();
jest.mock("../../src/api/addressApi.js", () => mockedFetch);

export const mockResponse = [
    {
        street: '143 e Maine Street',
        city: ' Columbus',
        state: undefined,
        zipCode: ' 43215',
        lastLine: undefined,
        result: []
    },
    {
        street: '1 Empora St',
        city: ' Title',
        zipCode: ' 11111',
        lastLine: undefined,
        result: []
    }
];

export default mockedFetch