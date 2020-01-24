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

  toggleSoundTrack: function (currentTrackMetadata, setCurrentTrackMetadata, item = null) {
    const newCurrentTrackMetadata = { ...currentTrackMetadata };
    const itemId = item ? +item.id : null;

    if (itemId && currentTrackMetadata.activeItem !== itemId) {
      newCurrentTrackMetadata.activeItem = itemId;
      newCurrentTrackMetadata.soundPlayerRef.current.src = `./assets/audios/${item.src}`;
      currentTrackMetadata.soundPlayerRef.current.load();
      currentTrackMetadata.soundPlayerRef.current.play();
    } else {//soundPlayer or list
      newCurrentTrackMetadata.activeItem = item ? item.id : newCurrentTrackMetadata.activeItem;
      //check if it started
      if (!currentTrackMetadata.soundPlayerRef.current.ended && currentTrackMetadata.soundPlayerRef.current.paused) {//not played yet --> playing
        currentTrackMetadata.soundPlayerRef.current.play();
      } else if (!currentTrackMetadata.soundPlayerRef.current.ended && !currentTrackMetadata.soundPlayerRef.current.paused) {//playing --> pause
        newCurrentTrackMetadata.soundPlayerRef.current.pause();
      }
      else if (currentTrackMetadata.soundPlayerRef.current.ended && currentTrackMetadata.soundPlayerRef.current.paused) { //ended --> not played yet
        newCurrentTrackMetadata.soundPlayerRef.current.src = `./assets/audios/${item.src}`;
        currentTrackMetadata.soundPlayerRef.current.load();
      }
    }
    setCurrentTrackMetadata({ ...newCurrentTrackMetadata });
  },

  isPlayIcon: function (activeItem, paused, itemId) {
    if (itemId !== activeItem) return true; //when soundTrack is not being played
    return paused; //when soundTrack is active, check if its paused
  }
}