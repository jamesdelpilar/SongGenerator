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
        { title: "Can’t Hold Us by Macklemore & Ryan Lewis",  embedUrl: "https://www.youtube.com/watch?v=W8FUmkw3a4U" },

      ]

    }
    // ===== 2. Queue state =====
    let currentQueue = [];
    let currentIndex = 0;

    // ===== 3. Shuffle helper =====
    function shuffleArray(arr) {
      const copy = arr.slice();
      for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
      }
      return copy;
    }

    // ===== 4. Build random unique queue for a mood =====
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

    // ===== 5. Play current song =====
    function playCurrentSong() {
      if (!currentQueue.length) return;

      const song = currentQueue[currentIndex];
      const playerDiv = document.getElementById("player");
      const nowPlaying = document.getElementById("nowPlaying");

      nowPlaying.textContent = "Now playing: " + song.title;

      playerDiv.innerHTML = `
        <iframe
          width="560"
          height="315"
          src="${song.embedUrl}"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen>
        </iframe>
      `;

      renderQueue();
    }

    // ===== 6. Next / Previous =====
    function playNextSong() {
      if (!currentQueue.length) return;
      currentIndex = (currentIndex + 1) % currentQueue.length;
      playCurrentSong();
    }

    function playPreviousSong() {
      if (!currentQueue.length) return;
      currentIndex = (currentIndex - 1 + currentQueue.length) % currentQueue.length;
      playCurrentSong();
    }

    // ===== 7. Render queue =====
    function renderQueue() {
      const queueList = document.getElementById("queueList");
      queueList.innerHTML = "";

      currentQueue.forEach((song, index) => {
        const li = document.createElement("li");
        li.textContent = (index + 1) + ". " + song.title;

        if (index === currentIndex) {
          li.style.fontWeight = "bold";
        }

        li.addEventListener("click", () => {
          currentIndex = index;
          playCurrentSong();
        });

        queueList.appendChild(li);
      });
    }

    // ===== 8. Hook up UI =====
    document.getElementById("buildQueueBtn").addEventListener("click", () => {
      const mood = document.getElementById("moodSelect").value;
      buildQueueForMood(mood);
    });

    document.getElementById("nextBtn").addEventListener("click", playNextSong);
    document.getElementById("prevBtn").addEventListener("click", playPreviousSong);
