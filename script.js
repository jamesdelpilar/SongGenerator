/*************************************
 * GLOBAL STATE
 *************************************/
let currentQueue = [];
let currentIndex = 0;
let audioElement = null; 
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
    buildQueueForMood(mood);

    // Show song area + lists
    songControls.style.display = "block";
    listsSection.style.display = "block";
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

        // ===== 3. Shuffle =====

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

      currentQueue = shuffleArray(songs);
      currentIndex = 0;

      renderQueue();
      playCurrentSong();
    }

  

    
//================================
//  Kuan: Playback Interactions
//================================

//Boolean Initialization
let isPlaying = false;
let isLiked = false;
let isDisliked = false;
//DOM References
const playPauseIcon = document.querySelector('#play-pause-btn .control-icon');
const likeIcon = document.querySelector('#like-btn .control-icon');
const dislikeIcon = document.querySelector('#dislike-btn .control-icon');

//---Play/Pause Fucntion---
function togglePlayPause() {
    isPlaying = !isPlaying;
    if (playPauseIcon) {
        //Ternary Operator for code clarity
        playPauseIcon.textContent = isPlaying ? '⏸️' : '▶️';
    }

    if (audioElement) { 
        if (isPlaying) {
            audioElement.play(); 
        } else {
            audioElement.pause();
        }
    }
    //Debug output
    console.log("Play/Pause triggered");
}

//---Previous Song Function---
function playPrevious() {
    currentIndex--;
    //loadSong(currentIndex); "Song function pending"
    //Reset icon once song plays automatically
    isPlaying = true;
    if (playPauseIcon) {
        playPauseIcon.textContent = '⏸️'; 
    }
    //Debug Output
    console.log("Previous song triggered");
}

//---Next Song Function---
function playNext() {
    currentIndex = (currentIndex + 1) % currentQueue.length;
    //loadSong(currentIndex); "Song function pending"
    //Reset icon once song plays automatically
    isPlaying = true;
    if (playPauseIcon) {
        playPauseIcon.textContent = '⏸️'; // Show pause icon (it's playing)
    }
    //Debug Output
    console.log("Next song triggered");
}

//---Like button icon switch---
function addToLikedSongs() {
    isLiked = !isLiked;
    isDisliked = false;
    //Icon toggle
    if (likeIcon) {
        likeIcon.style.color = isLiked ? '👍' : '👍🏻';
    }
    if (dislikeIcon) {
        dislikeIcon.style.color = '👍🏻';
    }
    //Debug Output
    console.log("Like button triggered");
}

//---Dislike button icon switch---
function addToDislikedSongs() {
    isDisliked = !isDisliked;
    isLiked = false;
    if (dislikeIcon) {
        //Icon toggle
        dislikeIcon.style.color = isDisliked ? '👎' : '👎🏻';
    }
    if (likeIcon) {
        likeIcon.style.color = '👎🏻';
    }
    //Debug Output
    console.log("Dislike button triggered");
}
//================================
//  Kuan: Playback Interactions    
//================================

/*************************************
 * BUILD QUEUE FOR MOOD
 *************************************/
function buildQueueForMood(mood) {
  if (typeof songsByMood === "undefined") {
    console.error("songsByMood is not defined. Load songs.js first.");
    return;
  }

  const moodKey = mood.toLowerCase();
  const songs = songsByMood[moodKey];

  if (!songs || songs.length === 0) {
    alert("No songs available for this mood.");
    return;
  }

  currentQueue = shuffleArray(songs);
  currentIndex = 0;
  loadCurrentSong();
  renderQueue();
}

/*************************************
 * LOAD + PLAY CURRENT SONG
 *************************************/
function loadCurrentSong() {
  if (!currentQueue.length) return;

  const song = currentQueue[currentIndex];

  const playerDiv = document.getElementById("player");
  const nowPlaying = document.getElementById("nowPlaying");

  if (nowPlaying) {
    nowPlaying.textContent = "Now playing: " + song.title;
  }

  if (!playerDiv) return;

  playerDiv.innerHTML = `
    <audio id="audio-player" controls autoplay src="${song.file}">
      Your browser does not support the audio element.
    </audio>
  `;

  audioElement = document.getElementById("audio-player");
  if (!audioElement) return;

  audioElement.addEventListener("ended", () => {
    currentIndex = (currentIndex + 1) % currentQueue.length;
    loadCurrentSong();
  });

  audioElement.play().catch(() => {
    console.log("Autoplay blocked until the user interacts with the page.");
  });

  renderQueue();
}


/*************************************
 * DISPLAY QUEUE
 *************************************/
function renderQueue() {
  const queueList = document.getElementById("queueList");
  if (!queueList) return;

  queueList.innerHTML = "";

  currentQueue.forEach((song, index) => {
    const li = document.createElement("li");
    li.textContent = (index + 1) + ". " + song.title;

    if (index === currentIndex) {
      li.style.fontWeight = "bold";
    }

    queueList.appendChild(li);
  });
  
}

// Function in script.js (called by the 'onclick' event on the mood cards)
function handleMoodClick(mood) {
    // 1. Convert the mood name to lowercase and encode it for the URL.
    // MDN: encodeURIComponent() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
    const moodParam = encodeURIComponent(mood.toLowerCase());
    
    // 2. Direct the browser to the new page with the mood parameter attached.
    // MDN: window.location.href - https://developer.mozilla.org/en-US/docs/Web/API/Window/location
    window.location.href = `nowPlaying.html?mood=${moodParam}`;
}
// This line navigates the page and passes the mood
function handleMoodClick(mood) {
    window.location.href = `nowPlaying.html?mood=${mood.toLowerCase()}`; 
}

// This line navigates the page and passed the stock image from the main home page
document.addEventListener('DOMContentLoaded', () => {
    const albumArtElement = document.getElementById('album-art');
    
    // 1. Get the URL parameters
    const params = new URLSearchParams(window.location.search);
    const mood = params.get('mood'); // e.g., 'study'

    if (mood && albumArtElement) {
        
        // 2. Determine the correct file name
        let fileName;

        if (mood === 'study') {
            fileName = 'Study-1.png';
        } else {
            const capitalizedMood = mood.charAt(0).toUpperCase() + mood.slice(1);
            fileName = `${capitalizedMood}.png`;
        }
        
        // 3. Set the image source path
        albumArtElement.src = `Images/${fileName}`; 
        
        albumArtElement.alt = `${fileName} Playlist Cover`;
        
        // CRITICAL: Start the music playback (This part remains the same)
        buildQueueForMood(mood);
    }
});