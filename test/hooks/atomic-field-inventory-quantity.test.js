const assert = require('assert');
const feathers = require('@feathersjs/feathers');
const atomicFieldInventoryQuantity = require('../../src/hooks/atomic-field-inventory-quantity');

describe('\'atomic-field-inventory-quantity\' hook', () => {
  let app;

  beforeEach(() => {
    app = feathers();

    app.use('/dummy', {
      async get(id) {
        return { id };
      }
    });

    app.service('dummy').hooks({
      before: atomicFieldInventoryQuantity()
    });
  });

  it('runs the hook', async () => {
    const result = await app.service('dummy').get('test');

    assert.deepEqual(result, { id: 'test' });
  });
});
