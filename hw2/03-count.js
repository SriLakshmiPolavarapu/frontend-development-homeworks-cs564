document.addEventListener("DOMContentLoaded", function () {
    function highlightWordInText(text, word) {
        let regex = new RegExp(`\\b${word}\\b`, 'gi');

        let highlightedText = text.replace(regex, `<span class="bg-warning">${word}</span>`);

        return highlightedText;
    }

    const textElement = document.querySelector('div:last-child');
    const originalText = textElement.textContent;

    function updateHighlightedText() {
        const userInput = document.querySelector('input').value;

        if (userInput) {
            const highlightedText = highlightWordInText(originalText, userInput);
            textElement.innerHTML = highlightedText;
        } else {
            textElement.innerHTML = originalText;
        }
    }
    const inputElement = document.querySelector('input');
    inputElement.addEventListener('input', updateHighlightedText);
    inputElement.addEventListener('keydown', function(event) {
        if (event.keyCode === 13) { 
            event.preventDefault();
            updateHighlightedText();
        }
    });
});
