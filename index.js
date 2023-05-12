(function () {
    'use strict';

    const detailsDiv = document.getElementById('detailsDiv');
    let formIsDisplayed = false;
    const form = document.getElementById('JotFormIFrame-231155895577166');
    const flyerDiv = document.getElementById('flyerDiv');
    const detailsLink = document.getElementById('detailsLink');
    let linkIsDisplayed = false;
    const registerButton = document.getElementById('register');

    registerButton.addEventListener('click', displayForm);
    detailsLink.addEventListener('click', displayDetails);

    function displayDetails() {
        if (!linkIsDisplayed) {
            detailsDiv.style.display = 'flex';
            flyerDiv.style.display = 'none';
            detailsLink.innerText = 'Hide Details';
            linkIsDisplayed = true;
        }
        else {
            detailsDiv.style.display = 'none';
            flyerDiv.style.display = 'flex';
            detailsLink.innerHTML = '<p>Click Here to <br> See Details!</p>';
            linkIsDisplayed = false;
        }
    }
    function displayForm() {
        if (!formIsDisplayed) {
            form.style.display = 'inline';
            registerButton.innerText = 'Close';
            formIsDisplayed = true;
        }
        else {
            form.style.display = 'none';
            registerButton.innerHTML = '<p>Click Here to <br> Register Now!</p>';
            formIsDisplayed = false;
        }
    }
})();