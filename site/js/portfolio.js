const avatar = document.querySelector('.img-avatar');

avatar.addEventListener('click', () => {
    avatar.src = "image/avatar.svg";
});

const buttonTextColor = document.querySelector('.modifyTextColor');
const firstName = document.querySelector('#firstname');
const description = document.querySelector('.description');


buttonTextColor.addEventListener('click', () => {
    const newFirstName =prompt('Enter your name');
    firstName.textContent = newFirstName;
    firstName.style.color="black";
    const newDescriptionColor = prompt('Enter a color');
    description.style.background = newDescriptionColor;
})

