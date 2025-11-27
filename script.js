//----Playback Interactions----
class PlaybackInteractions {
    //Object initialization
    constructor() {
        //Playlist Pending
        this.currentSong = null;
        this.isPlaying = false;
        this.isLiked = false;
        this.isDisliked = false;

        this.init();
    }
    //Page load initialization
    init() {
        this.bindPlaybackButtons();
    }
    //----Play/Pause/Previous/Next-btn unction----
    bindPlaybackButtons() {
        const playPauseBtn = document.getElementById('play-pause-btn');

        if (playPauseBtn) {
            playPauseBtn.addEventListener('click', () => this.togglePlayPause());
        }
    }
    togglePlayPause() {
        this.isPlaying = !this.isPlaying;

        const icon = document.querySelector('#play-pause-btn .control-icon');
        if (!icon) return;

        if (this.isPlaying) {
            this.currentSong.play();
            icon.textContent = '⏸️';  // pause icon
        } else {
            this.currentSong.pause();
            icon.textContent = '▶️';  // play icon
        }
    }
}


