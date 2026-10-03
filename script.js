const music = document.getElementById('weddingMusic');
const enterBtn = document.getElementById('enterBtn');
const preloader = document.getElementById('preloader');
const musicToggle = document.getElementById('musicToggle');

let musicStarted = false;

async function startMusic(){
  try {
    if (!musicStarted) {
      music.currentTime = 4;
      musicStarted = true;
    }
    await music.play();
    musicToggle.classList.add('playing');
    musicToggle.setAttribute('aria-pressed','true');
  } catch(e) {
    // Browser autoplay policy may require another tap.
  }
}

enterBtn.addEventListener('click', async () => {
  await startMusic();
  preloader.classList.add('hidden');
  document.body.classList.remove('locked');
  setTimeout(() => { musicToggle.classList.add('visible'); document.querySelector('.maps-skip').classList.add('visible'); }, 650);
});

musicToggle.addEventListener('click', async () => {
  if (music.paused) await startMusic();
  else {
    music.pause();
    musicToggle.classList.remove('playing');
    musicToggle.setAttribute('aria-pressed','false');
  }
});

document.body.classList.add('locked');

// Wedding countdown — India Standard Time (UTC+05:30).
const target = new Date('2026-10-29T19:30:00+05:30').getTime();
const ids = ['days','hours','minutes','seconds'];
function updateCountdown(){
  let diff = Math.max(0, target - Date.now());
  const days = Math.floor(diff / 86400000); diff %= 86400000;
  const hours = Math.floor(diff / 3600000); diff %= 3600000;
  const minutes = Math.floor(diff / 60000); diff %= 60000;
  const seconds = Math.floor(diff / 1000);
  [days,hours,minutes,seconds].forEach((v,i)=>document.getElementById(ids[i]).textContent=String(v).padStart(2,'0'));
}
updateCountdown();
setInterval(updateCountdown,1000);

const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting) entry.target.classList.add('in-view');
  });
},{threshold:.14});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
