//================================
//  Kuan: Playback Interactions
//================================
class PlaybackInteractions {
    //Object initialization
    constructor() {
        //Playlist Placeholder
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
    //---Play/Pause/Previous/Next-btn Click Event---
    bindPlaybackButtons() {
        const playPauseBtn = document.getElementById('play-pause-btn');
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');

        if (playPauseBtn) {
            playPauseBtn.addEventListener('click', () => this.togglePlayPause());
        }
        if (prevBtn) {
            prevBtn.addEventListener('click', () => this.playPrevious());
        }
        if (nextBtn) {
            nextBtn.addEventListener('click', () => this.playNext());
        }
    }
    //---Play/Pause Fucntion---
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
    //---Previous Song Function---
    playPrevious() {
        this.currentIndex--;
        this.loadSong(this.currentIndex);
        console.log("Previous song triggered");
        this.loadSong(index - 1);
    }
    //---Next Song Function---
    playNext() {
        this.currentIndex++;
        this.loadSong(this.currentIndex);
        console.log("Next song triggered");
        this.loadSong(index + 1);
    }
    //---Like button function---
    toggleLike() {
    this.isLiked = !this.isLiked;
    this.isDisliked = false;

    const likeBtn = document.querySelector('#like-btn .icon');
    const dislikeBtn = document.querySelector('#dislike-btn .icon');
    //---Pending image from frontend---
    if (likeBtn) likeBtn.textContent = this.isLiked ? 'Image Pending' : 'Image Pending';
    if (dislikeBtn) dislikeBtn.textContent = 'Image Pending';
    }
}
//================================
//  Kuan: Playback Interactions    
//================================
