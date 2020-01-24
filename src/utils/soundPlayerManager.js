export default {

  playSoundTrack: function (soundPlayerRefCurrent, togglePaused) {
    if (soundPlayerRefCurrent) {
      soundPlayerRefCurrent.paused && soundPlayerRefCurrent.load();
      soundPlayerRefCurrent.play();
      togglePaused(false);
    }
  },

  pauseSoundTrack: function (soundPlayerRefCurrent, togglePaused) {
    if (soundPlayerRefCurrent) {
      soundPlayerRefCurrent.pause();
      togglePaused(true);
    }
  },

  startSoundTrack: function (soundPlayerRefCurrent, togglePaused, item) {
    soundPlayerRefCurrent.src = `./assets/audios/${item.src}`;
    soundPlayerRefCurrent.load();
    soundPlayerRefCurrent.play();
    togglePaused(false);
  },

  toggleSoundTrack: function (soundPlayerRefCurrent, togglePaused, currentId, item) {
    console.log('currentId', currentId);
    if (currentId !== +item.id) {
      console.log(`button ref needed to change button icon`);
      this.startSoundTrack(soundPlayerRefCurrent, togglePaused, item);
    } else {

      soundPlayerRefCurrent.id = item.id;
      //check if it started
      if (!soundPlayerRefCurrent.ended && soundPlayerRefCurrent.paused) {//not played yet
        soundPlayerRefCurrent.src = `./assets/audios/${item.src}`;
        soundPlayerRefCurrent.load();
        soundPlayerRefCurrent.play();
        togglePaused(false);
      } else if (!soundPlayerRefCurrent.ended && !soundPlayerRefCurrent.paused) {//playing
        this.pauseSoundTrack(soundPlayerRefCurrent, togglePaused);
      }
      else if (soundPlayerRefCurrent.ended && soundPlayerRefCurrent.paused) {
        this.playSoundTrack(soundPlayerRefCurrent, togglePaused);
      } else {
        // this.pauseSoundTrack(soundPlayerRefCurrent, togglePaused);
        return;
      }
    }
  },

  isPlayIcon: function (currentSoundId, paused, itemId) {
    if (itemId !== currentSoundId) return true; //when soundTrack is not being played
    return paused; //when soundTrack is active, check if its paused
  }
}