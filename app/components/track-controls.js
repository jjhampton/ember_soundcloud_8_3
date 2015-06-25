import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['track-controls'],

  actions: {
    play: function(){
      SC.stream("/tracks/205463734", function(sound){
        sound.play();
      });
    }
  }
});
