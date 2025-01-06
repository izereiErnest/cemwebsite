document.addEventListener('DOMContentLoaded', () => {
  // Sample video data - Replace with your actual video data
  const patientVideos = [
    {
      title: "Today at Kabutare",
      description: "See how the Program went this on 12/23/2015",
      thumbnail: "2.jpg",
      videoUrl: "1.mp4"
    },
    {
      title: "Out Working for Jannah",
      description: "Visiting People at Kabutare Hospital.",
      thumbnail: "2.jpg",
      videoUrl: "2.mp4"
    },
    {
      title: "Today 12/13/2018",
      description: "Visiting patients at Kabutarehospital",
      thumbnail: "2.jpg",
      videoUrl: "3.mp4"
    }
  ];

  function initVideoGallery() {
    const videoList = document.querySelector('.video-list');
    const videoPlayerCard = document.querySelector('.video-player-card');
    const videoPlayer = document.querySelector('.video-player');
    const closeButtons = document.querySelectorAll('.close-btn');
    const overlay = document.querySelector('.overlay');

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
        });
      });

      overlay.addEventListener('click', () => {
        videoPlayerCard.style.display = 'none';
        overlay.style.display = 'none';
        videoPlayer.pause();
        videoPlayer.src = '';
      });
    }

    // Initialize
    populateVideoList();
    setupEventListeners();
  }

  // Initialize the video gallery
  initVideoGallery();
});