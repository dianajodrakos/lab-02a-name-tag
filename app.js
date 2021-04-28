//name + pronoun input variables
const tagNameInput = document.getElementById('name');
const tagPronounsInput = document.getElementById('pronouns');
const tagNameDisplay = document.getElementById('tag-name');
const tagPronounsDisplay = document.getElementById('tag-pronouns');
const submitButton = document.getElementById('submit');

//color selection variables
const pinkButton = document.getElementById('pink');
const greenButton = document.getElementById('lightgreen');
const blueButton = document.getElementById('lightblue');
const redButton = document.getElementById('red');
const tagColor = document.getElementById('tag');

//font selection variables
const cuteButton = document.getElementById('cute');
const typeButton = document.getElementById('type');
const fancyButton = document.getElementById('fancy');
const classicButton = document.getElementById('classic');
const tagFont = document.getElementById('tag-middle');

//name + pronoun event listener
submitButton.addEventListener ('click', () => {
    if (tagNameInput.value === '') {
        tagNameDisplay.textContent = "Anonymous";
        tagPronounsDisplay.textContent = tagPronounsInput.value;
    } else {
    tagNameDisplay.textContent = tagNameInput.value;
    tagPronounsDisplay.textContent = tagPronounsInput.value;
    }
});

//color button event listeners
pinkButton.addEventListener ('click', () => {
    tagColor.style.background = 'lightpink';
});

blueButton.addEventListener ('click', () => {
    tagColor.style.background = 'cornflowerblue';
});

greenButton.addEventListener ('click', () => {
    tagColor.style.background = 'darkseagreen';
});

redButton.addEventListener ('click', () => {
    tagColor.style.background = 'red';
});

//font button event listeners
cuteButton.addEventListener ('click', () => {
    tagFont.style.fontFamily = 'Comic Sans MS';
});

typeButton.addEventListener ('click', () => {
    tagFont.style.fontFamily = 'monospace';
});

fancyButton.addEventListener ('click', () => {
    tagFont.style.fontFamily = 'cursive';
});

classicButton.addEventListener ('click', () => {
    tagFont.style.fontFamily = 'Brush Script MT';
});