var swiper = new Swiper('.heroSlider', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  speed: 1000,
  loop: true,
  effect: 'fade',
});

const playPauseButton = document.querySelector('.swiper-custom-playpause');

playPauseButton.addEventListener('click', function () {
  // Toggle autoplay based on current state
  if (swiper.autoplay.running) {
    swiper.autoplay.stop();
    // Update button icon to play (optional)
    this.querySelector('i').classList.remove('fa-pause');
    this.querySelector('i').classList.add('fa-play');
  } else {
    swiper.autoplay.start();
    // Update button icon to pause (optional)
    this.querySelector('i').classList.remove('fa-play');
    this.querySelector('i').classList.add('fa-pause');
  }
});
