import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash({
      track: SC.get("/groups/55517/tracks", {limit: 1}, function(tracks){
        console.log(tracks);
        return tracks;
      })
    });
  }
});
