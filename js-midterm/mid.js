document.addEventListener('DOMContentLoaded', function() {
    let currentDigit = 1;
    const digits = document.querySelectorAll('#phoneNumberDisplay span');
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    const restartButton = document.getElementById('restartButton');

    function updateDigit(digitId) {
        let digit = parseInt(document.getElementById(digitId).textContent);
        digit = (digit + 1) % 10;
        document.getElementById(digitId).textContent = digit;
    }

    function confirmDigit() {
        if (currentDigit > 0 && currentDigit <= 10) {
            document.getElementById('digit' + currentDigit).classList.remove('active');
            currentDigit++;
            if (currentDigit <= 10) {
                document.getElementById('digit' + currentDigit).classList.add('active');
            } else {
                alert('Phone number confirmed!');
            }
        }
    }

    function restartProcess() {
        digits.forEach(digit => {
            digit.textContent = '0';
            digit.classList.remove('active');
        });
        currentDigit = 1;
        document.getElementById('digit' + currentDigit).classList.add('active');
    }

    yesButton.addEventListener('click', confirmDigit);
    noButton.addEventListener('click', function() {
        if (currentDigit <= 10) {
            updateDigit('digit' + currentDigit);
        }
    });
    restartButton.addEventListener('click', restartProcess);

    restartProcess(); // Initialize
});
