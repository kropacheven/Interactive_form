
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
const design = document.getElementById('design'); // design root of selection menu - element;

const color = document.getElementById('color');
color.disabled = true;

const options = document.querySelectorAll('#color option');
//console.log(options[4]);


design.addEventListener('change', (event) => {
    color.disabled = false;
    //for (let i = 0; i < options.length; i++) {
    if (event.target.value === 'js puns' ) {
        options[1].disabled = false;
        options[2].disabled = false;
        options[3].disabled = false;
        options[4].disabled = true;
        options[5].disabled = true;
        options[6].disabled = true;
    } else {
        options[1].disabled = true;
        options[2].disabled = true;
        options[3].disabled = true;
        options[4].disabled = false;
        options[5].disabled = false;
        options[6].disabled = false;
    }
    //}
});