const audio = document.querySelector('audio');
const progressBar = document.querySelector('#progress-bar');
const artist = document.querySelector('.artist');
const song = document.querySelector('.song');
const poster = document.querySelector('#poster');
const background = document.querySelector('#bacground');
const songs = ['./assets/music/beyonce.mp3', './assets/music/dontstartnow.mp3'];
const posters =  ['./assets/images/lemonade.png', './assets/images/dontstartnow.png'];
const songArtists = ['Beyonce', 'Dua Lipa'];
const songTitles = ["Don't Hurt Yourself", "Don't Start Now"];
let isPlay = false;
let songIndex = 0;

function playAudio() {
    isPlay = true;
    document.getElementById('play-pause').src = 'assets/svg/pause.png'
    audio.src = 'assets/audio/dontstartnow.mp3';
    document.getElementById('poster').style.scale = '110%';
    audio.currentTime = 0;
    audio.play();
}

function pauseAudio() {
    isPlay = false;
    document.getElementById('play-pause').src = 'assets/svg/play.png'
    document.getElementById('poster').style.scale = '100%';
    audio.pause();
}

function playPause() {
    if (isPlay) {
        pauseAudio();
    } else {
        playAudio();
        audio.currentTime = progressBar.value;
    }
}

function nextSong() {
    songIndex++;
    songIndex = songIndex > 1 ? 0 : songIndex;
    audio.src = songs[songIndex];
    poster.onload = function () {
        poster.src = posters[songIndex];
        background.src = posters[songIndex];
    };
    artist.textContent = songArtists[songIndex];
    song.textContent = songTitles[songIndex];
    playing = true;
    playPause();
}

function previousSong() {
    songIndex--;
    songIndex = songIndex < 0 ? 1 : songIndex;
    audio.src = songs[songIndex];
    poster.onload = function () {
        poster.src = posters[songIndex];
        background.src = posters[songIndex];
    };
    artist.textContent = songArtists[songIndex];
    song.textContent = songTitles[songIndex];
    playing = true;
    playPause();
}

function updateProgressValue() {
    progressBar.value = audio.currentTime;
    progressBar.max = audio.duration;
    document.querySelector('.durationTime').textContent = formatTime(audio.duration);
    document.querySelector('.currentTime').textContent = formatTime(audio.currentTime);
};

setInterval(updateProgressValue, 500);


function formatTime(seconds) {
    let miutes = Math.floor(seconds / 60);
    let sec = Math.floor(seconds - miutes * 60);
    if (sec < 10) {
        sec = '0' + sec;
    }
    return miutes + ':' + sec;
}

function changeProgressBar() {
    audio.currentTime = progressBar.value;
}

