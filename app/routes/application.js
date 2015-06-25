import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    return Ember.$.getJSON('https://api.soundcloud.com/tracks/205463734?client_id=64a2f26a846f84e144d1e76406738e41');
  }

});
