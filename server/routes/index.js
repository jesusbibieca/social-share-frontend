const keystone = require('keystone');
const importRoutes = keystone.importer(__dirname);

const routes = {
  api: importRoutes('./api')
};

exports = module.exports = function(app) {
  app.get('/api/recipe/list', keystone.middleware.api, routes.api.recipes.list);

 };
