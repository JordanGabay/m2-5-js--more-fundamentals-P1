// Exercise 3-2
// ------------

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// Hint:
// create a toggleColor function
// Because we are now going to work with the opacity and background of the buttons,
// they need to be set here. So that they are referenceable via the the style attribute.
// initialize the background color for all of the buttons in here. (for loop)
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