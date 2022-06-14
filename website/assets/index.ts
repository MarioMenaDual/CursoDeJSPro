import MediaPlayer from '@dualmariomena/platzimediaplayer';
import AutoPlay from '@dualmariomena/platzimediaplayer/lib/plugins/AutoPlay';
import AutoPause from '@dualmariomena/platzimediaplayer/lib/plugins/AutoPause';
import Ads from '@dualmariomena/platzimediaplayer/lib/plugins/Ads';

const video = document.querySelector('video');
const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause(),new Ads() ],
});

const playButton: HTMLElement = document.querySelector('#buttonPlay');
playButton.onclick = () => player.togglePlay();

const muteButton: HTMLElement = document.querySelector('#buttonMute');
muteButton.onclick = () => {
  if (player.media.muted) {
    player.unmute();
  } else {
    player.mute();
  }
};

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch(error => {
    console.log(error.message);
  });
}