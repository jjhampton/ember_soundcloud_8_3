import Ember from 'ember';

export default Ember.Component.extend({
  init: SC.get("/tracks/205463734", function(track){
    console.log(track);
  })
});
