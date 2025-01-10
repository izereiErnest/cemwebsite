// video-gallery.js
document.addEventListener('DOMContentLoaded', () => {
  // Sample video data - Replace with your actual video data
  const patientVideos = [
    {
      title: "Today at Kabutare",
      description: "See how the program went on 12/23/2015.",
      thumbnail: "Assets/Images/Patients1.jpg",
      videoUrl: "Assets/Videos/Patients1.mp4"
    },
    {
      title: "Out Working for Jannah",
      description: "Visiting people at Kabutare Hospital.",
      thumbnail: "Assets/Images/Patients2.jpg",
      videoUrl: "Assets/Videos/Patients2.mp4"
    },
    {
      title: "Today 12/13/2018",
      description: "Visiting patients at Kabutare Hospital.",
      thumbnail: "Assets/Images/Patients3.jpg",
      videoUrl: "Assets/Videos/Patients3.mp4"
    }
  ];

  function initVideoGallery() {
    const videoList = document.querySelector('.video-list');
    const videoPlayerCard = document.querySelector('.video-player-card');
    const videoPlayer = document.querySelector('.video-player');
    const closeButtons = document.querySelectorAll('.close-btn');
    const overlay = document.querySelector('.overlay');
    
    // Create replay button container and button
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
      patientVideos.forEach(video => {
        const videoItem = document.createElement('div');
        videoItem.className = 'video-item';
        videoItem.innerHTML = `
          <img src="${video.thumbnail}" alt="${video.title}" class="video-thumbnail">
          <div class="video-info">
            <h3 class="video-title">${video.title}</h3>
            <p class="video-description">${video.description}</p>
          </div>
        `;

        videoItem.addEventListener('click', () => {
          videoPlayer.src = video.videoUrl;
          videoPlayerCard.style.display = 'block';
          overlay.style.display = 'block';
          replayContainer.style.display = 'none';
          videoPlayer.play();
        });

        videoList.appendChild(videoItem);
      });
    }

    // Event Listeners
    function setupEventListeners() {
      closeButtons.forEach(button => {
        button.addEventListener('click', () => {
          videoPlayerCard.style.display = 'none';
          overlay.style.display = 'none';
          videoPlayer.pause();
          videoPlayer.src = '';
          replayContainer.style.display = 'none';
        });
      });

      overlay.addEventListener('click', () => {
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