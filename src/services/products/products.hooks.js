

const denyInvetoryQuantity = require('../../hooks/deny-invetory-quantity');

const denyFieldIsMarketable = require('../../hooks/deny-field-is-marketable');

const atomicFieldInventoryQuantity = require('../../hooks/atomic-field-inventory-quantity');

const atomicFieldIsMarketable = require('../../hooks/atomic-field-is-marketable');

module.exports = {
  before: {
    all: [],
    find: [atomicFieldInventoryQuantity()],
    get: [atomicFieldInventoryQuantity(), atomicFieldIsMarketable()],
    create: [denyInvetoryQuantity(), denyFieldIsMarketable()],
    update: [denyInvetoryQuantity(), denyFieldIsMarketable()],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
