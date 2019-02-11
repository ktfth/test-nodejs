

const denyInvetoryQuantity = require('../../hooks/deny-invetory-quantity');

const denyFieldIsMarketable = require('../../hooks/deny-field-is-marketable');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
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
