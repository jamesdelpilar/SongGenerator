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

    //let currentQueue = [];
    //let currentIndex = 0;

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
    currentIndex++;
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
    Udhay: Audio PLayback
 *************************************/


/*************************************
 * GLOBAL STATE
 *************************************/
let currentQueue = [];
let currentIndex = 0;
let audioElement = null; 


/*************************************
 * SHUFFLE / RANDOMIZER
 *************************************/
function shuffleArray(arr) {
  const copy = arr.slice(); 
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}


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

/*************************************
    Udhay: Audio Playback
 *************************************/








