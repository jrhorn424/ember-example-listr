import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr('string'),
  done: DS.attr('boolean'),
  list_id: DS.attr('number') // does this have to be list_id!??!?!?!
});
