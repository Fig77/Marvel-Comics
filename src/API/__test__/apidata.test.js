import api from '../apidata';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

expect.extend({
  async toFetchDataBulk() {
    const result = await api.fetchData();
    let i = 0;
    while (i < result.length) {
      if (result[i].status !== 'Ok') {
        return {
          message: () => `expected status of 4 elements to be Ok, but got ${result[i].status}`,
          pass: false,
        };
      }
      if (result[i].data.results === undefined) {
        return {
          message: () => 'expected data results not to be undefined',
          pass: false,
        };
      }
      i += 1;
    }
  },
});

describe('Call to API will return 200 status and 20 elements that will have a data attribute', () => {
  test('api to api const url should be able to GET', async () => {
    const result = await api.fetchData();
    expect(result).toFetchDataBulk();
  });
});