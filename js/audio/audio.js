const players = document.querySelectorAll('.audio_player');

players.forEach(player => {
  const audio = player.querySelector('audio');
  const playBtn = player.querySelector('.play');
  const pauseBtn = player.querySelector('.pause');
  const barra = player.querySelector('.barra');

  // Tocar o áudio e pausar os outros
  playBtn.addEventListener('click', () => {
    // Pausa todos os outros
    players.forEach(p => {
      const a = p.querySelector('audio');
      if (a !== audio) a.pause();
    });
    audio.play();
  });

  pauseBtn.addEventListener('click', () => {
    audio.pause();
  });

  audio.addEventListener('timeupdate', () => {
    barra.max = audio.duration;
    barra.value = audio.currentTime;
  });

  barra.addEventListener('input', () => {
    audio.currentTime = barra.value;
  });
});