const assert = require('assert');
const feathers = require('@feathersjs/feathers');
const denyInvetoryQuantity = require('../../src/hooks/deny-invetory-quantity');

describe('\'deny-invetory-quantity\' hook', () => {
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
      before: denyInvetoryQuantity()
    });
  });

  it('runs the hook', async () => {
    const result = await app.service('dummy').get('test');

    assert.deepEqual(result, { id: 'test' });
  });

  it('field allowance', async () => {
    const result = await app.service('dummy').create({ sku: 1, identity: {
      quantity: 1,
      warehouses: []
    } });

    assert.deepEqual(result, { sku: 1, identity: { warehouses: [] } });
  });
});
