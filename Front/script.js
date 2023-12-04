const form = document.getElementById('bank-form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const accountNumber = document.getElementById('account-number').value;
    const cvvNumber = document.getElementById('cvv-number').value;

    let errors = [];

    if (name.trim() === '') {
        errors.push('Please enter your full name');
    }

    if (accountNumber.length !== 16) {
        errors.push('Account number must be 16 digits long');
    }

    if (cvvNumber.length !== 3) {
        errors.push('CVV number must be 3 digits long');
    }

    if (errors.length > 0) {
        alert(errors.join('\n'));
        return;
    }

    // TODO: Implement your logic to handle valid data (e.g., API call, storage)

    alert('Thank you! Your banking details have been submitted.');
    alert('You have been successfully phished!!!! Please refrain from entering your banking details into unverified sites in the future. We have your banking details now thank you for the free money!!!');
});
