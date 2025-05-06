document.addEventListener('DOMContentLoaded', () => {
    const botoesOuvir = document.querySelectorAll('.audio_but');
    const botoesVoltar = document.querySelectorAll('.butao.voltar');

    botoesOuvir.forEach(botao => {
    botao.addEventListener('click', () => {
        const produto = botao.closest('.produto');
        const telaAudio = produto.querySelector('.tela_audio');
        if (telaAudio) {
        telaAudio.style.display = 'flex';
        }
    });
    });

    botoesVoltar.forEach(botao => {
    botao.addEventListener('click', () => {
        const telaAudio = botao.closest('.tela_audio');
        if (telaAudio) {
        telaAudio.style.display = 'none';
        }
    });
    });
});
