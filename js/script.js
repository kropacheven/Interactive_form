
// 1. Giving a name input field the focus state right when the page loads:
const inputName = document.getElementById('name');
inputName.focus();


// 2. Other Job role hide/unhide on Job selection menu:
const otherJob = document.getElementById('other-job-role');
otherJob.style.display = 'none';

const jobRole = document.getElementById('title');
const jobRoles = jobRole.querySelectorAll('option');
//console.log(jobRoles)

for (let i = 0; i < jobRoles.length; i++) {
    jobRole.addEventListener('change', () => {
        if (jobRoles[i].value === 'other') {
            otherJob.style.display = 'block';
        } else {
            otherJob.style.display = 'none';
        }
    });
    //console.log(jobRoles[i].value);
}

// 3. T-shirt info section - selection menues:
const design = document.getElementById('design'); // design root of selection menu - returns 1 element;

const color = document.getElementById('color');
color.disabled = true;  // Color selection menue is disabled when the paage loads

const options = document.querySelectorAll('#color option'); //selecting all Color options - returns NodeList
//console.log(options[4]);

// Adding event listener on T-shirt Info (listen for change event on Design selection Menu):
design.addEventListener('change', (event) => {
    color.disabled = false;
    if (event.target.value === 'js puns' ) {

        options[1].selected = true;

        options[1].disabled = false;
        options[2].disabled = false;
        options[3].disabled = false;
        options[4].disabled = true;
        options[5].disabled = true;
        options[6].disabled = true;
    } else {

        options[4].selected = true; 

        options[1].disabled = true;
        options[2].disabled = true;
        options[3].disabled = true;
        options[4].disabled = false;
        options[5].disabled = false;
        options[6].disabled = false;
    }
});


// 4. Register for Activities section (checkboxes - cost sum):

// 5. Payment info section (selection menu):

const payment = document.getElementById('payment');
const paymentMethods = document.querySelectorAll('#payment option');
console.log( paymentMethods[1] );

const bitcoin = document.getElementById('bitcoin');
const paypal = document.getElementById('paypal');



bitcoin.style.display = 'none';
paypal.style.display = 'none';


payment.addEventListener('change', (event) => {
    if (event.target.value === 'paypal') {

    } else if (event.target.value === 'bitcoin') {

    }


});



// 6. Form validation section:

// 7. Accessibility:




// -------------------------------   Extra Credit --------------------------------------- //