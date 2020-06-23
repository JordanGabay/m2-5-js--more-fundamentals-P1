// Exercise 3-1
// ------------

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// Guidelines
// - write only one event listener
// - use a switch statement

const buttons = document.querySelector('.buttons');

let animations = function (event) {
    const btnId = event.target.id;
    const selector = function (btnId) {
        return document.getElementById(btnId);
    };

console.log(btnId);

switch (btnId) {
    case 'btn-1':
        selector(btnId).style.opacity = '0';
        break;
    case 'btn-2':
        selector(btnId).style.background = 'crimson';
        break;
    case 'btn-3':
        selector(btnId).style.background = 'lightblue';
        break;
    case 'btn-4':
        selector(btnId).classList.add('jitters');
        break;
    }
};

buttons.addEventListener('click', animations);
