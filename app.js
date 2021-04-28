const tagNameInput = document.getElementById('name');
const tagPronounsInput = document.getElementById('pronouns');
const tagNameDisplay = document.getElementById('tag-name');
const tagPronounsDisplay = document.getElementById('tag-pronouns');
const submitButton = document.getElementById('submit');

submitButton.addEventListener ('click', () => {
    if (tagNameInput.value === '') {
        tagNameDisplay.textContent = "Anonymous";
        tagPronounsDisplay.textContent = tagPronounsInput.value;
    } else {
    tagNameDisplay.textContent = tagNameInput.value;
    tagPronounsDisplay.textContent = tagPronounsInput.value;
    }
});
