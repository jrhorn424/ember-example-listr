import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr('string'),
  done: DS.attr('boolean'),
  list: DS.belongsTo('list')
});
