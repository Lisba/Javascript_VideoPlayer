import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';
import AutoPause from './plugins/AutoPause.js';

const video = document.querySelector('video');
const playPausebutton = document.getElementById('playPause');
const muteUnmutebutton = document.getElementById('muteUnmute');

const player = new MediaPlayer(
        {
            el: video,
            plugins: [ new AutoPlay(), new AutoPause() ]
        }
    );

playPausebutton.onclick = () => player.togglePlay();
muteUnmutebutton.onclick = () => player.toggleMute();