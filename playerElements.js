import { secondsToMinutes } from './utils.js';

export default {
    get() {
        this.cover = document.querySelector('.card-image');
        this.title = document.querySelector('.card-content h5');
        this.artist = document.querySelector('.artist');
        this.btnPlayPause = document.querySelector('#play-pause');
        this.btnVol = document.querySelector('#vol');
        this.btnVolumeControl = document.querySelector('#vol-control');
        this.btnSeekBar = document.querySelector('#seekbar');
        this.currentDuration = document.querySelector('#current-duration');
        this.totalDuration = document.querySelector('#total-duration');
    },

    createAudioElement(caminhoAudio) {
        this.audio = new Audio(caminhoAudio);
    },

    actions() {
        this.audio.onended = () => this.next();
        this.btnPlayPause.onclick = () => this.togglePlayPause();
        this.btnVol.onclick = () => this.toggleMute();
        this.btnVolumeControl.oninput = () => this.setVolume(this.btnVolumeControl.value);
        this.btnSeekBar.oninput = () => this.setSeek(this.btnSeekBar.value);
        this.btnSeekBar.max = this.audio.duration;
        this.totalDuration.innerText = secondsToMinutes(this.audio.duration);
        this.audio.ontimeupdate = () => this.timeUpdate();
    }

}