import audios from './files/data.js';
import elements from './playerElements.js';
import {secondsToMinutes} from './utils.js';

export default {
    currentAudio: {},
    audioData: audios,
    currentPlaying: 0,
    isPlaying: false,
    start() {
        elements.get.call(this);
        this.update();
    },
    play() {
        this.isPlaying = true;
        this.audio.play();
        this.btnPlayPause.innerText = "pause";
    },
    pause() {
        this.isPlaying = false;
        this.audio.pause();
        this.btnPlayPause.innerText = "play_arrow";
    },
    togglePlayPause() {
        if (this.isPlaying) {
            this.pause();
        } else {
            this.play();
        }
    },
    toggleMute() {
        this.audio.muted = !this.audio.muted;
        this.btnVol.innerText = this.audio.muted ? 'volume_down' : 'volume_up';
    },
    next() {
        this.currentPlaying++;
        if (this.currentPlaying == this.audioData.length) this.restart();
        this.update();
        this.play();
    },
    setVolume(value) {
        this.audio.volume = value / 100;
        this.btnVol.innerText = this.audio.volume == 0 ? 'volume_down' : 'volume_up';
    },
    setSeek(value) {
        this.audio.currentTime = value;
    },
    timeUpdate(){
        this.currentDuration.innerText = secondsToMinutes(this.audio.currentTime);
        this.btnSeekBar.value = this.audio.currentTime;
    },
    update() {
        this.currentAudio = this.audioData[this.currentPlaying];
        this.cover.style.background = `url('${this.currentAudio.cover}') no-repeat center center / cover`;
        this.title.innerText = this.currentAudio.title;
        this.artist.innerText = this.currentAudio.artist;
        elements.createAudioElement.call(this, this.currentAudio.file);
        this.audio.onloadeddata = () => {
            elements.actions.call(this);
        }
    },
    restart() {
        this.currentPlaying = 0;
        this.update;
    }
}