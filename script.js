let currentSong = ""; // stores currently generated song

// DOM references
const songControls = document.getElementById("song-controls");
const currentSongDisplay = document.getElementById("current-song");

const likeBtn = document.getElementById("likeBtn");
const dislikeBtn = document.getElementById("dislikeBtn");
const likedList = document.getElementById("likedList");
const dislikedList = document.getElementById("dislikedList");
const listsSection = document.getElementById("lists-section");

// Handle mood selection → generate a song
function handleMoodClick(mood) {
    // Example: Replace with your real generator
    currentSong = generateRandomSong(mood);

    currentSongDisplay.textContent = currentSong;

    // Show song area + lists
    songControls.style.display = "block";
    listsSection.style.display = "block";
}

// Fake generator (replace with your real one)
function generateRandomSong(mood) {
    return `${mood} Song #${Math.floor(Math.random() * 100)}`;
}

// Add to liked songs
//likeBtn.addEventListener("click", () => {
//    addSongToList(currentSong, likedList);
//});

// Add to disliked songs
//dislikeBtn.addEventListener("click", () => {
//    addSongToList(currentSong, dislikedList);
//});

// Add song to chosen list
function addSongToList(song, listElement) {
    const li = document.createElement("li");
    li.textContent = song;
    listElement.appendChild(li);
}

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
    //---Like button icon switch---
    toggleLike() {
        this.isLiked = !this.isLiked;
        this.isDisliked = false;

        const likeBtn = document.querySelector('#like-btn .icon');
        const dislikeBtn = document.querySelector('#dislike-btn .icon');
        //---Pending image from frontend---
        if (likeBtn) likeBtn.textContent = this.isLiked ? 'Image Pending' : 'Image Pending';
        if (dislikeBtn) dislikeBtn.textContent = 'Image Pending';
    }
    //---Dislike button icon switch---
    toggleDislike() {
        this.isDisliked = !this.isDisliked;
        this.isLiked = false;

        const dislikeBtn = document.querySelector('#dislike-btn .icon');
        const likeBtn = document.querySelector('#like-btn .icon');
        //---Pending image from frontend---
        if (dislikeBtn) dislikeBtn.textContent = this.isDisliked ? 'Image Pending' : 'Image Pending';
        if (likeBtn) likeBtn.textContent = 'Image Pending';
    }
}
//================================
//  Kuan: Playback Interactions    
//================================

/*************************************
    Udhay: Audio PLayback
 *************************************/
let audioElement = null;


/*************************************
 * AUDIO PLAYER CREATION
 *************************************/
playerDiv.innerHTML = `
  <audio id="audio-player" controls autoplay src="${song.file}">
    Your browser does not support the audio element.
  </audio>
`;
audioElement = document.getElementById("audio-player");

audioElement.play().catch(() => {
  console.log("Autoplay was blocked; press Play to start audio.");
});

audioElement.addEventListener("ended", playNext);


/*************************************
 * AUDIO PLAY / PAUSE LOGIC
 *************************************/
if (!audioElement) {
  audioElement = document.getElementById("audio-player");
}
if (!audioElement) return;

if (audioElement.paused) {
  audioElement.play();
} else {
  audioElement.pause();
}

audioElement.src = song.file;


/*************************************
 * AUDIO STATE
 *************************************/
if (audioElement && !audioElement.paused) {
}

if (audioElement) {
   audioElement.pause();
}






