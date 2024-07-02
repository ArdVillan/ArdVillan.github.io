document.addEventListener('DOMContentLoaded', function() {
    const phoneNumberDisplay = document.getElementById('phoneNumberDisplay');
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');

    function generatePhoneNumber() {
        let phoneNumber = '(';
        for (let i = 0; i < 3; i++) {
            phoneNumber += Math.floor(Math.random() * 10); // Generate area code
        }
        phoneNumber += ') ';
        for (let i = 0; i < 3; i++) {
            phoneNumber += Math.floor(Math.random() * 10); // Generate first three digits
        }
        phoneNumber += '-';
        for (let i = 0; i < 4; i++) {
            phoneNumber += Math.floor(Math.random() * 10); // Generate last four digits
        }
        return phoneNumber;
    }

    function updatePhoneNumber() {
        phoneNumberDisplay.textContent = generatePhoneNumber();
    }

    // Initialize with a random phone number
    updatePhoneNumber();

    // Event listeners for buttons
    yesButton.addEventListener('click', function() {
        alert('Thank you for confirming!');
    });

    noButton.addEventListener('click', function() {
        updatePhoneNumber(); // Generate a new phone number when "No" is clicked
    });
});
