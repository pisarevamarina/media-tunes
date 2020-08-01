export const videoPlayerInit = () => {

const videoPlayer = document.querySelector('.video-player');
const videoButtonPlay = document.querySelector('.video-button__play');
const videoButtonStop = document.querySelector('.video-button__stop');
const videoTimePassed = document.querySelector('.video-time__passed');
const videoProgress = document.querySelector('.video-progress');
const videoTimeTotal = document.querySelector('.video-time__total');

const toggleIcon = () => {
    if (videoPlayer.paused) {
        videoButtonPlay.classList.remove('fa-pause');
        videoButtonPlay.classList.add('fa-play');
    } else {
        videoButtonPlay.classList.add('fa-pause');
        videoButtonPlay.classList.remove('fa-play');
    }
}

const togglePlay = () => {
    if (videoPlayer.paused) { 
        videoPlayer.play();
        } else {
            videoPlayer.pause();
        }

        toggleIcon()
}

const stopPlay = () => {
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
    toggleIcon();
}

const addZeroInTimePlayer = n => n < 10 ? '0' + n : n;

videoPlayer.addEventListener('click', togglePlay);
videoPlayer. addEventListener('timeupdate', () => {
    const currentTime = videoPlayer.currentTime; // сколькот времени уже длится видео
    const videoDuration = videoPlayer.duration; // общая длительность видео
    
    videoProgress.value = (currentTime / videoDuration) * 100;

    let minutesPassed = Math.floor(currentTime / 60);
    let secondsPassed = Math.floor(currentTime % 60);

    let minutesTotal = Math.floor(videoDuration / 60);
    let secondsTotal = Math.floor(videoDuration % 60);

    videoTimePassed.textContent = `${addZeroInTimePlayer(minutesPassed)}:${addZeroInTimePlayer(secondsPassed)}`;
    videoTimeTotal. textContent = `${addZeroInTimePlayer(minutesTotal)}:${addZeroInTimePlayer(secondsTotal)}`;
})
videoButtonPlay.addEventListener('click', togglePlay);
videoButtonStop.addEventListener('click', stopPlay);
videoProgress.addEventListener('change', () => {
    const videoDuration = videoPlayer.duration;
    const value = videoProgress.value;

    videoPlayer.currentTime = (value * videoDuration) / 100;
})






};

