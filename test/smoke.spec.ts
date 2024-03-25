import axios from 'axios';

const state = 'NSW';

jest.setTimeout(30000);
let warningsList: [] = [];
let warningsDetailsList: [] = [];

describe('Smoke Test', () => {
  it(`Verify GET warnings list for state ${state}`, async () => {
    const requestConfig = {
      method: 'GET',
      url:
        process.env.NODE_ENV === 'mock'
          ? `http://localhost:3100/state/${state}`
          : `http://localhost:3000/?state=${state}`
    };

    console.log('CONFIG  === \n', requestConfig);

    try {
      const response = await axios(requestConfig);
      console.log('RESPONSE === \n', response.data);

      expect(response).toBeTruthy();
      expect(response.status).toBe(200);
      expect(response.data.length).toBeGreaterThan(0);

      warningsList = response.data; //['IDN10016', 'IDN10031', 'IDN10032']
    } catch (error) {
      console.log(error);
    }
  });

  it('Verify GET warnings Details', async () => {
    for await (const warning of warningsList) {
      const requestConfig = {
        method: 'GET',
        url:
          process.env.NODE_ENV === 'mock'
            ? `http://localhost:3100/warning/${warning}`
            : `http://localhost:3000/?warning=${warning}`
      };

      try {
        const response = await axios(requestConfig);

        expect(response).toBeTruthy();
        expect(response.status).toBe(200);
        expect(response.data).toHaveProperty('productType');
        expect(response.data).toHaveProperty('service');
        expect(response.data).toHaveProperty('start');
        expect(response.data).toHaveProperty('expiry');
        expect(response.data).toHaveProperty('text');

        warningsDetailsList = response.data;
      } catch (error) {
        console.log(error);
      }
    }
  });
});
