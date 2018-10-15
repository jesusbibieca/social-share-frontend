const keystone = require('keystone');
const rt = keystone.createRouter();
const Recipe = keystone.list('Recipe');

/**
 * Routes endopoints
 * list: returns every recipe in the BD that match the find condition
 * get: returns an element from the BD by the ID
 * create: to insert a new element into the BD
 * delete: erase an element from the BD that match the id
 * update: updates an element in the BD that match the id
 * 
 * Check this link for a better understanding of routing with keystone
 * https://gist.github.com/JedWatson/9741171
 *  
 */

exports.list = function(req, res) {
  Recipe.model.find((err, recipes) => {
    res.apiResponse({
      res: 'OK',
      recipes
    });
  });
};
