document.addEventListener('DOMContentLoaded', function () {
    var audioPlayer = document.getElementById('audioPlayer');
    var playPauseButton = document.getElementById('playPauseButton');
    var nextTrackButton = document.getElementById('nextTrackButton');

    var currentTrack = 0;
    var tracks = [
        'audio/Unforgettable_hVB5NUqndAc.mp3',
        'audio/Black_HD4fSdinGZA.mp3'
        // Agrega más pistas según sea necesario
    ];

    audioPlayer.src = tracks[currentTrack];

    audioPlayer.play().then(function () {
        // Reproducción exitosa
        playPauseButton.innerHTML = '&#10074;&#10074;'; // Cambiar el botón a pausa
    }).catch(function (error) {
        // Manejar errores si la reproducción automática está bloqueada
        console.error('Reproducción automática bloqueada:', error);
    });

    playPauseButton.addEventListener('click', function () {
        togglePlayPause();
    });

    nextTrackButton.addEventListener('click', function () {
        playNextTrack();
    });

    audioPlayer.addEventListener('ended', function () {
        playNextTrack();
    });

    function togglePlayPause() {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playPauseButton.innerHTML = '&#10074;&#10074;'; // Símbolo de pausa
        } else {
            audioPlayer.pause();
            playPauseButton.innerHTML = '&#9658;'; // Símbolo de reproducción
        }
    }

    function playNextTrack() {
        currentTrack = (currentTrack + 1) % tracks.length;
        audioPlayer.src = tracks[currentTrack];
        audioPlayer.play();
        playPauseButton.innerHTML = '&#10074;&#10074;'; // Cambiar el botón a pausa después de cambiar de pista
    }
});
