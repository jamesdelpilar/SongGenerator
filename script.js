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
likeBtn.addEventListener("click", () => {
    addSongToList(currentSong, likedList);
});

// Add to disliked songs
dislikeBtn.addEventListener("click", () => {
    addSongToList(currentSong, dislikedList);
});

// Add song to chosen list
function addSongToList(song, listElement) {
    const li = document.createElement("li");
    li.textContent = song;
    listElement.appendChild(li);
}