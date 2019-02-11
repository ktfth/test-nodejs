const assert = require('assert');
const feathers = require('@feathersjs/feathers');
const denyFieldIsMarketable = require('../../src/hooks/deny-field-is-marketable');

describe('\'deny-field-is-marketable\' hook', () => {
  let app;

  beforeEach(() => {
    app = feathers();

    app.use('/dummy', {
      async get(id) {
        return { id };
      },

      async create(data) {
        return data;
      }
    });

    app.service('dummy').hooks({
      before: denyFieldIsMarketable()
    });
  });

  it('runs the hook', async () => {
    const result = await app.service('dummy').get('test');

    assert.deepEqual(result, { id: 'test' });
  });

  it('field allowance', async () => {
    const result = await app.service('dummy').create({
      sku: 1, isMarketable: true
    });

    assert.deepEqual(result, { sku: 1});
  });
});
