"use strict";
const btns = document.querySelectorAll('.btn');
const audios = document.querySelectorAll('audio');
const body = document.body;
btns.forEach((btn) => btn.addEventListener('click', () => {
    body.setAttribute('style', `background-image: url('../assets/${btn.dataset['bg']}.jpg');`);
    audios.forEach(track => track.pause());
    const audio = document.querySelector(`[data-sound="${btn.dataset['link']}"]`);
    if (!audio)
        return;
    if (audio.dataset['state'] === 'stop') {
        audio.setAttribute('data-state', 'play');
        audio.play();
    }
    else {
        audio.pause();
        audio.setAttribute('data-state', 'stop');
    }
}));
const input = document.querySelector('.input');
if (input) {
    input.addEventListener('change', () => {
        audios.forEach(track => track.volume = +input.value);
    });
}
