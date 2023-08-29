
// const videoCard = document.querySelector('.video-card');
const videoCards = document.querySelectorAll('.video-card');

videoCards.forEach(videoCard => {
    const thumbnailContainer = videoCard.querySelector('.thumbnail-container');
    const thumbnailContainerImg = videoCard.querySelector('.thumbnail-container img');
    const video = videoCard.querySelector('.video');
    const volumeToggle = videoCard.querySelector('.volume-toggle');

    videoCard.style.height = thumbnailContainerImg.height + "px";

    // start
    let attrHref;
    volumeToggle.addEventListener('click', e => {
      e.preventDefault();
    
      if (video.muted) {
        video.muted = false;
        volumeToggle.classList.remove('volume-muted');
        volumeToggle.querySelector("i").classList.remove("fa-volume-xmark")
        volumeToggle.querySelector("i").classList.add("fa-volume-high")
      } else {
        video.muted = true;
        volumeToggle.classList.add('volume-muted');
        volumeToggle.querySelector("i").classList.add("fa-volume-xmark")
        volumeToggle.querySelector("i").classList.remove("fa-volume-high")
      }
    
    });

    videoCard.addEventListener('mouseenter', () => {
        videoCard.classList.add('playing');
        // thumbnailContainer.style.display = 'none';
        // video.style.display = 'block';
        video.play();
    });

    videoCard.addEventListener('mouseleave', () => {
        videoCard.classList.remove('playing');
        // thumbnailContainer.style.display = 'block';
        // video.style.display = 'none';
        video.currentTime = 0;
        video.pause();
    });
});
