document.addEventListener('DOMContentLoaded', () => {
  // Get all resource items
  const resourceItems = document.querySelectorAll('.resource-item');
  
  // Loop through each resource item
  resourceItems.forEach(item => {
    // Get the close button and content within the item
    const closeButton = item.querySelector('.close-button');
    const resourceContent = item.querySelector('.resource-content');
    
    // Toggle the expanded state on click (showing the downloadable files)
    item.addEventListener('click', (event) => {
      if (!event.target.classList.contains('download-icon')) {
        item.classList.toggle('expanded');
      }
    });
    
    // Close the resource item content when the close button is clicked
    closeButton.addEventListener('click', (event) => {
      event.stopPropagation();
      item.classList.remove('expanded');
    });
  });

  // File paths object mapping filenames to their actual paths
  const filePaths = {
    // Books
    'Understanding Islam.pdf': '/downloads/books/understanding-islam.pdf',
    'Daily Prayers Guide.pdf': '/downloads/books/daily-prayers-guide.pdf',
    'Islamic History.pdf': '/downloads/books/islamic-history.pdf',
    
    // Videos
    'Friday Sermon - Week 1': '1.mp4',
    'Islamic Studies Lecture': '2.mp4',
    
    // Articles
    'Modern Muslim Life.pdf': '/downloads/articles/modern-muslim-life.pdf',
    'Community Building.pdf': '/downloads/articles/community-building.pdf',
  };

  // Add hover effects and download functionality for the download icons
  document.body.addEventListener('mouseenter', (event) => {
    const icon = event.target.closest('.download-icon');
    if (icon) {
      icon.style.transform = 'scale(1.1)';
      icon.style.backgroundColor = 'rgba(76, 175, 80, 0.1)';
    }
  }, true);

  document.body.addEventListener('mouseleave', (event) => {
    const icon = event.target.closest('.download-icon');
    if (icon) {
      icon.style.transform = 'scale(1)';
      icon.style.backgroundColor = '';
    }
  }, true);

  // Event delegation for download functionality
  document.body.addEventListener('click', (event) => {
    const icon = event.target.closest('.download-icon');
    if (icon) {
      event.stopPropagation();
      const fileName = icon.closest('.resource-file').querySelector('.file-info span').innerText;
      const filePath = filePaths[fileName];
      
      if (filePath) {
        // Create a hidden anchor element for download
        const downloadLink = document.createElement('a');
        downloadLink.href = filePath;
        downloadLink.download = fileName;
        
        // Add to DOM, click it, and remove it
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      } else {
        // Display error if file path not found
        alert(`File path not found for: ${fileName}`);
      }
    }
  });

  // Function to open modal and show the clicked image
  function openModal(imageElement) {
    var modal = document.getElementById("imageModal");
    var modalImage = document.getElementById("modalImage");
    var modalCaption = document.getElementById("modalCaption");
    
    modal.style.display = "block";
    modalImage.src = imageElement.src; // Set the modal image source to the clicked image's source
    modalCaption.innerHTML = imageElement.alt; // Set the caption to the alt text of the image
  }

  // Function to close the modal
  function closeModal() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none";
  }

  // Ensure modal close button is accessible
  const closeModalButton = document.getElementById("closeModalButton");
  if (closeModalButton) {
    closeModalButton.setAttribute('aria-label', 'Close Image Modal');
    closeModalButton.setAttribute('tabindex', '0');
    closeModalButton.addEventListener('click', closeModal);
  }
});
