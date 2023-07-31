interface IButton {
  bg: string;
  sound: string;
}

const btns: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.btn');
const audios: NodeListOf<HTMLAudioElement> = document.querySelectorAll('audio')
const body = document.body;
btns.forEach((btn) => btn.addEventListener('click', ()=> {
  body.setAttribute('style', `background-image: url('../assets/${btn.dataset['bg']}.jpg');`);
  console.log(document.querySelector(`[data-sound="${btn.dataset['link']}]"`));
  console.log(btn.dataset['link'])
  console.log(document.querySelector(`[data-sound="${btn.dataset['link']}"]`));
  const audio: HTMLAudioElement | null = document.querySelector(`[data-sound="${btn.dataset['link']}"]`);
  audios.forEach(track => track.pause());
  audio?.play();
}))
