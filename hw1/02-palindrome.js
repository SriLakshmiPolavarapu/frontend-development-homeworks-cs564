document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded event fired'); // Debugging

    const numberInput = document.getElementById('numberInput');
    const resultParagraph = document.getElementById('result');

    numberInput.addEventListener('input', () => {
        const inputValue = parseInt(numberInput.value, 10);

        if (isNaN(inputValue) || inputValue < 0) {
            resultParagraph.textContent = 'Please enter a positive number.';
            resultParagraph.classList.add('text-danger');
            return;
        }

        if (isPalindrome(inputValue.toString())) {
            resultParagraph.textContent = `Yes. This is a palindrome!`;
            resultParagraph.classList.remove('text-danger');
            resultParagraph.classList.add('text-success');
        } else {
            resultParagraph.textContent = `No. Try again`;
            resultParagraph.classList.remove('text-success');
            resultParagraph.classList.add('text-danger');
        }
    });

    function isPalindrome(number) {
        let reversed = number.split('').reverse().join('');
        return number === reversed;
    }
});
