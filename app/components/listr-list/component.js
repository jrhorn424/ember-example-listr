import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'ul',
  classNames: ['listr-list'],
  hidden: Ember.computed.alias('list.hidden'),
  classNameBindings: ['hidden:listr-list--hidden'],
  store: Ember.inject.service(),
  actions: {
    toggleList: function () {
      var id = this.get('list.id');
      var store = this.get('store');

      store.findRecord('list', id).then(function (list) {
        list.toggleProperty('hidden');
        list.save();
      });
    },

    createNewItem: function () {
      var store = this.get('store');
      var item = this.get('item');
      var list = this.get('list');

      var newItem = store.createRecord('item', {
        content: item,
        list_id: list.get('id') // how and where camelCase?
      });

      newItem.save().then(function () {
        list.get('items').addObject(newItem);
      });
    }
  }
});
