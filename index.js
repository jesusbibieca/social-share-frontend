const keystone = require('keystone');

keystone.init({
  'name': 'Keystone CMS',
  'static': [],
  'auto update': true,
  'mongo': 'mongodb://localhost/keystonecms',
  'auth': true,
  'user model': 'User',
  'cookie secret': 'asdfghjkl6D61822FBEAED8635A4A52241FEC3'
});

// Load project's model
keystone.import('./server/models');

// Load routes
keystone.set('routes', require('./server/routes'));

// Start keystone
keystone.start();
