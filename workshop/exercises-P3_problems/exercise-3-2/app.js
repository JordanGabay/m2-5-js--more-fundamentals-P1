// Exercise 3-2
// ------------

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// Hint:
// create a toggleColor function
// Because we are now going to work with the opacity and background of the buttons,
// they need to be set here. So that they are referenceable via the the style attribute.
// initialize the background color for all of the buttons in here. (for loop)
const buttons = document.querySelector('.buttons');

//Color and opacity

for (i = 1; i <= 4; i++) {
    document.getElementById(`btn-${i}`).style.opacity = "100";
    document.getElementById(`btn-${i}`).style.backgroundColor = "gold";
  }

//Removed from 3.1
// let animations = function (event) {
//     const btnId = event.target.id;
//     const selector = function (btnId) {
//         return document.getElementById(btnId);
//     };

    const changeButtons = (event) => {
        const btnId = event.target.id;
        const selector = document.getElementById(btnId);
        switch (btnId) {
          case "btn-1":
            selector.style.opacity = selector.style.opacity === "100" ? "0" : "100";
            break;
          case "btn-2":
            selector.style.background.toggle('crimson');
            break;
          case "btn-3":
            selector.style.background.toggle('light blue');
            break;
          case "btn-4":
            selector.classList.toggle("jitters");
            break;
        }
      };

buttons.addEventListener('click', changeButtons);