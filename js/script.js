
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

const activities = document.getElementById('activities'); // capture root element of checkboxes
//console.log(activities);
//const checkboxes = document.querySelectorAll('#activities input'); // capture all checkboxes as an NodeList
//console.log(checkboxes);
let activitiesCost  = document.getElementById('activities-cost'); // selecting <p> element for TotalCost final display
//console.log(activitiesCost);


let totalCost = 0;

activities.addEventListener('change', (event) => {
    const clicked = event.target;
    const clickedCost = parseInt( clicked.getAttribute('data-cost') );
    //console.log(clickedCost);
    //console.log(typeof clickedCost);
    
        if (clicked.checked) {
            totalCost += clickedCost;
        }  else {
            totalCost -= clickedCost;
    }
    console.log(totalCost);
    activitiesCost.textContent = `Total: $${totalCost}`;
});


// 5. Payment info section (selection menu):

const payment = document.getElementById('payment');
const paymentMethods = document.querySelectorAll('#payment option');
//console.log( paymentMethods[1] );
paymentMethods[1].selected = 'true;'

const creditCard = document.getElementById('credit-card');
const bitcoin = document.getElementById('bitcoin');
const paypal = document.getElementById('paypal');



bitcoin.style.display = 'none';
paypal.style.display = 'none';


payment.addEventListener('change', (event) => {
    if (event.target.value === 'paypal') {
        creditCard.style.display = 'none';
        bitcoin.style.display = 'none';
        paypal.style.display = 'block';
    } else if (event.target.value === 'bitcoin') {
        creditCard.style.display = 'none';
        bitcoin.style.display = 'block';
        paypal.style.display = 'none';
    } else if (event.target.value === 'credit-card') {
        creditCard.style.display = 'block';
        bitcoin.style.display = 'none';
        paypal.style.display = 'none';
    }
});

// 6. Form validation section:

    // a. Name field: can not be blank or empty
    // b. Email address: must contain validly formatted email address 
    // c. Register for Activities section - must have at least 1 activity selected
    // d. The card number field must contain a 13-16 digital credit card number wit no dashes or spaces:
    // e. The "Zip code" field must contain a 5 digit number
    // f. The "CVV" field must contain a 3 digit number.

// 7. Accessibility:




// -------------------------------   Extra Credit --------------------------------------- //