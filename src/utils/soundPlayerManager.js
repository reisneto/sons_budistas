export default {
  toggleSoundTrack: function (currentTrackMetadata, setCurrentTrackMetadata, item = null) {//item null means soundPlayer fired this function
    const newCurrentTrackMetadata = { ...currentTrackMetadata };
    const itemId = item ? +item.id : null;
    const soundPlayer = newCurrentTrackMetadata.soundPlayerRef.current;
    if (itemId && currentTrackMetadata.activeItem.id !== itemId) {
      newCurrentTrackMetadata.activeItem = item;
      soundPlayer.src = `./assets/audios/${item.src}`;
      soundPlayer.load();
      soundPlayer.play();
    } else {//soundPlayer or list
      newCurrentTrackMetadata.activeItem = item ? item : newCurrentTrackMetadata.activeItem;
      //check if it started
      if (!soundPlayer.ended && soundPlayer.paused) {//not played yet --> playing
        soundPlayer.play();
      } else if (!soundPlayer.ended && !soundPlayer.paused) {//playing --> pause
        soundPlayer.pause();
      }
      else if (soundPlayer.ended && soundPlayer.paused) { //ended --> not played yet
        soundPlayer.src = `./assets/audios/${item.src}`;
        soundPlayer.load();
      }
    }
    setCurrentTrackMetadata({ ...newCurrentTrackMetadata });
  },

  isPlayIcon: function (activeItemId, paused, itemId) {
    if (itemId !== activeItemId) return true; //when soundTrack is not being played
    return paused; //when soundTrack is active, check if its paused
  }
}