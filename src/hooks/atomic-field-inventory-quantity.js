// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {
    if ('data' in context && context.data.constructor.toString().indexOf('Array') === -1) {
      if ('warehouses' in context.data) {
        context.data.inventory = (context.data.inventory !== undefined && context.data.inventory) || { quantity: 0 };
        context.data.inventory.quantity = (context.data.inventory.quantity !== undefined && context.data.inventory.quantity) || 0;
        context.data.warehouses.map(warehouse => {
          if ('quantity' in warehouse) {
            context.data.identity.quantity += warehouse.quantity;
          }
        });
      }
    }
    return context;
  };
};
