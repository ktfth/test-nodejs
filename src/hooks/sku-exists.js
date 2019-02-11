// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}, next, err) {
  return async context => {
    if ('data' in context && 'sku' in context.data) {
      context.service.find({ query: { sku: context.data.sku } }).then(data => {
        if (data.length > 0) {
          return err('This sku (' + context.data.sku + ') exists');
        }
      });
    }
    return context;
  };
};
