

const denyInvetoryQuantity = require('../../hooks/deny-invetory-quantity');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [denyInvetoryQuantity()],
    update: [denyInvetoryQuantity()],
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
