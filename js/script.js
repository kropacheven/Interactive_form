
// 1. Giving a name input field the focus state right when the page loads:
const inputName = document.getElementById('name');
inputName.focus();


// 2. Other Job role hide/unhide on Job selection menu:
const otherJob = document.getElementById('other-job-role');
otherJob.style.display = 'none';

const jobRole = document.getElementById('title');
const jobRoles = jobRole.querySelectorAll('option');
console.log(jobRoles)

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
