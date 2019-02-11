const assert = require('assert');
const feathers = require('@feathersjs/feathers');
const atomicFieldIsMarketable = require('../../src/hooks/atomic-field-is-marketable');

describe('\'atomic-field-is-marketable\' hook', () => {
  let app;

  beforeEach(() => {
    app = feathers();

    app.use('/dummy', {
      async get(id) {
        return { id };
      }
    });

    app.service('dummy').hooks({
      before: atomicFieldIsMarketable()
    });
  });

  it('runs the hook', async () => {
    const result = await app.service('dummy').get('test');
    
    assert.deepEqual(result, { id: 'test' });
  });
});
