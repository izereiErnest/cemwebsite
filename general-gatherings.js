// Dynamically Add New Gatherings
document.addEventListener("DOMContentLoaded", () => {
  const gatheringsList = document.querySelector(".events");

  const upcomingGatherings = [
    {
      title: "Monthly Community Iftar",
      description: "Join us for our monthly community iftar gathering.",
    },
    {
      title: "Eid Festival Planning",
      description: "Help us plan the upcoming Eid festival celebrations.",
    },
    {
      title: "Charity Collection Drive",
      description: "Supporting those in need through community donations.",
    },
    
  ];

  // Populate upcoming gatherings
  upcomingGatherings.forEach((gathering) => {
    const gatheringDiv = document.createElement("div");
    gatheringDiv.classList.add("gathering");
    gatheringDiv.innerHTML = `
      <h3>${gathering.title}</h3>
      <p>${gathering.description}</p>
    `;
    gatheringsList.appendChild(gatheringDiv);
  });

  // Past gatherings video data
  const pastGatherings = [
    {
      title: "Ramadan Gatherings 2023",
      description: "Highlights from our blessed month of community iftars and prayers.",
      thumbnail: "1.jpg",
      videoUrl: "1.mp4"
    },
    {
      title: "Eid ul-Fitr Celebration",
      description: "A joyous celebration bringing the community together.",
      thumbnail: "2.jpg",
      videoUrl: "2.mp4"
    },
    {
      title: "Community Service Day",
      description: "Our dedicated volunteers helping the local community.",
      thumbnail: "3.jpg",
      videoUrl: "3.mp4"
    },
    
  ];

  // Initialize video gallery system
  function initVideoGallery() {
    const pastGatheringsBtn = document.querySelector('.past-events-btn');
    const videoListCard = document.querySelector('.video-list-card');
    const videoPlayerCard = document.querySelector('.video-player-card');
    const overlay = document.querySelector('.overlay');
    const videoList = document.querySelector('.video-list');
    const videoPlayer = document.querySelector('.video-player');
    const closeButtons = document.querySelectorAll('.close-btn');
    const backButton = document.querySelector('.back-btn');

    // Populate video list
    function populateVideoList() {
      pastGatherings.forEach(gathering => {
        const videoItem = document.createElement('div');
        videoItem.className = 'video-item';
        videoItem.innerHTML = `
          <img src="${gathering.thumbnail}" alt="${gathering.title}" class="video-thumbnail">
          <div class="video-info">
            <h3 class="video-title">${gathering.title}</h3>
            <p class="video-description">${gathering.description}</p>
          </div>
        `;

        videoItem.addEventListener('click', () => {
          videoPlayer.src = gathering.videoUrl;
          videoListCard.style.display = 'none';
          videoPlayerCard.style.display = 'block';
          backButton.style.display = 'flex';
        });

        videoList.appendChild(videoItem);
      });
    }

    // Event Listeners
    function setupEventListeners() {
      pastGatheringsBtn.addEventListener('click', () => {
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
        });
      });

      backButton.addEventListener('click', () => {
        videoPlayerCard.style.display = 'none';
        videoListCard.style.display = 'block';
        videoPlayer.pause();
        videoPlayer.src = '';
      });

      overlay.addEventListener('click', () => {
        videoListCard.style.display = 'none';
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