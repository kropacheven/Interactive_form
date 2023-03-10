// 1. Giving a name input field the focus state right when the page loads:
const inputName = document.getElementById('name');
inputName.focus();


// 2. Other Job role hide/unhide on Job selection menu:
const otherJob = document.getElementById('other-job-role');
otherJob.hidden = true;

const jobRole = document.getElementById('title');
//console.log(jobRole)
const jobRoles = jobRole.querySelectorAll('option');
//console.log(jobRoles)


jobRole.addEventListener("change", (e) => {
    for ( let i = 0; i < jobRoles.length; i++ ) {
        if (e.target.value === "other") {
            otherJob.hidden = false;
        } else {
            otherJob.hidden = true;
        }
        //console.log(jobRoles[i].value);
    }
});



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

        options[1].hidden = false;
        options[2].hidden = false;
        options[3].hidden = false;
        options[4].hidden = true;
        options[5].hidden = true;
        options[6].hidden = true;
    } else {

        options[4].selected = true; 

        options[1].hidden = true;
        options[2].hidden = true;
        options[3].hidden = true;
        options[4].hidden = false;
        options[5].hidden = false;
        options[6].hidden = false;
    }
});


// 4. Register for Activities section (checkboxes - cost sum):

const activities = document.getElementById('activities'); // capture root element of checkboxes
//console.log(activities);
const checkboxes = document.querySelectorAll('#activities input'); // capture all checkboxes as an NodeList
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
    //console.log(totalCost);
    activitiesCost.textContent = `Total: $${totalCost}`;

    //Extra ------ 1. Loop to disactivate activities orranged at the same date and time as already chosen one :
    for (let i = 0; i < checkboxes.length; i++) {
        if (clicked.getAttribute('data-day-and-time') === checkboxes[i].getAttribute('data-day-and-time') ) {
            checkboxes[i].disabled = true;
            clicked.disabled = false;
        }
    } 
});

//Extra ------ 1. Loop to activate back activities disactivated on previous step (eventListener):
activities.addEventListener('change', (event) => {
    const clicked = event.target;
    for (let i = 0; i < checkboxes.length; i++) {
        if (clicked.checked === false && clicked.getAttribute('data-day-and-time') === checkboxes[i].getAttribute('data-day-and-time')) {
        checkboxes[i].removeAttribute('disabled');
        }
    }
});





// 5. Payment info section (selection menu):

const payment = document.getElementById('payment');
const paymentMethods = document.querySelectorAll('#payment option');
//console.log( paymentMethods );
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

//Capturing form fields and inputs:
const form = document.querySelector('form');
const inputEmail = document.getElementById('email');
const activitiesBox = document.getElementById('activities-box');
//console.log(activitiesBox);

//Capturing credit card input fields:
const ccNum = document.getElementById('cc-num');
const zipNum = document.getElementById('zip');
const cvvNum = document.getElementById('cvv');


// a. Name field: can not be blank or empty:
const nameValidator = () => {
    let nameValue = inputName.value;
    const nameIsValid = /^[a-zA-Z]+ ?[a-zA-Z]*? ?[a-zA-Z]*?$/.test(nameValue);
    //console.log(`Name validation test on "${nameValue}" evaluates to ${nameIsValid}`);
    //Checking the validity:
    if(nameIsValid) {
        validationPass(inputName)
    } else {
        validationFail(inputName)
    }

    return nameIsValid;
}

// b. Email address: must contain validly formatted email address:
const emailValidator = () => {
    let emailValue = inputEmail.value;
    const emailIsValid  = /^[^@]+@[^@.]+\.com$/i.test(emailValue);
    //console.log(`Email validation test on "${emailValue}" evaluates to ${emailIsValid}`);
    //Checking the validity:
    if(emailIsValid) {
        validationEmailPass(inputEmail)
    } else {
        validationEmailFail(inputEmail)
    }

    return emailIsValid;
}

// c. Register for Activities section - must have at least 1 activity selected:
const activityValidator = () => {
    const activityIsValid = totalCost > 0; // the cost of activities should be more than 0 (at least 100)
    //console.log(`Activity section validation test evaluates to ${activityIsValid}`);
        //Checking the validity:
    if(activityIsValid) {
        validationPass(activitiesBox)
    } else {
        validationFail(activitiesBox)
    }

    return activityIsValid;
}

// d. The card number field must contain a 13-16 digital credit card number wit no dashes or spaces:
const ccNumValidator = () => {
    //if (paymentMethods.value === 'credit-card') {
        let ccNumValue = ccNum.value;
        const ccNumIsValid = /^\d{13,16}$/.test(ccNumValue);
        //console.log(`ccNum validation test on "${ccNumValue}" evaluates to ${ccNumIsValid}`);
        //Checking the validity:
        if(ccNumIsValid) {
            validationPass(ccNum)
        } else {
            validationFail(ccNum)
        }

        return ccNumIsValid;
    //}
    }

// e. The "Zip code" field must contain a 5 digit number:
const zipNumValidator = () => {
    //if (paymentMethods.value === 'credit-card') {
        let zipNumValue = zipNum.value;
        const zipNumIsValid = /^\d{5}$/.test(zipNumValue);
        //console.log(`zipNum validation test on "${zipNumValue}" evaluates to ${zipNumIsValid}`);
        //Checking the validity:
        if(zipNumIsValid) {
            validationPass(zipNum)
        } else {
            validationFail(zipNum)
        }

        return zipNumIsValid;
    //}
    }

// f. The "CVV" field must contain a 3 digit number:
const cvvNumValidator = () => {
    //if (paymentMethods.value === 'credit-card') {
        let cvvNumValue = cvvNum.value;
        const cvvNumIsValid = /^\d{3}$/.test(cvvNumValue);
        //console.log(`cvvNum validation test on "${cvvNumValue}" evaluates to ${cvvNumIsValid}`);
        //Checking the validity:
        if(cvvNumIsValid) {
            validationPass(cvvNum)
        } else {
            validationFail(cvvNum)
        }

        return cvvNumIsValid;
    //}
    }

// Event listener on whole form on submit event, checking: name, email, activity
form.addEventListener('submit', (e) => {
   
   if ( !nameValidator() ) {
    e.preventDefault();
    console.log('The name validator prevented sibmission!!! Check out requerments.');
   }
   if ( !emailValidator() ) {
    e.preventDefault();
    console.log('The email validator prevented sibmission!!! Check out requerments.');
   }
   if ( !activityValidator() ) {
    e.preventDefault();
    console.log('The activity validator prevented sibmission!!! Check out requerments.');
   }
    // The condition set is only active when credit card payment option is selected (not for bitcoin or paypal) 
    for (let i =0; i < paymentMethods.length; i++) {
    if ( paymentMethods[i].value === 'credit-card' ) {
        if ( !ccNumValidator() ) {
            e.preventDefault();
            console.log('The Credit Card Number validator prevented sibmission!!! Check out requerments.');
        }
        if ( !zipNumValidator() ) {
            e.preventDefault();
            console.log('The Zip validator prevented sibmission!!! Check out requerments.');
        }
        if ( !cvvNumValidator() ) {
            e.preventDefault();
            console.log('The CVV validator prevented sibmission!!! Check out requerments.');
        }
   } 
}

});

// 7. -------------------- Accessability ---------------------------- //

// 7.1 Make the focus states of the activities more obvious to all users:

for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener("focus", (e) => {
            let label = e.target.parentNode;
            //console.log(e.target);
            label.className = 'focus';

        //console.log('The listener is working!');
    });
}

for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener("blur", (e) => {
            let label = e.target.parentNode;
            //console.log(e.target);
            label.removeAttribute('class');

        //console.log('The listener is working!');
    });
}


// 7.2 Make the form validation errors obvious to all users: when the info is valid/nor volid appropriate class is assinged
// * - This is function declaration - it is hoisted to the top when browser loads the page
function validationPass(element) {
  const parent = element.parentElement;
  //console.log(parent);
  parent.removeAttribute('class');
  parent.className = 'valid';
  parent.lastElementChild.style.display = 'none';
}

function validationFail(element) {
  const parent = element.parentElement;
  //parent.removeAttribute('class');
  parent.className = 'not-valid';
  parent.lastElementChild.style.display = 'block';
}


// -------------------------------   Extra Credit --------------------------------------- //

// 1. Prevent users from registering for conflicting activities:

// ^^^ --- Code embedded at the top of a file on the "register for activities" event listener section --- ^^^

// 2. Real time error massage for name and email input fields:
inputName.addEventListener('keyup', nameValidator);
inputEmail.addEventListener('keyup', emailValidator);

// 3. Conditional error message for email input field (validation functions for email are a bit modified for the task):
function validationEmailPass(element) {
    const parent = element.parentElement;
    //console.log(parent);
    parent.removeAttribute('class');
    parent.className = 'valid';
    parent.lastElementChild.style.display = 'none';
  }
  
  function validationEmailFail(element) {
    const parent = element.parentElement;
    //parent.removeAttribute('class');
    parent.className = 'not-valid';
    // If email input field is empty - user should be asked to type it in:
    if (element.value === '') {
        parent.lastElementChild.previousElementSibling.style.display = 'block';
        parent.lastElementChild.style.display = 'none';
    } else { // If email input field is incorrect- user should rewrite it:
        parent.lastElementChild.previousElementSibling.style.display = 'none';
        parent.lastElementChild.style.display = 'block';
    }
  }