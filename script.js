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

  

    

