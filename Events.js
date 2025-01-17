document.addEventListener("DOMContentLoaded", () => {
  const eventsList = document.querySelector(".events-list");

  const upcomingEvents = [
    {
      title: "Charity Walk",
      date: "January 20, 2024",
      description: "Join us for a walk to support local causes.",
    },
    {
      title: "Family Night",
      date: "January 27, 2024",
      description: "A night of fun and entertainment for all ages.",
    },
  ];

  upcomingEvents.forEach((event) => {
    const eventDiv = document.createElement("div");
    eventDiv.classList.add("event-item");
    eventDiv.innerHTML = `
      <h3>${event.title}</h3>
      <p>Date: ${event.date}</p>
      <p>Description: ${event.description}</p>
    `;
    eventsList.appendChild(eventDiv);
  });

  const pastEvents = [
    {
      title: "An event to give Quran Translation books",
      description: "Highlights of how this Event Went.",
      thumbnail: "Assets/Images/Events 1.jpg",
      videoUrl: "Assets/Videos/Events1.mp4"
    },
    {
      title: "2024 Mini-foot",
      description: "Highlights of mini-foot competition between CEM groups.",
      thumbnail: "2.jpg",
      videoUrl: "Assets/Videos/Events2.mp4"
    },
    {
      title: "CEM UR HUYE committee handover Event 2024",
      description: "Young leaders Being assigned the role to read the Ummah of Muslim Students in University of Rwanda.",
      thumbnail: "3.jpg",
      videoUrl: "Assets/Videos/Events3.mp4"
    }
  ];

  // Initialize video gallery system
  function initVideoGallery() {
    const pastEventsBtn = document.querySelector('.past-events-btn');
    const videoListCard = document.querySelector('.video-list-card');
    const videoPlayerCard = document.querySelector('.video-player-card');
    const overlay = document.querySelector('.overlay');
    const videoList = document.querySelector('.video-list');
    const videoPlayer = document.querySelector('.video-player');
    const closeButtons = document.querySelectorAll('.close-btn');
    const backButton = document.querySelector('.back-btn');

    // Create replay container and button
    const replayContainer = document.createElement('div');
    replayContainer.className = 'replay-container';
    
    const replayButton = document.createElement('button');
    replayButton.className = 'replay-btn';
    replayButton.innerHTML = `
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M3 12c0 4.97 4.03 9 9 9s9-4.03 9-9-4.03-9-9-9c-2.51 0-4.77 1.02-6.4 2.65L2 9"/>
        <path d="M2 2v7h7"/>
      </svg>
    `;
    
    replayContainer.appendChild(replayButton);
    videoPlayerCard.appendChild(replayContainer);

    // Populate video list
    function populateVideoList() {
      pastEvents.forEach(event => {
        const videoItem = document.createElement('div');
        videoItem.className = 'video-item';
        videoItem.innerHTML = `
          <img src="${event.thumbnail}" alt="${event.title}" class="video-thumbnail">
          <div class="video-info">
            <h3 class="video-title">${event.title}</h3>
            <p class="video-description">${event.description}</p>
          </div>
        `;

        videoItem.addEventListener('click', () => {
          videoPlayer.src = event.videoUrl;
          videoListCard.style.display = 'none';
          videoPlayerCard.style.display = 'block';
          backButton.style.display = 'flex';
          replayContainer.style.display = 'none';
          videoPlayer.play();
        });

        videoList.appendChild(videoItem);
      });
    }

    // Event Listeners
    function setupEventListeners() {
      pastEventsBtn.addEventListener('click', () => {
        videoListCard.style.display = 'block';
        overlay.style.display = 'block';
      });

      closeButtons.forEach(button => {
        button.addEventListener('click', () => {
          videoListCard.style.display = 'none';
          videoPlayerCard.style.display = 'none';
          overlay.style.display = 'none';
          videoPlayer.pause();
          videoPlayer.src = '';
          replayContainer.style.display = 'none';
        });
      });

      backButton.addEventListener('click', () => {
        videoPlayerCard.style.display = 'none';
        videoListCard.style.display = 'block';
        videoPlayer.pause();
        videoPlayer.src = '';
        replayContainer.style.display = 'none';
      });

      overlay.addEventListener('click', () => {
        videoListCard.style.display = 'none';
        videoPlayerCard.style.display = 'none';
        overlay.style.display = 'none';
        videoPlayer.pause();
        videoPlayer.src = '';
        replayContainer.style.display = 'none';
      });

      // Video ended event listener
      videoPlayer.addEventListener('ended', () => {
        replayContainer.style.display = 'flex';
      });

      // Replay button event listener
      replayButton.addEventListener('click', () => {
        videoPlayer.currentTime = 0;
        videoPlayer.play();
        replayContainer.style.display = 'none';
      });
    }

    // Initialize
    populateVideoList();
    setupEventListeners();
  }

  // Initialize the video gallery
  initVideoGallery();
});