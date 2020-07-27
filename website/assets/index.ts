// import 'regenerator-runtime/runtime'
import MediaPlayer from '@lisba/media_player/lib/MediaPlayer';
import AutoPlay from '@lisba/media_player/lib/plugins/AutoPlay';
import AutoPause from '@lisba/media_player/lib/plugins/AutoPause';
import Ads from '@lisba/media_player/lib/plugins/Ads';

const video = document.querySelector('video');
const playPausebutton: HTMLElement = document.getElementById('playPause');
const muteUnmutebutton: HTMLElement = document.getElementById('muteUnmute');

const player = new MediaPlayer(
        {
            el: video,
            plugins: [ new AutoPlay(), new AutoPause(), new Ads() ]
        }
    );

playPausebutton.onclick = () => player.togglePlay();
muteUnmutebutton.onclick = () => player.toggleMute();

if('serviceWorker' in navigator)
{
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.log(error.message)
    });
}