document.addEventListener('DOMContentLoaded', () => {
    const elem = document.querySelector("#numberInput");
    const resultDiv = document.querySelector(".result");
    elem.addEventListener('input', () => {
        const inputValue = parseInt(elem.value, 10);
        if (isNaN(inputValue) || inputValue < 0) {
            resultDiv.textContent = 'Please enter a positive number.';
            resultDiv.style.color = 'red';
            return;
        }
        if (isPalindrome(inputValue.toString())) {
            resultDiv.textContent = `Yes. This is a palindrome!`;
            resultDiv.style.color = 'green';
        } else {
            resultDiv.textContent = `No. Try again`;
            resultDiv.style.color = 'red';
        }        
    });
    function isPalindrome(number) {
        let reversed = number.split('').reverse().join('');
        return number === reversed;
    }
});
