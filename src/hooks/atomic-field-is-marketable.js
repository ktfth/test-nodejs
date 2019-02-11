// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {
    if ('data' in context && ('inventory' in context.data && 'quantity' in context.data.inventory)) {
      context.data.isMarketable = context.data.inventory.quantity > 0;
    }
    return context;
  };
};
