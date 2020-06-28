// import 'regenerator-runtime/runtime'
import MediaPlayer from '@lisba/platzi_mediaplayer/src/MediaPlayer';
import AutoPlay from '@lisba/platzi_mediaplayer/src/plugins/AutoPlay';
import AutoPause from '@lisba/platzi_mediaplayer/src/plugins/AutoPause';
import Ads from '@lisba/platzi_mediaplayer/src/plugins/Ads';

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