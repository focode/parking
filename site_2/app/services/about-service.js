import Ember from 'ember';

export default Ember.Service.extend({
	
	items: null,
	
	 init() {
		this._super(...arguments);
		this.set('items', []);
	  },

	  add() {
	//    this.get('items').pushObject(item);
		  console.log("added");
	  }
	
});
