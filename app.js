const nextButton = document.querySelector('.next-btn');
const video = document.querySelector('.hero-video');

const movieList = ['https://i.pinimg.com/originals/22/53/d2/2253d27af90661699810bcc9abab6ed7.gif','videos/hero-1.mp4','videos/hero-2.mp4','videos/hero-3.mp4','videos/hero-4.mp4'];
let index = 0;
nextButton.addEventListener('click', function() {
    index++;
    video.src = movieList[index];
    if (index === 3) {
        index = -1;
    }
});
