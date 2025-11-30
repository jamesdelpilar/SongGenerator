//================================
//  Udhay: Audio-Playback
//================================
// ===== 1. 15 UNIQUE songs per mood =====


const songsByMood = {
      workout: [
        { title: "Stronger by Kanye West",  embedUrl: "https://www.youtube.com/watch?v=3mwiO5st-us" },
        { title: "Eye of the Tiger by Survivor",  embedUrl: "https://www.youtube.com/watch?v=XxxfQ7-aMrE" },
        { title: "Lose Yourself by Eminem",  embedUrl: "https://www.youtube.com/watch?v=tR1ECf4sEpw" },
        { title: "Uptown Funk by Bruno Mars",  embedUrl: "https://www.youtube.com/watch?v=W8FUmkw3a4U" },
        { title: "Can’t Hold Us by Macklemore & Ryan Lewis",  embedUrl: "https://www.youtube.com/watch?v=VG3JsmOmDqw" },
        { title: "Turn Down for What – DJ Snake & Lil Jon", embedUrl: "https://www.youtube.com/watch?v=QFy0hQ3lY-w" },
        { title: "POWER – Kanye West", embedUrl: "https://www.youtube.com/watch?v=chPDTUjnWgA" },
        { title: "Titanium – David Guetta ft. Sia", embedUrl: "https://www.youtube.com/watch?v=P-gWGlf_VrY" },
        { title: "Till I Collapse – Eminem", embedUrl: "https://www.youtube.com/watch?v=Obim8BYGnOE" },
        { title: "Remember the Name – Fort Minor", embedUrl: "https://www.youtube.com/watch?v=MxhYgn7oUzQ" },
        { title: "Don’t Start Now – Dua Lipa", embedUrl: "https://www.youtube.com/watch?v=oygrmJFKYZY" },
        { title: "Levitating – Dua Lipa", embedUrl: "https://www.youtube.com/watch?v=WHuBW3qKm9g" },
        { title: "Pepas – Farruko", embedUrl: "https://www.youtube.com/watch?v=acm6O4WwgBg" },
        { title: "Blinding Lights – The Weeknd", embedUrl: "https://www.youtube.com/watch?v=XwxLwG2_Sxk" },
        { title: "Heat Waves – Glass Animals", embedUrl: "https://www.youtube.com/embed/WORKOUT_HEATWAVES" }
      ],

    }
        // ===== 3. Shuffle =====

    let currentQueue = [];
    let currentIndex = 0;

    function shuffleArray(arr) {
      const copy = arr.slice();
      for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
      }
      return copy;
    }

    // ===== 4. Build random queue for a mood =====
    function buildQueueForMood(mood) {
      const songs = songsByMood[mood];
      if (!songs || songs.length === 0) {
        alert("No songs available for this mood.");
        return;
      }

      currentQueue = shuffleArray(songs); // all 15 shuffled
      currentIndex = 0;

      renderQueue();
      playCurrentSong();
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
