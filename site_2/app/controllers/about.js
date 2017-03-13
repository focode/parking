import Ember from 'ember';

export default Ember.Controller.extend({
	
	about: Ember.inject.service('about-service'),
//	needs: ['about-service'],

	actions: {
    expand: function() {
      this.set('isExpanded', true);
    },

    contract: function() {
      this.set('isExpanded', false);
		console.log("done");
	    this.get('about').add();
    }
  }
	
});
