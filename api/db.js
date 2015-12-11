module.exports = function exampleData () {
  var _      = require('lodash');
  var Chance = require('chance');
  var chance = new Chance();

  return {
    lists: _.times(3, function generateLists (index) {
      return {
        id: index + 1,
        title: 'My List ' + chance.word() + '  ' + (index + 1),
        hidden: false,
        items: _.uniq(chance.n(chance.d30, 10))
      };
    }),

    items: _.times(30, function generateItems (index) {
      return {
        id: index + 1,
        text: chance.word(),
        list: _.sample(_.range(1,4))
      };
    })
  };
};
