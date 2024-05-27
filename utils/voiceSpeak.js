document.addEventListener('DOMContentLoaded', function () {
    // Funkcja do odtwarzania tekstu z atrybutu data-text
    function speakText(event) {
        const text = event.currentTarget.getAttribute('data-text');
        if (text) {
            console.log(`Czytanie tekstu: ${text}`);
            responsiveVoice.speak(text, 'Polish Female');
        } else {
            console.log('Brak tekstu do przeczytania');
        }
    }

    // Dodaj nasłuchiwacze zdarzeń do wszystkich elementów z klasą voiceSpeaker
    document.querySelectorAll('button.voiceSpeaker').forEach(button => {
        button.addEventListener('click', speakText);
        button.addEventListener('keydown', function (event) {
            if (event.key === 'Enter' || event.key === ' ' || event.keyCode === 13 || event.keyCode === 32) {
                event.preventDefault(); // Zapobiega przewijaniu strony w dół przy użyciu spacji
                console.log(`Naciśnięto klawisz: ${event.key}`);
                speakText(event);
            }
        });
    });
});
