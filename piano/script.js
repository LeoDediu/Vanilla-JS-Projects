const keys = document.querySelectorAll('.key');

keys.forEach(key => {
    key.addEventListener('click', () => playSound(key))
});

function playSound(key)
{
    const noteAudio = document.getElementById(key.dataset.sound);
    noteAudio.currentTime = 0;
    noteAudio.play();
    key.classList.add('active');
    noteAudio.addEventListener('ended', () => {
        key.classList.remove('active');
    });
}