import DS from 'ember-data';

export default DS.Model.extend({
  searchtype: DS.attr('string'),
  searchText:  DS.attr('string')
});
