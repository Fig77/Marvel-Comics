import api from '../apidata';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

expect.extend({
  async toFetchDataBulk(result) {
    let i = 0;
    while (i < result.length) {
      if (result[i].status !== 'Ok') {
        return {
          message: `expected status of 4 elements to be Ok, but got ${result[i].status}`,
          pass: false,
        };
      }
      if (result[i].data.results === undefined) {
        return {
          message: 'expected data results not to be undefined',
          pass: false,
        };
      }
      i += 1;
    }
   return {pass: true}
  },
});

describe('Call to API will return 200 status and 20 elements that will have a data attribute', () => {
  test('api to api const url should be able to GET', async () => {
    jest.setTimeout(30000);
    const result = await api.fetchData();
    await expect(result).toFetchDataBulk();
  });
});